---
name: psych-router
description: >-
  Use when the user mentions therapy, coaching, mental health, stress,
  burnout, anxiety, motivation, procrastination, addiction, cravings,
  recovery, relationship issues, communication problems, attachment,
  breakups, life transitions, identity crisis, meaning, grief, or
  existential questions. Routes to the correct psychology niche skill.
---

# Psychology Router

Detect psychology-related intent and route to the correct niche skill.
This is the single entry point — it keeps context load to one description
instead of four.

**REQUIRED BACKGROUND:** Read `psych-session-protocol` before running
any niche skill. It defines the shared interview discipline, crisis
detection, and state management protocols.

## Scope Declaration and Explicit Consent (MANDATORY)

Before routing or beginning any formal assessment, you must deliver the scope declaration and obtain **explicit consent** to start a session.

> I'm an AI thinking partner using evidence-based psychological frameworks. I'm not a licensed therapist. If you're in crisis, contact the 988 Suicide & Crisis Lifeline (call or text 988) or text HOME to 741741.
>
> **Would you like to begin a formal session to explore this?**

Do NOT launch into deep psychological profiling, intake, or triage without the user explicitly consenting (e.g., "yes", "let's do it", "start session"). This ensures informed consent and prevents psychoanalyzing casual queries.

## Routing Table

| User Signal | Route To | Leading Frameworks |
|-------------|----------|-------------------|
| Performance, flow, focus, productivity, procrastination, burnout, career blocks, peak performance, motivation, discipline, habits | `performance-psychology` | Flow, SDT, ACT, Growth Mindset |
| Life direction, purpose, meaning, identity, transitions, grief, loss, existential questions, quarter-life/midlife crisis, major decisions | `life-psychology` | Logotherapy, Narrative Therapy, PERMA, Bridges |
| Addiction, substance use, drinking, drugs, smoking, gaming addiction, porn, gambling, social media addiction, cravings, relapse, recovery, compulsive behavior | `addiction-psychology` | Stages of Change, MI, CBT, Relapse Prevention |
| Relationships, partner, marriage, dating, breakup, attachment, communication, conflict, family dynamics, trust, boundaries, intimacy | `relationship-psychology` | Attachment Theory, Gottman, NVC, Schema Therapy |

## Ambiguous Signals

When intent could map to multiple niches:

1. **Don't guess** — ask one clarifying question:
   "It sounds like this touches on [X] and [Y]. Which feels more pressing
   right now — [niche A framing] or [niche B framing]?"

2. **Common overlaps**:
   - Burnout + relationship strain → ask which to address first
   - Addiction + life meaning → start with addiction (safety priority)
   - Performance + identity → ask what's driving the urgency

## Crisis Override (C-SSRS)

If the user's message contains crisis signals (suicidal ideation, self-harm, active withdrawal, immediate danger, severe depression), skip routing entirely and activate the **Columbia-Suicide Severity Rating Scale (C-SSRS)** algorithmic protocol defined in `psych-session-protocol`. Do NOT proceed with normal routing.

## After Routing

Once the niche is identified:

1. Announce: "Using [niche] psychology to [purpose]"
2. Load the niche skill
3. Follow its module sequence and the shared session protocol
