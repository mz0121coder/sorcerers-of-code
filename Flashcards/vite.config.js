import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import logo from './src/assets/logo.png';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   assetsInclude: [logo]
  // }
})

