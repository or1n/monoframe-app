## Security policy for monoframe-app

If you discover a security vulnerability in this project, please report it privately to the repository owner:

- Contact: orin@monoframe.example (replace with real email)

Guidance for maintainers and deployers:

- Keep `next.config.ts` CSP in place. When adding external scripts, whitelist only explicit origins.
- Never add `unsafe-inline` to `script-src` unless you also rotate and verify a server-injected `nonce`.
- Keep `.env` files out of source control (this repo ignores `.env*`). Provide a `.env.example` with placeholders.
- Use a WAF or Cloudflare in front of public websites for basic bot and DDoS protection.
- Minimize public attack surface: disable unused API routes and remove any test/demo endpoints before production.

This repository uses Dependabot and GitHub Actions for basic CI and dependency checks. For higher assurance, add automated SCA (Snyk) and runtime scanning.
