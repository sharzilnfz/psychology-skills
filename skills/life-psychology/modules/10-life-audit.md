# Module 10: Life Audit

**Goal:** Establish baseline, severity, history, and context.

## Presenting Problem

- "What brought you here? Not the whole story — the moment or feeling
  that made you reach out."
- "If you could change one thing about your life — not fix a problem, but
  genuinely change the direction — what would it be?"
- "What's stopping that from happening?"

## History

- "How long have you felt this way? What major changes preceded this?"
- "When was the last time you felt like yourself? What was different?"
- "What have you tried? What helped? What made things worse?"
- "Are you in therapy, on medication, or with other professionals?"
- "Have you experienced significant loss, trauma, or disruption?" (trauma screen)

## Risk Assessment

See `psych-session-protocol/references/risk-screening.md` for protocol.

## Sociocultural Context

- "What cultural, religious, or systemic expectations are you wrestling with?"
- "What constraints do you face — financial, familial, health, caregiving?"
- "What would your family expect you to do? How does that align with YOU?"

## Severity Triage

- **Low:** Mild dissatisfaction, curiosity, proactive exploration
- **Moderate:** Noticeable distress, some impairment, recurring questions
- **High:** Significant impairment, identity collapse, grief complications
- **Crisis:** Suicidal ideation, psychosis → risk-screening protocol + referral

## Saturation

Clear current reality, history, risk, context, severity.

## Write Outputs (MANDATORY)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `10_life-audit.md`** to the session directory containing:
   - Presenting problem and the moment that prompted reaching out
   - History and major life changes
   - Risk assessment results
   - Sociocultural context and constraints
   - Severity triage level
2. **Update `state.json`**: set `currentPhase` to `20-narrative-map`,
   append `10-life-audit` to `completedPhases`, add key insights
3. **Update `profile.json`** if any durable cross-session data surfaced

**Incremental writes:** Write findings as each area is explored.
