# Psychology Coaching Trigger Rule v2.0

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
- Activate `psych-core` Phase 0 crisis protocol
- Provide emergency resources BEFORE any other interaction
- Do NOT proceed with routing, consent, or domain work until safety is established

## 2. Active Session Continuity

If `state.json` exists with an active domain session (`active: true`) AND the user's message is related to that domain:

**ACTION:**
- Load the domain skill
- Run the session protocol (mood check, bridge, agenda)
- Continue the active module

**Do NOT:**
- Re-run consent (unless expired >90 days)
- Re-run full intake
- Route to a different domain without explicit user request

## 3. Router Interception (New Intent)

If NO active session exists OR user message indicates a NEW domain:

**Distress Vectors to Monitor:**
- **Performance:** Procrastination, burnout, career blocks, stagnation, lack of focus, habits, motivation, discipline, flow
- **Life:** Grief, identity crisis, major decisions, transitions, existential anxiety, purpose, meaning
- **Addictions:** Cravings, relapse, recovery, compulsive behaviors (gaming, social media, substance use, porn, gambling)
- **Relationships:** Attachment patterns, communication breakdowns, conflicts, breakups, boundaries, intimacy, desire, trust

**ACTION:**
- If distress vector detected: Activate `psych-router-v2`
- The router will handle consent, preference profiling, and domain routing
- Do NOT begin intake, profiling, or assessment without explicit user consent

## Critical Rules

- **Never psychoanalyze casual queries.** A user saying "I'm tired today" does NOT trigger a full session.
- **Never bypass consent.** Even if state exists, expired consent requires renewal.
- **Never ignore crisis signals** to continue with a planned module.
- **Never route to a new domain** without confirming the user wants to shift focus.
- **Always maintain the priority hierarchy.** Crisis > Continuity > Routing.
