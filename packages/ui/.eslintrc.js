/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ben-at-catalyst/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["vite.config.js", "remove-exports.js"],
};
