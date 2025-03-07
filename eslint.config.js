// eslint.config.js
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Forzar el formato con Prettier
      'vue/multi-word-component-names': 'off', // Desactivar nombres de múltiples palabras
      'vue/html-self-closing': [
        'error',
        {
          html: {
            normal: 'always', // Fuerza el cierre automático
            void: 'always',
          },
        },
      ],
    },
  },
];
