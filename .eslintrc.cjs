module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:tailwindcss/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "settings": {
        "react": {
            "version": "18"
        },
        "tailwindcss": {
            "callees": ["cn"],
            "config": "tailwind.config.js",
            "cssFiles": [
                "./src/**/*.css",
                "!**/node_modules",
                "!**/.*",
                "!**/dist",
                "!**/build",
            ],
            "removeDuplicates": true,
        }
    },
    "rules": {
        "react/react-in-jsx-scope": "off"
    },
}
