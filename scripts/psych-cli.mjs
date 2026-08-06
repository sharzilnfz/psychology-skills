#!/usr/bin/env node
// Usage:
//   node scripts/psych-cli.mjs compact --session-dir /path/to/session
//   node scripts/psych-cli.mjs status --session-dir /path/to/session
//   node scripts/psych-cli.mjs archive --session-dir /path/to/session --before 3
//
// Commands:
// - compact: Run the compact.mjs logic on the specified session
// - status: Print current state summary (session #, phase, pending
//   commitments, thread count, data sizes)
// - archive: Move insights/threads/commitments from sessions older than
//   --before sessions ago into archive/

import { parseArgs } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import {
  compactSession,
  archiveSession,
  printReport,
  resolveStateFile,
  resolveProfileFile,
} from './compact.mjs';

function readJson(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function bytesOf(filePath) {
  return filePath && fs.existsSync(filePath) ? fs.statSync(filePath).size : 0;
}

function commitmentText(c) {
  if (typeof c === 'string') return c;
  return c.commitment ?? c.text ?? c.goal ?? JSON.stringify(c);
}

function statusReport(sessionDir) {
  if (!fs.existsSync(sessionDir)) {
    console.error(`status: session directory not found: ${sessionDir}`);
    process.exitCode = 1;
    return;
  }
  const stateFile = resolveStateFile(sessionDir);
  const profileFile = resolveProfileFile(sessionDir);
  const state = readJson(stateFile) ?? {};
  const profile = readJson(profileFile) ?? {};
  const summary = readJson(path.join(sessionDir, 'state-summary.json'));

  const commitments = Array.isArray(state.commitmentLog) ? state.commitmentLog : [];
  const pending = commitments.filter((c) => c && c.status === 'pending');
  const threads = Array.isArray(state.openThreads) ? state.openThreads : [];
  const archiveDir = path.join(sessionDir, 'archive');
  let archiveBytes = 0;
  if (fs.existsSync(archiveDir)) {
    archiveBytes = fs
      .readdirSync(archiveDir)
      .filter((f) => f.endsWith('.json'))
      .reduce((acc, f) => acc + bytesOf(path.join(archiveDir, f)), 0);
  }

  console.log('Session status');
  console.log('--------------');
  console.log(`Session #        : ${state.sessionNumber ?? summary?.sessionNumber ?? 'unknown'}`);
  console.log(`Niche            : ${state.niche ?? summary?.niche ?? profile.niche ?? 'unknown'}`);
  console.log(`Current phase    : ${state.currentPhase ?? summary?.currentPhase ?? 'none'}`);
  console.log(`Next phase       : ${state.nextPhase ?? summary?.nextPhase ?? 'none'}`);
  console.log(`Open threads     : ${threads.length}${summary ? ` (summary: ${summary.activeThreadCount})` : ''}`);
  console.log(`Pending commit.  : ${pending.length}${summary ? ` (summary: ${summary.pendingCommitments?.length ?? 0})` : ''}`);
  console.log(`Risk level       : ${state.riskLevel ?? summary?.riskLevel ?? 0}`);
  console.log(`Stage of change  : ${state.stageOfChange ?? summary?.stageOfChange ?? 'unknown'}`);
  if (pending.length > 0) {
    console.log('Pending items    :');
    for (const c of pending) console.log(`  - ${commitmentText(c)}`);
  }
  console.log('Data sizes');
  console.log(`  state.json     : ${bytesOf(stateFile)} B`);
  console.log(`  profile.json   : ${bytesOf(profileFile)} B`);
  console.log(`  state-summary  : ${bytesOf(path.join(sessionDir, 'state-summary.json'))} B`);
  console.log(`  archive/       : ${archiveBytes} B (${archiveBytes ? fs.readdirSync(archiveDir).filter((f) => f.endsWith('.json')).length : 0} files)`);
  console.log(`  lastUpdated    : ${state.lastUpdated ?? profile.lastUpdated ?? 'n/a'}`);
}

function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      'session-dir': { type: 'string' },
      'before': { type: 'string', default: '3' },
      'help': { type: 'boolean', short: 'h' },
    },
  });
  const command = positionals[0];

  if (values.help || !command) {
    console.log(`Usage: node scripts/psych-cli.mjs <command> [options]
Commands:
  compact  --session-dir <dir>            Run compaction on a session
  status   --session-dir <dir>            Print current state summary
  archive  --session-dir <dir> [--before N]  Archive data older than N sessions
Options:
  --session-dir <dir>   Path to the session working directory
  --before N            Session-age threshold (default: 3)
  -h, --help            Show this help`);
    process.exitCode = command ? 0 : 1;
    return;
  }

  if (!values['session-dir']) {
    console.error(`psych-cli: ${command} requires --session-dir`);
    process.exitCode = 1;
    return;
  }
  const before = Number.parseInt(values.before, 10);

  switch (command) {
    case 'compact': {
      const report = compactSession(values['session-dir'], { before: Number.isFinite(before) ? before : 3 });
      printReport(report);
      break;
    }
    case 'status': {
      statusReport(values['session-dir']);
      break;
    }
    case 'archive': {
      const report = archiveSession(values['session-dir'], { before: Number.isFinite(before) ? before : 3 });
      printReport(report);
      break;
    }
    default: {
      console.error(`psych-cli: unknown command "${command}"`);
      console.error('Try: node scripts/psych-cli.mjs --help');
      process.exitCode = 1;
    }
  }
}

main();
