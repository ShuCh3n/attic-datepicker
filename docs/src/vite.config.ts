import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
    const devLibPath = resolve(__dirname, '../../src/main.ts');
    const prodLibPath = resolve(__dirname, '../../dist/attic-datepicker.es');

    return {
        plugins: [vue(), vueJsx({ mergeProps: false })],
        resolve: {
            alias: {
                'attic-datepicker': command === 'build' ? prodLibPath : devLibPath,
            },
        },
        build: {
            outDir: resolve(__dirname, '../public')
        }
    }
});