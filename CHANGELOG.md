# v1 → v2: Full Critique and Redesign Rationale

This documents every substantive change from the original plugin, organized
by the five lenses used to evaluate it.

---

## 1. Architecture and Modular Structure

**Found in v1:**
- Two manifests with overlapping content: root `plugin.json` and
  `.claude-plugin/plugin.json`. No canonical source — a real risk of the
  two drifting apart as the plugin evolves.
- `rules/psychology-trigger.md` restated the CBT session flow and crisis
  protocol that `psych-router` and `psych-session-protocol` *also* stated,
  in full, independently. Three copies of the same rules.
- State was single-niche only (`state.json` with one `niche` field). A
  person working on both relationship and performance issues — a common
  and, per this redesign's brief, an explicitly prioritized case — had to
  fully context-switch between two silos, re-running intake each time,
  with no shared model of who they are.
- Module guidance for all six modules of a niche lived inline in one
  `SKILL.md`, loaded in full even when only one module was active.

**Changed in v2:**
- Single manifest (`.claude-plugin/plugin.json`), pointing at `core/router`
  and `core/protocol` instead of two separately-named skills that did
  overlapping jobs.
- `rules/psychology-trigger.md` is now a thin pointer with no logic of its
  own — see its own file for the explicit "if you're editing crisis logic
  here, you're in the wrong file" note.
- Added `profile.json`, a cross-domain person model every niche reads and
  writes. `state.json` can now be per-niche (`state.performance.json`,
  `state.relationship.json`) and multiple can be active at once.
- `performance-psychology` and `relationship-psychology` — the two domains
  prioritized in this redesign — now split module guidance into
  `modules/*.md`, loaded on demand, mirroring the `references/frameworks.md`
  lazy-load pattern that already existed in v1 and worked well. `life` and
  `addiction` keep v1's inline structure for now (see README for why that's
  a reasonable incremental choice, not an inconsistency).

---

## 2. Logical Flow, Reasoning Quality, Internal Consistency

**Found in v1:**
- `addiction-psychology` and `relationship-psychology` had "When to Refer
  Out" sections; `performance-psychology` and `life-psychology` did not —
  despite `life-psychology`'s own Module 10 explicitly screening for
  "hopelessness" and "passive suicidal ideation." Screening for something
  without a stated response to a positive screen is a real gap, not a
  style choice.
- The crisis-detection tree was labeled "C-SSRS" in both files that
  defined it, without qualification. The actual Columbia-Suicide Severity
  Rating Scale is a validated clinical instrument; a paraphrased six-
  question flow run by an unsupervised AI is not equivalent to it, and
  calling it by that name overstates its rigor.
- `relationship-psychology` had two genuinely strong, distinctive
  mechanisms — the Missing Perspective Prompt (anti-triangulation) and the
  Locus-of-Control redirect on the Four Horsemen — that had no counterpart
  anywhere in `performance-psychology`, even though performance coaching
  is exactly as vulnerable to one-sided, self-flattering accounts of
  "what's really stopping me."
- The generic anti-sycophancy rule in `psych-session-protocol` was sound
  but abstract; no niche translated it into its own most common failure
  mode.
- Action plans (performance Module 50) and repair plans (relationship
  Module 50) were designed with real care but never structurally checked
  against what actually happened in the following session.

**Changed in v2:**
- Refer-out sections added to `performance-psychology` and
  `life-psychology`, matching the other two niches.
- The screening tree is now explicitly labeled "informal, adapted from the
  structure of the C-SSRS — not the validated instrument," with an
  instruction not to represent it to the user as clinically equivalent.
- Performance-psychology now has its own Reality Audit prompt in Module 30
  ("If the person who knows your work best evaluated this claimed blocker,
  what would they say?") — the direct performance-domain analog of
  relationship's Missing Perspective Prompt, for the same underlying
  reason: self-report about obstacles is where motivated reasoning is
  strongest.
- Every niche now has an **Accuracy Anchors** section naming its own
  highest-frequency distortion pattern (toxic productivity for
  performance, unverified partner-blame for relationship, catastrophized
  meaninglessness for life, minimization/rationalization for addiction).
- `core/protocol/SKILL.md` Step 0 is now **Commitment Review** — the first
  thing every resumed session does, before mood/readiness, bridge, or
  agenda. Every module that produces a commitment (performance Module 50,
  relationship Module 50, life Module 50, addiction Module 40) now writes
  it to `state.json.commitmentLog` specifically so this step has something
  concrete to check.

---

## 3. Performance, Efficiency, Scalability, Maintainability

**Found in v1:**
- No versioning or citations on any framework claim — no way to audit
  where a claim came from or flag it when the underlying research shifts
  (e.g., Growth Mindset's later, smaller-than-originally-reported effect
  sizes; the Gottman "divorce prediction" figures, which have drawn
  methodological critique despite the underlying Four Horsemen/repair-
  attempt observations remaining useful).
- No eval or test harness for a plugin that handles mental-health-adjacent
  content — no structural check that the consent gate can't be bypassed,
  that crisis detection actually fires, etc.
- Module guidance loaded in full per niche regardless of which module was
  active, unlike the already-lazy `references/frameworks.md` pattern.

**Changed in v2:**
- Every `references/frameworks.md` now ends with a **Sources** section
  naming the originating work and, where relevant, flagging known
  limitations in the evidence (Growth Mindset effect sizes, Gottman
  prediction-accuracy critiques). This is what makes the skill auditable
  and future-proof instead of a black box of confident claims.
- `performance-psychology` and `relationship-psychology` module guidance
  is now split into on-demand files, established as the pattern the
  remaining two niches can be migrated to.
- Out of scope for this pass, flagged for a follow-up: an eval suite
  (structured test conversations verifying consent-gate enforcement,
  crisis-protocol firing, and commitment-log persistence) would be the
  next maintainability investment — the `skill-creator` tooling already
  available in this environment supports exactly this.

---

## 4. Therapeutic Quality / Evidence-Based Practice

**Found in v1:**
- Legitimate, well-chosen frameworks throughout (MI, Gottman, Attachment
  Theory, NVC, Schema Therapy, ACT, SDT, Flow, Growth Mindset,
  Implementation Intentions) — this was already a strength, not a
  weakness, and is preserved.
- The "replacing Yerkes-Dodson" arousal section (IZOF, Catastrophe Model,
  Reversal Theory) was a genuinely current, well-considered addition —
  also preserved as-is.
- No outcome or follow-through tracking anywhere — a session-based system
  with no structural check on whether commitments were kept undermines the
  entire premise of coaching people toward results rather than just
  processing feelings about their situation.
- NVC was the only framework offered for setting limits in
  `relationship-psychology`, but NVC's request format ("would you be
  willing to...") is structurally about asking someone else to act — it
  doesn't cleanly cover boundaries, which are about the user's own
  behavior regardless of the other person's response. Conflating the two
  produces boundaries that are really just unenforced requests.

**Changed in v2:**
- All frameworks preserved; none removed.
- `commitmentLog` plus the Commitment Review session step turns every
  synthesis into a place that can report an honest completion-rate trend,
  not just a feelings summary — directly addressing the redesign's
  "driving to success" and "accurate conclusions" brief.
- Added an explicit **Needs vs. Boundaries** distinction with its own
  template in `relationship-psychology` Module 40 / `references.md`,
  alongside NVC rather than replacing it.

---

## 5. UX, Personalization, Adaptability, Long-Term Effectiveness

**Found in v1:**
- Coaching style was uniform for every user: 3:1 reflection-to-question
  ratio, always. A person who explicitly wants to be challenged and pushed
  toward results — like the brief for this redesign — had no lever to ask
  for that; the system was built for one communication style only.
- No shared understanding across niches: values discovered in performance
  work didn't inform relationship work and vice versa, so the picture of
  the person never got more accurate over time, only ever wider and more
  fragmented.
- Every session, resumed or not, opened with the same ritual regardless of
  whether anything needed re-establishing.

**Changed in v2:**
- `profile.json.communicationStyle.mode` (`reflective` / `balanced` /
  `direct`) is a dial the user sets explicitly, asked once and revisited
  only on their feedback. What changes with directness is speed and
  plainness of naming a gap — never the evidence-based bounds, never
  whether the gap gets named at all.
- `profile.json` accumulates values, attachment signal, recurring
  patterns, and strengths across every niche, with a confidence-gating
  rule (a pattern needs two independent sessions or two niches before it's
  treated as established, not just a vivid one-off) — this is the
  concrete mechanism for the "accurate understanding" goal in the brief.
- Commitment Review at the start of every resumed session is itself a
  long-term-effectiveness mechanism: it's the spaced-repetition/follow-up
  loop that behavior-change literature says one-off insight sessions
  typically lack.

---

## What Was Deliberately Kept Unchanged

Not everything in v1 needed fixing. Specifically preserved as-is because
they were already well-designed:

- The Missing Perspective Prompt and Locus-of-Control redirect in
  `relationship-psychology` — the strongest anti-sycophancy mechanisms in
  the original plugin.
- The IZOF / Catastrophe Model / Reversal Theory arousal section in
  `performance-psychology` — genuinely current sports-psychology content,
  correctly flagged as superseding a naive Yerkes-Dodson reading.
- The harm-reduction framing throughout `addiction-psychology`.
- The "No Synthetic Meaning" rule in `life-psychology` Module 30 — a sharp,
  correct guardrail against algorithmically-generated meaning as a
  substitute for the user's own excavation.
- The core OARS discipline, one-question-at-a-time rule, and saturation
  signal — all correct, all kept, now just calibrated by directness mode
  rather than fixed.
