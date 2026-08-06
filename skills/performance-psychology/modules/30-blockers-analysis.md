# Module 30: Blockers Analysis

**Goal:** Map internal and external barriers with ACT and cognitive defusion.

## Internal Blockers (Cognitive Fusion Patterns)

Use the distortion taxonomy from `psych-session-protocol/references/therapeutic-tools.md`.

**Perfectionism:**
- "What does 'good enough' look like? Is the bar always moving?"
- "If a friend delivered work at the level you're criticizing, what would you say?"
- CFT move: "What would your compassionate self say to the part terrified of imperfection?"

**Imposter Syndrome:**
- "What evidence do you have that you DON'T belong? That you DO?"
- "If you were truly incompetent, would you be this worried about it?"
- ACT move: "I'm having the thought that I'm a fraud. Is this thought helping me show up?"

**Fear of Failure / Avoidance:**
- "What is the actual worst-case if you try and don't succeed?"
- "What is the cost of NOT trying?"
- "Play the tape forward: If you avoid this for another month, where will you be?"

**All-or-Nothing / Overwhelm:**
- "If you couldn't do it all, what is the smallest piece that still matters?"
- "The minimum viable day — what ONE thing makes the day a win?"

## External Blockers

- "What systems, people, or structures make this harder than it needs to be?"
- "What would need to change in your environment?"
- "What is within your control vs. what you need to accept or navigate around?"

## Adapting to Processing Preferences

If the user has shared how they process (e.g., ADHD, sensory needs,
thinking style), adapt this module accordingly. Use their language, not
diagnostic labels. Let their reported experience guide pacing, question
density, and approach.

## Saturation

Top 3 blockers identified with root causes + defusion/cognitive reframe for each.

## Write Outputs (MANDATORY)

After reaching saturation (or when conversation ends mid-module), IMMEDIATELY:

1. **Write `30_blockers-analysis.md`** to the session directory containing:
   - Top 3 internal blockers with root causes and defusion strategies
   - External blockers with control/acceptance analysis
   - Cognitive fusion patterns identified
   - CFT/ACT moves assigned to each blocker
2. **Update `profile.json.recurringPatterns`**: Add any patterns that show
   up across contexts (e.g., perfectionism, avoidance) with `seenIn` and
   `firstNoted`
3. **Update `state.json`**: set `currentPhase` to `40-flow-architecture`,
   append `30-blockers-analysis` to `completedPhases`, add insights

**Incremental writes:** Write each blocker to the module output file as
it's identified and analyzed — don't wait for all 3.
