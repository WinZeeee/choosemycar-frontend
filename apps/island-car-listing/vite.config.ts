import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'IslandCarListing',
      fileName: (format) => `island-car-listing.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  server: {
    port: 3001,
    host: true,
    hmr: {
      port: 3001
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
