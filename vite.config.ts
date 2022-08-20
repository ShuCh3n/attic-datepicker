import { resolve } from 'path'
import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

const externalDependencies = (id: string) => !id.startsWith('.') && !id.startsWith('/');

const baseConfig: UserConfig = {
    plugins: [vue(), vueJsx({ mergeProps: false }), svgLoader()],
    resolve: {
        alias: {
            'attic-datepicker': resolve(__dirname, './src/main.ts'),
        },
    },
};

const esConfig: UserConfig = {
    build: {
        outDir: '.',
        minify: false,
        target: 'es2021',
        emptyOutDir: false,
        lib: {
            entry: resolve(__dirname, './src/main.ts'),
            name: 'AtticDatepicker',
            formats: ['es'],
            fileName: (format) => `attic-datepicker.${format}.js`,
        },
        rollupOptions: {
            output:{
                dir: resolve(__dirname, './dist'),
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.scss') return 'attic-datepicker.css';
                    return assetInfo.name;
                },
            },
            external: externalDependencies,
        },
    }
};

const umdConfig: UserConfig = {
    build: {
        outDir: '.',
        minify: 'esbuild',
        target: 'es2021',
        emptyOutDir: false,
        lib: {
            entry: resolve(__dirname, './src/main.ts'),
            name: 'AtticDatepicker',
            formats: ['umd'],
            fileName: () => `attic-datepicker.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                dir: resolve(__dirname, './dist'),
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.scss') return 'attic-datepicker.min.css';
                    return assetInfo.name;
                },
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
};


export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return baseConfig;
    }

    const format = process.env.LIB_FORMAT;

    if (format === 'es') {
        return { ...baseConfig, ...esConfig };
    }

    return { ...baseConfig, ...umdConfig };
});

