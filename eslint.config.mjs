import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js", "**/*.mjs"], // Match JavaScript and ECMAScript modules
    ignores: ["dist/**", "node_modules/**"], // Ignore built files and dependencies
    languageOptions: {
      ecmaVersion: 2021, // Support modern JavaScript
      sourceType: "module", // Use ECMAScript modules
      globals: {
        browser: true, // Allow browser globals like 'window' and 'document'
        node: true, // Allow Node.js globals like 'require' and '__dirname'
      },
    },
    plugins: {
      prettier: eslintPluginPrettier, // Integrate Prettier for code formatting
    },
    rules: {
      "prettier/prettier": ["error", {
        printWidth: 120, // Wrap lines at 80 characters
        tabWidth: 2, // Use 2 spaces per indentation level
        useTabs: false, // Use spaces instead of tabs
        singleQuote: true, // Use single quotes instead of double quotes
        trailingComma: "es5", // Add trailing commas where valid in ES5
        bracketSpacing: true, // Print spaces between brackets in object literals
        arrowParens: "always", // Include parentheses around a sole arrow function parameter
      }],
      "no-undef": "off", // Disable errors for undefined globals (handled by environments)
      "no-unused-vars": ["warn"], // Warn about variables declared but not used
      "no-redeclare": ["error"], // Disallow redeclaring variables
      "camelcase": ["error", { properties: "never" }], // Enforce camelCase naming
      "eqeqeq": ["error", "always"], // Enforce strict equality checks
      "curly": ["error", "all"], // Require curly braces for all control statements
      "arrow-body-style": ["error", "as-needed"], // Enforce concise arrow functions
      "prefer-const": "error", // Prefer 'const' for variables that are not reassigned
      "consistent-return": "error", // Ensure functions consistently return values
      "indent": ["error", 2, { SwitchCase: 1 }], // Enforce 2-space indentation
      "quotes": ["error", "single", { avoidEscape: true }], // Enforce single quotes
      "semi": ["error", "always"], // Require semicolons
    },
  },
];
