# Psychology Skills v2.0

## Quick Start

1. Extract this folder into your agent's skill directory
2. The agent will auto-discover skills via `plugin.json`
3. The trigger rule in `rules/` monitors for distress signals
4. The router (`router/SKILL.md`) handles consent, preference profiling, and domain routing
5. All domains inherit shared primitives from `core/SKILL.md`

## Architecture

```
psychology-skills-v2/
├── core/              # Shared therapeutic primitives, safety, measurement
├── router/            # Entry point, intent detection, consent
├── protocol/          # Session lifecycle, state management, quality gates
├── domains/           # Niche coaching skills
│   ├── performance/   # Flow, deliberate practice, recovery science, neurotype-aware
│   ├── relationship/  # Attachment, Gottman, Perel, Real's RLT, digital dynamics
│   ├── life/          # Logotherapy, IFS, grief, meaning, transitions
│   └── addiction/     # Stages of Change, MI, harm-reduction, DBT, CFT
├── rules/             # Trigger rule with priority hierarchy
└── docs/              # Critical review, architecture blueprint, migration guide
```

## Key v2 Improvements

- **Safety-First Gate**: Crisis resources provided immediately, before assessment
- **Unified Core Layer**: CBT, OARS, ACT, DBT, CFT, IFS primitives in one place
- **Measurement-Integrated**: ORS + SRS + custom trackers at every session
- **Neurodivergence-Native**: ADHD, autism, giftedness adaptations throughout
- **Trauma-Informed**: Window of tolerance, grounding, dissociation awareness
- **Maintenance Mode**: No terminal dead-end — monthly boosters and relapse prevention
- **Cultural Competency**: Collectivist awareness, socioeconomic barriers, religious integration

## Files

| File | Purpose |
|------|---------|
| `core/SKILL.md` | Crisis protocol, therapeutic primitives, measurement, neurodivergence, cultural competency |
| `router/SKILL.md` | Intent detection, consent management, preference profiling, domain routing |
| `protocol/SKILL.md` | Session lifecycle, state v2, OARS enforcement, quality gates |
| `domains/performance/SKILL.md` | Peak performance, flow, deliberate practice, recovery science |
| `domains/relationship/SKILL.md` | Attachment, communication, desire, digital boundaries, workplace dynamics |
| `domains/life/SKILL.md` | Existential questions, transitions, grief, meaning, decision architecture |
| `domains/addiction/SKILL.md` | Harm-reduction, stage-matched MI, relapse prevention, shame interruption |
| `rules/psychology-trigger-v2.md` | Priority hierarchy: Crisis > Continuity > Routing |
| `docs/psychology-skills-critical-review.md` | 47-weakness analysis of v1.0 |
| `docs/psychology-skills-v2-architecture.md` | Complete architectural blueprint |
| `docs/REDESIGN-README.md` | Top 10 design decisions and migration guide |
