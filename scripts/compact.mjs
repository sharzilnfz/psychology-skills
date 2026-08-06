#!/usr/bin/env node
// Usage: node scripts/compact.mjs --session-dir /path/to/session_6
//
// What it does:
// 1. Reads state.json and profile.json from the session directory
// 2. Archives keyInsights older than 3 sessions → archive/insights-{date}.json
//    - Keeps the 5 most recent + any referenced by openThreads
// 3. Archives resolved openThreads → archive/threads-{date}.json
//    - A thread is "resolved" if it contains "CONFIRMED", "RESOLVED", or
//      hasn't been updated in 2+ sessions
// 4. Archives completed/failed commitments → archive/commitments-{date}.json
//    - Keeps only "pending" + last 3 resolved commitments
// 5. Deduplicates recurringPatterns in profile.json
//    - Assigns each pattern a unique id (pattern-001, pattern-002, etc.) if missing
//    - Adds status field: "active" | "resolved" | "archived" (default: "active")
//    - Merges patterns that share >70% of their words (keep the longer one,
//      merge seenIn arrays)
// 6. Generates state-summary.json — a compact digest (~2KB)
// 7. Prints before/after byte counts and estimated token savings

import { parseArgs } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';

const KEEP_RECENT_INSIGHTS = 5;
const INSIGHT_OLDER_THAN_SESSIONS = 3;
const THREAD_STALE_SESSIONS = 2;
const KEEP_RESOLVED_COMMITMENTS = 3;
const PATTERN_MERGE_THRESHOLD = 0.7;
const MIN_REFERENCE_SUBSTRING = 15;

export function resolveStateFiles(sessionDir) {
  if (!fs.existsSync(sessionDir)) return [];
  const files = fs.readdirSync(sessionDir).filter((f) => /^state(\..+)?\.json$/.test(f));
  // Put main state.json first if present
  files.sort((a, b) => (a === 'state.json' ? -1 : b === 'state.json' ? 1 : a.localeCompare(b)));
  return files.map((f) => path.join(sessionDir, f));
}

export function resolveStateFile(sessionDir) {
  const files = resolveStateFiles(sessionDir);
  return files.length > 0 ? files[0] : null;
}

export function resolveProfileFile(sessionDir) {
  const profileJson = path.join(sessionDir, 'profile.json');
  return fs.existsSync(profileJson) ? profileJson : null;
}

function readJson(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function ensureArchiveDir(sessionDir) {
  const dir = path.join(sessionDir, 'archive');
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function archivePath(sessionDir, name, date) {
  return path.join(ensureArchiveDir(sessionDir), `${name}-${date}.json`);
}

function readArchive(archiveFile) {
  return readJson(archiveFile) ?? [];
}

// Append items into an archive file, merging with any prior content and
// deduplicating by text so repeated compactions never grow archives.
function appendArchive(sessionDir, name, date, items) {
  if (items.length === 0) return;
  const file = archivePath(sessionDir, name, date);
  const merged = readArchive(file).concat(items);
  const seen = new Set();
  const unique = merged.filter((item) => {
    const text = insightText(item);
    if (seen.has(text)) return false;
    seen.add(text);
    return true;
  });
  writeJson(file, unique);
}

function insightText(insight) {
  if (insight == null) return '';
  if (typeof insight === 'string') return insight;
  return insight.text ?? insight.insight ?? insight.summary ?? JSON.stringify(insight);
}

function insightSession(insight, defaultSession) {
  if (insight && typeof insight === 'object') {
    if (typeof insight.sessionNumber === 'number') return insight.sessionNumber;
    if (typeof insight.session === 'number') return insight.session;
  }
  return defaultSession;
}

function threadText(thread) {
  if (thread == null) return '';
  if (typeof thread === 'string') return thread;
  return (
    thread.text ??
    thread.title ??
    thread.topic ??
    thread.content ??
    JSON.stringify(thread)
  );
}

function threadSession(thread, defaultSession) {
  if (thread && typeof thread === 'object') {
    if (typeof thread.sessionNumber === 'number') return thread.sessionNumber;
    if (typeof thread.lastSession === 'number') return thread.lastSession;
    if (typeof thread.sessionsAgo === 'number') return defaultSession - thread.sessionsAgo;
  }
  return defaultSession;
}

function commitmentStatus(commitment) {
  if (typeof commitment === 'string') return 'pending';
  return commitment.status ?? 'pending';
}

function commitmentText(commitment) {
  if (typeof commitment === 'string') return commitment;
  return commitment.commitment ?? commitment.text ?? commitment.goal ?? JSON.stringify(commitment);
}

function words(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
}

function wordOverlapRatio(a, b) {
  const wa = new Set(words(a));
  const wb = new Set(words(b));
  if (wa.size === 0 || wb.size === 0) return 0;
  let intersection = 0;
  for (const w of wa) {
    if (wb.has(w)) intersection += 1;
  }
  return intersection / Math.min(wa.size, wb.size);
}

function mergePatterns(patterns) {
  if (!Array.isArray(patterns)) return [];
  const working = patterns
    .filter((p) => p && (typeof p === 'string' || typeof p === 'object'))
    .map((p) => (typeof p === 'string' ? { pattern: p } : { ...p }));

  // Assign unique ids if missing, preserving existing ones.
  let maxSeq = 0;
  for (const p of working) {
    if (typeof p.id === 'string') {
      const m = p.id.match(/pattern-(\d+)$/);
      if (m) maxSeq = Math.max(maxSeq, Number(m[1]));
    }
  }
  for (const p of working) {
    if (!p.id) {
      maxSeq += 1;
      p.id = `pattern-${String(maxSeq).padStart(3, '0')}`;
    }
    if (!p.status) p.status = 'active';
  }

  // Greedy merge pass: any two patterns sharing >70% of words collapse into
  // the longer one, keeping its id and status, merging seenIn/evidence.
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < working.length; i++) {
      for (let j = i + 1; j < working.length; j++) {
        const a = working[i];
        const b = working[j];
        if (wordOverlapRatio(a.pattern, b.pattern) > PATTERN_MERGE_THRESHOLD) {
          const keeper = (a.pattern ?? '').length >= (b.pattern ?? '').length ? a : b;
          const other = keeper === a ? b : a;
          keeper.seenIn = Array.from(new Set([...(keeper.seenIn ?? []), ...(other.seenIn ?? [])]));
          keeper.evidence = Array.from(
            new Set([...(keeper.evidence ?? []), ...(other.evidence ?? [])])
          );
          if (!keeper.firstNoted && other.firstNoted) keeper.firstNoted = other.firstNoted;
          if (keeper.status === 'active' && other.status !== 'active') keeper.status = other.status;
          working.splice(j, 1);
          changed = true;
          break;
        }
      }
      if (changed) break;
    }
  }
  return working;
}

export function compactSession(sessionDir, { before = INSIGHT_OLDER_THAN_SESSIONS, keepRecent = true } = {}) {
  const report = { sessionDir, archived: { insights: 0, threads: 0, commitments: 0 }, removed: { insights: 0, threads: 0, commitments: 0 }, before: {}, after: {} };
  if (!fs.existsSync(sessionDir)) {
    report.error = `session directory not found: ${sessionDir}`;
    return report;
  }

  const stateFiles = resolveStateFiles(sessionDir);
  const profileFile = resolveProfileFile(sessionDir);
  const profile = readJson(profileFile) ?? {};
  const date = new Date().toISOString().slice(0, 10);
  const today = new Date().toISOString();

  let totalBeforeStateBytes = 0;
  let maxSessionNumber = 0;

  const allActiveThreads = [];
  const allPendingCommitments = [];
  const allTopInsights = [];
  const activeNiches = [];
  const activePhases = {};

  for (const stateFile of stateFiles) {
    const state = readJson(stateFile) ?? { sessionNumber: 0 };
    const sessionNumber = Number(state.sessionNumber) || 0;
    maxSessionNumber = Math.max(maxSessionNumber, sessionNumber);
    const stateBytes = fs.existsSync(stateFile) ? fs.statSync(stateFile).size : 0;
    totalBeforeStateBytes += stateBytes;

    if (state.niche) activeNiches.push(state.niche);
    if (state.niche && state.currentPhase) activePhases[state.niche] = state.currentPhase;

    const insights = Array.isArray(state.keyInsights) ? state.keyInsights : [];
    const openThreads = Array.isArray(state.openThreads) ? state.openThreads : [];
    const threadJson = JSON.stringify(openThreads);
    const maxKeepSession = sessionNumber - before;

    const archivedInsights = [];
    const keepInsights = insights.filter((insight) => {
      const sess = insightSession(insight, sessionNumber);
      const isRecent = sess > maxKeepSession;
      if (isRecent) return true;
      const text = insightText(insight);
      const hasId = insight && typeof insight === 'object' && insight.id && threadJson.includes(String(insight.id));
      const hasRef = text.length >= MIN_REFERENCE_SUBSTRING && threadJson.includes(text);
      if (hasId || hasRef) return true;
      archivedInsights.push(insight);
      return false;
    });

    let trimmedInsights = keepInsights;
    const droppedInsights = [];
    if (keepRecent && keepInsights.length > KEEP_RECENT_INSIGHTS) {
      const recentInsights = [...keepInsights].sort((a, b) => insightSession(b, sessionNumber) - insightSession(a, sessionNumber));
      trimmedInsights = recentInsights.slice(0, KEEP_RECENT_INSIGHTS);
      droppedInsights.push(...recentInsights.slice(KEEP_RECENT_INSIGHTS));
    }

    if (archivedInsights.length > 0) {
      appendArchive(sessionDir, 'insights', date, archivedInsights);
      report.archived.insights += archivedInsights.length;
    }
    if (droppedInsights.length > 0) {
      appendArchive(sessionDir, 'insights', date, droppedInsights);
      report.archived.insights += droppedInsights.length;
    }
    report.removed.insights += archivedInsights.length + droppedInsights.length;

    const archivedThreads = [];
    const keepThreads = openThreads.filter((thread) => {
      const json = JSON.stringify(thread);
      const explicitlyResolved = /CONFIRMED|RESOLVED/i.test(json);
      const stale = threadSession(thread, sessionNumber) <= sessionNumber - THREAD_STALE_SESSIONS;
      if (explicitlyResolved || stale) {
        archivedThreads.push(thread);
        return false;
      }
      return true;
    });
    if (archivedThreads.length > 0) {
      appendArchive(sessionDir, 'threads', date, archivedThreads);
      report.archived.threads += archivedThreads.length;
    }
    report.removed.threads += archivedThreads.length;

    const commitments = Array.isArray(state.commitmentLog) ? state.commitmentLog : [];
    const pending = commitments.filter((c) => commitmentStatus(c) === 'pending');
    const resolved = commitments.filter((c) => commitmentStatus(c) !== 'pending');
    const archivedCommitments = resolved.slice(0, Math.max(0, resolved.length - KEEP_RESOLVED_COMMITMENTS));
    const keepCommitments = pending.concat(resolved.slice(-KEEP_RESOLVED_COMMITMENTS));
    if (archivedCommitments.length > 0) {
      appendArchive(sessionDir, 'commitments', date, archivedCommitments);
      report.archived.commitments += archivedCommitments.length;
    }
    report.removed.commitments += archivedCommitments.length;

    // Collect aggregate items for summary
    allActiveThreads.push(...keepThreads);
    allPendingCommitments.push(...pending.map(commitmentText));
    allTopInsights.push(...keepInsights.slice(-3).map(insightText));

    state.keyInsights = trimmedInsights;
    state.openThreads = keepThreads;
    state.commitmentLog = keepCommitments;
    state.lastCompacted = today;
    writeJson(stateFile, state);
  }

  report.before.stateBytes = totalBeforeStateBytes;
  report.before.profileBytes = profileFile && fs.existsSync(profileFile) ? fs.statSync(profileFile).size : 0;

  // Deduplicate recurringPatterns in profile.json
  const dedupedPatterns = mergePatterns(profile.recurringPatterns);
  const patternsChanged = JSON.stringify(dedupedPatterns) !== JSON.stringify(profile.recurringPatterns);
  if (patternsChanged) profile.recurringPatterns = dedupedPatterns;

  const activePatternIds = dedupedPatterns.filter((p) => p.status === 'active').map((p) => p.id);
  const mainStateFile = resolveStateFile(sessionDir);
  const mainState = mainStateFile ? readJson(mainStateFile) : {};

  const summary = {
    niches: activeNiches.length > 0 ? Array.from(new Set(activeNiches)) : [profile.niche ?? 'performance'],
    primaryNiche: mainState?.niche ?? profile.niche ?? 'performance',
    sessionNumber: maxSessionNumber,
    currentPhase: mainState?.currentPhase ?? null,
    nextPhase: mainState?.nextPhase ?? null,
    activePhases,
    activeThreadCount: allActiveThreads.length,
    pendingCommitments: Array.from(new Set(allPendingCommitments)),
    topInsights: Array.from(new Set(allTopInsights)).slice(-5),
    activePatternIds,
    riskLevel: mainState?.riskLevel ?? profile.riskFlags?.currentRiskLevel ?? 0,
    stageOfChange: mainState?.stageOfChange ?? 'unknown',
    lastCompacted: today,
    lastUpdated: mainState?.lastUpdated ?? profile.lastUpdated ?? null,
    tokenEstimate: Math.ceil((report.before.stateBytes + report.before.profileBytes) / 4),
  };
  const summaryFile = path.join(sessionDir, 'state-summary.json');
  writeJson(summaryFile, summary);

  if (profileFile && patternsChanged) writeJson(profileFile, profile);

  let totalAfterStateBytes = 0;
  for (const sf of stateFiles) {
    if (fs.existsSync(sf)) totalAfterStateBytes += fs.statSync(sf).size;
  }

  report.after.stateBytes = totalAfterStateBytes;
  report.after.profileBytes = profileFile && fs.existsSync(profileFile) ? fs.statSync(profileFile).size : 0;
  report.after.summaryBytes = fs.existsSync(summaryFile) ? fs.statSync(summaryFile).size : 0;

  const beforeTotal = report.before.stateBytes + report.before.profileBytes;
  const afterTotal = report.after.stateBytes + report.after.profileBytes + report.after.summaryBytes;
  report.before.bytes = beforeTotal;
  report.after.bytes = afterTotal;
  report.tokenSavings = Math.max(0, Math.round((beforeTotal - afterTotal) / 4));

  return report;
}

export function archiveSession(sessionDir, { before = INSIGHT_OLDER_THAN_SESSIONS } = {}) {
  return compactSession(sessionDir, { before, keepRecent: false });
}

export function printReport(report) {
  if (report.error) {
    console.error(`compact: ${report.error}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Session dir : ${report.sessionDir}`);
  console.log(`Archived    : ${report.archived.insights} insights, ${report.archived.threads} threads, ${report.archived.commitments} commitments`);
  console.log(`Removed     : ${report.removed.insights} insights, ${report.removed.threads} threads, ${report.removed.commitments} commitments`);
  console.log(`state.json  : ${report.before.stateBytes} B -> ${report.after.stateBytes} B`);
  console.log(`profile.json: ${report.before.profileBytes} B -> ${report.after.profileBytes} B`);
  console.log(`summary     : ${report.after.summaryBytes} B (new state-summary.json)`);
  console.log(`Total       : ${report.before.bytes} B -> ${report.after.bytes} B`);
  console.log(`Token savings (est): ~${report.tokenSavings} tokens`);
}

function main() {
  const { values } = parseArgs({
    options: {
      'session-dir': { type: 'string' },
      'before': { type: 'string', default: String(INSIGHT_OLDER_THAN_SESSIONS) },
    },
  });
  if (!values['session-dir']) {
    console.error('Usage: node scripts/compact.mjs --session-dir /path/to/session_6 [--before N]');
    process.exitCode = 1;
    return;
  }
  const before = Number.parseInt(values.before, 10);
  const report = compactSession(values['session-dir'], { before: Number.isFinite(before) ? before : INSIGHT_OLDER_THAN_SESSIONS });
  printReport(report);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (isMain) main();
