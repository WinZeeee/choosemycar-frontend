# ChooseMyCar Frontend

> Modern automotive marketplace frontend built with Island Architecture, React 18+, and TypeScript

## 🏗️ Architecture Overview

This project implements **Island Architecture** - a modern approach where each interactive component (island) is a separate, independently deployable application. This enables:

- ⚡ **Performance**: Islands load only when needed
- 🔧 **Maintainability**: Each island can be developed and deployed independently
- 🚀 **Scalability**: Teams can work on different islands without conflicts
- 🎯 **SEO-Friendly**: Server-side rendering with progressive enhancement

## 📁 Project Structure

```
choosemycar-frontend/
├── apps/                              # Island Applications
│   ├── island-image-gallery/          # Interactive car photo gallery
│   ├── island-finance-calculator/     # Loan calculation tools
│   ├── island-dynamic-filters/        # Real-time car search filters
│   └── showcase/                      # Integration testing environment
│
├── packages/                          # Shared Libraries
│   ├── ui/                           # Reusable React components + CSS
│   ├── utils/                        # Shared logic, APIs, TypeScript types
│   ├── config/                       # Shared configurations (TypeScript, ESLint)
│   └── storybook/                    # Component documentation
│
├── package.json                      # Monorepo configuration
├── pnpm-workspace.yaml              # Workspace definition
└── turbo.json                       # Build pipeline configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥18.0.0
- **pnpm** ≥8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Development - run all islands
pnpm dev

# Build all islands for production
pnpm build

# Run tests across all packages
pnpm test

# Lint and fix code
pnpm lint:fix
```

### Developing Individual Islands

```bash
# Work on a specific island
cd apps/island-finance-calculator
pnpm dev

# Build specific island
cd apps/island-image-gallery
pnpm build
```

## 🏝️ Island Applications

### Finance Calculator Island
**Location**: `apps/island-finance-calculator/`
- Interactive loan payment calculator
- Real-time validation and updates
- SWR for API data fetching

### Image Gallery Island
**Location**: `apps/island-image-gallery/`
- Responsive car photo gallery
- Lightbox/modal functionality
- Touch/swipe gestures for mobile
- Lazy loading for performance

### Dynamic Filters Island
**Location**: `apps/island-dynamic-filters/`
- Multi-select filter controls
- Real-time search results
- URL state management
- Debounced API calls

### Showcase Application
**Location**: `apps/showcase/`
- Integration testing environment
- Demonstrates all islands working together
- Mock data for development

## 📦 Shared Packages

### `@choosemycar/ui`
Reusable, unstyled React components with vanilla CSS:
- `Button`, `Input`, `Card`, `Modal`, `Loading`
- CSS custom properties for theming
- Full accessibility support (WCAG AA)

### `@choosemycar/utils`
Shared business logic and TypeScript definitions:
- `Vehicle` and `FinanceQuote` interfaces
- API service abstractions
- Data formatting utilities
- Input validation helpers

### `@choosemycar/config`
Shared development configurations:
- TypeScript strict settings
- ESLint rules with React/accessibility plugins
- PostCSS configuration for vendor prefixing

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript 5.3+
- **Build Tool**: Vite for fast development and optimized builds
- **Monorepo**: Turborepo + pnpm workspaces
- **Styling**: Pure vanilla CSS (no frameworks like Tailwind)
- **Data Fetching**: SWR for caching and revalidation
- **State Management**: React Hooks only (useState, useEffect, useContext)
- **Testing**: Vitest + React Testing Library
- **Documentation**: Storybook for component library

## 🎯 Development Principles

### Island Architecture Rules
1. **Isolation**: Each island is independently deployable
2. **Progressive Enhancement**: Islands enhance server-rendered content
3. **Performance First**: Islands load only when needed
4. **Type Safety**: Strict TypeScript, shared types via `@choosemycar/utils`

### Code Quality Standards
- **No CSS Frameworks**: Production code uses only vanilla CSS
- **Semantic HTML**: Use `<nav>`, `<main>`, `<section>`, etc.
- **Accessibility**: WCAG AA compliance required
- **Performance**: Core Web Vitals optimization
- **Type Safety**: Strict TypeScript, discourage `any` usage

## 🔄 Deployment Workflow

### Development
```bash
# Develop in isolation
cd apps/island-finance-calculator
pnpm dev

# Test integration
cd apps/showcase
pnpm dev
```

### Production Build
```bash
# Build all islands
pnpm turbo build

# Static assets ready in each app's dist/ folder
# Ready for backend team integration
```

### Backend Integration
Each island generates static JS/CSS files that can be enqueued in:
- **WordPress** with Timber + Twig templates
- **Laravel** with Blade templates
- Any server-side rendering framework

**Integration Pattern**:
```html
<!-- Server renders placeholder with data -->
<div id="island-finance-calculator"
     data-props='{"carPrice": 25000, "interestRate": 3.9}'>
  <!-- SEO-friendly fallback content -->
  <p>Calculate your monthly payment...</p>
</div>

<!-- Island script enhances the placeholder -->
<script src="/dist/island-finance-calculator.js"></script>
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Test specific island
cd apps/island-image-gallery
pnpm test

# Run Storybook for visual testing
cd packages/storybook
pnpm storybook
```

## 📊 Performance

- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Splitting**: Each island loads independently
- **Lazy Loading**: Images and non-critical components
- **Caching**: SWR for API responses, Turborepo for builds

## 🤝 Contributing

1. **Development**: Work on individual islands in isolation
2. **Testing**: Use `apps/showcase` for integration testing
3. **Code Quality**: All code must pass TypeScript strict mode + ESLint
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Performance**: Monitor Core Web Vitals during development

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ⚡ Island Architecture for maximum performance and developer experience**
