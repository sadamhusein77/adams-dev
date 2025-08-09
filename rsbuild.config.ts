import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { resolve } from 'path';

export default defineConfig(({ envMode }) => {
  const env = loadEnv({ mode: envMode }).parsed as Record<string, string | undefined>;

  return {
    plugins: [pluginReact(), pluginSass()],
    html: {
      favicon: resolve(__dirname, './src/assets/icons/icon.webp'),
      title: 'AdamsDev'
    },
    server:{
      base: env['PUBLIC_BASE_NAME_PATH'] || '/',
    },
    resolve: {
        alias: {
          '@': resolve(__dirname, './src')
        }
      }
  }
});
