import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint-plugin-react'
  ),
  {
    plugins: {
      react: require('eslint-plugin-react'),
    },
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/jsx-closing-bracket-location': [
        'error',
        {
          selfClosing: 'props-aligned',
          nonEmpty: 'tag-aligned',
        },
      ],
    },
  },
];

export default eslintConfig;
