import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    // JavaScript/TypeScriptの言語オプション
    languageOptions: {
      parser: parser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: js.configs.recommended.languageOptions?.globals || {}, // 安全に参照
    },
    // ベースとなるルールセット
    rules: {
      ...js.configs.recommended.rules, // JavaScriptの推奨ルール
    },
  },
  {
    // Vue.jsのルールセット
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs['vue3-recommended'].rules, // Vue 3向けの推奨ルール
      'vue/multi-word-component-names': 'off', // 単語名のコンポーネントを許容
      'vue/no-multiple-template-root': 'off', // 複数ルートを許容
    },
  },
  {
    // TypeScriptのルールセット
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules, // TypeScriptの推奨ルール
      '@typescript-eslint/no-unused-vars': ['warn'], // 未使用変数を警告
    },
  },
];
