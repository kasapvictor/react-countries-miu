import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

import rollupConfig from './rollup.config';

const isProdMode = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 4000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [
      {
        find: /^~]/,
        replacement: '',
      },
      {
        find: '@root',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src/app'),
      },
      {
        find: '@entities',
        replacement: path.resolve(__dirname, 'src/entities'),
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, 'src/features'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/shared'),
      },
      {
        find: '@widgets',
        replacement: path.resolve(__dirname, 'src/widgets'),
      },
    ],
    extensions: ['.css', '.scss', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  build: {
    emptyOutDir: true,
    assetsDir: 'assets',
    minify: isProdMode,
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: !isProdMode,
    rollupOptions: rollupConfig,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              sourceMap: true,
              autoLabel: 'dev-only',
              labelFormat: '[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
  css: {
    devSourcemap: true,
  },
});
