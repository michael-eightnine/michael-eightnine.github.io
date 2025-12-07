# Architecture Improvements - DRY-er Monorepo Approach

## Current Issues
- 3 separate `node_modules` directories (~100MB+ each)
- Duplicate package.json files with identical scripts
- Duplicate build configs (vite, tsconfig, eslint)
- 3 separate `yarn install` steps in CI/CD

## Recommended: Yarn Workspaces Setup

### Directory Structure
```
michael-eightnine.github.io/
├── package.json                    # Root workspace config
├── yarn.lock                       # Shared lockfile
├── node_modules/                   # Shared dependencies
├── apps/
│   ├── portfolio/                  # Main portfolio
│   │   ├── package.json            # App-specific deps only
│   │   ├── vite.config.ts          # Base: './'
│   │   └── src/
│   ├── eternal-devotion/           # Sub-SPA 1
│   │   ├── package.json            # App-specific deps (react-router)
│   │   ├── vite.config.ts          # Base: '/eternal-devotion'
│   │   └── src/
│   └── dungeon-crawl/              # Sub-SPA 2
│       ├── package.json            # App-specific deps (if any)
│       ├── vite.config.ts          # Base: '/dungeon-crawl'
│       └── src/
└── configs/                        # Optional: shared configs
    ├── vite.config.base.ts
    ├── tsconfig.base.json
    └── eslint.config.base.js
```

### Root package.json
```json
{
  "name": "michael-smith-portfolio-monorepo",
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "build": "yarn workspace portfolio build",
    "build:eternal-devotion": "yarn workspace eternal-devotion build",
    "build:dungeon-crawl": "yarn workspace dungeon-crawl build",
    "build:all": "yarn workspaces foreach -A run build",
    "dev": "yarn workspace portfolio dev",
    "dev:eternal-devotion": "yarn workspace eternal-devotion dev",
    "dev:dungeon-crawl": "yarn workspace dungeon-crawl dev"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/node": "^22.10.5",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.3",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "prettier": "^3.4.2",
    "sass-embedded": "^1.83.1",
    "scss-reset": "^1.4.6",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### App package.json (Minimal)
```json
{
  "name": "dungeon-crawl",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "*",
    "react-dom": "*"
  },
  "devDependencies": {
    "vite": "*",
    "typescript": "*"
  }
}
```

Using `"*"` hoists dependencies to root workspace.

### Updated GitHub Actions
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "yarn"

      # Single install for all apps
      - name: Install dependencies
        run: yarn install --frozen-lockfile

      # Build all apps
      - name: Build Portfolio
        run: yarn workspace portfolio build

      - name: Build Eternal Devotion
        run: |
          yarn workspace eternal-devotion build
          mv apps/eternal-devotion/dist apps/portfolio/dist/eternal-devotion

      - name: Build Dungeon Crawl
        run: |
          yarn workspace dungeon-crawl build
          mv apps/dungeon-crawl/dist apps/portfolio/dist/dungeon-crawl

      # Deploy
      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "apps/portfolio/dist"

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## Benefits of This Approach

### Developer Experience
- ✅ Single `yarn install` (faster, uses less disk space)
- ✅ Single `yarn.lock` (easier dependency management)
- ✅ Easy to run any app: `yarn dev:dungeon-crawl`
- ✅ Can still work on apps independently

### Build Performance
- ✅ Shared node_modules cache in CI
- ✅ Faster installs (dependencies cached together)
- ✅ Can add build caching later if needed

### Maintenance
- ✅ Update shared dependencies once in root
- ✅ Override specific versions in app package.json if needed
- ✅ Still maintains app independence

### Disk Space
- ✅ ~200MB saved (2 fewer node_modules)
- ✅ Single yarn cache

## Migration Steps

1. **Create workspace structure**
   ```bash
   mkdir apps
   mv src apps/portfolio
   mv eternal-devotion apps/
   mv dungeon-crawl apps/
   ```

2. **Create root package.json** with workspace config

3. **Update app package.json files** to use `"*"` for shared deps

4. **Run `yarn install`** to link workspaces

5. **Update paths in configs**
   - Update import paths if needed
   - Update vite build output paths

6. **Update GitHub Actions** workflow

7. **Test builds locally**

8. **Commit and push**

## Alternative: Stay As-Is

If you prefer simplicity over DRY:

### When Current Approach Makes Sense
- Small number of sub-SPAs (you have 3)
- Rarely update dependencies
- Value independence > efficiency
- Don't want monorepo complexity

### Minimal Improvements Without Workspaces
- Create a `scripts/sync-configs.sh` to copy shared configs
- Document "canonical" config in one app
- Add CI check to ensure configs stay in sync

## Recommendation

**For your portfolio:** Start with **Yarn Workspaces** but keep configs separate for now.

This gives you:
- 80% of the benefits (shared dependencies, single install)
- 20% of the complexity (just workspaces, no shared config packages)
- Easy to add shared configs later if needed
- Maintains app independence

You can always add more DRY-ness later:
1. Start: Yarn Workspaces (shared deps)
2. Later: Add shared base configs if duplication bothers you
3. Much later: Add Turborepo/Nx if you have many more apps

## Trade-off Summary

| Approach | DRY Score | Complexity | Independence | Disk Space |
|----------|-----------|------------|--------------|------------|
| **Current (3 separate)** | ⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ❌❌❌ |
| **Workspaces only** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ✅✅✅ |
| **Workspaces + Shared Configs** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ✅✅✅ |
| **Turborepo/Nx** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ✅✅✅✅ |

For a portfolio with 2-3 sub-SPAs: **Workspaces only** is the sweet spot.
