/**
 * @choosemycar/config
 *
 * Shared configurations for the ChooseMyCar monorepo
 * Includes TypeScript, ESLint, PostCSS, and Prettier configurations
 */

// Export TypeScript configuration
const tsconfig = require('./tsconfig.base.json');

// Export ESLint preset
const eslint = require('./eslint-preset.js');

// Export PostCSS configuration
const postcss = require('./postcss.config.js');

// Export Prettier configuration
const prettier = require('./.prettierrc.js');

module.exports = {
  tsconfig,
  eslint,
  postcss,
  prettier,
};

// Individual exports for specific configurations
module.exports.typescript = tsconfig;
module.exports.eslintPreset = eslint;
module.exports.postcssConfig = postcss;
module.exports.prettierConfig = prettier;
