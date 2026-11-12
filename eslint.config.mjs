import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/**', '.nx/**', 'node_modules/**'] },
  ...tseslint.configs.recommended,
  { files: ['**/*.ts'], rules: { '@typescript-eslint/consistent-type-imports': 'error' } },
);
