import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import svgr, { type VitePluginSvgrOptions } from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ZodError } from 'zod';
import { env } from './src/env';

export default defineConfig(async ({ mode }) => {
  let PORT: number | undefined;

  if (mode !== 'production') {
    const loadedEnv = loadEnv(mode, __dirname, '');
    const parsedEnv = await env.parseAsync(loadedEnv).catch((error) => {
      if (error instanceof ZodError) console.error(error.flatten().fieldErrors);
      throw new Error('❌ Invalid environment variables:');
    });

    PORT = parsedEnv.PORT;
  }

  const svgrOptions: VitePluginSvgrOptions = {
    svgrOptions: {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      svgoConfig: { floatPrecision: 2 },
    },
  };

  return {
    plugins: [react(), tsconfigPaths(), svgr(svgrOptions), TanStackRouterVite()],
    build: { outDir: 'build' },
    server: typeof PORT === 'number' ? { port: PORT } : undefined,
  };
});
