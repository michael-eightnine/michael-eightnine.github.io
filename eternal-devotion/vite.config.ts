import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: '/eternal-devotion',
  css: {
    modules: {
      // Enable CSS Modules for all .scss files
      localsConvention: 'dashes'
    }
  },
  optimizeDeps: {
    include: ['**/*.scss'] // Include all .scss files
  },
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/app/components'),
      content: path.resolve(__dirname, 'src/content'),
      routes: path.resolve(__dirname, 'src/app/routes'),
      svg: path.resolve(__dirname, 'src/app/svg'),
      utils: path.resolve(__dirname, 'src/app/utils')
    }
  }
});
