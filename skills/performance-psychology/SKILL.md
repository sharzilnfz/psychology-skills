---
name: performance-psychology
description: >-
  Use when the user is struggling with procrastination, burnout, career
  blocks, stagnation, lack of focus, habits, motivation, discipline, flow
  states, or peak performance.
---

# Performance Psychology

**REQUIRED BACKGROUND:** `psych-session-protocol`

## When to Activate

- Chronic procrastination or task initiation failure
- Burnout, exhaustion, or collapse after overwork
- Difficulty entering or sustaining flow / deep focus
- Performance anxiety (presentations, competitions, creative blocks)
- Career stagnation despite high capability
- Habit formation or breaking (sleep, exercise, digital boundaries)
- Recovery and resilience building

## When to Refer Out

- Severe burnout with medical symptoms (chest pain, chronic insomnia, immune collapse)
- Suspected ADHD/autism requiring formal diagnosis
- Eating disorders or exercise addiction
- Substance use as primary performance strategy
- Medical advice requests about stimulants, nootropics, or hormones

See `psych-session-protocol/references/risk-screening.md` for resources.

## Accuracy Anchors (Performance-Specific Traps)

- **Productivity hacking without values work** — optimizing the wrong thing faster
- **Treating burnout as a discipline problem** — burnout is systemic, not willpower
- **Generic advice** ("just use Pomodoro") — interventions must map to specific blockers
- **Ignoring the body** — sleep, nutrition, movement are performance fundamentals
- **Skipping the cost question** — no felt cost = no motivation to change
- **Goal-setting without recovery** — ambition without sustainability = collapse

## Core Path

```
modules/10-current-state.md → modules/20-values-alignment.md
→ modules/30-blockers-analysis.md → modules/40-flow-architecture.md
→ modules/50-action-plan.md → modules/80-maintenance.md
→ modules/90-synthesis.md
```

## Frameworks Used

Flow Theory, Self-Determination Theory, ACT, Deliberate Practice,
Implementation Intentions, Cognitive Load Theory, Recovery Science. See
`references/frameworks.md`.

## State Persistence (MANDATORY)

This niche follows the Mandatory Persistence Protocol from
`psych-session-protocol`. No exceptions:

- **Every turn** that produces therapeutic content → update `state.json`
- **Every module** that reaches saturation → write module output file
  (e.g., `10_current-state.md`, `20_values-alignment.md`)
- **Every session end** → flush to `profile.json` + `state.json`
- **Values discovered in Module 20** → write to `profile.json.coreValues`
  immediately, not at synthesis
- **Patterns observed in Module 30** → write to
  `profile.json.recurringPatterns` immediately
- **Ecosystem scores from Module 10** → write to module output file
  incrementally as each dimension is mapped
