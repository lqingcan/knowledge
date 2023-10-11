import {
  defineConfig,
  // loadEnv,
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig(() => ({
  plugins: [uni()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  server: {
    proxy: {
      '/development/file': {
        target: 'http://10.10.194.20:6704',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/development\/file/, ''),
      },
      '/development/user': {
        target: 'http://10.10.194.20:8700',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/development\/user/, ''),
      },
      '/development/jjsl': {
        target: 'http://10.10.194.20:5555',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/development\/jjsl/, ''),
      },
      '/test/jjsl': {
        target: 'http://10.174.26.145:9001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/test\/jjsl/, ''),
      },
      '/development/agree': {
        target: 'http://10.10.194.20:5555',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/development\/agree/, ''),
      },
      '/test/agree': {
        target: 'http://10.174.26.145:8001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/test\/agree/, ''),
      },
      '/development/order': {
        target: 'http://10.10.194.20:5555',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/development\/order/, ''),
      },
      '/test/order': {
        target: 'http://10.174.26.145:6001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/test\/order/, ''),
      },
    },
  },
}));
