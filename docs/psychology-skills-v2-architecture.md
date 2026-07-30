# Psychology Skills v2.0 — Redesigned Architecture
## Design Philosophy

The v2 redesign treats the skill system as a **therapeutic operating system** rather than a collection of static scripts. It is built on five architectural pillars:

1. **Safety-First Gate**: Crisis detection runs before ANY therapeutic interaction.
2. **Unified Core**: Shared therapeutic primitives exist in one place, versioned, and inherited.
3. **Adaptive Engine**: Module sequences are decision-tree driven, not hard-coded linear paths.
4. **Measurement-Integrated**: Outcome tracking is not an add-on; it is the feedback loop that drives adaptation.
5. **Longitudinal by Design**: The system is built for months and years, not a single 6-module sprint.

---

## New Directory Structure

```
psychology-skills/
├── core/                              # NEW: Shared therapeutic primitives
│   ├── SKILL.md                       # Core definitions, safety, trauma-informed base
│   ├── crisis-protocol.md             # C-SSRS v2 — immediate safety gate
│   ├── therapeutic-primitives.md      # OARS, CBT, ACT, DBT, MI, CFT, IFS primitives
│   ├── measurement-framework.md       # ORS, SRS, PHQ-9, GAD-7, WHO-5, custom trackers
│   └── trauma-informed-base.md        # Window of tolerance, grounding, resourcing, dissociation
├── router/
│   └── SKILL.md                       # Entry point, intent detection, consent, preference profiling
├── protocol/
│   └── SKILL.md                       # Session lifecycle, state management v2, archival
├── domains/                           # Renamed from "skills" for semantic clarity
│   ├── performance/
│   │   ├── SKILL.md                   # Domain entry, severity triage, module routing
│   │   ├── modules/
│   │   │   ├── 01-intake.md           # Clinical intake + neurodivergence screen
│   │   │   ├── 02-neuroprofile.md     # NEW: ADHD, autism, giftedness adaptations
│   │   │   ├── 03-current-state.md    # Present reality mapping
│   │   │   ├── 04-values-alignment.md # SDT + values card sort
│   │   │   ├── 05-blockers-analysis.md# ACT defusion + cognitive distortion taxonomy
│   │   │   ├── 06-flow-architecture.md# Challenge-skill + environment design
│   │   │   ├── 07-recovery-design.md  # NEW: Sleep, HRV, stress-recovery balance
│   │   │   ├── 08-action-plan.md      # Implementation intentions + deliberate practice
│   │   │   ├── 09-maintenance.md      # NEW: Booster sessions, relapse prevention
│   │   │   └── 90-synthesis.md        # Compiled profile + longitudinal plan
│   │   └── references/
│   │       ├── flow-sdt-act.md
│   │       ├── deliberate-practice.md # Ericsson + Ericsson-style protocols
│   │       ├── recovery-science.md    # Sleep, HRV, ultradian rhythms
│   │       └── cognitive-load.md      # Sweller + knowledge worker adaptations
│   ├── relationship/
│   │   ├── SKILL.md
│   │   ├── modules/
│   │   │   ├── 01-intake.md           # Clinical intake + abuse screening
│   │   │   ├── 02-attachment-map.md   # Dynamic attachment, not static labels
│   │   │   ├── 03-communication-audit.md# Gottman + NVC + digital-age dynamics
│   │   │   ├── 04-conflict-pattern.md # Four Horsemen + repair attempts + stonewalling recovery
│   │   │   ├── 05-needs-negotiation.md# NVC + differentiation (Real's RLT)
│   │   │   ├── 06-desire-intimacy.md  # NEW: Perel's erotic intelligence framework
│   │   │   ├── 07-digital-boundaries.md# NEW: Texting, social media, app-based dating
│   │   │   ├── 08-repair-plan.md      # Concrete re-engagement protocol
│   │   │   ├── 09-workplace-dynamics.md# NEW: Professional relationships affecting performance
│   │   │   ├── 10-maintenance.md      # NEW: Long-term relationship hygiene
│   │   │   └── 90-synthesis.md
│   │   └── references/
│   │       ├── attachment-gottman.md
│   │       ├── nvc-schema.md
│   │       ├── erotic-intelligence.md # Perel's framework
│   │       ├── differentiation-rlt.md # Terry Real's Relational Life Therapy
│   │       └── workplace-dynamics.md  # Professional relationship patterns
│   ├── life/
│   │   └── ... (streamlined, trauma-informed)
│   └── addiction/
│       └── ... (streamlined, harm-reduction enhanced)
├── rules/
│   └── psychology-trigger-v2.md       # Clear priority hierarchy
├── state-schema-v2.json               # NEW: Versioned state schema
├── plugin.json
├── README.md
└── USAGE.md
```

---

## Key Design Decisions

### 1. The `core/` Layer: Unified Therapeutic Primitives

**Problem**: CBT, OARS, ACT, and crisis protocols were scattered and duplicated.
**Solution**: A single `core/` directory containing authoritative definitions.

- `crisis-protocol.md`: C-SSRS v2 — if Q2 is YES, provide emergency resources IMMEDIATELY, then continue assessment.
- `therapeutic-primitives.md`: OARS, CBT thought records, ACT defusion techniques, DBT distress tolerance, MI change talk, CFT compassionate self, IFS parts dialogue — all in one reference.
- `measurement-framework.md`: ORS (Outcome Rating Scale), SRS (Session Rating Scale), PHQ-9, GAD-7, WHO-5, plus domain-specific trackers (performance: focus quality, relationship: connection quality).
- `trauma-informed-base.md`: Window of tolerance model, grounding techniques (5-4-3-2-1, somatic tracking), resourcing, dissociation red flags, phase-oriented treatment awareness.

**Benefit**: Update CBT guidance once, all domains inherit it. No drift.

### 2. State Management v2: Versioned, Compressed, Longitudinal

**Problem**: Flat JSON, unbounded growth, no migration path.
**Solution**: Hierarchical state with session compression and schema versioning.

```json
{
  "schemaVersion": "2.0.0",
  "userProfile": {
    "preferences": { "pace": "deep", "style": "direct", "neurotype": "adhd" },
    "consent": { "grantedAt": "2026-07-30", "scope": "performance+relationship", "renewalDue": "2026-10-30" }
  },
  "sessions": {
    "performance": {
      "active": true,
      "currentModule": "06-flow-architecture",
      "completedModules": ["01-intake", "02-neuroprofile", "03-current-state", "04-values-alignment", "05-blockers-analysis"],
      "outcomeScores": [
        { "date": "2026-07-30", "ors": 28, "srs": 36, "custom": { "focusQuality": 4, "burnout": 7 } }
      ],
      "riskLevel": 0,
      "lastUpdated": "2026-07-30T12:00:00Z"
    },
    "relationship": {
      "active": true,
      "currentModule": "03-communication-audit",
      "completedModules": ["01-intake", "02-attachment-map"],
      "outcomeScores": [...],
      "riskLevel": 0,
      "lastUpdated": "2026-07-30T12:00:00Z"
    }
  },
  "longitudinal": {
    "moodTrajectory": [...],
    "victoryLog": [...],
    "patternInsights": [...]
  }
}
```

**Benefit**: Tracks multiple domains simultaneously, compresses old sessions, maintains outcome trajectories.

### 3. Adaptive Module Engine

**Problem**: Hard-coded 10→20→30→40→50→90 sequence.
**Solution**: Decision-tree routing based on severity, readiness, and user preference.

```
[Entry] → [Severity Triage]
            │
            ├── High distress → Stabilization module (DBT distress tolerance, grounding)
            │
            ├── Moderate distress → Standard sequence
            │
            └── Low distress / maintenance → Booster module or user-selected deep-dive
```

Users can also "bookmark" modules for revisit. The system suggests revisits based on outcome score trends.

### 4. Crisis Protocol v2: Immediate Safety Gate

**Problem**: C-SSRS asks 4 follow-up questions before providing resources.
**Solution**: Two-phase safety gate.

**Phase 1 — Immediate Gate** (runs on EVERY message before any therapeutic work):
- Scan for crisis keywords + sentiment.
- If high-confidence crisis detected: "I'm going to pause our work and make sure you're safe." → Provide 988 + local resources immediately.
- Then ask C-SSRS questions.

**Phase 2 — Structured Assessment** (only after safety resources provided):
- C-SSRS Q1-Q6, but Q3-Q6 are framed as "to help me understand how to support you best."

### 5. Neurodivergence-Native Design

**Problem**: No awareness of ADHD, autism, giftedness.
**Solution**: Dedicated `02-neuroprofile.md` module in performance; neurotype-aware adaptations throughout.

- **ADHD**: Time-blindness adaptations (externalization, body-doubling), rejection sensitivity dysphoria awareness, dopamine-menu design, medication timing awareness.
- **Autism**: Masking recovery, social script flexibility, sensory environment design, special interest leverage.
- **Giftedness**: Multipotentiality navigation, existential dread, perfectionism reframing, intensity management.

### 6. Relationship Psychology 2.0

**Problem**: Gottman-only, static attachment labels, no digital-age awareness.
**Solution**: Multi-framework integration.

- **Attachment**: Dynamic states, not static labels. "You show avoidant patterns under stress, secure patterns when resourced."
- **Gottman**: Enhanced with digital-age Four Horsemen (passive-aggressive texting, social media contempt, ghosting as stonewalling).
- **Perel's Erotic Intelligence**: Desire in long-term relationships, maintaining mystery, eroticism vs. intimacy.
- **Real's RLT**: Differentiation, grandiosity/shame cycles, relational recovery.
- **Workplace Dynamics**: How professional relationships impact performance and vice versa.

### 7. Performance Psychology 2.0

**Problem**: Generic productivity advice, no recovery science, no neurodivergence.
**Solution**: Evidence-based performance architecture.

- **Deliberate Practice**: Ericsson's principles — specific goals, immediate feedback, full concentration, error correction.
- **Recovery Science**: Sleep architecture, HRV monitoring, stress-recovery balance, ultradian rhythm alignment.
- **Cognitive Load Theory**: Intrinsic, extraneous, germane load management for knowledge workers.
- **Psychological Safety**: Edmondson's framework for team/collaborative performance.
- **Neurodivergence**: ADHD-specific flow design, autism-friendly environment architecture, giftedness intensity management.

### 8. Measurement-Integrated Design

**Problem**: No outcome tracking.
**Solution**: ORS + SRS at every session; domain-specific custom scales.

- **ORS** (Outcome Rating Scale): 4 items, 0-10 each, measures wellbeing, interpersonal, social, overall. Takes 30 seconds.
- **SRS** (Session Rating Scale): 4 items, measures alliance quality. Takes 30 seconds.
- **Custom Trackers**: Performance (focus quality 1-10, burnout 1-10), Relationship (connection quality 1-10, conflict frequency).
- **Pattern Recognition**: "Your ORS has dropped 8 points over 3 sessions. Let's check in on what's shifted."

### 9. Maintenance & Booster Mode

**Problem**: Terminal dead-end at 90_SYNTHESIS.
**Solution**: Post-synthesis longitudinal support.

- **Maintenance Module**: Monthly 15-minute check-ins, ORS tracking, victory log review.
- **Booster Sessions**: Triggered by outcome score drops or user request.
- **Skill Generalization**: Prompts to apply techniques in new contexts.
- **Relapse Prevention**: Domain-specific early warning signs and response protocols.

### 10. Cultural Competency & Socioeconomic Awareness

**Problem**: Western-centric, individualistic, privilege-blind.
**Solution**: Embedded cultural competency.

- Collectivist vs. individualist values awareness.
- Socioeconomic barrier acknowledgment ("Given your current constraints, what is the smallest viable step?").
- Religious/spiritual framework integration (not replacement).
- Gender and sexuality inclusive language and frameworks.

---

## Invocation Flow (v2)

```
[User Message]
    │
    ▼
[Phase 0: Crisis Gate] ← ALWAYS FIRST
    │
    ├── Crisis detected → Immediate resources → Supportive holding → End
    │
    └── No crisis → Continue
              │
              ▼
[Phase 1: Consent & Preference Check]
    │
    ├── No consent / expired → Scope declaration → Obtain consent
    │
    └── Consent valid → Continue
              │
              ▼
[Phase 2: State Load & Bridge]
    │
    ├── Active session exists → Load state → Bridge → Mood Check → ORS/SRS
    │
    └── No active session → Router → Domain selection → Severity triage
              │
              ▼
[Phase 3: Adaptive Module Execution]
    │
    ├── Standard sequence → Module execution → Saturation check → Action plan
    │
    ├── Stabilization → Crisis/distress tolerance → Re-triage
    │
    └── Maintenance → Booster check-in → Pattern review → Adjustment
              │
              ▼
[Phase 4: State Write & Summary]
    │
    ├── Write state.json v2
    ├── Update longitudinal trajectory
    └── Session summary + next step preview
```

---

## Anti-Patterns Addressed (v2)

| v1 Anti-Pattern | v2 Solution |
|-----------------|-------------|
| Sycophancy / blind validation | Measurement framework provides objective feedback; cognitive distortion taxonomy is explicit |
| Righting reflex (fixing too fast) | MI principles embedded in core; "explore before advise" is enforced by module structure |
| Labeling users | Dynamic pattern language: "You show X pattern under Y conditions" not "You are X" |
| Pushing abstinence on precontemplation | Stage-matched interventions with explicit algorithmic classification |
| Taking sides in relationships | Missing Perspective Prompt is MANDATORY and RECURRING, not one-shot |
| Diagnosing absent partners | Explicit prohibition + perspective-taking exercises |
| Ignoring the function of behavior | Functional analysis is required in every domain intake |
| Moralizing / shame | CFT compassion framework + harm reduction principles throughout |
| Playing doctor / giving medical advice | Explicit referral triggers with resource provision, not just warnings |
| Skipping CBT checkpoints | Checkpoints are structural, not optional; state.json enforces completion |
