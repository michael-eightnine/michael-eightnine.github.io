# Michael Smith - Portfolio

Professional portfolio website built with a handful of modern web technologies.

**Live:** [https://michael-eightnine.github.io/](https://michael-eightnine.github.io/)

## Architecture

Yarn workspaces monorepo containing multiple single-page applications:

- **`/`** - Main portfolio (React 19 + Tailwind v4 + Framer Motion)
- **`/popup-portfolio`** - Original 2024 portfolio (preserved for historical purposes)
- **`/eternal-devotion`** - Watercolor paintings and prose collection
- **`/dungeon-crawl`** - Text-based roguelike game

## Tech Stack

- **React 19.0.0** - Latest React with modern patterns
- **TypeScript 5.6.2** - Type-safe development
- **Tailwind CSS 4.1.17** - Utility-first styling with CSS custom properties
- **Framer Motion 11.15.0** - Fluid animations and layout transitions
- **React Router 7.3.0** - Client-side routing
- **Vite 7.2.6** - Fast build tooling

## Development

```bash
# Install dependencies
yarn install

# Development servers
yarn dev                      # Main portfolio (port 5173)
yarn dev:popup-portfolio      # Original portfolio
yarn dev:eternal-devotion     # Art collection
yarn dev:dungeon-crawl        # Game

# Linting
yarn lint                     # Lint all workspaces
```

## Building

```bash
yarn build              # Build main portfolio
yarn build:all          # Build all workspaces in parallel
```

## Deployment

Automated deployment to GitHub Pages via GitHub Actions:

- Triggers on push to `master` branch
- Builds all workspaces
- Combines outputs into single deployment

## Project Structure

```
├── apps/
│   ├── portfolio/           # Main React 19 portfolio
│   ├── popup-portfolio/     # Legacy portfolio
│   ├── eternal-devotion/    # Art collection SPA
│   └── dungeon-crawl/       # Game SPA
├── .github/workflows/       # CI/CD pipelines
└── package.json            # Workspace configuration
```

## Features

- **Responsive Design** - Mobile-first with conditional rendering
- **Smooth Animations** - Physics-based transitions with Framer Motion
- **Accessibility** - WCAG compliant with keyboard navigation and focus management
- **Performance** - Optimized bundles with vendor chunk splitting
- **SEO** - Complete meta tags and structured data
