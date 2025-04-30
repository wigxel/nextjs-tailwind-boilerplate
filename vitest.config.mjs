/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";

// load .env.test
config({
  path: ".env.testing",
});

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    css: true,
    env: {
      NEXT_PUBLIC_ALCHEMY_API_KEY: String(
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      ),
    },
    // setupFiles: "./tests/setup.ts",
    reporters: ["verbose"],
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/**",
        "test/**",
        "./.next",
        "./components/icons/**",
        "./components/ui/**",
        "./components/wallet/avatars/**",
        "./**/__tests__/**",
      ],
    },
  },
});
