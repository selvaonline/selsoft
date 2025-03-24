# CLAUDE.md - Guidelines for Working with this NextJS Codebase

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Run production server
- `npm run lint` - Run ESLint to check code quality

## Code Style Guidelines
- **Imports**: Group in order: React, Next.js, external libraries, components, utils, styles
- **Components**: Use functional components with TypeScript interfaces for props
- **Types**: Use explicit types for all props, hooks, and functions return values
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Redux**: Follow toolkit pattern with typed selectors and actions
- **Error Handling**: Use try/catch for async operations, display user-friendly messages
- **CSS**: Use SCSS modules, follow BEM naming convention for custom classes
- **Animations**: Prefer Framer Motion for UI animations
- **Paths**: Use absolute imports with '@/' prefix

## Folder Structure
Respect the existing organization by component type and feature area.