import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": "warn",
            "no-constructor-return": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "warn",
            "eqeqeq": "error",
            "no-eval": "error",
            "no-floating-decimal": "error",
            "no-implicit-coercion": [
                "warn",
                {
                    allow: ["!!"]
                }
            ],
            "no-var": "error",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ],
            "prefer-const": "warn",
            "prefer-rest-params": "warn",
            "yoda": ["error", "never"]
        }
    }
]);
