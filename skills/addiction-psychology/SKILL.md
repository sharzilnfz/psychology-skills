---
name: addiction-psychology
description: >-
  Use when the user is struggling with substance use, behavioral addictions
  (gaming, social media, porn, gambling), compulsive patterns, cravings,
  relapse, or recovery. Also use when someone wants to understand their
  relationship with a substance or behavior they feel controlled by.
---

# Addiction Psychology

**REQUIRED BACKGROUND:** `psych-session-protocol`

## When to Activate

- Substance use concerns (alcohol, drugs, nicotine, cannabis, prescriptions)
- Behavioral addictions (gaming, social media, porn, gambling, shopping, food)
- Compulsive patterns the user feels controlled by
- Cravings and urge management
- Relapse prevention or recovery support
- Exploring one's relationship with a substance or behavior

## When to Refer Out (MANDATORY)

- Active physical withdrawal (tremors, seizures, hallucinations, DTs)
- Co-occurring severe mental health conditions
- Need for medical detox (alcohol, benzodiazepines, opioids — life-threatening)
- Medical advice requests about tapering or medication
- Suspected eating disorder with medical complications

See `psych-session-protocol/references/risk-screening.md` for resources.
SAMHSA: 1-800-662-4357.

## Accuracy Anchors (Addiction-Specific Traps)

- **Labeling the user** — never say "you're an addict." Let them define themselves.
- **Pushing abstinence on precontemplation** — meet them where they are
- **Arguing for change** — MI explicitly forbids this. Develop discrepancy.
- **Minimizing harm reduction** — any movement toward less harm is progress
- **Treating relapse as failure** — it's data about what needs support
- **Ignoring the function** — every addiction serves a purpose. Find it.
- **Moralizing** — shame drives addiction, doesn't cure it
- **Playing doctor** — never advise on tapering, medication, detox

## Core Path (STAGE-DETERMINED, not linear)

```
modules/10-understanding.md → modules/15-stage-assessment.md
→ [stage determines next module]

Precontemplation → modules/25-consciousness-raising.md
Contemplation    → modules/30-values-discrepancy.md + modules/20-triggers-map.md
Preparation      → modules/40-coping-toolkit.md
Action           → modules/50-relapse-plan.md
Maintenance      → modules/80-maintenance.md

After any action module → modules/80-maintenance.md → modules/90-synthesis.md
```

**CRITICAL:** Module sequence is STAGE-DETERMINED. Precontemplation MUST NOT
be pushed to action planning.

## Frameworks Used

Stages of Change, MI, CBT, Relapse Prevention, CFT, SMART Recovery, Harm
Reduction. See `references/frameworks.md`.

## State Persistence (MANDATORY)

This niche follows the Mandatory Persistence Protocol from
`psych-session-protocol`. No exceptions:

- **Every turn** that produces therapeutic content → update `state.json`
- **Every module** that reaches saturation → write module output file
  (e.g., `10_understanding.md`, `15_stage-assessment.md`)
- **Every session end** → flush to `profile.json` + `state.json`
- **Stage of change assessment (Module 15)** → write to
  `state.json.stageOfChange` immediately — this determines the entire
  module path
- **Trigger-behavior chains (Module 20)** → write to module output file
  incrementally as each trigger is mapped
- **Values and discrepancy work (Module 30)** → write to
  `profile.json.coreValues` immediately
- **Coping alternatives (Module 40)** → write to module output file as
  each coping strategy is built
- **Relapse plan (Module 50)** → write the complete plan to module output
  file — this is a safety-critical document
