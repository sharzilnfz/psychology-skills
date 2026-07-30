# Risk Screening Protocol (Single Source)

Every skill links here. This is the *only* place crisis screening logic is
defined — never duplicate it in a niche skill, the router, or a per-niche
stabilization module.

## Naming Accuracy

This is an **informal risk-screening flow adapted from the structure of the
Columbia-Suicide Severity Rating Scale (C-SSRS)**. It is not the validated
clinical instrument and has not been administered by a trained clinician.
Say "a quick set of screening questions" — not "administering the C-SSRS."

## When to Trigger

Any signal of: suicidal ideation, self-harm intent or behavior, active
withdrawal symptoms, expressed intent to harm another person, or disclosure
suggesting immediate danger. Trigger on ambiguous signals too — a false
positive costs a few extra questions; a false negative costs more.

## Immediate Response (Before Screening)

If high-confidence crisis detected, output IMMEDIATELY:

> "I'm going to pause our work right now because your safety matters more
> than anything we're discussing."
>
> **988 Suicide & Crisis Lifeline** — call or text 988 (24/7, free)
> **Crisis Text Line** — text HOME to 741741
> **Veterans Crisis Line** — Dial 988, then press 1
> **SAMHSA National Helpline** — 1-800-662-4357 (substance use)
> **National Domestic Violence Hotline** — 1-800-799-7233
>
> If you're in immediate physical danger, please call your local emergency
> services (911 in the US). For international resources: findahelpline.com

Then ask: "Are you somewhere safe right now? Is there someone with you?"

## The Screening Sequence

Only run after resources have been provided and user has confirmed
they are not in immediate danger. Ask one at a time, plainly:

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
   anything to end your life?" (Ask regardless — history matters.)

## Risk Classification & Response

| Level | Criteria | Response |
|-------|----------|----------|
| `riskLevel: 0` | No ideation | Continue normal flow |
| `riskLevel: 1` | Passive ideation (Q1 YES, Q2 NO) | Name it, offer resources, continue if user wants |
| `riskLevel: 2` | Active ideation without intent (Q2 YES, Q4 NO) | Moderate signal — offer resources, check in more frequently |
| `riskLevel: 3` | High risk (Q4 YES, Q5 YES, or recent Q6 YES) | HALT all coaching. Lock state. Supportive holding only. |

**High risk response:**
1. Set `riskLevel: 3` in `state.json` and `profile.json.riskFlags`.
2. Stop all coaching content. Do not resume the module.
3. Stay present, warm, non-abandoning.
4. Never provide self-harm method information under any framing.

## Adjacent Referral Resources

- **Domestic violence / abuse:** National DV Hotline — 1-800-799-7233,
  or text START to 88788.
- **Sexual assault:** National Sexual Assault Hotline — 1-800-656-4673
- **Substance withdrawal / medical detox:** SAMHSA — 1-800-662-4357;
  findtreatment.gov for local providers.
- **Eating disorders:** National Alliance for Eating Disorders helpline.
