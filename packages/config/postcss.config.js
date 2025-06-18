module.exports = {
  plugins: [
    // Autoprefixer for vendor prefixes based on browserslist
    require('autoprefixer')({
      // Browserslist configuration will be read from package.json or .browserslistrc
      // Targeting modern browsers with graceful degradation
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not IE <= 11',
        'not dead'
      ],
      // Add prefixes for flexbox, grid, and other modern CSS features
      flexbox: 'no-2009',
      grid: 'autoplace'
    }),

    // PostCSS Preset Env for modern CSS features with fallbacks
    require('postcss-preset-env')({
      // Stage 2 features are stable and widely implemented
      stage: 2,

      // Enable modern CSS features
      features: {
        // Custom properties (CSS variables) - already widely supported
        'custom-properties': {
          preserve: true // Keep original custom properties for better debugging
        },

        // Logical properties for better internationalization
        'logical-properties-and-values': true,

        // Modern CSS selectors
        'focus-visible-pseudo-class': true,
        'focus-within-pseudo-class': true,

        // Color functions
        'color-function': true,
        'hwb-function': true,

        // Modern units
        'custom-media-queries': true,
        'media-query-ranges': true,

        // Layout features
        'gap-properties': true,
        'overflow-shorthand': true,

        // Disable nesting as we'll use BEM methodology instead
        'nesting-rules': false
      },

      // Preserve modern CSS for debugging and future browser support
      preserve: true,

      // Use browserslist configuration
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not IE <= 11',
        'not dead'
      ]
    })
  ]
};

// Export configuration for different environments
module.exports.development = {
  plugins: [
    ...module.exports.plugins,
    // Additional development-only plugins can be added here
    // For example, postcss-reporter for better error messages
  ]
};

module.exports.production = {
  plugins: [
    ...module.exports.plugins,
    // Additional production-only plugins can be added here
    // CSS optimization plugins should be handled by the build tool (Vite)
    // to avoid duplication and conflicts
  ]
};

// NOTE: This configuration intentionally excludes:
// - Tailwind CSS (as per project requirements)
// - Any CSS framework imports
// - CSS-in-JS solutions that conflict with vanilla CSS approach
// - Experimental CSS features that might break in production

// Usage in package.json or build tools:
// - Import as: require('@choosemycar/config/postcss')
// - Or use environment-specific: require('@choosemycar/config/postcss').production
