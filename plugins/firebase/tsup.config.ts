import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["firebase/functions/index.ts"],
    format: ["esm"],
    outDir: "dist/firebase",
  },
]);
