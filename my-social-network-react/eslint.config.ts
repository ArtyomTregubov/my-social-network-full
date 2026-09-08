import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginImport from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist', 'node_modules']
  },

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierRecommended
    ],

    plugins: {
      import: eslintPluginImport
    },

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      }
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['methods', 'asyncMethods']
        }
      ],

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],

          'newlines-between': 'never',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },

          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],

          pathGroupsExcludedImportTypes: ['react', 'type'],

          distinctGroup: false
        }
      ]
    }
  }
]);
