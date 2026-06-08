import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  plugins: [tailwindcss(), vue()],
})

import tailwindcss from "@tailwindcss/vite";

