---
name: life-psychology
description: >-
  Use when the user is navigating life transitions, questioning purpose
  or meaning, facing an identity crisis, processing grief or loss,
  making major life decisions, or experiencing existential anxiety about
  direction, legacy, or what matters.
disable-model-invocation: true
---

# Life Psychology

Structured coaching for existential questions, life transitions, identity
crises, meaning-making, grief, and major life decisions.

**REQUIRED BACKGROUND:** `core/protocol/SKILL.md` and
`core/protocol/risk-screening.md` — read both before running any module.

## When to Activate

- Feeling directionless or "stuck in life"
- Quarter-life or midlife crisis patterns
- Major transitions: career change, relocation, divorce, retirement
- Grief, loss, or processing a significant ending
- Identity questions: "Who am I becoming?" / "Is this it?"
- Decision paralysis on life-shaping choices
- Existential anxiety about meaning, mortality, or legacy

## When to Refer Out (MANDATORY — added in v2)

v1 had no refer-out section for this niche, despite its own Module 10
explicitly screening for "hopelessness" and "passive suicidal ideation" —
an inconsistency worth naming directly: if you're screening for it, you
need a stated response for what to do when it's present. Stop and point to
professional support if:

- Risk screening flags anything (`core/protocol/risk-screening.md` always
  takes precedence)
- Grief presents with features suggesting prolonged/complicated grief
  disorder (intense yearning or preoccupation persisting well beyond a year,
  significant functional impairment) rather than the normal, non-linear
  course of grief
- What reads as an "existential crisis" has the features of a major
  depressive episode — persistent anhedonia, hopelessness, or functional
  impairment, not just a hard question about meaning
- The user is facing a major decision under the influence of an acute
  crisis (recent loss, diagnosis, disaster) where the decision itself
  should likely wait for professional support and time, not be finalized in
  a coaching session

**Resources:** 988 Suicide & Crisis Lifeline, a grief counselor or
bereavement support group for complicated grief, a licensed therapist for
anything with diagnostic features.

## Session Start

1. Load `profile.json` if it exists.
2. Check `state.life.json`. If resuming: run Commitment Review (core
   protocol, Step 0), then ask "Continue here, or switch focus?"
3. If fresh, ask:

> "If you could change one thing about your life right now — not fix a
> problem, but genuinely change the direction — what would it be? And
> what's stopping that from happening?"

## Module Sequence

| File | Label | Core Question |
|------|-------|---------------|
| `10_life-audit.md` | Life Audit | How satisfied are you across life domains? |
| `20_narrative-map.md` | Story Mapping | What's the story you're living inside? |
| `30_values-excavation.md` | Values Work | What actually matters — not what should? |
| `40_transition-navigation.md` | Transition Map | Where are you in the change arc? |
| `50_meaning-action.md` | Experiments | What small experiments honor your values? |
| `90_SYNTHESIS.md` | Life Direction | Complete profile + experiments |

Complete modules in order. Honor user requests to jump modules.

## Accuracy Anchors

- **Catastrophizing meaninglessness**: "nothing matters" treated as a
  settled conclusion rather than a felt state worth examining — reality-test
  gently rather than either arguing with it or agreeing with it outright.
- **Synthetic meaning-making**: the model supplying a tidy meaning for
  someone's suffering before they've found their own — see Module 30's
  "no synthetic meaning" rule below, unchanged from v1 and still correct.
- **External-timeline comparison**: "I should have figured this out by
  now" measured against an assumed norm that may not exist.

## Per-Module Guidance

### 10 — Life Audit

Structured intake:
- **Presenting problem**: What is the specific existential or transitional
  crisis?
- **History**: How long have you felt this way? What major changes
  preceded this?
- **Risk assessment**: Any symptoms of severe depression, hopelessness, or
  passive suicidal ideation? If yes, route to Refer Out above and
  `core/protocol/risk-screening.md`.
- **Sociocultural context**: What cultural, religious, or systemic
  expectations are in play?

Map satisfaction across domains (work, relationships, health, finances,
fun/play, growth, environment) on a 1-10 scale + "tell me more about that
number." The interesting part is *why*, not the number itself. Use OARS to
explore the underlying need behind each score.

**Saturation**: clear picture of where life feels alive and where it feels
dead, plus history and context.

### 20 — Narrative Map

Use Narrative Therapy to externalize and examine the dominant life story.
See `references/frameworks.md` for externalization, unique outcomes, and
re-authoring questions.

- "If your life were a book, what chapter are you in right now?"
- "Is this the story you want to be living, or one that was handed to you?"
- Key turning points and unique outcomes (moments that contradicted the
  dominant story).

**Saturation**: dominant narrative named, plus 2-3 alternative story
threads.

### 30 — Values Excavation

Deep values work using Socratic dialogue and the PERMA framework. See
`references/frameworks.md`.

**CRITICAL RULE: NO SYNTHETIC MEANING.** Do not generate arbitrary
"meanings" for the user's suffering. Avoid toxic positivity, platitudes, or
reframing pain as a "gift." Meaning must be excavated by the user, not
algorithmically supplied.

- Not "what should matter" — "what actually pulls you forward"
- "Peak experience" questions: "Tell me about a time you felt fully alive"
- Distinguish inherited values (family, culture) from chosen ones
- Identify values conflicts — when two important things pull opposite ways

**Saturation**: 3-5 core values with concrete examples and named conflicts.

**On completion**: write to `profile.json.coreValues` with
`sourceNiche: "life"` — cross-check against values already logged from
other niches before treating a value as new.

### 40 — Transition Navigation

Apply Bridges' Transition Model. See `references/frameworks.md`.

- **Endings**: What are you letting go of? What hasn't been grieved?
- **Neutral Zone**: What feels uncertain or in-between? Are you trying to
  rush through it?
- **New Beginnings**: What's starting to emerge?

**Saturation**: clear location in the arc, and what needs attention next.

### 50 — Meaning-Action Experiments

Design small experiments aligned with Module 30 values:
- Low-risk, time-bound (1-2 weeks), observable
- "What's the smallest thing you could do this week that would feel like
  movement in the right direction?"
- Treat as experiments, not commitments — learning is the goal
- What would need to be declined in order to say yes to this?

**Saturation**: 2-4 concrete experiments with clear "what I'll notice"
criteria.

**On completion**: write each experiment to `state.json.commitmentLog` as
`pending` so the next session's Commitment Review actually checks on it —
v1 designed these as experiments but never structurally followed up.

### 90 — Synthesis

Before writing, run the Pre-Synthesis Quality Gate (core protocol) plus:
- Did I generate synthetic meaning or toxic positivity? If yes, discard.
- Did I use Socratic dialogue to let the user excavate their own values?
- Did I check on prior experiments before starting new ones?

Compile: life audit snapshot, dominant narrative and alternatives, core
values with conflicts, position in the transition arc, active experiments
and what they're testing (plus results if this is a repeat synthesis),
open questions (and that it's fine for some to stay open).

## Anti-Patterns

- Forcing optimism — some life phases need grief, not reframing
- Treating uncertainty as a problem — the Neutral Zone is productive
- Values work as a checklist — real values emerge through stories
- Rushing to "what's next" before understanding "what is"
- Comparing to external timelines
- Confusing meaning with productivity — meaning can come from rest, play,
  relationship
