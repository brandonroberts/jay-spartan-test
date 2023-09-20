/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/public',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      nitro: {
        logLevel: 3,
        moduleSideEffects: ['zone.js/bundles/zone-node.umd.js'],
        output: {
          dir: '../dist/client/analog/public',
          serverDir: '../dist/client/analog/public',
        },
      },
    }),
    {
      name: 'zone-ssr',
      apply: 'build',
      config() {
        return {
          resolve: {
            alias: {
              'zone.js/node': 'zone.js/bundles/zone-node.umd.js',
            },
          },
        };
      },
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
    global: 'globalThis',
  },
}));
