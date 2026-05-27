import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },
  vite: {
    assetsInclude: ["**/*.MOV", "**/*.heic", "**/*.JPG", "**/*.jpeg", "**/*.mov"],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
