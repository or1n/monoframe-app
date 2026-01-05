# monoframe-app

Monoframe — a small Next.js App Router site for a design & photography portfolio. This README documents how to run and contribute from a Linux/WSL environment so contributors can reproduce your local setup.

---

## Quick start (WSL / Ubuntu)

1. Install Node.js LTS and enable Corepack (provides `pnpm`):

```bash
# on Ubuntu (WSL)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
corepack enable
corepack prepare pnpm@latest --activate
```

2. Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser. If another process uses `3000`, Next will choose the next available port (check terminal output).

---

## Production build & start

```bash
pnpm build
pnpm start
```

This produces an optimized `.next` build and starts a Node server.

---

## Useful commands

- `pnpm dev` — Start dev server (Turbopack; fast HMR)
- `pnpm build` — Create production build
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint
- `pnpm audit` — Run npm audit to surface vulnerabilities

---

## Project notes & conventions

- Framework: Next.js App Router (see `app/`).
- Styling: Tailwind CSS (global tokens in `app/globals.css`).
- App state: `context/AppContext.tsx` exposes `useApp()` for theme, language and small UX flags.
- Pre-hydration script: `public/theme-init.js` sets theme class before React hydration to avoid layout flashes — kept intentionally in `public/` for CSP compatibility.

LocalStorage keys used by the app: `mono-lang`, `mono-theme`, `mono-color`.

---

## Git / GitHub

This repository already has an `origin` remote configured. To add or change a remote to a different GitHub repo, run:

```bash
# set or replace origin
git remote set-url origin https://github.com/USERNAME/REPO.git
# verify
git remote -v
```

To push your local commits to GitHub:

```bash
git add -A
git commit -m "docs: improve README and local run instructions"
git push origin main
```

If pushing over HTTPS prompts for credentials, use a GitHub personal access token or set up SSH keys and use the `git@github.com:USERNAME/REPO.git` URL.

---

## Security & deployment reminders

- `next.config.ts` injects HTTP security headers for production. During development those headers are skipped to avoid blocking dev runtime.
- Avoid committing secrets; use environment variables and `.env` files.
- For resource-constrained hosts (e.g., Synology), `images.unoptimized` is set to `true` intentionally.

---

## Contributing & CI

- CI: a GitHub Actions workflow runs ESLint and `npm audit` (see `.github/workflows/ci.yml`).
- Dependabot is enabled to open weekly dependency update PRs.
- If you'd like, I can add tests or type-checking CI steps.

### Lighthouse CI

This repository includes a GitHub Action (`.github/workflows/lighthouse-ci.yml`) that builds the app and runs Lighthouse CI against the production server on pushes and pull requests to `main`. It provides automated performance/accessibility/security scoring so regressions are caught early.

---

## Contact

Official contact for the website: info@monoframe.nl

