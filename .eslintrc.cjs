module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.js", "vite.config.ts"],
  settings: {
    react: {
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module"
  },
  plugins: ["react-refresh", "@typescript-eslint/eslint-plugin", "react"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will", "does", "are"]
      },
      {
        selector: "class",
        format: ["PascalCase"]
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        prefix: ["T"]
      },
      {
        selector: ["enum", "enumMember"],
        format: ["PascalCase", "UPPER_CASE"]
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true
        }
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"]
      }
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx"]
      }
    ],
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ],
    "no-debugger": "warn",
    "no-nested-ternary": "error",
    "no-underscore-dangle": "error",
    "no-lonely-if": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  },
}
