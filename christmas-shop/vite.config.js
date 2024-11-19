import {defineConfig} from "vite";
import  path from "path";

export default defineConfig(() => {
    return {
        base: "/test-rs-1-tsak/christmas-shop/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                // '@assets': path.resolve(__dirname, './src/assets')
            }
        },
        build: {
            sourcemap: true, // enable production source maps
            rollupOptions: {
                input: {
                    main: './index.html',
                    gifts: './gifts-page.html'
                }
            }
        },
        publicDir: "public",
        css: {
            devSourcemap: true, // enable CSS source maps during development
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/styles/index.scss";`,
                }
            }
        },
    }
})