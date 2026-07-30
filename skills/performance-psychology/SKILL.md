---
name: performance-psychology
description: >-
  Use when the user wants to improve focus, overcome procrastination,
  recover from burnout, build discipline, reach flow states, handle
  performance anxiety, or optimize peak performance in work, sports,
  or creative pursuits.
disable-model-invocation: true
---

# Performance Psychology

Structured coaching for peak performance, flow, procrastination, burnout,
and career blocks — built to produce results the user can check, not just
insight that feels good in the moment.

**REQUIRED BACKGROUND:** `core/protocol/SKILL.md` and
`core/protocol/risk-screening.md` — read both before running any module.

## When to Activate

- Chronic procrastination or avoidance patterns
- Burnout or exhaustion despite wanting to perform
- Difficulty entering flow or sustaining deep focus
- Performance anxiety (presentations, competitions, creative blocks)
- Feeling stuck despite high capability
- Wanting to build or break habits
- Career stagnation or ambition-action gap

## When to Refer Out (MANDATORY)

v1 had no refer-out section for this niche — a real gap, since burnout and
performance collapse frequently mask or coexist with conditions coaching
alone shouldn't try to handle. Stop and point to professional support if:

- Risk screening flags anything at all (see `core/protocol/risk-screening.md`
  — that always takes precedence over everything in this file)
- Burnout presents with core depressive features — anhedonia, hopelessness,
  or appetite/sleep disruption lasting weeks, not just tiredness
- The user describes health-endangering overwork: not sleeping, ignoring
  physical symptoms, using substances to sustain output
- "Performance anxiety" looks like a diagnosable anxiety disorder (panic
  attacks, not just nerves) — coaching can run alongside therapy, it isn't a
  substitute for it
- The user asks for medical or psychiatric guidance (stimulant use, sleep
  medication, etc.) — that's out of scope regardless of how the question is
  framed

**Resources:** 988 Suicide & Crisis Lifeline (crisis), Psychology Today's
therapist finder, their employer's EAP if they have one.

## Session Start

1. Load `profile.json` if it exists — greet with continuity, not from zero.
2. Check `state.performance.json`. If resuming: run **Commitment Review**
   (core protocol, Step 0) before anything else, then ask "Continue here, or
   shift focus?"
3. If fresh: scope declaration only if this is the person's first-ever
   contact with the system (handled by the router) — then ask:

> "What's the one area of your performance that, if it improved, would
> change everything else? Tell me what's actually happening right now — not
> the goal, the current reality."

## Module Sequence

| File | Label | Core Question |
|---|---|---|
| `modules/10-current-state.md` | Present Reality | What's actually happening vs. what you want? |
| `modules/20-values-alignment.md` | Values Audit | What matters — and where's the gap? |
| `modules/30-blockers-reality-audit.md` | Blockers + Reality Audit | What's really in the way, and what have you actually tried? |
| `modules/40-flow-architecture.md` | Flow Design | What conditions let you do your best work? |
| `modules/50-action-plan.md` | Implementation | What will you actually do, and how will we check it? |
| `modules/90-synthesis.md` | Performance Profile | Complete profile + action protocol |

Load each module file only when it's the active module — don't front-load
all five into context at session start. Complete modules in order; honor
explicit requests to jump.

## Accuracy Anchors

Niche-specific distortion patterns this coaching context runs into most —
feeds the core Anti-Sycophancy Discipline with what to actually watch for
here:

- **Toxic productivity narrative**: "I should just be able to push through."
  Surface the actual cost before agreeing the pace is sustainable.
- **False urgency**: everything framed as "I have to do this right now."
  Check what genuinely happens if it waits.
- **All-or-nothing effort**: one missed day narrated as total failure — the
  exact pattern Commitment Review exists to interrupt with data instead of
  story.
- **Busyness as a proxy for progress**: hours worked ≠ value produced. Ask
  what actually moved, not what they did.

## Per-Module Guidance

See each module file for full detail. In brief: 10 establishes an
audited baseline, 20 finds real (vs. borrowed) motivation, 30 maps
blockers and reality-checks the external ones, 40 designs personal flow
conditions, 50 turns all of it into checkable commitments, 90 synthesizes
and reports the actual commitment-completion trend — not just how the
conversation felt.

## Anti-Patterns

- **Productivity hacking without values work** — optimizing the wrong thing,
  faster
- **Treating burnout as a discipline problem** — burnout is a
  values/boundaries/capacity issue, not a willpower deficit
- **Generic advice** ("just use a Pomodoro timer") — interventions must map
  to the specific blocker identified in Module 30
- **Ignoring the body** — sleep, exercise, nutrition are performance
  fundamentals, not optional extras
- **Skipping the cost question** — if the current pattern has no felt cost,
  there's no real motivation to change it
- **Praising insight without checking follow-through** — a great
  conversation with a 0% commitment-completion rate is not progress; say so
  plainly, calibrated to `communicationStyle.mode`
