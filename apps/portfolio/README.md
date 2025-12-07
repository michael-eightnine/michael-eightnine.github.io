# Portfolio - Main Application

Modern portfolio website built with React 19, TypeScript, and Tailwind CSS v4.

This is the primary application in the monorepo, deployed to the root path (`/`).

## Tech Stack

- **React 19.0.0** - Latest React with modern patterns
- **TypeScript 5.6.2** - Type-safe development
- **Tailwind CSS 4.1.17** - Utility-first styling with CSS custom properties
- **Framer Motion 11.15.0** - Fluid animations and layout transitions
- **React Router 7.3.0** - Client-side routing
- **Vite 7.2.6** - Fast build tooling

## Features

### Responsive Design

- Mobile-first approach with conditional rendering
- Uses `useMediaQuery` hook for breakpoint detection
- Desktop: Sidebar navigation with animated sidebar
- Mobile: Header with hamburger menu and full-screen overlay

### Animations

- Centralized animation configuration in `utils/animationUtils.ts`
- Separate timing for mobile (fast) vs desktop (orchestrated)
- Physics-based spring animations with Framer Motion
- Smooth height animations for collapsible sections
- Layout animations for active navigation indicator

### Accessibility

- Focus trapping in mobile menu overlay
- Proper ARIA attributes (`aria-expanded`, `aria-label`, `aria-modal`)
- Keyboard navigation (Tab, Shift+Tab, Escape)
- Focus-visible styles for keyboard users
- Semantic HTML elements throughout

### Performance

- Vendor chunk splitting (React + Router, Framer Motion)
- Google Fonts with `preconnect` and `display=swap`
- Optimized bundle sizes with tree-shaking
- Conditional component rendering (unmounting vs hiding)

## Project Structure

```
src/
├── components/
│   ├── animated/          # Animation wrappers
│   │   ├── PageTransition.tsx
│   │   └── RouterContent.tsx
│   ├── layout/            # Layout components
│   │   ├── AppLayout.tsx
│   │   ├── ContentHeader.tsx
│   │   ├── ContentParagraph.tsx
│   │   ├── Layout.tsx
│   │   └── WorkSection.tsx
│   ├── navigation/        # Navigation components
│   │   ├── HamburgerButton.tsx
│   │   ├── MobileHeader.tsx
│   │   ├── MobileMenuOverlay.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── NavigationLinks.tsx
│   │   └── Title.tsx
│   └── svg/              # SVG components
│       ├── Background.tsx
│       ├── Globe.tsx
│       └── Wordmark.tsx
├── contexts/             # React Context providers
│   └── MobileMenuContext.tsx
├── pages/               # Route components
│   ├── BonusContent.tsx
│   ├── ConnectContact.tsx
│   ├── ProfessionalFocus.tsx
│   └── WorkExperience.tsx
├── utils/               # Utilities and hooks
│   ├── animationUtils.ts
│   └── useMediaQuery.ts
├── App.tsx
├── main.tsx
└── index.css            # Global styles and theme
```

## Development

```bash
# From monorepo root
yarn dev

# From this directory
yarn install
yarn dev
```

## Building

```bash
# From monorepo root
yarn build

# From this directory
yarn build
```

## Theme Configuration

Theme values are defined in `src/index.css` using Tailwind v4's `@theme` syntax:

**Colors:**

- `color-primary` - Blue (#00f)
- `color-light` - White (#fff)
- `color-dark` - Off Black (#222)

**Spacing:**

- `spacing-header-height` - Mobile header height (72px)
- `spacing-header-offset` - Mobile content offset (104px)
- `spacing-nav-width` - Desktop sidebar width (320px)

**Fonts:**

- `font-mono` → Space Mono (400, 700)
- `font-serif` → Roboto Serif (variable weight)

**Custom Utilities:**

- `standardLink` - Standard link styling with hover/focus states
- `contentHeader` - Section header styling with bottom border

## Routes

- `/` - Professional Focus (default)
- `/work-experience` - Work Experience
- `/connect-contact` - Connect & Contact
- `/bonus-content` - Bonus Content (links to other SPAs)

## Key Patterns

### Context API

`MobileMenuContext` manages mobile menu state across components without prop drilling.

### Custom Hooks

- `useMediaQuery` - Responsive breakpoint detection using native `matchMedia` API
- `useMobileMenu` - Access mobile menu state and controls

### Animation System

Centralized animation configurations in `utils/animationUtils.ts`:

- `pageTransition` - Route transition animations
- `sidebarSlide` - Desktop sidebar entrance
- `mobileHeaderSlide` - Mobile header entrance
- `contentMount` / `mobileContentMount` - Content fade-in (different timing)
- `mobileMenuOverlay` - Mobile menu overlay animation
- `navLinksContainerVariants` / `mobileNavLinksContainerVariants` - Staggered link animations

### Conditional Rendering

Components are mounted/unmounted based on viewport instead of CSS hiding for better performance and accessibility:

```tsx
const isDesktop = useMediaQuery('(min-width: 768px)');

return (
  <>
    {!isDesktop && <MobileHeader />}
    {isDesktop && <DesktopSidebar />}
  </>
);
```

## Cross-SPA Navigation

Use standard anchor tags to navigate between separate SPAs:

```tsx
// To other SPAs (different React apps)
<a href="/popup-portfolio">View Old Portfolio</a>
<a href="/eternal-devotion">Art Collection</a>

// Within this SPA (same React app)
<Link to="/work-experience">Work Experience</Link>
```
