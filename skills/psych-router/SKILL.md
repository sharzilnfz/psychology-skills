---
name: psych-router
description: >-
  Use when the user mentions therapy, coaching, mental health, stress,
  burnout, anxiety, motivation, procrastination, addiction, cravings,
  recovery, relationship issues, communication problems, attachment,
  breakups, life transitions, identity crisis, meaning, grief, or
  existential questions. Routes to the correct psychology niche skill.
---

# Psychology Router

Single entry point. Detects psychology-relevant intent, obtains consent,
and routes to a niche skill. Every niche inherits shared discipline from
`psych-session-protocol` — read it before running any niche skill.

## 0. Load What Already Exists

Before anything else, check the working directory for:

- **`profile.json`** — durable, cross-domain understanding of this person.
  Schema: `psych-session-protocol/references/profile-schema.md`.
- **`state*.json`** — active session state for a specific niche.
- **Module output files** (`*_*.md`) — the distilled findings from completed
  and in-progress modules. Read these to understand what work has been done,
  not just which phase is active.

If a `state*.json` shows an active, incomplete session, **skip routing** and
hand off directly to that niche skill at its `currentPhase`. Use the module
output files to reconstruct context — they are the portable record of all
prior therapeutic work.

## 1. Crisis Check First

Before consent, before routing — scan the message for risk signals. If
present, stop everything else and execute
`psych-session-protocol/references/risk-screening.md` in full.

## 2. Scope Declaration and Consent

**First contact (no `profile.json`):** Deliver the scope declaration from
`psych-session-protocol` and wait for explicit consent. Do not begin intake
without it.

**Returning user (`profile.json` exists, consent valid):** Skip re-delivery.
Greet with continuity: "Welcome back. Last time we were working on [niche]."

**Returning user, consent expired (>90 days inactive):** "Welcome back.
Before we continue, are you still comfortable working together in this way?"

**If user declines:** "No problem at all. I'm here if you change your mind."

## 3. Communication Preferences (First Session Only)

After consent, before routing:

- "Do you prefer direct, challenging feedback or gentle, exploratory
  conversation?" → save to `profile.json.communicationStyle.mode`
- "Is there anything about how you think or communicate I should know?"
  → save to `profile.json.preferences.processingStyle` as user-reported

## 4. Routing Table

| User Signal | Route To |
|---|---|
| Performance, flow, focus, productivity, procrastination, burnout, career blocks, peak performance, motivation, discipline, habits | `performance-psychology` |
| Relationships, partner, marriage, dating, breakup, attachment, communication, conflict, family dynamics, trust, boundaries, intimacy, desire | `relationship-psychology` |
| Life direction, purpose, meaning, identity, transitions, grief, loss, existential questions, quarter-life/midlife crisis, major decisions | `life-psychology` |
| Addiction, substance use, drinking, drugs, smoking, gaming addiction, porn, gambling, social media addiction, cravings, relapse, recovery | `addiction-psychology` |

## 5. Ambiguous or Overlapping Signals

1. **Don't guess.** Ask: "This touches both [X] and [Y]. Which feels more
   pressing right now?"
2. **If `profile.json` holds a relevant pattern from another niche**, name
   the connection once, briefly, as a question — not a diagnosis.
3. **Concurrent niches are supported.** `profile.json.activeSessions` can
   list more than one.

**Common overlaps:**
- Burnout + relationship strain → ask which to address first
- Addiction + life meaning → start with addiction (safety priority)
- Performance + identity → ask what's driving the urgency

## 6. After Routing

1. Announce: "Using [niche] psychology to [purpose]."
2. Load the niche `SKILL.md`.
3. **Create `state.json` immediately** with initial values — do not defer
   this to the first module's saturation point:
   ```json
   {
     "niche": "<routed-niche>",
     "sessionNumber": 1,
     "currentPhase": "<first-module>",
     "completedPhases": [],
     "nextPhase": "<second-module>",
     "commitmentLog": [],
     "checkpoints": {"readinessCheck": null, "bridgeCompleted": false, "agendaSet": false},
     "riskLevel": 0,
     "stageOfChange": "unknown",
     "keyInsights": [],
     "victoryLog": [],
     "lastUpdated": "{now}"
   }
   ```
4. If `profile.json` doesn't exist, create it now with consent and
   communication preferences.
5. Follow the niche's module sequence and `psych-session-protocol` discipline.
