import path from "path"

import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

import { cloudflare } from "@cloudflare/vite-plugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cloudflare({
      auxiliaryWorkers: [{ configPath: "./workers/api/wrangler.json" }],
      configPath: "./wrangler.json"
    })
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./www/components"),
      "@workers": path.resolve(__dirname, "./workers")
    }
  }
})
