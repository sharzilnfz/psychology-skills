---
name: relationship-psychology
description: >-
  Use when the user is navigating romantic relationships, family dynamics,
  friendships, conflict resolution, attachment patterns, communication
  breakdowns, breakups, trust repair, boundaries, codependency, or
  intimacy concerns.
disable-model-invocation: true
---

# Relationship Psychology

Structured coaching for romantic partnerships, family dynamics, friendships,
conflict resolution, attachment patterns, and communication — working with
one side of the relationship, honestly, without pretending to see the whole
of it.

**REQUIRED BACKGROUND:** `core/protocol/SKILL.md` and
`core/protocol/risk-screening.md` — read both before running any module.

## When to Activate

- Recurring conflict patterns in a relationship
- Communication breakdowns ("we can't talk without fighting")
- Attachment anxiety or avoidance patterns
- Processing a breakup or divorce
- Family dynamics and boundary setting
- Trust repair after betrayal
- Codependency or enmeshment concerns
- Intimacy or vulnerability difficulties
- Understanding why the same patterns repeat across relationships

## When to Refer Out (MANDATORY)

- Domestic violence or abuse — see `core/protocol/risk-screening.md` for the
  National DV Hotline
- Stalking or harassment situations
- Situations involving child safety
- Severe relationship trauma likely needing EMDR or specialized trauma
  therapy
- An active couples crisis where both parties need a licensed couples
  therapist, not one-sided coaching

**Screen for this early, not just as an intake bullet.** Module 10 asks
directly, in Module 10's own words — not buried in a generic risk-assessment
checkbox.

## Session Start

1. Load `profile.json` if it exists — greet with continuity.
2. Check `state.relationship.json`. If resuming: run **Commitment Review**
   (core protocol, Step 0) first — specifically, whether the repair action
   from last session was actually attempted, and what happened. This is the
   follow-up loop v1 didn't have: a repair plan nobody checks on is just an
   intention.
3. If fresh: ask —

> "Tell me about the relationship that's on your mind right now. Not the
> whole history — just what brought you here today. What happened recently
> that made you want to think about this?"

## Module Sequence

| File | Label | Core Question |
|---|---|---|
| `modules/10-relationship-map.md` | Relationship Landscape | Who matters, what's happening, and is this safe territory? |
| `modules/20-attachment-style.md` | Attachment Patterns | How do you connect and protect? |
| `modules/30-communication-audit.md` | Communication Check | How do you fight and repair? |
| `modules/40-needs-negotiation.md` | Needs + Boundaries | What do you need, what are your limits, and how do you say both? |
| `modules/50-repair-plan.md` | Repair Actions | What concrete changes, and how do we check they happened? |
| `modules/90-synthesis.md` | Relationship Profile | Complete profile + toolkit + follow-through record |

Load each module file only when active. Complete in order; honor explicit
requests to jump.

## Accuracy Anchors

- **Unverified partner-blame**: a complaint about the absent partner that
  hasn't been checked against the user's own contribution. This is the
  single highest-frequency distortion in this niche — see the
  Anti-Triangulation rule in Module 10 and the Locus-of-Control rule in
  Module 30, both of which exist specifically to counter it.
- **Contempt reframed as honesty**: "I'm just being real" covering
  superiority or mockery — name it as contempt, gently, using Gottman's
  framing.
- **"They should just know"**: treating an unstated need as something a
  partner failed to intuit, rather than something that was never actually
  communicated.
- **Forgiveness-as-obligation**: framing "I should be over this by now" as
  a fact rather than a pressured narrative — forgiveness is a process, not
  a deadline.

## Anti-Patterns

- **Taking sides** — work with the user, don't vilify the other person
- **Diagnosing the absent partner** — only one perspective is in the room
- **Oversimplifying attachment** — styles are fluid and contextual, not
  permanent labels
- **Prescribing forgiveness** — forgiveness is a process, not something to
  push
- **Ignoring power dynamics** — not all relationship conflicts are
  symmetrical
- **Treating all conflict as fixable** — some relationships need to end,
  and coaching that can't say so isn't honest coaching
- **Couples therapy through one person** — help their side; don't pretend
  to fix the dynamic itself
- **Romanticizing suffering** — "relationships take work" does not mean
  "relationships should hurt"
- **A repair plan nobody follows up on** — see Session Start; this is the
  specific failure mode v2's Commitment Review step exists to close
