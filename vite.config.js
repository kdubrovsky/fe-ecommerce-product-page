import { defineConfig } from 'vite'
import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        svgSpritemap({
            pattern: 'src/assets/icons/**/*.svg',
            prefix: 'icon',
        })
    ],
})
