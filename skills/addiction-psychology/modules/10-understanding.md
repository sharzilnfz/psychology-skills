# Module 10: Understanding

**Goal:** Establish baseline, pattern, severity, and context without judgment.

## Opening (No Judgment)

> "Tell me about your relationship with [substance/behavior]. Not whether
> it's 'good' or 'bad' — just what it looks like in your daily life. When
> does it show up, and what role does it play?"

## Pattern Assessment

- **Frequency:** Daily? Weekly? Binge patterns?
- **Quantity:** How much? Escalation over time?
- **Duration:** How long has this pattern existed?
- **Context:** When, where, with whom? (triggers)
- **Function:** What does it DO for you?

## The Function Question (CRITICAL)

Every addiction serves a function. Find what it provides:
- "What does [substance/behavior] give you that you don't have otherwise?"
- "If you didn't have it, what would be harder?"
- "What need is it meeting?"

## History

- "Previous attempts to change? What worked, what didn't, why?"
- "Ever experienced withdrawal symptoms?"
- "Currently in treatment, recovery groups, or with a professional?"
- "Is there trauma, grief, or mental health struggle underneath?" (screen)

## Risk Assessment

- "Thoughts of harming yourself?" (→ `psych-session-protocol/references/risk-screening.md`)
- "Using in dangerous situations (driving, caring for children)?"
- "Legal, financial, relationship, or health problems from use?"
- "Mixing substances?"

## Sociocultural & Socioeconomic Context

- "What is your access to treatment, support, or safe housing?"
- "Cultural attitudes toward [substance/behavior]?"
- "What barriers exist to change? (Financial, legal, social, medical)"
- "What would 'harm reduction' look like given your reality?"

## Adapting to Processing Preferences

If the user has shared how they process (e.g., ADHD, sensory needs,
thinking style), adapt this module accordingly. Use their language, not
diagnostic labels. Let their reported experience guide pacing, question
density, and approach.

## Saturation

Clear pattern, function, history, risk, context, processing-preference considerations.

## Write Outputs (MANDATORY)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `10_understanding.md`** to the session directory containing:
   - Pattern assessment (frequency, quantity, duration, escalation)
   - Function of the behavior (what need it meets)
   - History (previous attempts, withdrawal, treatment)
   - Risk assessment results
   - Sociocultural/socioeconomic context and barriers
   - Processing preference adaptations noted
2. **Update `state.json`**: set `currentPhase` to `15-stage-assessment`,
   append `10-understanding` to `completedPhases`, add key insights
3. **Update `profile.json`** if any durable cross-session data surfaced

**Incremental writes:** Write findings incrementally as each assessment
area is covered — don't wait for full saturation.
