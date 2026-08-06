# Module 50: Relapse Prevention Plan

**Goal:** Design a concrete, living prevention plan (Marlatt's model + DBT + CFT).

## High-Risk Situation Categories

| Category | Examples | Your Specifics |
|----------|---------|---------------|
| Negative emotions | Anger, anxiety, depression, boredom, loneliness | |
| Social pressure | Being around users, celebrations | |
| Interpersonal conflict | Arguments, rejection, criticism | |
| Positive emotions | "I can handle it now" | |
| Testing control | "Let me see if I can have just one" | |
| Urges/cravings | Physical or psychological pulls | |

## Lapse vs. Relapse

- **Lapse (slip):** Single instance. Data, not moral failure. Recovery continues.
- **Relapse:** Sustained return. Pattern re-establishment.
- **Key:** The Abstinence Violation Effect (AVE) — "I already slipped, so I
  might as well go all in." This thought converts lapses into relapses. Name it.

## Emergency Protocol

```
IF I lapse, I will:
1. STOP — one is not the same as ten
2. NOTICE — "The AVE is talking. This is a lapse, not a relapse."
3. COMPASSION — "I am not a failure. This is data." (CFT)
4. CALL — [specific person] at [specific number]
5. LEAVE — remove myself physically
6. GROUND — 5-4-3-2-1 or temperature shift
7. REVIEW — what triggered this? Update my plan.
8. RESTART — tomorrow is not "Day 1 again." It's the next iteration.
```

## Warning Signs

- "What are your early warning signs of heading toward a lapse?"
- "What happens in your body first?"
- "What thoughts show up before the behavior?"
- "What emotions precede the craving?"

## Support Network

- "Who is on your team? What is each person's role?"
- "When do you call them?"
- "What do you do if no one is available?"

## If a Lapse Happens

**Shame interruption first:**
- "A lapse is not a moral failure. It is data about what needs more support."
- "The fact that you're here talking about it means recovery is still active."
- "What would you say to a friend who just told you they lapsed?"

**Then data gathering (no judgment):**
- "Walk me through what happened. Trigger → thought → craving → behavior → consequence."
- "What permission-giving thought showed up?"
- "At what point could you have done something different?"
- "What coping strategy did you try? What got in the way?"

**Then plan revision:**
- "What does this lapse tell us about your plan?"
- "What needs to be strengthened?"
- Update `stageOfChange` — a lapse does NOT mean returning to precontemplation.

## Saturation

Written prevention plan with 3+ high-risk scenarios + emergency protocol +
warning signs + support network + lapse response protocol.

## Write Outputs (MANDATORY — SAFETY-CRITICAL)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `50_relapse-plan.md`** to the session directory containing:
   - High-risk situation analysis (3+ scenarios)
   - Lapse vs. relapse distinction (personalized)
   - Emergency protocol (the IF-THEN steps, personalized)
   - Warning signs identified
   - Support network with specific roles and contact info
   - Lapse response protocol
2. **Update `state.json`**: set `currentPhase` to `80-maintenance`,
   append `50-relapse-plan` to `completedPhases`
3. **Update `state.json.commitmentLog`**: Add any specific commitments
4. **Update `profile.json`** with patterns and strengths observed

**This is a safety-critical document.** The relapse prevention plan must
be written to disk immediately — it may be the document the user reaches
for in a crisis moment. Do not defer.
