# HabitQuest UX Prototype

HabitQuest is a responsive front-end prototype for a gamified habit-tracking experience. It demonstrates the retention loop proposed in the product specification: complete a habit, earn XP, preserve momentum, advance a weekly quest, and collect badges.

**Live prototype:** https://habitquest-prototype.carebear92875.chatgpt.site

## Screens

- **Today:** daily habits, XP feedback, level progress, flexible streak, weekly quest, and a new-badge state
- **Momentum:** level progression, streak, weekly completion, badges, and active quest
- **Insights:** completion metrics, seven-day chart, and behavioral suggestions
- **Profile:** accessibility preferences and prototype reset
- **Badge collection:** earned and locked achievement states

## Experience principles

- Reward consistency without punishing recovery after a missed day.
- Keep progress feedback visible at the moment a habit is completed.
- Give users control over celebration intensity and sound.
- Use accessible labels, responsive navigation, and reduced-motion support.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Validate and build

```bash
npm test
npm run lint
```

The project uses React, TypeScript, Next-compatible components, Vinext, Vite, and Cloudflare tooling. It contains realistic sample data and does not require a backend.

## Project structure

```text
app/page.tsx       Main prototype views and interactions
app/globals.css    Visual system and responsive styles
public/            Static assets
worker/            Cloudflare worker entrypoint
build/             Site build integration
tests/             Rendered-output verification
```

## Notes

This is a UX prototype. Sample profile, habit, XP, streak, and insight data are intentionally hard-coded for demonstration. The Add Habit control communicates the intended product behavior without persistence.

## License

MIT
