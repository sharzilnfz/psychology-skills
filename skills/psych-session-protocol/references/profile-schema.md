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
