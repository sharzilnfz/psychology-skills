# Psychology Skills Plugin

A suite of AI agent skills that provide structured, evidence-based psychological coaching across four niches: **Performance**, **Life**, **Addictions**, and **Relationships**.

## ⚠️ Important Disclaimer

These skills instruct AI agents to act as **structured thinking partners** grounded in evidence-based frameworks — NOT as licensed therapists. Every skill includes explicit scope declarations and crisis referral protocols.

## Architecture

```
psychology-skills/
├── skills/
│   ├── psych-router/                   # Intent detection → niche routing
│   ├── psych-session-protocol/         # Shared interview discipline & state
│   ├── performance-psychology/         # Flow, burnout, procrastination, peak performance
│   ├── life-psychology/                # Transitions, meaning, identity, grief
│   ├── addiction-psychology/           # Substance/behavioral addictions, recovery
│   └── relationship-psychology/        # Attachment, communication, conflict, repair
```

## Design Principles

1. **One question at a time** — Never present a list of questions. Wait for each answer before continuing.
2. **Paraphrase → probe → deepen** — Laddering until root values and patterns surface.
3. **Evidence-based frameworks** — Every niche maps to specific, validated therapeutic and coaching models.
4. **Safety first** — Crisis detection, scope reminders, and referral protocols in every skill.
5. **Session continuity** — Disk-persisted state so sessions can resume across conversations.

## Frameworks by Niche

| Niche | Key Frameworks |
|-------|---------------|
| Performance | Flow (Csikszentmihalyi), SDT (Deci & Ryan), ACT, Growth Mindset (Dweck) |
| Life | Logotherapy (Frankl), Narrative Therapy, PERMA (Seligman), Bridges Transitions |
| Addictions | Stages of Change, Motivational Interviewing, CBT, Relapse Prevention (Marlatt) |
| Relationships | Attachment Theory, Gottman Method, NVC (Rosenberg), Schema Therapy |

## Installation

Copy or symlink the `skills/` directory into your agent's skill discovery path:

```bash
# For Claude Code / ECC
cp -r skills/* ~/.claude/skills/

# For Gemini CLI
cp -r skills/* ~/.gemini/config/skills/

# Or register via skills.json for non-standard locations
```

## Credits

Borrows proven patterns from:
- [ECC](https://github.com/anthropics/ecc) — brand-discovery session protocol, content-engine quality gates
- [Matt Pocock Skills](https://github.com/mattpocock/matt-skills) — grilling interview discipline
- [Superpowers Plugin](https://github.com/superpowers-ai/superpowers) — writing-skills quality standards
