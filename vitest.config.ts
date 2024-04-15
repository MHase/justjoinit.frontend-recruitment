import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
    globals: true,
    setupFiles: ['vitest.setup.ts'],
  },
});
