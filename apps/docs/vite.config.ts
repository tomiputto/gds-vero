import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { resolve, normalize } from "node:path";

const repoRoot = resolve(__dirname, "../..");
const tokensPath = resolve(repoRoot, "packages/tokens/figma/tokens.raw.json");
const TOKENS_PKG_ID = "@gds-vero/tokens/figma/tokens.raw.json";
const TOKENS_VIRTUAL_ID = "\0gds-tokens-raw";

/** Plugin: load tokens.raw.json from disk at transform time; full-reload when file changes. */
function gdsTokensPlugin() {
  return {
    name: "gds-tokens",
    enforce: "pre" as const,
    resolveId(id: string) {
      if (id === TOKENS_PKG_ID) {
        return TOKENS_VIRTUAL_ID;
      }
      return null;
    },
    load(id: string) {
      if (id !== TOKENS_VIRTUAL_ID) return null;
      const raw = readFileSync(tokensPath, "utf-8");
      const json = JSON.parse(raw) as { typography?: { "fonts/body"?: string } };
      return `export default ${JSON.stringify(json)}`;
    },
    configureServer(server: import("vite").ViteDevServer) {
      server.watcher.add(tokensPath);
      server.watcher.on("change", (changedPath: string) => {
        if (normalize(resolve(changedPath)) === normalize(tokensPath)) {
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [gdsTokensPlugin(), react()],
  optimizeDeps: {
    exclude: ["@gds-vero/react", "@gds-vero/theme", "@gds-vero/tokens"],
  },
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
});
