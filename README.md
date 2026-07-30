# Psychology Skills Plugin (v2)

A suite of AI agent skills providing structured, evidence-based coaching
across four domains: **Performance**, **Relationships**, **Life**, and
**Addiction**. v2 is a full architectural redesign of the original — see
`CHANGELOG.md` for the reasoning behind every change.

## ⚠️ Important Disclaimer

These skills instruct AI agents to act as **structured thinking partners**
grounded in evidence-based frameworks — not licensed therapists. Every
skill inherits explicit scope declaration and crisis referral protocols
from `core/`.

## Architecture

```
psychology-skills/
├── core/
│   ├── router/              # Single entry point: intent detection, consent, routing
│   └── protocol/            # Shared session discipline, state schema, risk screening
│       ├── SKILL.md
│       ├── risk-screening.md      # Single source of the crisis protocol
│       └── profile-schema.md      # Cross-domain person profile (new in v2)
├── skills/
│   ├── performance-psychology/    # Flow, SDT, ACT, Growth Mindset — fully modularized
│   │   ├── SKILL.md
│   │   ├── modules/               # One file per module, loaded on demand
│   │   └── references/frameworks.md
│   ├── relationship-psychology/   # Attachment, Gottman, NVC, Schema — fully modularized
│   │   ├── SKILL.md
│   │   ├── modules/
│   │   └── references/frameworks.md
│   ├── life-psychology/           # Logotherapy, Narrative, PERMA, Bridges
│   └── addiction-psychology/      # Stages of Change, MI, CBT, Relapse Prevention
└── rules/
    └── psychology-trigger.md      # Thin pointer only — no duplicated logic
```

**Why `performance` and `relationship` are structured differently from
`life` and `addiction`:** this redesign prioritized the two domains the
user most wanted deepened. Both got the full per-module file split (for
context efficiency and easier future editing) and the new accountability
and cross-niche-profile machinery in full. `life` and `addiction` inherit
every architectural fix (single-source crisis protocol, `profile.json`,
refer-out consistency, accuracy anchors) but keep their v1-style
single-file module guidance for now. Migrating them to the same per-module
split is a mechanical follow-up, not a design question — the pattern is
already established in `performance-psychology/modules/`.

## What Changed From v1 (summary — full reasoning in CHANGELOG.md)

1. **One source of truth for crisis logic.** v1 defined the same
   screening tree in two files; v2 defines it once (`risk-screening.md`)
   and everything else links to it.
2. **A cross-domain person profile.** v1 rebuilt the user's values,
   patterns, and attachment style from zero in every niche. v2 adds
   `profile.json`, so understanding compounds across domains instead of
   resetting.
3. **A real accountability loop.** v1 assigned action items and repair
   plans but never structurally checked whether they happened. v2 opens
   every session with a Commitment Review before mood, bridge, or agenda.
4. **Configurable directness.** v1 hard-coded a uniform 3:1
   reflection-to-question ratio for everyone. v2 makes it a dial
   (`reflective` / `balanced` / `direct`) the user sets explicitly —
   built for people who want to be pushed, not just mirrored.
5. **Closed a safety inconsistency.** v1 gave `addiction` and
   `relationship` a "When to Refer Out" section but not `performance` or
   `life`, despite both screening for depression/hopelessness-adjacent
   signals. v2 adds refer-out sections to all four.
6. **Niche-specific accuracy anchors.** Generic anti-sycophancy language
   is necessary but not sufficient. Each niche now names its own
   highest-frequency distortion pattern explicitly.
7. **One manifest, not two.** v1 shipped both a root `plugin.json` and a
   `.claude-plugin/plugin.json` with overlapping content. v2 keeps one.

## Frameworks by Niche

| Niche | Key Frameworks |
|-------|---------------|
| Performance | Flow (Csikszentmihalyi), SDT (Deci & Ryan), ACT, Growth Mindset (Dweck), Implementation Intentions (Gollwitzer), IZOF/Catastrophe/Reversal arousal models |
| Relationships | Attachment Theory, Gottman Method, NVC (Rosenberg), Boundary-setting, Schema Therapy, Family Systems (Bowen) |
| Life | Logotherapy (Frankl), Narrative Therapy, PERMA (Seligman), Bridges' Transitions, Erikson |
| Addiction | Stages of Change, Motivational Interviewing, CBT chain analysis, Relapse Prevention (Marlatt), Harm Reduction |

Each `references/frameworks.md` now ends with a **Sources** section citing
the originating work, so claims can be audited and updated as the evidence
base moves — v1 had no citations at all.

## Installation

Same install paths as v1 — copy or symlink `core/`, `rules/`, and `skills/`
into your agent's skill discovery path. See `USAGE.md` for
platform-specific steps (Claude Code, Gemini CLI/Antigravity, other
markdown-based CLI agents).

## Session State & Privacy

Unchanged from v1: session data (`state*.json`, `profile.json`, and module
markdown files) is written to the working directory. Add them to
`.gitignore`, run in a private local directory, and never commit them to a
shared or public repo. `profile.json` is more sensitive than any single
niche's `state.json` — it's the aggregated picture — so treat it
accordingly.

## Credits

Same lineage as v1: patterns borrowed from ECC's session-protocol design,
Matt Pocock's skills invocation model, and the Superpowers plugin's
quality-gate discipline.
