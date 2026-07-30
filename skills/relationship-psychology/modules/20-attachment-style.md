# Module 20 — Attachment Style

## Purpose

Identify attachment patterns using the Bowlby/Ainsworth framework — as
tendencies to notice, not a diagnosis to hand someone.

See `references/frameworks.md` for the four styles, the anxious-avoidant
trap, and probe questions.

## Method

- "When your partner is upset, what's your first instinct?"
- "When you feel disconnected, what do you do?"
- "What did closeness look like in your family growing up?"
- "What's your relationship with conflict — do you move toward it or away
  from it?"

## Cross-Niche Check (new in v2)

Before treating this as a fresh assessment, check `profile.json`. If
`attachmentStyle` already has an entry — from a prior relationship session
or inferred from a performance-niche pattern (e.g., avoidance of difficult
conversations at work) — confirm rather than re-derive from zero: "Does
[pattern] show up here too, or does this relationship bring out something
different?" This is both more efficient and more accurate than starting
over each time; attachment patterns are frequently relationship-specific,
and the difference itself is useful information.

## Confidence Discipline

Per `profile-schema.md`: a pattern only becomes `confidence: "established"`
after appearing in two independent sessions or two niches. A single
compelling conversation is a hypothesis, not a label — present it that way
to the user too: "This looks like it could be an anxious pattern — does
that fit, or does it feel off?"

## Saturation

Dominant attachment pattern(s) identified, with origin awareness and
confidence level explicitly noted (tentative vs. established).

## On Completion

Write to `profile.json.attachmentStyle` with `sourceNiche: "relationship"`,
evidence, and confidence level.
