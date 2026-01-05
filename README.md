This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment & Security Notes (Synology)

- Use HTTPS: terminate TLS at your Synology reverse proxy or a fronting Nginx container. See `deploy/synology-nginx-example.conf` for a sample config.
- Keep secrets out of the repo: use environment variables and add a `.env` file on the NAS (see `.env.example`).
- Automated dependency updates: Dependabot is configured via `.github/dependabot.yml` to open weekly PRs.
- CI: a basic GitHub Actions workflow is added at `.github/workflows/ci.yml` that runs ESLint and `npm audit`.
- Theme init: The small theme-initialization script was moved to `public/theme-init.js` to avoid inline scripts and allow a stricter CSP.

If you want, I can prepare a Synology DSM step-by-step guide for enabling a reverse proxy and installing TLS certificates (Let's Encrypt) on your NAS.

## Security & Deployment Notes

- **HTTP Security Headers:** This project now sets secure HTTP headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy, Referrer-Policy) via `next.config.ts`.
- **Environment variables:** Add production secrets to your Synology environment and do not commit them. Use the provided `.env.example` as a template.
- **HTTPS / Reverse proxy (Synology):** Terminate HTTPS at the Synology reverse proxy (or a router) and forward traffic to the Node.js process over localhost. Ensure HSTS is enabled and renew certificates automatically (Let's Encrypt).
- **Dependency checks:** Run `npm run audit` and enable Dependabot or Snyk for automated vulnerability alerts.
- **Inline scripts:** The app currently uses a small inline script to set theme before hydration. Consider migrating that to a server-injected nonce or next/script for stricter CSP.

If you'd like, I can add CI checks, Dependabot config, or migrate the inline theme script to a nonce-based approach.
