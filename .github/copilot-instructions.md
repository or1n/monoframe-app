# Copilot instructions — monoframe-app

Quick guide to help an AI coding agent be immediately productive in this repository.

## Quick overview
- Framework: Next.js App Router (folder: app/) using Next 16 + React 19.
- Styling: Tailwind CSS (globals.css) with dark-mode class toggled on `<html>`.
- Client state: `context/AppContext.tsx` is the single app-level provider for `lang`, `darkMode`, and `hasSeenIntro`.
- Small client-only UX: `components/IntroAnimation.tsx` (framer-motion) controls the entrance sequence.

## How to run (use these exact npm scripts)
- Dev server: `npm run dev` (hot reload)
- Build: `npm run build`
- Start production: `npm run start`
- Lint: `npm run lint` (use `npm run lint:fix` to auto-fix)
- Quick health checks: `npm run check` runs lint + `npm audit`

## Key project-specific conventions
- Import alias: `@/` is mapped to repo root via `tsconfig.json` (use `@/components/...`).
- Client components must include `"use client"` at top (see `IntroAnimation.tsx`).
- Put any tiny pre-hydration scripts in `public/` rather than inline: `public/theme-init.js` initializes dark mode before React hydrates.
- Persisted keys in localStorage (used by `AppContext`): `mono-lang`, `mono-theme`. Use these keys when reading/writing theme or language.
 - Persisted keys in localStorage (used by `AppContext`): `mono-lang`, `mono-theme`, `mono-color`. `mono-color` selects the accent/color palette (e.g., `default`, `indigo`, `coral`).
 - Theme tokens: CSS variables live in `app/globals.css` and are switched via the `dark` class and the `data-color-theme` attribute on `<html>`.
- App-level provider: wrap new client UI state in `AppContext` so other components can use `useApp()` safely.

## Security / CSP notes (important when editing runtime HTML or adding scripts)
- `next.config.ts` sets a strict Content-Security-Policy and several security headers. Avoid adding inline scripts or `unsafe-inline` styles unless you also update CSP in `next.config.ts`.
- `theme-init.js` was intentionally moved to `public/` to avoid inline scripts and to work with the existing CSP.

### CSP edit example
If you must add a runtime script or external source, update the CSP in `next.config.ts` to allow only that origin. Example snippet (append or modify `script-src`):
```
const ContentSecurityPolicy = `
	default-src 'self';
	script-src 'self' https://trusted.cdn.example.com;
	style-src 'self' 'unsafe-inline' https:;
	img-src 'self' data: https:;
	font-src 'self' https: data:;
	connect-src 'self' https:;
`;
```
Always prefer adding a single trusted origin over `unsafe-inline` when possible.

## Files to inspect when changing behavior
- App shell & global CSS: `app/layout.tsx`, `app/globals.css`.
- App state: `context/AppContext.tsx` (provider + `useApp()` hook).
- Entry pages: `app/page.tsx`, and route subfolders under `app/` (e.g., `app/contact`, `app/design`).
- Small client utilities: `public/theme-init.js`.
- CI & maintenance: `.github/workflows/ci.yml` (runs lint + audit), `.github/dependabot.yml`.

## Examples (copyable snippets)
- Toggle dark mode programmatically (use `setDarkMode` from `useApp()`):
```
const { setDarkMode } = useApp();
setDarkMode(true);
```
- Read/write persisted theme key manually (matches `AppContext`):
```
localStorage.setItem('mono-theme', 'true');
const t = localStorage.getItem('mono-theme');
```
- Import via alias:
```
import IntroAnimation from '@/components/IntroAnimation';
```

## CI / workflow implications
- CI currently enforces ESLint and `npm audit` (see `.github/workflows/ci.yml`). Add tests or build steps explicitly if you want CI to build artifacts.

## Notes for contributors/agents
- Avoid changing CSP in `next.config.ts` without also considering `public/theme-init.js` placement and the security implications described in `README.md`.
- When adding new persistent app state, extend `AppContext` and keep localStorage keys consistent with existing names.
- This project targets light-weight deployment to a NAS (see `deploy/synology-nginx-example.conf`); images are configured `unoptimized: true` for CPU-constrained environments.

## Extending `AppContext` (example)
To add a new persisted piece of app state (for example `acceptedTerms`), extend `context/AppContext.tsx` and use localStorage consistently:
```
// inside AppProvider
const [acceptedTerms, setAcceptedTerms] = useState(false);
useEffect(() => {
	const saved = localStorage.getItem('mono-accepted-terms');
	if (saved !== null) setAcceptedTerms(saved === 'true');
}, []);
const setAccepted = (v: boolean) => {
	setAcceptedTerms(v);
	localStorage.setItem('mono-accepted-terms', String(v));
};
// add to provider value
```

If any of this is unclear or you want me to expand examples (CSP migration, adding tests, or CI changes), tell me which area to flesh out.
