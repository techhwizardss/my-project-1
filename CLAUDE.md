# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (runs on port 8080)
npm run build      # Production build
npm run build:dev  # Development mode build
npm run lint       # ESLint check
npm run preview    # Preview production build locally
```

No test suite is configured for this project.

## Architecture

This is a React 18 + TypeScript + Vite website for **Sharma Electricals Pvt. Ltd.**, a B2B electrical engineering company. Built with the Lovable AI platform.

**Routing** (`src/App.tsx`): React Router v6 with routes for `/`, `/work`, `/services`, `/about`, `/contact`, `/blog`, and `/blog/:id`.

**Pages** (`src/pages/`): Each page assembles section components. `Index.tsx` is the main landing page composed of Hero, Stats, About, Services, Projects, Leadership, Clients, Contact, and Footer sections.

**Components** (`src/components/`): Business-logic components (Hero, Navigation, Services, etc.) live at the top level. shadcn/ui primitives live in `src/components/ui/` — prefer these for any new UI elements.

**Data** (`src/data/blogPosts.ts`): Static blog post data with TypeScript interfaces. This is the pattern for static content.

**Styling**: Tailwind CSS with custom design tokens defined in `tailwind.config.ts` (colors, shadows, gradients, keyframe animations). The `cn()` utility from `src/lib/utils.ts` merges Tailwind classes — use it everywhere.

**Theme**: Dark/light mode via `next-themes`. `ThemeProvider` wraps the app; `ThemeToggle` is the toggle component.

**Path alias**: `@/` maps to `src/` — use this for all imports.

**State/data fetching**: TanStack React Query is set up in `App.tsx` but the current site is mostly static. Forms use React Hook Form + Zod validation.

**Animations**: Framer Motion for component animations. Custom Tailwind keyframes (`fade-in-up`, `scale-in`) for CSS animations.
