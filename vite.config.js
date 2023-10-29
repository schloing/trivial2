import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // hot reload 🔥
        watch: { usePolling: true, }
    },
	plugins: [preact()],
});
