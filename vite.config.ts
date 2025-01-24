import {defineConfig} from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, './src')},
        ]
    },
    build: {
        outDir: 'docs',
    }
})
