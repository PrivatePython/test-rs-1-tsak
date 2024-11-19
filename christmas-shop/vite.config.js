import {defineConfig} from "vite";
import  path from 'path';

export default defineConfig(() => {
    return {
        build: {
            sourcemap: true, // enable production source maps
        },
        css: {
            devSourcemap: true // enable CSS source maps during development
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
})