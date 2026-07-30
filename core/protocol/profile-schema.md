# Person Profile Schema (`profile.json`)

The single durable model of this person, shared across every niche. **v1 had
no equivalent** — each niche rebuilt values, patterns, and context from zero.
That cost the user time re-explaining themselves, and it produced four
partial, occasionally inconsistent pictures of one person instead of one
increasingly accurate one. This file is the fix, and it's the piece that
makes "accurate understanding" compound across sessions instead of resetting
every time.

## Schema

```json
{
  "createdAt": "{ISO-8601}",
  "lastUpdated": "{ISO-8601}",
  "consentGiven": true,
  "communicationStyle": {
    "mode": "reflective|balanced|direct",
    "setBy": "user|inferred",
    "lastCalibrated": "{ISO-8601}"
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
    "context": "e.g. primarily in romantic relationships, or also seen at work",
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
    {"niche": "performance", "stateFile": "state.performance.json"},
    {"niche": "relationship", "stateFile": "state.relationship.json"}
  ],
  "closedSessions": [
    {
      "niche": "life",
      "completedAt": "{date}",
      "synthesisFile": "skills/life-psychology/90_SYNTHESIS.md"
    }
  ],
  "riskFlags": {"currentRiskLevel": 0, "lastScreened": null}
}
```

## Update Rules

- Any niche can append to `coreValues`, `recurringPatterns`, or `strengths` —
  always with `evidence` and `sourceNiche`. Never invent an entry to fill out
  the profile; an empty field is more accurate than a fabricated one.
- A pattern only earns `confidence: "established"` after showing up in **two
  independent sessions or two different niches**. One vivid session is an
  observation, not yet a pattern — don't let it harden into a label
  prematurely.
- Never surface a cross-niche connection as settled fact to the user. Frame
  it as a checkable question: "This sounds like the same withdrawal pattern
  that came up in your relationship work — same thing, or different here?"
  The user confirms or corrects it; the model doesn't declare it.
- `riskFlags` is written **only** by `core/protocol/risk-screening.md` —
  never inferred casually by a niche skill mid-conversation.
- `communicationStyle.mode` starts as `reflective` and `setBy: "inferred"`
  until the user is explicitly asked (see `core/protocol/SKILL.md`, OARS +
  Directness Calibration). Once asked, `setBy` becomes `"user"`.
