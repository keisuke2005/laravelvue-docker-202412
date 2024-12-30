import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import checker from 'vite-plugin-checker';

// 型定義をサポートするために import.meta 型を拡張する場合がありますが、
// ここでは必要に応じて TypeScript のエラーを確認します。
export default defineConfig({
    plugins: [
        vue(),
        checker({
            //typescript: true, // TypeScript チェックを有効化
            vueTsc: true,
            // オーバーレイを表示しない場合はfalse
            overlay: true,
            // esLintのチェックをしない場合は以下は消しても構いません
            // eslint: {
            //     lintCommand: 'eslint "./src/**/*.{ts,vue}"', // lint コマンドを直接指定
            // },
        }),
    ],
    server: {
        host: '0.0.0.0', // 外部アクセスを許可
        port: 5173, // サーバーのポートを指定
        strictPort: true, // ポートが利用中の場合エラーをスロー
        watch: {
            usePolling: true, // ファイル変更をポーリングで監視
        },
        hmr: {
            overlay: true, // HMR エラーのオーバーレイを有効化
        },
    },
    build: {
        outDir: 'public/build', // 出力先ディレクトリを指定
        manifest: true, // マニフェストファイルを生成
        rollupOptions: {
            input: 'resources/js/app.ts', // ビルドのエントリーポイントを指定
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'), // エイリアス設定
        },
    },
});
