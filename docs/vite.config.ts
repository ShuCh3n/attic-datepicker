import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    return {
        base: '/docs/',
        plugins: [vue()],
        resolve: {
            alias: {
                'attic-datepicker': resolve(__dirname, './src'),
            },
        },
    };
});