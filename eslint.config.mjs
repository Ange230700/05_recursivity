// eslint.config.mjs

import config from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[].concat(config),
  {
    ignores: [
      "**/node_modules/**",
      "**/.vscode/**",
      "**/client/**",
      "**/server/**",
    ],
  },
];
