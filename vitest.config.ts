import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// This configuration is for Vitest.
// It assumes a Vite project setup with React and TypeScript.
export default defineConfig({
  // The plugins are needed for Vitest to process React/TSX files
  // and resolve path aliases like @/components.
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // Allow Vitest to process CSS files, especially if using CSS Modules
    // or doing visual snapshot testing.
    css: true,
  },
})