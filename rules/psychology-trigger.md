# Psychology Coaching Trigger Rule

## Core Directive

Monitor messages for psychology-relevant signals: performance (procrastination,
burnout, focus, career blocks), relationships (conflict, attachment, breakups,
boundaries), life (transitions, meaning, grief, identity), addiction (cravings,
relapse, compulsive use). Full signal table lives in `core/router/SKILL.md` —
not duplicated here.

## On Detection

1. Check the working directory for `profile.json` and any `state*.json` files.
2. **Active session exists** → hand off directly to that niche skill at its
   `currentPhase`, per `core/protocol/SKILL.md`. Do not re-route or re-declare
   scope on a session already in progress.
3. **No active session** → load `core/router/SKILL.md`. It owns scope
   declaration, consent, routing, and crisis override.

## Why this file is short

v1 restated the full CBT session flow and crisis-detection logic here *and* in
`psych-router` *and* in `psych-session-protocol` — three copies of the same
rules that could quietly drift out of sync as the skill evolved. In v2, session
mechanics and crisis handling are defined in exactly one place
(`core/protocol/`), and every other file — this one included — links to it
instead of repeating it. If you're editing crisis logic and this file is where
you're making the change, stop: you're in the wrong file.
