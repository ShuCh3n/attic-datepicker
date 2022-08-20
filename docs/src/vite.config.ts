import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-ignore
import { resolve } from 'path';

export default defineConfig(({ command }) => {
    const devLibPath = resolve(__dirname, '../../src/main.ts');
    const prodLibPath = resolve(__dirname, '../../dist/attic-datepicker.es');

    const devLibStylePath = resolve(__dirname, '../../src/style.css');
    const prodLibStylePath = resolve(__dirname, '../../dist/attic-datepicker.css');

    return {
        plugins: [vue(), vueJsx({ mergeProps: false })],
        resolve: {
            alias: {
                'attic-datepicker': command === 'build' ? prodLibPath : devLibPath,
                'attic-datepicker-style': command === 'build' ? prodLibStylePath : devLibStylePath
            },
        },
        build: {
            outDir: resolve(__dirname, '../public'),
            emptyOutDir: resolve(__dirname, '../public')
        }
    }
});