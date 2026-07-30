# Comprehensive Critical Review: Psychology Skills v1.0
## Executive Summary

The current Psychology Skills plugin represents a thoughtful first-generation architecture with genuine clinical grounding. However, after systematic analysis across five evaluation dimensions, I have identified **47 specific weaknesses** ranging from architectural fragility to therapeutic blind spots. The most critical issues are:

1. **Safety Protocol Gap**: The C-SSRS crisis flow asks 4 follow-up questions before providing emergency resources when a user indicates active suicidal ideation.
2. **Architectural Drift**: Four niche skills duplicate CBT/OARS/ACT guidance without a shared core, guaranteeing inconsistency as the codebase evolves.
3. **Therapeutic Obsolescence**: Missing DBT, somatic awareness, trauma-informed principles, compassion-focused therapy, and neurodivergence adaptations — all now considered standard of care.
4. **Terminal Dead-End**: Module 90_SYNTHESIS ends the structured journey with no maintenance, booster, or longitudinal tracking phase.
5. **No Outcome Measurement**: No validated scales, no session-by-session progress tracking, no evidence that interventions are working.

---

## 1. Architecture & Modular Structure

### Current State
```
skills/
├── psych-router/          # Entry point
├── psych-session-protocol/ # Shared discipline (reference-only)
├── performance-psychology/ # Niche skill + framework reference
├── life-psychology/        # Niche skill + framework reference
├── addiction-psychology/   # Niche skill + framework reference
└── relationship-psychology/# Niche skill + framework reference
```

### Critical Weaknesses

| # | Weakness | Severity | Impact |
|---|----------|----------|--------|
| A1 | **No shared framework library** — CBT, ACT, OARS are copy-pasted concepts across 4 skills | High | Inconsistency, maintenance burden, drift over time |
| A2 | **Flat state.json schema** — no versioning, no migration path, no encryption consideration | High | Data corruption risk, privacy vulnerability |
| A3 | **Write-only module artifacts** — 10_*.md files are generated but never read back by the skill logic | Medium | Orphaned data, no longitudinal pattern recognition |
| A4 | **No session lifecycle management** — no definition of session end, expiry, or archival | Medium | State bloat, ambiguous re-engagement |
| A5 | **Missing cross-cutting core skill** — crisis, consent, cultural competency, trauma-informed principles scattered | High | Incomplete safety coverage, duplicated logic |
| A6 | **Hard-coded module sequences** — 10→20→30→40→50→90 is baked into every niche skill | Medium | Inflexible, prevents adaptive branching |
| A7 | **No outcome tracking layer** — no measurement of intervention effectiveness | Critical | Flying blind; no evidence-based iteration |
| A8 | **No user preference/profile system** — every session starts from zero context about user style | Medium | Poor personalization, repetitive onboarding |

### Redundancies
- CBT session structure (6 steps) is described in `psych-session-protocol` AND partially re-described in every niche skill.
- OARS methodology is defined in `psych-session-protocol` and referenced in every niche.
- Crisis protocol (C-SSRS) is only in `psych-session-protocol` but every skill needs it — single point of failure.
- The "scope declaration" text is nearly identical across all four niche skills.

### Contradictions
- `psychology-trigger.md`: "intercept and check state" → `psych-router`: "obtain explicit consent first." Priority undefined.
- Addiction skill: "complete modules in order" AND "honor user requests to jump modules."
- "One question at a time" vs. "Agenda Setting" which requires collaborative negotiation (2-3 turns minimum).

---

## 2. Logical Flow, Reasoning Quality & Internal Consistency

### Critical Logic Flaws

**L1 — C-SSRS Dangerous Latency**
The protocol asks: Q1 (wish dead?) → Q2 (thoughts of killing?) → *If YES to Q2*, ask Q3-Q6 before providing resources. This is clinically dangerous. A user saying YES to Q2 should trigger immediate resource provision, with Q3-Q6 asked *after* safety is established.

**L2 — The Consent Bypass**
`psychology-trigger.md` states: "If an active session exists in state.json, load it and follow the CBT flow." This bypasses the router's mandatory consent gate entirely. A user who started a session 3 months ago and mentions a distress vector gets immediately profiled without fresh consent.

**L3 — The 3:1 Ratio Mirage**
The 3:1 reflection-to-question ratio is stated as a "CRITICAL RULE" but there is zero enforcement mechanism. It is purely aspirational text.

**L4 — Module 90 Terminal Dead-End**
After synthesis, `currentPhase` is set to `null`. There is no "maintenance mode," no "booster session," no "quarterly review." The therapeutic relationship simply ends.

**L5 — Missing Perspective Prompt Is One-Shot**
Relationship skill asks: "If your partner were here, how would they describe this?" But this is asked once in Module 10 and never revisited. Triangulation risk persists throughout the entire skill.

**L6 — No Cognitive Distortion Detection Loop**
The anti-sycophancy guardrails say "identify cognitive distortions" but provide no structured taxonomy or detection algorithm. The agent is expected to spontaneously recognize black-and-white thinking without a reference frame.

---

## 3. Performance, Efficiency, Scalability, Maintainability

| Issue | Current State | Problem |
|-------|--------------|---------|
| State file growth | Unbounded JSON append | After 50 sessions, state.json becomes unwieldy; no compression, no archival |
| Framework loading | Full reference files per session | A 5-minute mood check-in loads the entire addiction frameworks.md |
| Module extensibility | Hard-coded 10→20→30→40→50→90 | Adding a module requires editing 4 niche skills |
| Session I/O | Direct file writes | No transaction safety; corruption on interrupt |
| Outcome measurement | None | No way to know if the skill is helping |
| Cross-skill contamination | None | A user working on performance AND relationships has two isolated state files |

---

## 4. Therapeutic Quality: Evidence-Based Practice Gaps

### Missing Core Modalities (Standard of Care 2024-2026)

| Modality | Why It Matters | Where It Applies |
|----------|---------------|------------------|
| **DBT** (Linehan) | Emotional regulation, distress tolerance, interpersonal effectiveness | Relationships, addiction, life transitions |
| **Compassion-Focused Therapy** (Gilbert) | Shame, self-criticism, inner critic work | Performance (imposter syndrome), relationships |
| **Internal Family Systems** (Schwartz) | Parts work, inner conflict, self-leadership | Life transitions, relationship patterns, addiction |
| **Somatic/Polyvagal awareness** (Porges, van der Kolk) | Body-based regulation, grounding | Crisis, trauma, performance anxiety |
| **Solution-Focused Brief Therapy** (de Shazer) | Strength-based, future-oriented, efficient | Performance coaching, brief interventions |
| **Acceptance and Commitment Therapy** | Present but underutilized — missing values card sort, cognitive defusion exercises | All domains |

### Trauma-Informed Care: Completely Absent

- No **window of tolerance** concept (hyperarousal/hypoarousal detection)
- No **grounding techniques** for dissociation or overwhelm
- No **trauma screening** before deep exploratory work
- No **phase-oriented trauma treatment** awareness (stabilization before processing)
- No **resourcing** protocols

### Relationship Psychology: Outdated & Narrow

- **Gottman** is excellent for conflict but misses:
  - Digital-age dynamics (texting patterns, social media boundaries, app-based dating)
  - Erotic intelligence and desire in long-term relationships (Perel)
  - Differentiation and intimacy (Real's RLT)
  - Workplace relationship dynamics (which heavily impact performance)
  - Attachment styles are presented as static labels, not dynamic states
- **No distinction between relationship stages**: dating → cohabitation → marriage → co-parenting → divorce → post-divorce

### Performance Psychology: Missing Modern Science

- **No deliberate practice** framework (Ericsson) — "just work harder" is not a strategy
- **No psychological safety** (Edmondson) — critical for team/collaborative performance
- **No cognitive load theory** — knowledge workers are not athletes; their performance constraints are different
- **No recovery science**: sleep architecture, HRV, stress-recovery balance, ultradian rhythms
- **No neurodivergence adaptations**: ADHD (time blindness, rejection sensitivity), autism (masking, social scripts), giftedness (existential dread, multipotentiality)
- **No distinction between performance domains**: creative, athletic, executive, entrepreneurial, academic

### Measurement: The Blind Spot

- No **Outcome Rating Scale (ORS)** — 4-item session-by-session outcome measure
- No **Session Rating Scale (SRS)** — therapeutic alliance quality
- No **PHQ-9 / GAD-7** — depression/anxiety screening
- No **WHO-5** — wellbeing index
- No **pattern recognition** across sessions ("Your mood checks have dropped 20 points over 3 sessions")

---

## 5. User Experience, Personalization, Adaptability, Long-Term Effectiveness

### UX Gaps

- **No user preference profile**: Direct vs. exploratory, brief vs. deep, morning vs. evening energy, text vs. voice preference
- **No victory log**: Successes are not captured and celebrated; positive psychology principle ignored
- **No progress visualization**: No sense of trajectory or momentum
- **No re-engagement strategy**: User drops off after Module 30 — no gentle check-in, no "pick up where you left off" optimization
- **No cultural adaptation**: Frameworks are Western, individualistic, cognitive-biased
- **No integration hooks**: Calendar blocks, habit trackers, journaling prompts exist only in-session

### Personalization Gaps

- Every user gets the same module sequence regardless of presenting severity, readiness, or preference
- No adaptive branching: A user in acute burnout gets the same "values alignment" module as someone mildly procrastinating
- No learning from past sessions: If a user consistently responds well to somatic prompts, the skill doesn't lean into that

### Long-Term Effectiveness Gaps

- **No maintenance phase**: After 90_SYNTHESIS, the structured work ends. Real change requires ongoing reinforcement.
- **No booster sessions**: Quarterly or monthly check-ins to prevent relapse
- **No skill generalization**: No prompts to apply techniques in new contexts
- **No social support integration**: The skill operates in isolation; no connection to real-world accountability

---

## Blind Spots Summary

| Blind Spot | Risk |
|------------|------|
| Neurodivergence (ADHD, autism, giftedness) | Misattribution of symptoms, ineffective interventions, potential harm |
| Cultural context | Frameworks may be irrelevant or offensive; missed collectivist dynamics |
| Socioeconomic barriers | "Just hire a coach" or "take a vacation" assumes privilege |
| Gender/sexuality dynamics | Relationship advice may assume heteronormative, cisgender frameworks |
| Power dynamics in relationships | Not all conflicts are symmetrical; abuse screening is minimal |
| Medical comorbidity | Physical health conditions (thyroid, sleep apnea, chronic pain) masquerade as psychological |
| Medication interactions | Skill never asks about psychiatric medication, which changes therapeutic approach |
| Seasonal patterns | No tracking of circadian, menstrual, or seasonal effects on mood/performance |

---

## Opportunities for Improvement

1. **Unified Core Layer**: Extract shared therapeutic primitives into a single `psych-core` skill
2. **Adaptive Module Engine**: Replace hard-coded sequences with a decision tree based on severity, readiness, and user preference
3. **Measurement-First Design**: Integrate ORS/SRS at every session; use data to adapt interventions
4. **Safety-First Architecture**: Immediate crisis gate before ANY therapeutic interaction
5. **Maintenance & Booster Mode**: Post-synthesis longitudinal support
6. **Trauma-Informed Foundation**: Window of tolerance, grounding, resourcing as base layer
7. **Neurodivergence-Native Design**: ADHD/autism/giftedness adaptations throughout, not as afterthoughts
8. **Digital-Age Relationship Framework**: Perel, RLT, digital boundaries, workplace dynamics
9. **Performance Science 2.0**: Deliberate practice, recovery science, cognitive load, psychological safety
10. **Cultural Competency Module**: Adapt frameworks to collectivist contexts, religious frameworks, socioeconomic realities
