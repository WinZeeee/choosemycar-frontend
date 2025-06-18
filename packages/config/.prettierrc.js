module.exports = {
  // Print Options
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',

  // Language-specific Options
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 100,
        proseWrap: 'always',
        tabWidth: 2,
      },
    },
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        printWidth: 80,
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
        jsxSingleQuote: true,
        jsxBracketSameLine: false,
      },
    },
    {
      files: '*.css',
      options: {
        printWidth: 120,
        singleQuote: false, // CSS generally uses double quotes
        tabWidth: 2,
      },
    },
    {
      files: '*.{yaml,yml}',
      options: {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
      },
    },
  ],

  // Ignore patterns
  // Note: .prettierignore file should be used in individual packages
  // This is just for reference of common ignore patterns
  ignorePath: '.prettierignore',

  // Plugin configurations (if needed)
  plugins: [
    // Add plugins here if needed in the future
    // For example: '@prettier/plugin-xml' for XML formatting
  ],

  // Additional formatting rules for better consistency
  endOfLine: 'lf', // Enforce Unix line endings
  insertPragma: false, // Don't insert @format pragma
  requirePragma: false, // Format all files, not just those with pragma

  // React/JSX specific options
  jsxSingleQuote: true,
  jsxBracketSameLine: false,

  // HTML formatting (if HTML files are present)
  htmlWhitespaceSensitivity: 'css',

  // Embedded languages
  embeddedLanguageFormatting: 'auto',
};
