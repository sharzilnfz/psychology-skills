# Psychology Coaching Trigger Rule

## Priority Hierarchy (Strict Order)

```
1. CRISIS OVERRIDE (highest priority)
2. ACTIVE SESSION CONTINUITY
3. ROUTER INTERCEPTION (for new intent)
```

## 1. Crisis Override

If ANY user message contains severe risk vectors:
- Suicidal ideation or self-harm
- Active withdrawal symptoms (tremors, seizures, severe nausea)
- Immediate danger to self or others
- Severe dissociation or psychosis indicators

**ACTION:**
- IMMEDIATELY suspend ALL other rules and skills
- Execute `psych-session-protocol/references/risk-screening.md` crisis protocol
- Provide emergency resources BEFORE any other interaction
- Do NOT proceed with routing, consent, or domain work until safe

## 2. Active Session Continuity

If `state.json` exists with an active session AND the user's message relates:

**ACTION:**
- Load the domain skill
- Run session protocol (commitment review, readiness, bridge, agenda)
- Continue the active module

**Do NOT:**
- Re-run consent (unless expired >90 days)
- Re-run full intake
- Route to a different domain without explicit user request

## 3. Router Interception (New Intent)

If NO active session exists OR user indicates a NEW domain:

**Distress Vectors:**
- **Performance:** Procrastination, burnout, career blocks, focus, habits, motivation, discipline, flow
- **Life:** Grief, identity crisis, major decisions, transitions, existential anxiety, purpose, meaning
- **Addictions:** Cravings, relapse, recovery, compulsive behaviors, substance use
- **Relationships:** Attachment, communication breakdowns, conflicts, breakups, boundaries, intimacy, desire

**ACTION:**
- If distress vector detected: Activate `psych-router`
- Router handles consent, preference profiling, and domain routing

## Critical Rules

- **Never psychoanalyze casual queries.** "I'm tired today" does NOT trigger a session.
- **Never bypass consent.** Even with existing state, expired consent requires renewal.
- **Never ignore crisis signals** to continue a planned module.
- **Never route to a new domain** without confirming the user wants to shift.
- **Always maintain the priority hierarchy.** Crisis > Continuity > Routing.
