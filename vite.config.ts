import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__dirname', __dirname);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/app/components'),
      svg: path.resolve(__dirname, 'src/app/svg'),
      utils: path.resolve(__dirname, 'src/app/utils')
    }
  },
  optimizeDeps: {
    include: ['**/*.scss'] // Include all .scss files
  },
  css: {
    modules: {
      // Enable CSS Modules for all .scss files
      localsConvention: 'dashes'
    }
  },
  base: './'
});
