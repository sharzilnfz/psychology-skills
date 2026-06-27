# Psychology Skills Plugin — Usage Guide

A cross-platform plugin for AI-powered psychological coaching across four niches: **Performance**, **Life**, **Addictions**, and **Relationships**. Designed to work with any markdown-based CLI agent.

---

## Quick Demo: What a Session Looks Like

Here's a real-world example of starting a performance psychology session in any CLI agent:

```
You:   I've been procrastinating on my most important work for months.
       I know what to do, I just can't make myself do it.

Agent: I'm an AI thinking partner using evidence-based psychological
       frameworks. I'm not a licensed therapist. If you're in crisis,
       contact the 988 Suicide & Crisis Lifeline (call or text 988).

       Would you like to begin a formal session to explore this?

You:   Yes, let's do it.

Agent: [Routes to performance-psychology]
       Using performance psychology to explore procrastination patterns.

       First — how are you feeling right now, on a scale of 0-100%?
       (This helps me understand where you're starting today.)

You:   Maybe 40%. Frustrated with myself.

Agent: 40% — frustrated. That frustration tells me something matters to
       you here.

       What's the one area of your performance that, if it improved,
       would change everything else? Tell me what's happening right
       now — not the goal, but what a typical day actually looks like.

You:   I wake up planning to write, then spend 3 hours on email and
       Slack. By afternoon I'm too drained to think clearly.

Agent: So the mornings — your sharpest hours — are going to reactive
       work, and by the time you get to the writing that matters, the
       tank is empty.

       What does it feel like in that moment when you open Slack
       instead of your writing project?

       [... session continues with OARS methodology, one question
       at a time, 3:1 reflections to questions ...]
```

The session flows through 6 modules over multiple conversations: **Current State → Values Alignment → Blockers Analysis → Flow Architecture → Action Plan → Synthesis**. State is saved to `state.json` so you can resume any time.

---

## Installation

### Option A: Claude Code (like ECC)

Claude Code uses a `.claude-plugin/plugin.json` manifest to discover skills.

**Step 1**: Copy the plugin into your project or a global location:
```bash
# Project-local (recommended for sensitive sessions)
cp -r psychology-skills /path/to/your/project/

# Or global
cp -r psychology-skills ~/.claude/skills/psychology-skills
```

**Step 2**: Create or update `.claude-plugin/plugin.json` in the plugin directory:
```json
{
  "name": "psychology-skills",
  "version": "1.0.0",
  "description": "Clinically-informed AI psychology coaching — performance, life, addictions, relationships",
  "skills": [
    "./skills/psych-router",
    "./skills/psych-session-protocol",
    "./skills/performance-psychology",
    "./skills/life-psychology",
    "./skills/addiction-psychology",
    "./skills/relationship-psychology"
  ]
}
```

**Step 3**: Reference the plugin from your project's `CLAUDE.md`:
```markdown
## Psychology Skills

When the user mentions therapy, coaching, mental health, stress,
burnout, addiction, relationships, or life transitions, load the
`psych-router` skill from `psychology-skills/skills/psych-router/`.
```

**That's it.** Claude Code will auto-discover the skills via the plugin manifest, just like ECC's `plugin.json` or Matt's `mattpocock-skills` plugin.

### Option B: Gemini CLI / Antigravity

Antigravity 2.0 natively discovers this plugin workspace-wide or globally, loading its skills and rules automatically.

**Workspace Level Integration (Recommended)**:
Place the plugin folder inside `.agents/plugins/` (or `_agents/plugins/`) at the root of your opened workspace:
```bash
# From your workspace root:
mkdir -p .agents/plugins
cp -r psychology-skills .agents/plugins/psychology-skills
```
Once placed here, Antigravity will:
1. **Auto-Load Skills**: Auto-discover and register all skills in `skills/` (e.g., `psych-router`, `performance-psychology`).
2. **Enforce Rules**: Automatically load and follow `rules/psychology-trigger.md`. This rule instructs the agent to monitor for distress signals and route them to `psych-router` only after securing explicit consent.

**Global Level Integration**:
To enable the psychology plugin across all workspaces, place it globally in your config directory:
```bash
mkdir -p ~/.gemini/config/plugins
cp -r psychology-skills ~/.gemini/config/plugins/psychology-skills
```
Antigravity will load the global rules and skills for any opened workspace.

### Option C: Codex / OpenCode / Other CLI Agents

Any agent that reads markdown skill files from a directory can use this plugin.

```bash
# Codex
cp -r psychology-skills/skills/* ~/.codex/skills/

# OpenCode
cp -r psychology-skills/skills/* ~/.opencode/skills/
```

If the agent uses `AGENTS.md` for instructions (like ECC does for Gemini), add:
```markdown
## Psychology Skills

Available psychology niche skills in `psychology-skills/skills/`:
- `psych-router` — entry point, detects psychology intent
- `performance-psychology` — flow, burnout, procrastination
- `life-psychology` — transitions, meaning, identity, grief
- `addiction-psychology` — substance/behavioral addictions, recovery
- `relationship-psychology` — attachment, communication, conflict
```

---

## How Invocation Works

This plugin uses the same **hybrid invocation** pattern as ECC and Matt's skills:

| Skill | Invocation | How it's Triggered |
|-------|------------|-------------------|
| `psych-router` | **Model-invoked** | Agent detects psychology keywords automatically |
| `psych-session-protocol` | **Reference skill** | Never invoked directly — inherited by all niches |
| `performance-psychology` | **User-invoked** | User explicitly consents via router prompt |
| `life-psychology` | **User-invoked** | User explicitly consents via router prompt |
| `addiction-psychology` | **User-invoked** | User explicitly consents via router prompt |
| `relationship-psychology` | **User-invoked** | User explicitly consents via router prompt |

This mirrors Matt's pattern where `grilling` (model-invoked) provides the reusable discipline, and `grill-me` (user-invoked) is the entry point that orchestrates it. Here, `psych-session-protocol` provides the shared discipline, and `psych-router` is the entry orchestrator.

> **Key Rule (from Matt's invocation docs):** A user-invoked skill can invoke model-invoked skills, but never another user-invoked one. The niche skills follow this — they reference `psych-session-protocol` (model-invoked reference), but never call each other.

---

## Session State & Privacy

### How State Works

All session data is written to the **current working directory** where you launch the agent:

```
your-session-dir/
├── state.json              ← session tracker (niche, module, risk, mood)
├── 10_current-state.md     ← Module 1 output
├── 20_values-alignment.md  ← Module 2 output
├── ...
└── 90_SYNTHESIS.md         ← Final compiled profile
```

### Resuming Sessions

```
You:   [launches agent in same directory]

Agent: [reads state.json]
       Welcome back. Last session we were working on your trigger
       mapping (Module 20). You'd identified 3 of your top 5 triggers.
       Continue here, or switch focus?
```

### Privacy

These skills generate **highly sensitive** personal data. Recommendations:

- ✅ Run in a dedicated, local directory (e.g., `~/Private/psych-sessions/`)
- ✅ Add `state.json` and `*.md` session files to `.gitignore`
- ❌ Do NOT commit session files to a public Git repository
- ❌ Do NOT run these skills in a shared workspace

---

## The CBT Session Flow

Every session follows a strict 6-step structure (inherited from `psych-session-protocol`):

| Step | What Happens | Why |
|------|-------------|-----|
| **1. Mood Check** | Rate current emotions 0-100% | Quantified baseline |
| **2. Bridge** | Recall last session's insights | Continuity |
| **3. Agenda** | Agree on today's focus | Prevents drift |
| **4. OARS Discussion** | One question at a time, 3:1 reflections | Core therapeutic work |
| **5. Action Plan** | Small behavioral experiment for the week | Real-world application |
| **6. Summary** | Key takeaways + feedback | Consolidation |

---

## Troubleshooting

**"The agent isn't picking up the skills"**
- Verify your `plugin.json` or `skills.json` points to the correct path.
- Check that each `SKILL.md` has valid YAML frontmatter (`---` delimiters).

**"The agent jumped straight into deep questions without asking"**
- The router should always ask for consent first. If it doesn't, your agent may not be loading `psych-router`. Try invoking it directly: *"Load the psych-router skill and start a psychology session."*

**"I want to start fresh"**
- Delete `state.json` and any module markdown files from your session directory.
