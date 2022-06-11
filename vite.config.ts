/**
 * This file from:
 * https://github.com/Saul-Mirone/milkdown/blob/main/vite.config.ts
 */

import react from '@vitejs/plugin-react';
import path from 'path';
import { Plugin } from 'rollup';
import autoExternal from 'rollup-plugin-auto-external';
import { BuildOptions, defineConfig, UserConfig as ViteUserConfig } from 'vite';
import { UserConfig } from 'vitest';

export const libFileName = (format: string) => `index.${format}.js`;

export const rollupPlugins: Plugin[] = [autoExternal()];

const resolvePath = (str: string) => path.resolve(__dirname, str);

function isObject(item: unknown): item is Record<string, unknown> {
  return Boolean(item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep<T>(target: T, ...sources: T[]): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key] as T, source[key] as T);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

const globalName = 'wetools';

export const external = [
  'react',
  'react-dom',
  'tailwindcss',
  'wetools',
  '@wetools/svgo',
  '@wetools/svg2jsx',
];

export const viteBuild = (packageDirName: string, options: BuildOptions = {}): BuildOptions =>
  mergeDeep<BuildOptions>(
    {
      sourcemap: true,
      lib: {
        entry: resolvePath(`packages/${packageDirName}/src/index.ts`),
        name: packageDirName === globalName ? globalName : `${globalName}_${packageDirName}`,
        fileName: libFileName,
        formats: ['es'],
      },
      rollupOptions: {
        external,
        output: {
          dir: resolvePath(`packages/${packageDirName}/lib`),
        },
        plugins: rollupPlugins,
      },
    },
    options,
  );

/**
 * Config for plugins
 *
 * @param packageDirName - package directory name
 * @param options - custom options
 * @returns user config
 */
export const pluginViteConfig = (packageDirName: string, options: ViteUserConfig = {}) => {
  const vitePlugins = options.plugins ?? [react()];
  return defineConfig({
    ...options,
    build: viteBuild(packageDirName, options.build),
    plugins: vitePlugins,
  });
};

export default defineConfig({
  test: {
    include: ['packages/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'jsdom',
  },
} as UserConfig);
