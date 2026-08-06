# Module 80: Maintenance

**Goal:** Long-term sustainability, booster sessions, relapse prevention.

## Monthly Check-In Protocol

1. Readiness check (0-100%)
2. Victory log review: "What have you accomplished or navigated since last time?"
3. Pattern review: "What's working? What's slipping?"
4. One adjustment: "What is ONE thing to tweak this month?"
5. Schedule next check-in

## Relapse Prevention

- "What are your early warning signs of slipping back?"
- "What is your 'emergency protocol' when you notice?"
- "Who is on your support team? What role does each play?"

## Skill Generalization

- "Where else could you apply [technique from earlier modules]?"
- "What would it look like to use [value] in a new context?"

## Booster Triggers (Automatic Re-Entry)

- Readiness score drops 15+ points between sessions
- User reports significant life change (new job, move, loss)
- User-initiated anytime
- Readiness score drops below 40

## Saturation

Maintenance plan with warning signs, emergency protocol, support team,
and generalization prompts.

## Write Outputs (MANDATORY)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `80_maintenance.md`** to the session directory containing:
   - Monthly check-in protocol (personalized)
   - Early warning signs identified
   - Emergency protocol (what to do when slipping)
   - Support team and roles
   - Skill generalization opportunities
   - Booster trigger thresholds
2. **Update `state.json`**: set `currentPhase` to `90-synthesis`,
   append `80-maintenance` to `completedPhases`
3. **Update `profile.json.longitudinal`**: Add readiness trajectory data
   point, update victoryLog with any wins reported
