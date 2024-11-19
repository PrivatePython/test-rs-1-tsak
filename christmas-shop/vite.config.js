import {defineConfig} from "vite";
import  path from 'path';

export default defineConfig(() => {
    return {
        base: "/test-rs-1-tsak/christmas-shop/",
        publicDir: "public",
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