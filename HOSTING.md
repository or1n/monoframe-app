## Hosting & local run instructions

Local (development):

```bash
# from project root
npm install
npm run dev
# open http://localhost:3000
```

Local (production simulation):

```bash
npm run build
npm run start
# open http://localhost:3000
```

Git / GitHub quick link commands (replace URL if using SSH):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/or1n/monoframe-app.git
git push -u origin main
```

Hosting options:

- Vercel: easiest, automatic Next.js optimizations, free tier for small sites.
- Cloudflare Pages + Pages Functions: CDN + WAF; pair with Cloudflare Images for media.
- Docker on VPS / Synology: use `npm run build` and run inside Node container behind nginx reverse proxy. See `deploy/synology-nginx-example.conf`.

Security & performance quick checklist:

- Use HTTPS and HSTS.
- Place Cloudflare (or similar) in front for DDoS and bot mitigation.
- Use a CDN for static assets and media.
- Serve optimized/responsive images; prefer CDN image transforms or Next.js image optimization where possible.
- Enable caching headers for static assets and leverage server-side / edge caching for pages.
