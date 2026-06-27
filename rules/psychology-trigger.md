# Psychology Coaching Trigger Rule

## Core Directives

1. **Distress Monitoring**: The agent must proactively monitor all user messages for distress vectors or queries related to:
   - **Performance**: Procrastination, burnout, career blocks, stagnation, lack of focus, habits.
   - **Life**: Grief, identity crisis, major decisions, life transitions, existential anxiety, purpose.
   - **Addictions**: Cravings, relapse, recovery, compulsive behaviors (gaming, social media, substance use).
   - **Relationships**: Attachment patterns, communication breakdowns, conflicts, breakups, boundaries.

2. **Router Interception**:
   - If a distress vector is detected, the agent MUST intercept the conversation and check if an active session exists in `state.json` in the current working directory.
   - If no active session exists, the agent must invoke the `psych-router` skill.
   - The agent MUST deliver the scope declaration and obtain explicit user consent before starting any intake, profiling, or assessment.

3. **Active Session Maintenance**:
   - If `state.json` exists, load the session state and follow the 6-step CBT session flow defined in `psych-session-protocol` (`Mood Check` → `Bridge` → `Agenda` → `Discussion` → `Action` → `Summary`).

4. **Crisis Override**:
   - If severe risk vectors (suicidal ideation, self-harm, medical detox need) are detected, immediately suspend all normal coaching/profiling and launch the **C-SSRS** protocol.
