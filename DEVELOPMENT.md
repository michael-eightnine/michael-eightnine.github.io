# Development Guide - Yarn Workspaces Monorepo

This portfolio is organized as a **Yarn Workspaces monorepo** containing three independent Single-Page Applications (SPAs).

## 📁 Structure

```
michael-eightnine.github.io/
├── package.json                    # Root workspace configuration
├── yarn.lock                       # Shared lockfile for all apps
├── node_modules/                   # Shared dependencies
├── .github/workflows/              # CI/CD configuration
├── apps/
│   ├── portfolio/                  # Main portfolio (served at /)
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── src/
│   │   └── public/
│   ├── eternal-devotion/           # Art gallery sub-SPA (served at /eternal-devotion)
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── src/
│   │   └── public/
│   └── dungeon-crawl/              # Game sub-SPA (served at /dungeon-crawl)
│       ├── package.json
│       ├── vite.config.ts
│       ├── src/
│       └── public/
```

## 🚀 Getting Started

### Initial Setup

```bash
# Clone the repository
git clone <repo-url>
cd michael-eightnine.github.io

# Install all workspace dependencies (once for all apps)
yarn install
```

This single `yarn install` will:
- Install all dependencies for all apps
- Create a shared `node_modules` at the root
- Link workspace packages together
- Take ~15-20 seconds

## 💻 Development - Individual Apps

### Portfolio (Main App)

```bash
# Start dev server
yarn dev
# or
yarn workspace portfolio dev

# Build for production
yarn build
# or
yarn workspace portfolio build

# Preview production build
yarn preview
```

Dev server runs at: `http://localhost:5173`

### Eternal Devotion (Art Gallery)

```bash
# Start dev server
yarn dev:eternal-devotion
# or
yarn workspace eternal-devotion dev

# Build for production
yarn build:eternal-devotion
# or
yarn workspace eternal-devotion build

# Generate optimized images (if needed)
cd apps/eternal-devotion
yarn generateImages
```

Dev server runs at: `http://localhost:5173`

### Dungeon Crawl (Game)

```bash
# Start dev server
yarn dev:dungeon-crawl
# or
yarn workspace dungeon-crawl dev

# Build for production
yarn build:dungeon-crawl
# or
yarn workspace dungeon-crawl build
```

Dev server runs at: `http://localhost:5173`

## 🏗️ Building All Apps

```bash
# Build all apps in parallel
yarn build:all

# Or build individually
yarn build                        # Portfolio
yarn build:eternal-devotion      # Art gallery
yarn build:dungeon-crawl         # Game
```

Build outputs:
- `apps/portfolio/dist/` - Main portfolio
- `apps/eternal-devotion/dist/` - Art gallery
- `apps/dungeon-crawl/dist/` - Game

## 🧪 Testing Builds Locally

After building all apps, you can test the full deployment structure:

```bash
# Build all apps
yarn build
yarn build:eternal-devotion
yarn build:dungeon-crawl

# Move sub-apps into portfolio dist (mimics deployment)
mv apps/eternal-devotion/dist apps/portfolio/dist/eternal-devotion
mv apps/dungeon-crawl/dist apps/portfolio/dist/dungeon-crawl

# Serve the combined build
npx serve apps/portfolio/dist
```

Then visit:
- `http://localhost:3000` - Portfolio
- `http://localhost:3000/eternal-devotion` - Art gallery
- `http://localhost:3000/dungeon-crawl` - Game

## 📦 Managing Dependencies

### Adding Dependencies

**Shared dependency (used by multiple apps):**
```bash
# Add to root (available to all apps)
yarn add -W <package-name>
yarn add -W -D <dev-package>
```

**App-specific dependency:**
```bash
# Add to specific workspace
yarn workspace portfolio add <package-name>
yarn workspace eternal-devotion add <package-name>
yarn workspace dungeon-crawl add <package-name>
```

### Updating Dependencies

```bash
# Update all dependencies
yarn upgrade

# Update specific package across all apps
yarn upgrade <package-name>

# Update dependencies in specific workspace
yarn workspace portfolio upgrade
```

### Checking Dependency Usage

```bash
# See why a package is installed
yarn why <package-name>

# List all workspaces
yarn workspaces list

# Run command in all workspaces
yarn workspaces foreach run <command>
```

## 🔧 Common Tasks

### Linting

```bash
# Lint all apps
yarn lint

# Lint specific app
yarn workspace portfolio lint
yarn workspace eternal-devotion lint
yarn workspace dungeon-crawl lint
```

### Type Checking

```bash
# Type check all apps (runs during build)
yarn workspaces foreach run build
```

### Cleaning

```bash
# Remove all build outputs
rm -rf apps/*/dist

# Remove all node_modules (use with caution)
rm -rf node_modules apps/*/node_modules

# Reinstall everything from scratch
yarn install
```

## 🚢 Deployment

Deployment happens automatically via GitHub Actions when pushing to `main` or merging PRs.

### Deployment Process

1. **Trigger**: Push to `main` or merge PR
2. **Install**: Single `yarn install --frozen-lockfile` for all apps
3. **Build Portfolio**: `yarn workspace portfolio build`
4. **Build Eternal Devotion**: `yarn workspace eternal-devotion build`
5. **Build Dungeon Crawl**: `yarn workspace dungeon-crawl build`
6. **Merge Builds**: Sub-app dist folders moved into portfolio dist
7. **Deploy**: Unified dist folder deployed to GitHub Pages

### Deployment URLs

- **Portfolio**: `https://michael-eightnine.github.io/`
- **Eternal Devotion**: `https://michael-eightnine.github.io/eternal-devotion/`
- **Dungeon Crawl**: `https://michael-eightnine.github.io/dungeon-crawl/`

### Manual Deployment

If you need to deploy manually:

```bash
# Build all apps
yarn build:all

# Move sub-apps into portfolio dist
mv apps/eternal-devotion/dist apps/portfolio/dist/eternal-devotion
mv apps/dungeon-crawl/dist apps/portfolio/dist/dungeon-crawl

# Deploy apps/portfolio/dist to hosting
```

## 🐛 Troubleshooting

### "Cannot find module" errors

```bash
# Reinstall dependencies
yarn install
```

### Build fails with TypeScript errors

```bash
# Clean and rebuild
rm -rf apps/*/dist apps/*/.tsbuildinfo
yarn build
```

### Workspace not found

```bash
# Check workspace exists in package.json workspaces array
cat package.json | grep workspaces

# List all workspaces
yarn workspaces list
```

### Different versions of dependencies

```bash
# Check which version is installed
yarn why <package-name>

# Ensure app package.json uses "*" for shared deps
# Example:
# "dependencies": {
#   "react": "*"  // Uses version from root
# }
```

### Port already in use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5173   # Windows (find PID, then kill)

# Or use different port
vite --port 5174
```

## 📊 Workspace Benefits

### What You Get

✅ **Single `yarn install`** - Install once for all apps (~15s instead of 3x ~15s)
✅ **Shared dependencies** - ~200MB saved (no duplicate node_modules)
✅ **Unified lockfile** - Consistent versions across all apps
✅ **Parallel commands** - Run scripts across all apps simultaneously
✅ **Faster CI/CD** - One install step instead of three

### App Independence

Each app maintains its own:
- Build configuration (`vite.config.ts`)
- TypeScript configuration (`tsconfig.json`)
- Base path for deployment
- Dev server settings
- App-specific dependencies (via package.json)

## 🔄 Migrating Between Workspaces

To work on a different app:

```bash
# Switch apps (just change the workspace name)
yarn workspace portfolio dev      # → yarn workspace eternal-devotion dev
yarn workspace portfolio build    # → yarn workspace dungeon-crawl build
```

No need to:
- Change directories
- Reinstall dependencies
- Restart your IDE

## 📝 Adding a New Sub-SPA

To add a fourth app following this pattern:

1. **Create app directory**:
   ```bash
   mkdir apps/new-app
   ```

2. **Create package.json**:
   ```json
   {
     "name": "new-app",
     "private": true,
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "tsc -b && vite build"
     },
     "dependencies": {
       "react": "*",
       "react-dom": "*"
     },
     "devDependencies": {
       "vite": "*",
       "typescript": "*"
       // ...other shared deps with "*"
     }
   }
   ```

3. **Create vite.config.ts**:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     base: '/new-app',  // Important!
     plugins: [react()],
   });
   ```

4. **Add workspace scripts** to root `package.json`:
   ```json
   {
     "scripts": {
       "dev:new-app": "yarn workspace new-app dev",
       "build:new-app": "yarn workspace new-app build"
     }
   }
   ```

5. **Add to GitHub Actions** (`.github/workflows/with-sub-app.yml`):
   ```yaml
   - name: Build New App
     run: |
       yarn workspace new-app build
       mv apps/new-app/dist apps/portfolio/dist/new-app
   ```

6. **Install and test**:
   ```bash
   yarn install
   yarn dev:new-app
   ```

## 🎯 Best Practices

### DO ✅

- Keep shared dependencies in root `package.json`
- Use `"*"` in app `package.json` for shared deps
- Run `yarn install` from repository root
- Use workspace commands: `yarn workspace <name> <command>`
- Commit `yarn.lock` to version control
- Test builds locally before pushing

### DON'T ❌

- Don't run `yarn install` inside app directories
- Don't duplicate dependencies in app package.json (use `"*"`)
- Don't commit `node_modules` or `dist` folders
- Don't use `npm` or `pnpm` (stick with yarn for workspaces)
- Don't manually edit `yarn.lock`

## 🆘 Getting Help

### Check Workspace Status

```bash
# List all workspaces
yarn workspaces list

# Show workspace dependency tree
yarn workspaces info

# Check specific package version
yarn why <package-name>
```

### Useful Commands

```bash
# Run script in all workspaces
yarn workspaces foreach run build

# Run script in parallel
yarn workspaces foreach -p run lint

# Run script only if it exists
yarn workspaces foreach -pi run test
```

### Resources

- [Yarn Workspaces Documentation](https://yarnpkg.com/features/workspaces)
- [Vite Multi-Page Apps](https://vitejs.dev/guide/build.html#multi-page-app)
- [Monorepo Best Practices](https://monorepo.tools/)

---

**Happy coding! 🎨🎮💼**
