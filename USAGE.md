# Psychology Skills Plugin — Usage Guide (v2)

A cross-platform plugin for AI-powered coaching across four domains:
**Performance**, **Relationships**, **Life**, and **Addiction**. Works with
any markdown-based CLI agent.

---

## Quick Demo: What a Session Looks Like Now

```
You:   I've been procrastinating on my most important work for months.
       I know what to do, I just can't make myself do it.

Agent: I'm an AI thinking partner using evidence-based coaching and
       psychological frameworks — not a licensed therapist, and this
       isn't therapy. If you're in crisis, contact the 988 Suicide &
       Crisis Lifeline (call or text 988) or text HOME to 741741.

       I'll ask direct questions, keep track of patterns across our
       conversations, and push back when something doesn't add up
       rather than just agreeing with you. Want to start?

You:   Yes. And I want you to push me — I don't need to be coddled.

Agent: Noted — I'll run in more direct mode: less reflecting-things-
       back, faster to naming a gap when I see one. You can always
       recalibrate.

       [Routes to performance-psychology]
       Using performance psychology to explore procrastination patterns.

       What's the one area of your performance that, if it improved,
       would change everything else? Tell me what's actually happening
       right now — not the goal, the current reality.

You:   I wake up planning to write, then spend 3 hours on email and
       Slack. By afternoon I'm too drained to think clearly.

Agent: In the last 7 days, roughly how many hours actually went to the
       writing — and how does that compare to what you'd have guessed
       before I asked?

       [... session continues; direct mode means less hedging and
       faster naming of the pattern once it's clear, still one
       question at a time ...]
```

The session flows through 6 modules: **Current State → Values Alignment →
Blockers + Reality Audit → Flow Architecture → Action Plan → Synthesis**.
State is saved to `state.performance.json`, and `profile.json` accumulates
what's durable (values, patterns, coaching-style preference) across every
domain you work in — not just this one.

**Resuming later:**

```
You:   [returns after a week]

Agent: [loads profile.json + state.performance.json]
       Welcome back. Last time you committed to: closing Slack from
       7-9am and writing instead. What actually happened?

You:   I did it three of five days.

Agent: Three of five — what got in the way the other two?
       [continues from there, before mood/bridge/agenda]
```

This Commitment Review is new in v2 — the first thing a resumed session
does, before anything else, is check what actually happened since last
time.

---

## Installation

### Option A: Claude Code

```bash
cp -r psychology-skills /path/to/your/project/
# or globally:
cp -r psychology-skills ~/.claude/skills/psychology-skills
```

`.claude-plugin/plugin.json` already points at the correct v2 paths
(`./core/router`, `./core/protocol`, and the four niche skills). Reference
it from your project's `CLAUDE.md`:

```markdown
## Psychology Skills
When the user mentions therapy, coaching, mental health, stress, burnout,
addiction, relationships, or life transitions, load `core/router/SKILL.md`
from `psychology-skills/core/router/`.
```

### Option B: Gemini CLI / Antigravity

```bash
mkdir -p .agents/plugins
cp -r psychology-skills .agents/plugins/psychology-skills
```

Or globally at `~/.gemini/config/plugins/`.

### Option C: Codex / OpenCode / other CLI agents

```bash
cp -r psychology-skills/core psychology-skills/skills ~/.codex/skills/
```

If your agent uses `AGENTS.md`:

```markdown
## Psychology Skills
- `core/router` — entry point, detects psychology intent, handles consent
- `core/protocol` — shared session discipline, state schema, risk screening
  (reference only, never invoked directly)
- `skills/performance-psychology` — flow, burnout, procrastination
- `skills/relationship-psychology` — attachment, communication, conflict
- `skills/life-psychology` — transitions, meaning, identity, grief
- `skills/addiction-psychology` — substance/behavioral addictions, recovery
```

---

## How Invocation Works

Unchanged hybrid pattern from v1: `core/router` is model-invoked (the agent
detects psychology-relevant intent automatically); `core/protocol` is a
reference skill, never invoked directly, inherited by everything; the four
niche skills are user-invoked, reached only through explicit consent via
the router. A user-invoked skill can invoke a model-invoked/reference
skill, but niches never invoke each other directly — cross-niche awareness
happens through `profile.json`, not direct skill-to-skill calls.

---

## Session State & Privacy

```
your-session-dir/
├── profile.json                    ← NEW: cross-domain understanding, persists across niches
├── state.performance.json          ← per-niche session tracker
├── state.relationship.json         ← a second niche can be active at once
├── skills/performance-psychology/
│   ├── 10_current-state.md
│   ├── 20_values-alignment.md
│   ├── ...
│   └── 90_SYNTHESIS.md
```

These files generate **highly sensitive** personal data — more so than
v1's, since `profile.json` is the aggregated cross-domain picture:

- ✅ Run in a dedicated, local, private directory
- ✅ Add `profile.json`, `state*.json`, and module markdown files to
  `.gitignore`
- ❌ Do not commit session files to a public repository
- ❌ Do not run in a shared workspace

## Starting Fresh

Delete `profile.json` to reset cross-domain understanding entirely, or just
the relevant `state.<niche>.json` and module files to reset one domain
while keeping what's been learned in others.
