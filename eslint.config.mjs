import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  // 禁止在 src 下创建 pages 目录（项目使用 App Router）
  {
    files: ['src/pages/**/*'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message:
            '❌ 禁止在 src/pages 目录下创建文件！项目使用 App Router，请在 src/app 目录下创建页面。',
        },
      ],
    },
  },
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      // 未使用的变量显示报错，但排除 catch 中的 error 和以 _ 开头的变量
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // 忽略以 _ 开头的参数
          varsIgnorePattern: '^_', // 忽略以 _ 开头的变量
          caughtErrorsIgnorePattern: '^_|^error$', // 忽略 catch 中的 error 和以 _ 开头的错误变量
        },
      ],
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_|^error$',
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'off',

      // 放开 React Hooks 相关的限制
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'off',

      // 放开 React 相关的限制
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',

      // 放开 JSX 可访问性的限制
      'jsx-a11y/alt-text': 'off',

      // 放开其他限制
      'no-useless-escape': 'off',

      // 禁止从同一模块多次导入（允许类型导入分离）
      'no-duplicate-imports': [
        'error',
        {
          includeExports: true,
          allowSeparateTypeImports: true,
        },
      ],
    },
  },
  {
    // lexical-editor 文件夹排除重复导入检查
    files: ['src/components/lexical-editor/**/*'],
    rules: {
      'no-duplicate-imports': 'off',
    },
  },
];

export default eslintConfig;
