import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react', 'canvas-confetti'],
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) return 'vendor-icons';
              if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) return 'vendor-react';
              if (id.includes('canvas-confetti')) return 'vendor-confetti';
              return 'vendor-libs';
            }
            if (id.includes('src/components/admin/')) return 'admin-module';
            if (id.includes('src/data/biology')) return 'data-biology';
            if (id.includes('src/data/chemistry')) return 'data-chemistry';
            if (id.includes('src/data/physics')) return 'data-physics';
            if (id.includes('src/data/math')) return 'data-math';
            if (id.includes('src/data/history') || id.includes('src/data/geography') || id.includes('src/data/economics')) return 'data-social';
            if (id.includes('src/data/english') || id.includes('src/data/aptitude') || id.includes('src/data/exam') || id.includes('src/data/smartStudyModelExam')) return 'data-general';
            if (id.includes('src/data/videoLessons') || id.includes('src/data/notes')) return 'data-media';
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
