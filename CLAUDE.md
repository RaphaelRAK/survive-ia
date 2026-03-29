# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** with App Router, **React 19**
- **Tailwind CSS v4** — config is in `postcss.config.mjs` (no `tailwind.config.*` file)
- **shadcn/ui** (radix-nova style) — add components via `pnpm shadcn add <component>`
- **Framer Motion** for animations, **lucide-react** for icons
- **GA4** analytics via `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var

## Architecture

This is a single-feature app: a LinkedIn-style quiz ("L'IA va-t-elle me remplacer?") that scores a user's AI exposure risk.

### Data flow

All quiz content and scoring lives in `lib/quiz-data.ts`:
- `professions` — 15 professions with questions, risk level, advice, and contextual data
- `commonQuestions` — 4 generic questions shown to all users
- `getScoreResult()` — scoring function: raw score → normalized 0–100 → risk-adjusted by profession level → zone (0–34 safe, 35–67 transition, 68–100 alert)

### Key files

| File | Purpose |
|------|---------|
| `components/quiz-experience.tsx` | All quiz state and UI (large client component) |
| `lib/quiz-data.ts` | All content, profession data, and scoring algorithm |
| `lib/analytics.ts` | GA4 event helpers (`trackQuizStarted`, `trackQuizCompleted`, etc.) |
| `components/analytics-tracker.tsx` | Client component that fires page_view on route change |
| `app/layout.tsx` | Root layout — GA4 script injection |

### Pages

- `/` — Landing page with stats carousel and CTA
- `/quiz` — The quiz (renders `<QuizExperience />`)
- `/calcul` — Detailed scoring methodology explanation
- `/sources` — 25+ institutional sources (WEF, OECD, McKinsey, etc.)
- `/methodologie` — Simplified methodology overview

### Styling conventions

Global styles are in `app/globals.css` (large file with CSS custom properties and utility classes). Tailwind v4 is used alongside it. Use `cn()` from `lib/utils.ts` for conditional class merging.
