# Psychology Skills v2.0 — Redesign Summary

## What This Is

This package contains a complete architectural redesign of the Psychology Skills plugin, transforming it from a collection of static skill scripts into a **therapeutic operating system** with layered architecture, adaptive routing, integrated measurement, and longitudinal support.

## Files Included

| File | Purpose |
|------|---------|
| `psychology-skills-critical-review.md` | The 47-weakness critical analysis of v1.0 |
| `psychology-skills-v2-architecture.md` | Complete architectural blueprint with design rationale |
| `core-SKILL.md` | Shared therapeutic primitives: safety, trauma-informed base, measurement, neurodivergence, cultural competency |
| `router-SKILL.md` | Entry point with clear priority hierarchy, consent management, preference profiling |
| `protocol-SKILL.md` | Session lifecycle, state management v2, OARS enforcement, quality gates |
| `performance-psychology-v2-SKILL.md` | Complete performance domain: deliberate practice, recovery science, cognitive load, neurotype-aware design |
| `relationship-psychology-v2-SKILL.md` | Complete relationship domain: Perel's erotic intelligence, Real's RLT, digital-age dynamics, workplace relationships |
| `psychology-trigger-v2.md` | Clear priority hierarchy: Crisis > Continuity > Routing |

---

## Top 10 Design Decisions & Their Reasoning

### 1. The `core/` Layer: Unified Therapeutic Primitives
**Problem:** CBT, OARS, ACT, crisis protocols, and anti-sycophancy rules were scattered across 4 niche skills with slight variations.
**Solution:** A single `core/` directory containing authoritative, versioned definitions.
**Result:** Update CBT guidance once, all domains inherit it. No drift. No contradiction.

### 2. Safety-First Gate: Crisis Before Consent Before Anything
**Problem:** v1's C-SSRS asked 4 follow-up questions before providing emergency resources when a user indicated active suicidal ideation.
**Solution:** Phase 0 crisis gate runs on EVERY message before ANY other interaction. Resources are provided immediately; assessment continues only after safety is established.
**Result:** Clinically responsible. Meets duty of care standards.

### 3. State Management v2: Versioned, Hierarchical, Longitudinal
**Problem:** Flat JSON, unbounded growth, no multi-domain support, no outcome tracking.
**Solution:** Hierarchical state with domain-specific branches, session compression after 20 sessions, integrated ORS/SRS trajectories, and a shared longitudinal layer.
**Result:** Supports simultaneous performance + relationship coaching, tracks progress over months, prevents state bloat.

### 4. Adaptive Module Engine: Decision Trees, Not Railroad Tracks
**Problem:** Hard-coded 10→20→30→40→50→90 sequence forced every user through the same path regardless of severity or readiness.
**Solution:** Severity triage at entry → stabilization module for high distress → standard sequence for moderate → maintenance for low. Users can bookmark and revisit modules.
**Result:** A user in acute burnout gets stabilization and recovery design before values work. A user in maintenance gets boosters, not repeated intake.

### 5. Measurement-Integrated Design: ORS + SRS + Custom Trackers
**Problem:** Zero outcome measurement meant zero evidence that interventions were working.
**Solution:** ORS (Outcome Rating Scale) and SRS (Session Rating Scale) at every session. Domain-specific custom trackers. Automatic pattern recognition ("Your ORS dropped 5 points — what's shifted?").
**Result:** Evidence-based adaptation. Alliance ruptures detected early. Progress is visible.

### 6. Neurodivergence-Native Design: Not an Afterthought
**Problem:** No awareness of ADHD, autism, or giftedness — massively impactful for both performance and relationships.
**Solution:** Dedicated neuroprofile module in performance. Neurotype-specific adaptations throughout all domains. ADHD (time blindness, RSD, dopamine menu), autism (sensory needs, explicit communication, masking), giftedness (multipotentiality, existential intensity, perfectionism).
**Result:** Interventions that actually work for the user's brain, not against it.

### 7. Relationship Psychology 2.0: Beyond Gottman
**Problem:** Gottman-only, static attachment labels, no digital-age awareness, no desire/intimacy framework.
**Solution:** Multi-framework integration: dynamic attachment (not static labels), Gottman + digital-age Four Horsemen, Perel's erotic intelligence, Real's relational life therapy (differentiation), workplace relationship dynamics, explicit abuse screening.
**Result:** Covers modern relationships: texting conflicts, social media boundaries, desire maintenance, professional relationship impact, and safety screening.

### 8. Performance Psychology 2.0: Beyond Productivity Hacks
**Problem:** Generic productivity advice, no recovery science, no deliberate practice, no neurodivergence.
**Solution:** Ericsson's deliberate practice, recovery science (sleep, HRV, ultradian rhythms), cognitive load theory for knowledge workers, psychological safety for team performance, neurotype-specific flow design.
**Result:** Evidence-based performance architecture, not motivational platitudes.

### 9. Maintenance & Booster Mode: No Terminal Dead-End
**Problem:** Module 90_SYNTHESIS ended the journey. Real change requires ongoing reinforcement.
**Solution:** Post-synthesis maintenance module with monthly check-ins, victory log review, relapse prevention, skill generalization, and automatic booster triggers.
**Result:** Long-term effectiveness, not a one-time intervention.

### 10. Trauma-Informed Foundation: Window of Tolerance as Base Layer
**Problem:** No trauma awareness meant potential retraumatization during deep exploratory work.
**Solution:** Window of tolerance assessment before any deep work. Grounding techniques (5-4-3-2-1, temperature shift, orienting). Dissociation red flags. Resourcing protocols.
**Result:** Safe exploration. The nervous system is regulated before the mind is challenged.

---

## How to Migrate from v1.0

1. **Replace the `skills/` directory** with the new `core/`, `router/`, `protocol/`, and `domains/` structure.
2. **Update `plugin.json`** to reference the new skill paths.
3. **Update the trigger rule** to `psychology-trigger-v2.md` for clear priority hierarchy.
4. **Archive old session files** — v1 state.json is incompatible with v2 schema. Users should start fresh or do a one-time bridge session.
5. **Test crisis gate** with a simulated crisis message to verify immediate resource provision.

---

## Key Improvements by Domain

### Performance
- Added: Deliberate practice, recovery science, cognitive load theory, psychological safety
- Added: Neuroprofile module (ADHD, autism, giftedness)
- Added: Maintenance module with relapse prevention
- Enhanced: Flow architecture with neurotype-specific design
- Enhanced: Blockers analysis with ACT defusion + CFT compassion

### Relationship
- Added: Abuse screening (mandatory, first session)
- Added: Perel's erotic intelligence framework
- Added: Real's RLT differentiation
- Added: Digital boundaries module (texting, social media, apps)
- Added: Workplace dynamics module
- Added: Maintenance module with relationship hygiene
- Enhanced: Dynamic attachment (not static labels)
- Enhanced: Digital-age Four Horsemen and repair attempts

### Cross-Cutting
- Added: Trauma-informed base (window of tolerance, grounding, dissociation)
- Added: Cultural competency primitives
- Added: Measurement framework (ORS, SRS, custom trackers)
- Added: Neurodivergence-aware interactions throughout
- Enhanced: Crisis protocol (immediate resources before assessment)
- Enhanced: Consent management with 90-day renewal
- Enhanced: State schema with versioning, compression, and longitudinal tracking

---

## What Was Preserved from v1.0

- The core purpose: structured, evidence-based psychological coaching
- The CBT session structure (enhanced with measurement integration)
- The OARS methodology (enhanced with 3:1 enforcement guidance)
- The anti-sycophancy guardrails (enhanced with explicit cognitive distortion taxonomy)
- The scope declaration and explicit consent requirement
- The four-domain model (performance, life, addiction, relationship)
- The harm-reduction philosophy in addiction
- The MI spirit of evocation, not persuasion

---

## Future-Proofing

The v2 architecture is designed for extension:

- **New modalities** can be added to `core/therapeutic-primitives.md` and inherited by all domains.
- **New domains** (e.g., parenting, grief, chronic illness) can follow the same `core → protocol → domain → modules` pattern.
- **New measurement scales** can be added to `core/measurement-framework.md` without breaking existing state.
- **Cultural adaptations** can be added to `core/cultural-competency-primitives.md`.
- **Neurotype expansions** can be added to `core/neurodivergence-aware-interactions`.

The schemaVersion field in state.json ensures backward compatibility and migration paths.

---

## Final Note

This redesign is not about adding more content — it is about adding the **right structure** so that the content that exists can be delivered safely, effectively, and sustainably. A therapist is only as good as their ability to know when to stabilize, when to explore, when to challenge, and when to refer out. This architecture encodes that clinical judgment into the system itself.
