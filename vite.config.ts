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
    }
};

const esConfig: UserConfig = {
    build: {
        outDir: '.',
        minify: false,
        target: 'es2021',
        emptyOutDir: false,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, './src/main.ts'),
            name: 'AtticDatepicker',
            formats: ['es', 'cjs'],
            fileName: (format) => `attic-datepicker.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                dir: resolve(__dirname, './dist'),
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'attic-datepicker.css';
                    return assetInfo.name;
                },
                globals: {
                    vue: 'Vue',
                },
            },
        },
    }
};

const umdConfig: UserConfig = {
    build: {
        outDir: '.',
        minify: 'esbuild',
        target: 'es2021',
        emptyOutDir: false,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, './src/main.ts'),
            name: 'AtticDatepicker',
            fileName: (format) => `attic-datepicker.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                dir: resolve(__dirname, './dist'),
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'src/main.css') return 'attic-datepicker.css';
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

    // if (format === 'es') {
    //     return { ...baseConfig, ...esConfig };
    // }

    return { ...baseConfig, ...umdConfig };
});

