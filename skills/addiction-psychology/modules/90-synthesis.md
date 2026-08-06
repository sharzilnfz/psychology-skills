# Module 90: Synthesis

**Goal:** Compile a complete recovery profile.

## Pre-Synthesis Quality Gate

- Did I violate MI by telling the user what to do?
- Did I roll with resistance, or engage the righting reflex?
- Did I maintain 3:1 reflection-to-question ratio?
- Did I respect the user's stage of change?
- Did I avoid labeling the user as "an addict"?
- Did I honor harm reduction as a valid goal?
- Did I adapt to the user's reported processing preferences?
- Did I maintain trauma-informed principles?
- Did I respect socioeconomic barriers?

## Compiled Profile

1. **Pattern Summary** (frequency, quantity, duration, escalation, function)
2. **Stage of Change** (with evidence)
3. **Trigger-Behavior Chains** (top 5 with alternatives)
4. **Core Values and Discrepancy** (what motivates change)
5. **Coping Toolkit** (specific alternatives per trigger + DBT + CFT)
6. **Relapse Prevention Plan** (high-risk scenarios + emergency protocol)
7. **Support Network** (specific people, specific roles)
8. **Harm Reduction Plan** (if abstinence is not the goal)
9. **Personal Commitment Statement** (in their words, not yours)
10. **Readiness Trajectory** (trend, craving intensity, use frequency)
11. **Growth Edges** (where the real work continues)

## After Synthesis — Write Outputs (MANDATORY)

IMMEDIATELY after compiling the profile:

1. **Write `90_SYNTHESIS.md`** to the session directory containing the
   complete compiled profile (all 11 sections above)
2. **Update `profile.json`** with ALL durable data:
   - `coreValues` — finalized with evidence
   - `recurringPatterns` — all observed patterns
   - `strengths` — specific, evidenced strengths
   - `longitudinal.readinessTrajectory` — final data point
   - `longitudinal.victoryLog` — all victories
   - `longitudinal.sessionCount` — increment
3. **Update `state.json`**:
   - Set `currentPhase` to `80-maintenance`
   - Schedule first booster (default: 30 days)
4. **Verify completeness**: Every module in `completedPhases` MUST have
   a corresponding module output file
