export default [
	{
		ignores: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/.vite/**"]
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
		rules: {
			quotes: ["error", "double"],
			indent: ["error", "tab"],
			"no-tabs": "off",
		}
	}
];
