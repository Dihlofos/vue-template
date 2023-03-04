/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const MAX_LINE_LENGTH = 120;

module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
	rules: {
		'prettier/prettier': [
			2,
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
				printWidth: MAX_LINE_LENGTH,
				trailingComma: 'all',
				arrowParens: 'avoid',
				singleAttributePerLine: true,
				semi: true,
			},
		],
		semi: ['error', 'always'],
	},
	plugins: ['prettier'],
	overrides: [
		{
			files: ['**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
			extends: ['plugin:cypress/recommended'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
};
