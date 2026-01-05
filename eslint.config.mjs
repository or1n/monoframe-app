import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@next/next/no-css-tags": "off", // We use preload strategy for critical CSS
    },
  },
  // Override default ignores of eslint-config-next and add project-specific ignores.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // VS Code editor history
    ".history/**",
    // Node and package managers
    "node_modules/**",
    "pnpm-lock.yaml",
    // Old ESLint configs (deprecated)
    ".eslintrc.cjs",
    ".eslintignore",
  ]),
]);

export default eslintConfig;
