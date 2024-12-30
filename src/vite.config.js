import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0', // Dockerコンテナ内でリクエストを受け付ける
        port: 5173, // 明示的にポートを指定
        strictPort: true, // ポートが使用中の場合にエラーを出す
        watch: {
            usePolling: true, // ファイルシステムの変更をポーリングで検知（Docker環境で推奨）
        },
    },
    build: {
        outDir: 'public/build',
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
});

