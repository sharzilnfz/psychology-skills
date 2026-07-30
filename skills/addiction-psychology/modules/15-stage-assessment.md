# Module 15: Stage Assessment

**Goal:** Classify readiness for change using Prochaska & DiClemente.

## The Five Stages

| Stage | Mindset | Criteria |
|-------|---------|----------|
| **Precontemplation** | "I don't have a problem" | No intention to change within 6 months; defensive; focuses on benefits |
| **Contemplation** | "Maybe I should change" | Intending within 6 months; aware of costs; ambivalent |
| **Preparation** | "How do I start?" | Intending within 30 days; has taken small steps |
| **Action** | "I'm doing it" | Actively modifying behavior; significant effort |
| **Maintenance** | "How do I keep it?" | Sustained change >6 months; less intensive |
| **Relapse** | "I slipped" | Return to old behavior; may feel shame, defeat |

## Assessment Questions

- "On a scale of 1-10, how important is changing this to you?"
- "On a scale of 1-10, how confident are you that you could change?"
- "Have you thought about changing in the last month?"
- "Have you taken any steps toward change in the last month?"
- "If you never changed, what would your life look like in 5 years?"

## Save to State

Set `state.json.stageOfChange` — this determines which module the user enters.

## CRITICAL: Stage-Matched Routing

| Stage | Route To | Key Principle |
|-------|----------|--------------|
| Precontemplation | `25-consciousness-raising` | Do NOT push "quit" language |
| Contemplation | `30-values-discrepancy` | Explore ambivalence |
| Preparation | `40-coping-toolkit` | Build plan + start date |
| Action | `50-relapse-plan` | Support + troubleshoot |
| Maintenance | `80-maintenance` | Strengthen + watch complacency |
| Relapse | `55-lapse-response` | Shame interruption + data |

## Saturation

Stage classified with evidence. Routing determined.
