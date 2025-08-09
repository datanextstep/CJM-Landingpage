---
description: Authoritative AI assistant instructions for this repo (React + Vite + Tailwind + Zustand landing page)
globs: *
---

# AI Assistant Guide

## 1. Purpose & Architecture

Single‑page marketing/landing site (no routing, no backend) built with Vite + React 18 + TypeScript + Tailwind v4 design tokens. Entry: `index.html` -> `src/main.tsx` -> `src/App.tsx`. Layout wrapper (`components/Layout.tsx`) injects `<Navbar/>`, `<Footer/>`, sets `document.title` via prop. Sections (Hero, Brands, Services, AboutUs, Pricing, CTA, Numbers) are pure presentational components.

## 2. Build & Run

Dev: `npm run dev` (Vite). Prod build: `npm run build` (type-check then bundle). Preview: `npm run preview`. No tests or custom build steps; keep additions zero‑config unless necessary.

## 3. Styling & Theming

Tailwind v4 with design tokens declared in `src/index.css` under `@theme` plus `.dark` overrides. Semantic utility classes mapped: `bg-body`, `bg-box-bg`, `text-heading-{1|2|3}`. Dark mode toggled by adding/removing `dark` class on `<html>`. When adding styles prefer semantic classes over hardcoded colors to preserve theming.

## 4. State Management

Only global state: theme (`useThemeStore` in `src/store/ThemeStore.ts`) using Zustand + `persist` (storage key `theme`). Toggle updates DOM class then store. If adding more global UI flags, extend this store (retain persistence config) rather than creating new ones.

## 5. Components & Patterns

All components are function components in TypeScript; simple prop interfaces near top of file. Shared primitives under `components/shared/` (Button, BtnLink, Container, Paragraph, Title, NavItem). Cards under `components/cards/`. Data‑driven sections map over arrays in `src/utils/` (`pricingPlans`, `services`). Keep new presentational data lists in `utils/` with simple POJO arrays.

## 6. Assets

Logos live under `public/assets/logos/`. Root `icon.svg` referenced as `/assets/icon.svg`. Remote images (Pexels) used directly—optimize by replacing with local copies if performance work is required (do not inline large base64).

## 7. Conventions

Naming: PascalCase for components/files; kebab in section IDs (`#about-us`, `#pricing`). Keep section components exporting `SectionName` and assign `id` when anchor linked by nav. Maintain consistent prop ordering: structural props (`title`, `description`, etc.) before optional (`className`). Keep imports grouped: local absolute (rooted) vs relative consistent as existing (currently relative paths).

## 8. Accessibility & Quality (Current State)

Form in Hero lacks label and submit handler; nav has no mobile toggle logic (height collapse only). When editing, prefer minimal enhancements consistent with existing simplicity. Do not introduce heavy libraries. Maintain strict TS (no `any`).

## 9. Extending

Add new section: create under `components/sections/`, export named component, insert into `App.tsx` sequence, update `navItems` in `Navbar.tsx` if navigable. Add new theme tokens: extend `@theme` and `.dark` blocks; then create a utility class (or reuse semantic tokens) rather than direct inline rgb values.

## 10. Example Patterns

Mapping data -> UI (Services): `services.map(s => <Service ... />)`. Persisted theme toggle: `const { theme, toggleTheme } = useThemeStore();` then button calls `toggleTheme` and icon conditional on `theme`.

## 11. What NOT to Do

Do not add server code, routing libs, or global CSS resets beyond existing file. Do not rename existing tokens (`--color-bg`, etc.) without updating all dependent utilities. Avoid introducing inconsistent color literals that break dark mode.

## 12. Quick Checklist for Changes

1. Use existing semantic classes for colors/typography.
2. Preserve strict TypeScript and functional component style.
3. Update `navItems` + anchor IDs together.
4. Keep new data arrays in `src/utils/` (no fetching layer).
5. If touching theme: update both light + dark token sets.

Feedback welcome: clarify areas (e.g., planned mobile menu logic, accessibility policy) before large refactors.

### Code Generation

- Use Reasoning, thinking MCP, SequentialThinking MCP for high-quality responses
- Use Context7 MCP and Microsoft docs MCP to find relevant information, documentations, code snippets, and examples
- Use Prompt Booster MCP to enhance prompt quality and improve user prompts to fit copilot input best practices
- Apply SpecStory AI rules for consistent code generation
- Reference project documentation and context system
