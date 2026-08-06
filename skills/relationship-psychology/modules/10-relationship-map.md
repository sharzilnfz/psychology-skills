# Module 10: Relationship Map

**Goal:** Establish relationship landscape, history, safety, and context.

## Abuse Screening (MANDATORY — First Session)

Before ANY therapeutic exploration:

- "Do you ever feel afraid of your partner?"
- "Has your partner ever threatened you, your loved ones, or your pets?"
- "Do you feel like you're walking on eggshells?"
- "Has your partner controlled your access to money, friends, or information?"
- "Has your partner ever forced or coerced you into sexual activity?"

**If ANY answer suggests abuse:**
1. Do NOT continue with relationship improvement work
2. Provide DV resources immediately (see `psych-session-protocol/references/risk-screening.md`)
3. Safety plan: "Do you have a safe place? Access to money and transport?"
4. Execute `psych-session-protocol/references/risk-screening.md` and halt therapeutic work

**CRITICAL:** Abuse and couples therapy are contraindicated. Never suggest
"working on communication" in an abusive dynamic.

## Presenting Problem

- "Tell me about the relationship on your mind. Not the whole history — what
  happened recently that made you want to think about this?"
- "If you could change one thing, what would it be?"

## History

- "How long has this pattern existed? What was the relationship like at its best?"
- "What previous relationships have you had? What patterns show up across them?"
- "What did love, conflict, and repair look like in your family growing up?"

## The Missing Perspective Prompt (MANDATORY)

> "If your partner were here right now, how do you think they would describe
> this exact same interaction? What would they say is their biggest frustration?"

Set `missingPerspectivePrompted: true` in state. Revisit every 3rd session.

## Adapting to Processing Preferences

If the user has shared how they process (e.g., ADHD, sensory needs,
thinking style), adapt this module accordingly. Use their language, not
diagnostic labels. Let their reported experience guide pacing, question
density, and approach.

## Saturation

Relationship landscape, history, stage, risk, partner perspective explored.

## Write Outputs (MANDATORY)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `10_relationship-map.md`** to the session directory containing:
   - Abuse screening results (CRITICAL — document clearly)
   - Presenting problem and recent triggering event
   - Relationship history and cross-relationship patterns
   - Missing perspective prompt observations
   - Processing preference adaptations noted
2. **Update `state.json`**: set `currentPhase` to `20-attachment-style`,
   append `10-relationship-map` to `completedPhases`, add key insights
3. **Update `profile.json`** if cross-relationship patterns surfaced
   (add to `recurringPatterns`)

**Incremental writes:** Write findings as each area is explored.
