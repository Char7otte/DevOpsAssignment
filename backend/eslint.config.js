import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    // Ignore patterns
    {
        ignores: ["dist", "build", "coverage", "node_modules"],
    },

    // Main configuration for JS/JSX files
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // React Refresh - warn about non-component exports
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],

            // Variables
            "no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                },
            ],

            // Console
            "no-console": ["warn", { allow: ["error", "warn"] }],

            // Modern JavaScript
            "prefer-const": "error",
            "no-var": "error",
            "prefer-arrow-callback": "warn",

            // Code quality
            eqeqeq: ["error", "always", { null: "ignore" }],
            "no-duplicate-imports": "error",

            // React specific
            "react-hooks/exhaustive-deps": "warn",
        },
    },

    // Configuration for test files
    {
        files: [
            "**/*.test.{js,jsx}",
            "**/*.spec.{js,jsx}",
            "**/__tests__/**/*.{js,jsx}",
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                describe: "readonly",
                it: "readonly",
                test: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
                beforeAll: "readonly",
                afterAll: "readonly",
                vi: "readonly",
            },
        },
    },
];
