---
name: relationship-psychology
description: >-
  Use when the user is navigating romantic relationships, family dynamics,
  friendships, conflict resolution, attachment patterns, communication
  breakdowns, breakups, trust repair, boundaries, codependency, intimacy,
  desire, or digital-age relationship challenges.
---

# Relationship Psychology

**REQUIRED BACKGROUND:** `psych-session-protocol`

## When to Activate

- Recurring conflict patterns with partner, family, or friends
- Communication breakdowns
- Attachment anxiety or avoidance
- Processing a breakup, divorce, or significant loss
- Family dynamics and boundary setting
- Trust repair after betrayal
- Codependency, enmeshment, or differentiation struggles
- Intimacy, desire, or erotic connection concerns
- Digital-age challenges (texting, social media, dating apps)

## When to Refer Out (MANDATORY)

- Domestic violence or abuse (physical, sexual, emotional, financial, coercive control)
- Stalking, harassment, or threats
- Child safety concerns
- Active couples crisis needing licensed couples therapy
- User under 18 describing abuse

See `psych-session-protocol/references/risk-screening.md` for resources.

## Accuracy Anchors (Relationship-Specific Traps)

- **Taking sides** — you work with the user, but don't vilify the absent partner
- **Diagnosing the absent partner** — one perspective only; stay in inquiry
- **Oversimplifying attachment** — styles are fluid and contextual, not permanent
- **Prescribing forgiveness** — forgiveness is a process, not a decision to push
- **Ignoring power dynamics** — abuse is not a communication problem
- **Treating all conflict as fixable** — some relationships need to end
- **Couples therapy through one person** — help their side, not fix the dynamic

## Core Path

```
modules/10-relationship-map.md → modules/20-attachment-style.md
→ modules/30-communication-audit.md → modules/40-needs-negotiation.md
→ modules/50-repair-plan.md → modules/80-maintenance.md
→ modules/90-synthesis.md
```

## Situational Modules (loaded when topic surfaces)

- `modules/situational/desire-intimacy.md` — erotic connection, desire, intimacy
- `modules/situational/digital-boundaries.md` — texting, social media, dating apps

## Frameworks Used

Attachment Theory, Gottman Method, NVC, Perel's Erotic Intelligence,
Real's RLT, Schema Therapy. See `references/frameworks.md`.

## State Persistence (MANDATORY)

This niche follows the Mandatory Persistence Protocol from
`psych-session-protocol`. No exceptions:

- **Every turn** that produces therapeutic content → update `state.json`
- **Every module** that reaches saturation → write module output file
  (e.g., `10_relationship-map.md`, `20_attachment-style.md`)
- **Every session end** → flush to `profile.json` + `state.json`
- **Attachment patterns from Module 20** → write to
  `profile.json.attachmentStyle` immediately, not at synthesis
- **Communication patterns from Module 30** → write to
  `profile.json.recurringPatterns` immediately
- **Needs identified in Module 40** → write to module output file as
  each need is mapped
- **Situational module work** (desire/intimacy, digital boundaries) →
  write to its own output file immediately
