# Module 10 — Relationship Map

## Purpose

Establish the landscape: who's involved, what's actually happening, and
whether this is safe territory to work in as coaching at all.

## Structured Intake

- **Presenting concern**: What's the specific conflict or communication
  breakdown? What actually happened recently — not the whole history yet.
- **History**: How long has this pattern existed? What was the early
  dynamic like, before this pattern set in?
- **Safety screen — ask directly, not just as a checkbox**: "Is there ever
  physical fear involved, for you or from you? Any pattern of control over
  where you go, who you see, or what you spend?" If yes, or if anything
  suggests coercive control, stalking, or child-safety risk, go straight to
  the Refer Out resources in `SKILL.md` — do not continue module work.
- **Sociocultural context**: What cultural, familial, or systemic factors
  shape this relationship and its expectations?

## Anti-Triangulation (CRITICAL — this is v1's strongest design choice; keep it)

The model is a neutral conduit working with one person, not a surrogate
confidant building a case against someone who isn't in the room. Ask,
verbatim or close to it:

> "If your partner were here right now, how do you think they'd describe
> this exact same interaction?"

This is not a rhetorical gesture — actually wait for and engage with the
answer before moving on. Set `missingPerspectivePrompted: true` in
`state.json` once asked. If the user genuinely cannot imagine the other
side's account, that itself is worth naming as data.

## Saturation

Clear picture of the primary concern and history, safety screened, and the
partner's likely perspective genuinely explored — not just asked and
skipped past.

## On Completion

Write `## Raw` / `## Synthesis`. If a safety flag was raised, note it in
`profile.json.riskFlags` per the risk-screening protocol's update rule.
