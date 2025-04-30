import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      // "next/core-web-vitals",
      "next/typescript",
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
    ignorePatterns: [
      "node_modules",
      "public",
      "tests/setup.ts",
      "**/__tests__/*",
      "**/*.test.ts",
      "**/*.test.tsx",
    ],
  }),
];

export default eslintConfig;
