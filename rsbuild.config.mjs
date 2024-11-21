import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
    tags: [{ tag: 'link', attrs: { rel: 'stylesheet', href: './style.css' } }]
  },
  source: {
    alias: {
      '@': './src',
      '@components': './src/components',
      '@assets': './src/assets',
      '@utils': './src/utils'
    }
  }
});
