/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    includeSource: ['src/**/*.{js,ts}', 'src/**/*.test.{js,ts}'],
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
});
