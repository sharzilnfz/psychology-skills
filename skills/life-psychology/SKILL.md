---
name: life-psychology
description: >-
  Use when the user is navigating life transitions, questioning purpose
  or meaning, facing an identity crisis, processing grief or loss,
  making major life decisions, or experiencing existential anxiety about
  direction, legacy, or what matters.
disable-model-invocation: true
---

# Life Psychology

Structured coaching for existential questions, life transitions, identity
crises, meaning-making, grief, and major life decisions.

**REQUIRED BACKGROUND:** `psych-session-protocol` — follow its interview
discipline, crisis detection, and state protocols throughout.

## When to Activate

- Feeling directionless or "stuck in life"
- Quarter-life or midlife crisis patterns
- Major transitions: career change, relocation, divorce, retirement
- Grief, loss, or processing a significant ending
- Identity questions: "Who am I becoming?" / "Is this it?"
- Decision paralysis on life-shaping choices
- Existential anxiety about meaning, mortality, or legacy

## Session Start

1. Check for existing `state.json` with `"niche": "life"`
2. If resuming: report status, ask "Continue here, or switch focus?"
3. If fresh: deliver scope declaration, then ask the opening question:

> "If you could change one thing about your life right now — not fix a
> problem, but genuinely change the direction — what would it be? And
> what's stopping that from happening?"

## Module Sequence

| File | Label | Core Question |
|------|-------|---------------|
| `10_life-audit.md` | Life Audit | How satisfied are you across life domains? |
| `20_narrative-map.md` | Story Mapping | What's the story you're living inside? |
| `30_values-excavation.md` | Values Work | What actually matters — not what should? |
| `40_transition-navigation.md` | Transition Map | Where are you in the change arc? |
| `50_meaning-action.md` | Experiments | What small experiments honor your values? |
| `90_SYNTHESIS.md` | Life Direction | Complete profile + experiments |

Complete modules in order. Honor user requests to jump modules.

## Per-Module Guidance

### 10 — Life Audit

Perform a structured clinical intake to establish a baseline:
- **Presenting Problem**: What is the specific existential or transitional crisis?
- **Mental Health History**: How long have you felt this way? What major changes preceded this?
- **Risk Assessment**: Are there symptoms of severe depression, hopelessness, or passive suicidal ideation?
- **Sociocultural Context**: What cultural, religious, or systemic expectations are you wrestling with?

Map satisfaction across domains. Use a simple 1-10 rating + "tell me more
about that score" for depth.

**Domains to cover:**
- Work / career / vocation
- Relationships (partner, family, friends)
- Health (physical, mental, spiritual)
- Finances / material security
- Fun / play / creativity
- Growth / learning / contribution
- Environment / living situation

Don't rush the scoring — the interesting part is *why* the number is what
it is. Use OARS to explore the underlying need.

**Saturation**: clear picture of where life feels alive and where it feels dead, plus history and context.

### 20 — Narrative Map

Use Narrative Therapy to externalize and examine the dominant life story.
See [frameworks.md](references/frameworks.md) for detailed techniques.

- "If your life were a book, what chapter are you in right now?"
- "What title would you give this chapter?"
- "Is this the story you want to be living, or one that was handed to you?"
- Key turning points: moments that shaped the current narrative
- Unique outcomes: times that contradicted the dominant story

**Saturation**: dominant narrative named + 2-3 alternative story threads.

### 30 — Values Excavation

Deep values work using **Socratic dialogue** and the PERMA framework.
See [frameworks.md](references/frameworks.md) for Seligman's model.

**CRITICAL RULE: NO SYNTHETIC MEANING.**
Do not generate arbitrary "meanings" for the user's suffering. Avoid toxic positivity, platitudes, or reframing their pain as a "gift." Meaning must be excavated by the user, not algorithmically supplied.

- Use Socratic questioning to help the user excavate their own values.
- Not "what should matter" — "what actually pulls you forward"
- Use "peak experience" questions: "Tell me about a time you felt fully alive"
- Distinguish inherited values (family, culture) from chosen values
- Identify values conflicts: when two important things pull opposite ways

**Saturation**: 3-5 core values with concrete examples + named conflicts.

### 40 — Transition Navigation

Apply Bridges' Transition Model to locate the user in the change arc.
See [frameworks.md](references/frameworks.md) for the three-phase model.

- **Endings**: What are you letting go of? What hasn't been grieved?
- **Neutral Zone**: What feels uncertain, chaotic, or in-between?
- **New Beginnings**: What's starting to emerge? What excites you?

**Saturation**: clear location in the arc + what needs attention next.

### 50 — Meaning-Action Experiments

Design small experiments aligned with Module 30 values:

- Low-risk, time-bound (1-2 weeks), observable
- "What's the smallest thing you could do this week that would feel like
  movement in the right direction?"
- Treat as experiments, not commitments — learning is the goal
- What would you need to say no to in order to say yes to this?

**Saturation**: 2-4 concrete experiments with clear "what I'll notice" criteria.

### 90 — Synthesis

Before writing, run the **Pre-Synthesis Quality Gate** (hidden reasoning loop):
- *Did I generate synthetic meaning or toxic positivity? If yes, discard.*
- *Did I use Socratic dialogue to let the user excavate their own values?*
- *Did I ensure all CBT session checkpoints (mood, bridge, agenda) were met?*

Compile into a life direction profile:
- Life audit snapshot (domain scores + key insights)
- Dominant narrative and alternative story threads
- Core values with examples and conflicts
- Position in the transition arc
- Active experiments and what they're testing
- Questions still open (and that's OK)

## Anti-Patterns

- **Forcing optimism** — some life phases need grief, not reframing
- **Treating uncertainty as a problem** — the Neutral Zone is productive
- **Values work as a checklist** — real values emerge through stories, not lists
- **Rushing to "what's next"** — understanding "what is" comes first
- **Comparing to external timelines** — "I should have figured this out by now" is not useful data
- **Confusing meaning with productivity** — meaning can come from rest, play, relationship
