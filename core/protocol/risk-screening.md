# Risk Screening Protocol (Core — Single Source)

The router and every niche skill link to this file. It is the *only* place
this logic is defined — v1 had the same screening tree written out fully in
both `psych-router` and `psych-session-protocol`, which is exactly the kind
of duplication that quietly drifts out of sync when one copy gets edited and
the other doesn't.

## Naming Accuracy

This is an **informal risk-screening flow adapted from the structure of the
Columbia-Suicide Severity Rating Scale (C-SSRS)**. It is not the validated
clinical instrument, has not been administered by a trained clinician, and
should not be represented to the user as clinically equivalent. Say "a quick
set of questions used in crisis screening" — not "administering the C-SSRS."
Overstating the rigor of a DIY adaptation is its own accuracy problem.

## When to Trigger

Any signal of: suicidal ideation, self-harm intent or behavior, active
withdrawal symptoms, expressed intent to harm another person, or disclosure
suggesting the user or someone else is in immediate danger. Trigger on
ambiguous signals too — a false positive costs a few extra questions; a false
negative costs more.

## The Screening Sequence

Ask one at a time, plainly, without clinical framing:

1. "Have you been wishing you were dead, or wishing you could go to sleep
   and not wake up?"
2. "Have you actually had thoughts of killing yourself?"
   - **No** → skip to Q6.
   - **Yes** → continue.
3. "Have you been thinking about how you might do this?"
4. "Have you had any intention of acting on these thoughts?"
5. "Have you started working out — or worked out — the details of a plan?
   Do you intend to carry it out?"
6. "Have you ever done anything, started to do anything, or prepared to do
   anything to end your life?" (Ask regardless of prior answers — history
   matters independent of current ideation.)

## Risk Determination & Response

**High risk** — yes to Q4, Q5, or a recent (past several months) yes to Q6:

1. Set `riskLevel: 3` in `state.json` and `profile.json.riskFlags`.
2. Stop all coaching content immediately. Do not resume the module in
   progress.
3. State plainly and warmly:
   > "What you're describing needs more support than I can give as an AI. I
   > want to connect you with people who can actually help right now."
4. Provide these resources, without hedging or filtering:
   - **988 Suicide & Crisis Lifeline** — call or text 988 (US)
   - **Crisis Text Line** — text HOME to 741741 (US)
   - **Veterans Crisis Line** — dial 988, then press 1
   - If outside the US or location is unclear, say so and point to
     https://findahelpline.com
5. Stay present, warm, non-abandoning. Never provide self-harm method
   information under any framing — including "just to understand" or
   safety-planning language that names specific methods.

**Moderate signal** (yes to Q1–3, no plan or intent): don't force full
escalation, but name it and offer the same resources: "I want to flag that —
worth taking seriously even without a plan. Those resources are there
anytime. Want to keep going with what we were doing, or sit with this
first?"

## Adjacent Situations (link here, don't restate)

- **Domestic violence / abuse** (relationship-psychology): National DV
  Hotline — 1-800-799-7233, or text START to 88788.
- **Substance withdrawal / medical detox** (addiction-psychology): SAMHSA
  National Helpline — 1-800-662-4357 (24/7, free); findtreatment.gov for
  local providers.
- **Eating-disorder signals** (any niche): National Alliance for Eating
  Disorders helpline. Do not default to NEDA — its former helpline is no
  longer operating.

Any niche skill that needs a refer-out resource links to the relevant bullet
above rather than maintaining its own copy of the number.
