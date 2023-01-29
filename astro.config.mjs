import { defineConfig } from "astro/config";
import torchlight from "./torchlight.mjs";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://astronaut.github.io",
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [[torchlight, { config: { theme: "github-dark" } }]],
  },
});
