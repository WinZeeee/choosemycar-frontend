# @choosemycar/config

Shared configurations for the ChooseMyCar monorepo, including TypeScript, ESLint, PostCSS, and Prettier settings.

## Overview

This package provides standardized configurations for all tools used across the ChooseMyCar front-end monorepo, ensuring consistency and adherence to project requirements.

## Key Features

- **Strict TypeScript**: Disallows `any` usage and enforces type safety
- **Accessibility-First ESLint**: WCAG AA compliance rules built-in
- **CSS Framework Prevention**: Blocks Tailwind and other CSS frameworks
- **Modern CSS Support**: PostCSS with autoprefixer and future CSS features
- **Consistent Formatting**: Prettier configuration for all file types

## Configurations Included

### TypeScript (`tsconfig.base.json`)

```json
{
  "extends": "@choosemycar/config/tsconfig"
}
```

**Features:**
- Strict mode enabled with `noImplicitAny: true`
- Modern ES2022 target with DOM types
- Path mapping for monorepo packages
- React JSX configuration

### ESLint (`eslint-preset.js`)

```javascript
module.exports = {
  extends: ['@choosemycar/config/eslint']
}
```

**Features:**
- TypeScript strict rules (no `any` allowed)
- React and React Hooks best practices
- JSX accessibility (WCAG AA compliance)
- Performance-focused rules
- CSS framework blocking (Tailwind, Bootstrap)

### PostCSS (`postcss.config.js`)

```javascript
module.exports = require('@choosemycar/config/postcss')
```

**Features:**
- Autoprefixer with modern browser support
- PostCSS Preset Env for future CSS features
- CSS custom properties support
- Logical properties for internationalization
- **No CSS frameworks** (intentionally excluded)

### Prettier (`.prettierrc.js`)

```javascript
module.exports = require('@choosemycar/config/prettier')
```

**Features:**
- 80 character line length
- Single quotes for JavaScript/TypeScript
- ES5 trailing commas
- Language-specific formatting rules

## Browser Support

Defined in `.browserslistrc`:

```
> 1%
last 2 versions
Firefox ESR
not IE <= 11
not dead
iOS >= 12
Android >= 7
```

## Usage in Apps and Packages

### TypeScript Configuration

Create `tsconfig.json` in your app/package:

```json
{
  "extends": "@choosemycar/config/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### ESLint Configuration

Create `.eslintrc.js` in your app/package:

```javascript
module.exports = {
  root: true,
  extends: ['@choosemycar/config/eslint'],
  parserOptions: {
    project: './tsconfig.json'
  },
  // Add package-specific rules if needed
  rules: {
    // Custom overrides
  }
}
```

### PostCSS Configuration

Create `postcss.config.js` in your app/package:

```javascript
module.exports = require('@choosemycar/config/postcss')

// Or for environment-specific configuration:
// module.exports = require('@choosemycar/config/postcss').production
```

### Prettier Configuration

Create `.prettierrc.js` in your app/package:

```javascript
module.exports = require('@choosemycar/config/prettier')
```

## Installation

This package is automatically available in the monorepo. Dependencies are managed at the package level.

```bash
# Install in your package
pnpm add -D @choosemycar/config
```

## Critical Requirements

⚠️ **IMPORTANT PROJECT REQUIREMENTS:**

1. **No CSS Frameworks**: Tailwind, Bootstrap, and similar frameworks are blocked
2. **Strict TypeScript**: `any` usage is not allowed in production code
3. **Accessibility**: WCAG AA compliance is enforced through ESLint rules
4. **Semantic HTML**: HTML5 semantic tags are required (enforced by accessibility rules)
5. **Modern Browsers**: IE 11 and older browsers are not supported

## Development Workflow

1. **Setup**: Extend configurations in your package
2. **Development**: Use `pnpm dev` with instant linting feedback
3. **Pre-commit**: Prettier and ESLint run automatically
4. **Build**: TypeScript compilation with strict checks

## Monorepo Integration

This configuration package is designed to work with:

- **Turborepo**: Build pipeline optimization
- **pnpm**: Workspace dependency management
- **Vite**: Development server and building
- **Island Architecture**: Component isolation

## Error Handling

Common configuration issues and solutions:

### TypeScript Errors
- **`any` usage**: Replace with proper types
- **Missing types**: Install `@types/` packages
- **Path mapping**: Ensure package exists in workspace

### ESLint Errors
- **Accessibility violations**: Fix ARIA attributes and semantic HTML
- **React issues**: Follow React Hooks rules
- **Import restrictions**: Use allowed libraries only

### PostCSS Issues
- **Vendor prefixes**: Check `.browserslistrc` configuration
- **CSS features**: Verify PostCSS Preset Env stage

## Version Compatibility

- **Node.js**: >= 18.0.0
- **TypeScript**: >= 5.3.0
- **React**: >= 18.0.0
- **ESLint**: >= 8.55.0
- **Prettier**: >= 3.1.0

## Contributing

When updating configurations:

1. Test across all packages in the monorepo
2. Update this README with new features
3. Ensure backward compatibility
4. Document breaking changes

## License

Private package for ChooseMyCar internal use only.
