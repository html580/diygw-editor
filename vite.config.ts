import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod'
  let build = {}
  if (isProd) {
    build = {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'DiygwEditor',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        external: [
          'vue'
        ],
        output: {
          globals: {
            'vue': 'Vue'
          },
        },
      },
    }
  }

  return {
    plugins: [vue()],
    build,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    },
  }
})
