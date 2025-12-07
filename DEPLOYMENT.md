# Deployment Guide

## Automatic Deployment (Recommended)

The repository uses GitHub Actions for continuous deployment. Every push to `main` or merged PR automatically triggers a build and deployment.

### Deployment Workflow

**Trigger Events:**
- Push to `main` branch
- Pull request merged to `main`
- Manual workflow dispatch

**Build Steps:**
1. Checkout code
2. Setup Node.js 20 with Yarn cache
3. Install all workspace dependencies (one command)
4. Build portfolio app
5. Build eternal-devotion app → move to `portfolio/dist/eternal-devotion`
6. Build dungeon-crawl app → move to `portfolio/dist/dungeon-crawl`
7. Deploy unified dist folder to GitHub Pages

**Total Build Time:** ~2-3 minutes

### Monitoring Deployments

**Check deployment status:**
1. Go to GitHub repository
2. Click "Actions" tab
3. View latest workflow run

**Deployment URLs:**
- **Main**: https://michael-eightnine.github.io/
- **Eternal Devotion**: https://michael-eightnine.github.io/eternal-devotion/
- **Dungeon Crawl**: https://michael-eightnine.github.io/dungeon-crawl/

### Deployment Verification

After deployment completes:

```bash
# Check main portfolio
curl -I https://michael-eightnine.github.io/

# Check eternal-devotion
curl -I https://michael-eightnine.github.io/eternal-devotion/

# Check dungeon-crawl
curl -I https://michael-eightnine.github.io/dungeon-crawl/
```

All should return `200 OK`.

## Manual Deployment

If you need to deploy manually (rare):

### Prerequisites

```bash
# Ensure you have access to GitHub Pages
# Repository Settings → Pages → Source should be "GitHub Actions"
```

### Build Locally

```bash
# 1. Install dependencies
yarn install

# 2. Build all apps
yarn build
yarn build:eternal-devotion
yarn build:dungeon-crawl

# 3. Verify builds exist
ls -la apps/portfolio/dist
ls -la apps/eternal-devotion/dist
ls -la apps/dungeon-crawl/dist
```

### Test Build Locally

```bash
# Merge builds (like CI does)
mv apps/eternal-devotion/dist apps/portfolio/dist/eternal-devotion
mv apps/dungeon-crawl/dist apps/portfolio/dist/dungeon-crawl

# Serve locally
npx serve apps/portfolio/dist -p 3000

# Test in browser
# - http://localhost:3000              (Portfolio)
# - http://localhost:3000/eternal-devotion  (Art Gallery)
# - http://localhost:3000/dungeon-crawl     (Game)
```

### Manual GitHub Pages Deploy

```bash
# Option 1: Trigger workflow manually
# Go to: GitHub → Actions → "Vite 2 GH - Multi Repo" → "Run workflow"

# Option 2: Push to main (triggers auto-deploy)
git push origin main
```

## Deployment Structure

### Repository Structure
```
apps/
├── portfolio/dist/           # Built by: yarn workspace portfolio build
│   ├── index.html
│   ├── assets/
│   ├── eternal-devotion/     # Moved from apps/eternal-devotion/dist
│   │   ├── index.html
│   │   └── assets/
│   └── dungeon-crawl/        # Moved from apps/dungeon-crawl/dist
│       ├── index.html
│       └── assets/
```

### URL Routing

All three apps are served from a single GitHub Pages deployment:

| App | Build Command | Output | Deploy Path | URL |
|-----|---------------|--------|-------------|-----|
| **Portfolio** | `yarn workspace portfolio build` | `apps/portfolio/dist/` | `/` | https://...github.io/ |
| **Eternal Devotion** | `yarn workspace eternal-devotion build` | `apps/eternal-devotion/dist/` → `apps/portfolio/dist/eternal-devotion/` | `/eternal-devotion/` | https://...github.io/eternal-devotion/ |
| **Dungeon Crawl** | `yarn workspace dungeon-crawl build` | `apps/dungeon-crawl/dist/` → `apps/portfolio/dist/dungeon-crawl/` | `/dungeon-crawl/` | https://...github.io/dungeon-crawl/ |

### Base Path Configuration

Each app's `vite.config.ts` must have the correct `base` path:

**Portfolio** (`apps/portfolio/vite.config.ts`):
```typescript
export default defineConfig({
  base: './',  // Relative paths
  // ...
});
```

**Eternal Devotion** (`apps/eternal-devotion/vite.config.ts`):
```typescript
export default defineConfig({
  base: '/eternal-devotion',  // Absolute path from root
  // ...
});
```

**Dungeon Crawl** (`apps/dungeon-crawl/vite.config.ts`):
```typescript
export default defineConfig({
  base: '/dungeon-crawl',  // Absolute path from root
  // ...
});
```

## Deployment Troubleshooting

### Build Fails in CI

**Symptom:** GitHub Actions workflow fails during build

**Solution:**
```bash
# Test build locally first
yarn build:all

# Check for TypeScript errors
yarn workspaces foreach run build

# Check GitHub Actions logs
# Actions tab → Failed workflow → Click on failed step
```

### Sub-app 404 Errors

**Symptom:** Main portfolio works, but `/eternal-devotion` returns 404

**Check:**
1. Verify base path in `vite.config.ts`
2. Check GitHub Actions moved dist correctly
3. Verify dist structure:
   ```bash
   # In GitHub Pages deploy, verify:
   apps/portfolio/dist/eternal-devotion/index.html exists
   apps/portfolio/dist/dungeon-crawl/index.html exists
   ```

### Assets Not Loading

**Symptom:** HTML loads but CSS/JS fails (blank page)

**Causes:**
- Incorrect `base` path in vite.config.ts
- Assets not bundled correctly

**Fix:**
```typescript
// Ensure vite.config.ts has correct base
export default defineConfig({
  base: '/app-name',  // Must match deployment path
  // ...
});
```

### Cache Issues

**Symptom:** Old version still showing after deployment

**Solution:**
```bash
# Hard refresh in browser
# Chrome/Edge: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
# Firefox: Ctrl + Shift + Delete → Clear cache

# Or use private/incognito window
```

### Workflow Permissions Error

**Symptom:** GitHub Actions fails with permissions error

**Fix:**
```bash
# Repository Settings → Actions → General → Workflow permissions
# Select: "Read and write permissions"
# Check: "Allow GitHub Actions to create and approve pull requests"
```

## Deployment Best Practices

### Before Deploying

✅ **Test locally:**
```bash
yarn build:all
# Merge and serve locally to test
```

✅ **Check no TypeScript errors:**
```bash
yarn workspaces foreach run build
```

✅ **Verify all links work:**
- Portfolio → eternal-devotion
- Portfolio → dungeon-crawl
- Sub-apps → back to portfolio

✅ **Test responsive design:**
- Desktop (1920px, 1366px)
- Tablet (768px)
- Mobile (375px, 390px)

### After Deploying

✅ **Verify deployment:**
```bash
# Check all three URLs return 200
curl -I https://michael-eightnine.github.io/
curl -I https://michael-eightnine.github.io/eternal-devotion/
curl -I https://michael-eightnine.github.io/dungeon-crawl/
```

✅ **Visual check:**
- Visit all three URLs in browser
- Test navigation between apps
- Verify no console errors (F12)

✅ **Performance check:**
- Check load times (should be < 3s)
- Verify images load correctly
- Test on mobile device

### Rollback Procedure

If a deployment breaks something:

```bash
# 1. Find last working commit
git log --oneline

# 2. Revert to that commit
git revert <bad-commit-hash>

# 3. Push to trigger redeploy
git push origin main

# Or: Manually trigger workflow with previous commit
# Actions → Vite 2 GH - Multi Repo → Run workflow → Select commit
```

## GitHub Pages Settings

### Required Configuration

**Repository Settings → Pages:**
- **Source:** GitHub Actions
- **Branch:** Not applicable (uses Actions)
- **Custom domain:** Optional

**Repository Settings → Actions:**
- **Actions permissions:** Allow all actions
- **Workflow permissions:** Read and write

### Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to `apps/portfolio/public/`:
   ```
   your-domain.com
   ```

2. Configure DNS:
   ```
   Type: CNAME
   Name: www (or @)
   Value: <username>.github.io
   ```

3. Update in GitHub:
   Settings → Pages → Custom domain → your-domain.com

## CI/CD Configuration

### GitHub Actions Workflow

**File:** `.github/workflows/with-sub-app.yml`

**Key Configuration:**
```yaml
permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true  # Cancels running deploy if new one starts
```

### Caching

Yarn dependencies are cached automatically:
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: "yarn"  # Caches node_modules
```

**Cache benefits:**
- First run: ~30s to install dependencies
- Subsequent runs: ~5s (cached)

### Artifacts

Build artifact is uploaded and deployed:
```yaml
- uses: actions/upload-pages-artifact@v3
  with:
    path: "./apps/portfolio/dist"
```

**Artifact retention:** 90 days (GitHub default)

## Monitoring & Analytics

### Build Status Badge

Add to README.md:
```markdown
![Deploy Status](https://github.com/<username>/<repo>/actions/workflows/with-sub-app.yml/badge.svg)
```

### Deployment Notifications

**Enable GitHub notifications:**
- Settings → Notifications → Actions
- Check "Send notifications for failed workflows"

### Analytics (Optional)

Add Google Analytics to track:
- Page views per app
- User flow between apps
- Most visited sub-app

## Support

### Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Check `yarn build:all` locally |
| 404 errors | Verify `base` path in vite.config.ts |
| Assets 404 | Check dist structure after build |
| Slow deploys | Check GitHub Actions status page |
| Cache issues | Hard refresh or clear browser cache |

### Getting Help

1. Check GitHub Actions logs
2. Review [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
3. Check [GitHub Pages Docs](https://docs.github.com/en/pages)
4. Test build locally first

---

**Deployment is automated and reliable!** 🚀

Just push to `main` and GitHub Actions handles everything.
