import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
    return {
        plugins: [vue(), vueJsx({ mergeProps: false }), svgLoader()],
        resolve: {
            alias: {
                'attic-datepicker': resolve(__dirname, '../../src/main.ts')
            },
        },
        build: {
            rollupOptions: {
                output: {
                    dir: resolve(__dirname, '../public'),
                }
            }
        }
    }
});