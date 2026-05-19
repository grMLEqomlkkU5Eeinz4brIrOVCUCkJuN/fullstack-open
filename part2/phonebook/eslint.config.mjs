import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig, globalIgnores } from "eslint/config"

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
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: { ecmaFeatures: { jsx: true } },
		}
	}
];
