import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'attic-datepicker': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: './dist/',
    minify: 'esbuild',
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'AtticDatepicker',
      fileName: 'attic-datepicker'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    }
  },

})
