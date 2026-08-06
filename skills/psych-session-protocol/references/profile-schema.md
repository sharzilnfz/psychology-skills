# Person Profile Schema (`profile.json`)

The single durable model of this person, shared across every niche.
Each niche rebuilds from zero without this — `profile.json` makes
understanding compound across sessions instead of resetting.

## Schema

```json
{
  "createdAt": "{ISO-8601}",
  "lastUpdated": "{ISO-8601}",
  "consent": {
    "grantedAt": "{ISO-8601}",
    "renewalDue": "{ISO-8601}",
    "crisisAcknowledged": true
  },
  "communicationStyle": {
    "mode": "reflective|balanced|direct",
    "setBy": "user|inferred",
    "lastCalibrated": "{ISO-8601}"
  },
  "preferences": {
    "pace": "deep|brief|adaptive",
    "processingStyle": "user-reported string or null",
    "questionDensity": "fewer|standard|rapid",
    "culturalContext": "user-reported string or null",
    "spiritualFramework": "string|null"
  },
  "coreValues": [
    {
      "value": "autonomy",
      "evidence": "specific thing they said or did",
      "sourceNiche": "performance",
      "confidence": "tentative|established"
    }
  ],
  "attachmentStyle": {
    "pattern": "secure|anxious|avoidant|fearful-avoidant|mixed|unassessed",
    "context": "e.g. primarily in romantic relationships",
    "confidence": "tentative|established",
    "sourceNiche": "relationship"
  },
  "recurringPatterns": [
    {
      "pattern": "avoids direct conflict, then resents",
      "seenIn": ["relationship", "performance"],
      "firstNoted": "{date}"
    }
  ],
  "strengths": ["specific, evidenced — not generic praise"],
  "activeSessions": [
    {"niche": "performance", "stateFile": "state.performance.json"}
  ],
  "closedSessions": [
    {
      "niche": "life",
      "completedAt": "{date}",
      "synthesisFile": "skills/life-psychology/90_SYNTHESIS.md"
    }
  ],
  "riskFlags": {"currentRiskLevel": 0, "lastScreened": null},
  "longitudinal": {
    "readinessTrajectory": [{"date": "{ISO-8601}", "score": 75}],
    "sessionCount": 0,
    "victoryLog": [],
    "patternInsights": []
  }
}
```

## Update Rules

- Any niche can append to `coreValues`, `recurringPatterns`, or `strengths`
  — always with `evidence` and `sourceNiche`. Never fabricate an entry.
- A pattern only earns `confidence: "established"` after showing up in
  **two independent sessions or two different niches**.
- Never surface a cross-niche connection as settled fact. Frame it as a
  checkable question.
- `riskFlags` is written **only** by the risk-screening protocol.
- `communicationStyle.mode` starts as `reflective` and `setBy: "inferred"`
  until the user is explicitly asked.
- `consent.renewalDue` is 90 days from `consent.grantedAt`. If expired,
  re-confirm before continuing.
- `preferences` fields are **user-reported only**. The model does not
  diagnose or infer neurodivergence, cultural orientation, or processing
  style — the user tells you, and you record what they say.

## Write Cadence

`profile.json` is the single durable model of the person. It must be
written proactively — not deferred to Module 90 synthesis.

- **On first session**: Create immediately after consent and communication
  preferences are established. Do not wait for the first module to complete.
- **Every session end**: Append new values, patterns, strengths, and a
  readiness trajectory data point. This is part of the End-of-Conversation
  Flush (see `psych-session-protocol`).
- **Any time a durable insight surfaces**: When a core value is identified,
  a recurring pattern is observed, or a strength is evidenced — write it
  NOW. Don't accumulate insights in conversation context hoping to batch
  them later.
- **NEVER only at synthesis (Module 90)**: If the user doesn't reach Module
  90 (they often won't in a single session), everything discovered is lost.
  Write incrementally throughout the journey.
- **Cross-niche connections**: When work in one niche reveals something
  relevant to another niche's state, update `profile.json` immediately
  so the connection is captured durably.
