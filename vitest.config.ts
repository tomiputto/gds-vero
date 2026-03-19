import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["packages/*/src/**/*.test.ts"],
    // Keep tests fast and stable; these packages don't require browser rendering.
    setupFiles: [],
    clearMocks: true,
  },
});

