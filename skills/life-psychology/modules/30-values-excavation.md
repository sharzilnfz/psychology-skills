# Module 30: Values Excavation

**Goal:** Deep values work with anti-toxic-positivity guardrails.

**CRITICAL:** Do NOT generate arbitrary "meanings" for suffering. Meaning must
be excavated by the user, not algorithmically supplied.

## Socratic Values Laddering

- "What actually pulls you forward — not what should matter, but what does?"
- "Tell me about a time you felt fully alive. What were you doing?"
- "If you had one year left, what would you stop? What would you start?"
- "What would you do if money, status, and opinions didn't matter?"

## PERMA Audit (Seligman)

| Pillar | Question | Current (1-10) | Ideal (1-10) |
|--------|----------|----------------|--------------|
| **P**ositive Emotion | "When did you last feel genuinely good?" | | |
| **E**ngagement | "What makes time disappear?" | | |
| **R**elationships | "Who do you feel most yourself around?" | | |
| **M**eaning | "What contribution matters — even if unnoticed?" | | |
| **A**chievement | "What are you genuinely proud of recently?" | | |

## Inherited vs. Chosen Values

- "Which values came from family, culture, or religion?"
- "Which did you actively choose?"
- "Where do inherited and chosen values conflict?"

## CFT Values Note

- "When you think about what matters, is there a harsh inner voice judging
  whether you're living up to it?"
- "What would your compassionate self say about the gap?"

## Saturation

3-5 core values with examples + named conflicts + PERMA gap analysis.
Save to `profile.json.coreValues` with `sourceNiche: "life"`.

## Write Outputs (MANDATORY)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `30_values-excavation.md`** to the session directory containing:
   - 3-5 core values with evidence from stories
   - PERMA audit scores and gaps
   - Inherited vs. chosen values analysis
   - Value conflicts identified
   - CFT observations on inner critic
2. **Update `profile.json.coreValues`**: Add each value with evidence,
   `sourceNiche: "life"`, and confidence level
3. **Update `state.json`**: set `currentPhase` to `40-transition-navigation`,
   append `30-values-excavation` to `completedPhases`

**Incremental writes:** Write values to `profile.json` as they are
excavated — don't batch them to saturation.
