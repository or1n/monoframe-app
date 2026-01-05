# Dependency upgrade and audit guide

This file explains safe, repeatable steps to audit and upgrade dependencies locally or on your Synology dev machine.

## Quick checks

```bash
# Run the security audit (reports vulnerabilities)
npm audit

# Attempt automatic safe fixes (no forced major bumps)
npm audit fix
```

## Inspect outdated packages

```bash
# Show available upgrades (minor/major)
npx npm-check-updates
```

## Safe upgrades (minor + patch only)

```bash
# Upgrade only minor and patch versions, then install
npx npm-check-updates -u --target minor
npm install
```

## Upgrade everything (review PRs before merging)

```bash
# Update package.json to latest versions (may include majors) — review changes before installing
npx npm-check-updates -u
npm install
```

## After upgrades

```bash
# Run lint and audit
npm run lint
npm run audit

# Build to ensure runtime compatibility
npm run build
```

## Notes & cautions

- Avoid `npm audit fix --force` unless you review the breaking changes — it can bump major versions.
- For major framework bumps (e.g., `next`, `react`, `typescript`) read the official migration guides first.
- If you run these on your Synology, prefer running in a local clone or branch, test there, then deploy.
- Use Dependabot (already configured) to get PRs for dependency updates — review and test each one.

If you want, I can:
- run `npm audit` here and prepare a list of vulnerable packages and suggested semver-safe upgrades, or
- create a branch with minor upgrades applied and a PR-ready diff for you to review.
