# Psychology Skills Plugin

A production-ready suite of AI agent skills providing structured, evidence-based psychological coaching across four core niches: **Performance**, **Life**, **Addictions**, and **Relationships**.

## ⚠️ Important Disclaimer

These skills instruct AI agents to act as **structured thinking partners** grounded in evidence-based psychological frameworks — **NOT** as licensed therapists, counselors, or medical professionals. Every skill includes explicit scope declarations, anti-sycophancy discipline, and crisis referral protocols.

---

## 🏛️ Architecture

```
psychology-skills/
├── scripts/                            # State management & compression CLI
│   ├── compact.mjs                     # Core state compression engine
│   └── psych-cli.mjs                   # CLI tool (status, compact, archive)
├── skills/
│   ├── psych-router/                   # Intent detection → niche routing & consent
│   ├── psych-session-protocol/         # Core session mechanics, batched persistence & schemas
│   │   └── references/                 # profile-schema, state-summary-schema, risk-screening
│   ├── performance-psychology/         # Flow, burnout, procrastination, peak performance
│   ├── life-psychology/                # Transitions, meaning, identity, grief, decisions
│   ├── addiction-psychology/           # Substance/behavioral addictions, stage assessment
│   └── relationship-psychology/        # Attachment, communication, conflict, repair, intimacy
└── rules/
    └── psychology-trigger.md           # Execution rules (crisis override, persistence priorities)
```

---

## ⚡ Memory Architecture & Token Optimization

Version 3 introduces a **high-efficiency state architecture** designed to eliminate context bloating and redundant token usage across long-running coaching journeys:

### 1. 🗂️ Tiered Loading (Step -1)
- At session start, the agent loads `state-summary.json` (~1.8KB / ~450 tokens) instead of dumping 25KB+ of historical raw state.
- Full `state.json`, `profile.json`, or historical `archive/` data are fetched on-demand only when deep history is required.

### 2. ⚡ Batched Persistence
- Eliminates per-turn tool call overhead (saving 15–20 writes per session).
- State changes accumulate in-memory and flush at **3 discrete checkpoints**:
  1. Module completion
  2. User break/pause
  3. End-of-session flush
- *Safety exception*: `riskLevel` changes and new `commitmentLog` entries write immediately.

### 3. 🧹 Automated State Compaction (`scripts/compact.mjs`)
- **Archiving**: Moves `keyInsights` older than 3 sessions to `archive/insights-{date}.json`.
- **Thread Lifecycle**: Archives resolved `openThreads` to `archive/threads-{date}.json`.
- **Commitment Pruning**: Retains active pending commitments + 3 most recent resolved items; archives the rest.
- **Pattern Deduplication**: Merges fuzzy-matched duplicate patterns in `profile.json` and assigns unique IDs (`pattern-001`).

---

## 🛠️ Maintenance CLI (`psych-cli`)

Use the bundled `psych-cli.mjs` tool between sessions to monitor and maintain memory health:

```bash
# Check memory health and session status
node scripts/psych-cli.mjs status --session-dir /path/to/my_session

# Run automated state compaction & pattern deduplication
node scripts/psych-cli.mjs compact --session-dir /path/to/my_session

# Archive historical data older than N sessions
node scripts/psych-cli.mjs archive --session-dir /path/to/my_session --before 3
```

---

## 🎯 Design Principles

1. **One question at a time** — Never present a list of questions. Wait for each answer before continuing.
2. **Anti-sycophancy discipline** — Reality-test cognitive distortions in plain language rather than validating everything.
3. **OARS v2 & Directness Calibration** — Maintain a 3:1 reflection-to-question ratio; calibrate directness (`reflective` | `balanced` | `direct`) to user preference.
4. **Evidence-based frameworks** — Every niche maps to validated therapeutic and coaching models.
5. **Safety first** — Immediate crisis screening override on every turn via `risk-screening.md`.
6. **Disk-persisted memory** — Structured JSON state and module output files (`10_current-state.md`, `90_SYNTHESIS.md`) enable seamless cross-conversation continuity.

---

## 📊 Frameworks by Niche

| Niche | Key Frameworks |
|-------|---------------|
| **Performance** | Flow (Csikszentmihalyi), SDT (Deci & Ryan), ACT, Growth Mindset (Dweck) |
| **Life** | Logotherapy (Frankl), Narrative Therapy, PERMA (Seligman), Bridges Transitions, Decision Architecture |
| **Addictions** | Transtheoretical Model (Stages of Change), Motivational Interviewing, CBT, Relapse Prevention (Marlatt), Harm Reduction, SMART Recovery |
| **Relationships** | Attachment Theory, Gottman Method, NVC (Rosenberg), Schema Therapy |

---

## 📥 Installation & Setup

Copy or symlink the repository into your AI agent's skill discovery path:

```bash
# For Antigravity / Gemini CLI
cp -r skills/* ~/.gemini/config/skills/
cp -r plugins/psychology-skills ~/.gemini/config/plugins/

# For Claude Code / ECC
cp -r skills/* ~/.claude/skills/

# For OpenCode / Codex
cp -r skills/* ~/.config/opencode/skills/
```

---

## 📜 License & Credits

MIT License. Borrows proven session orchestration patterns from:
- [Everything Claude Code (ECC)](https://github.com/affablesharzil/everything-claude-code) — session protocol & state persistence
- [Matt Pocock Skills](https://github.com/mattpocock/matt-skills) — grilling interview discipline
- [Superpowers Plugin](https://github.com/superpowers-ai/superpowers) — skill quality standards

