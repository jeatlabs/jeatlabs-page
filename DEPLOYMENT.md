# Deployment Guide - JeatLabs Page

## Current Status

✅ **React Application:** Fully functional and deployed
✅ **GitHub Pages:** Serving from `main` branch root
✅ **Live Site:** https://jeatlabs.github.io/jeatlabs-page/

## How GitHub Pages Deployment Works

GitHub Pages serves the compiled build output directly from the **root of the `main` branch**.

### What Gets Deployed

**Root directory files (committed to git):**
- `index.html` - Compiled HTML with React app
- `assets/index-*.js` - Compiled JavaScript bundle (~231 KB)
- `assets/index-*.css` - Compiled CSS bundle (~3 KB)

**Source files (NOT served by GitHub Pages):**
- `src/` - React source code
- `node_modules/` - Dependencies
- `dist/` - Temporary build directory (gitignored)

## Critical Deployment Process

### Step-by-Step Guide

**1. Make Changes in Source Files**

Edit files in the `src/` directory:
```bash
src/components/Header.jsx
src/pages/Home.jsx
src/styles/Hero.css
# etc.
```

**2. Test Locally**

```bash
npm run dev
```
- Opens http://localhost:5173
- Hot Module Replacement (HMR) for instant updates

**3. Build for Production**

**⚠️ CRITICAL STEP - DO NOT SKIP:**

```bash
npm run build
```

This command:
- Compiles all React/JSX to vanilla JavaScript
- Bundles and minifies all code
- **Overwrites `index.html` in root directory**
- **Regenerates `assets/` folder in root**
- Outputs to ROOT (not `dist/`)

**4. Preview Build Locally**

```bash
npm run preview
```
- Opens http://localhost:4173/jeatlabs-page/
- Simulates exactly how GitHub Pages serves it
- Test all routes work correctly

**5. Commit Build Output**

```bash
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

**IMPORTANT:** Both source files AND compiled output must be committed:
- Source: `src/**/*`
- Compiled: `index.html`, `assets/*`

**6. Wait for Deployment**

- GitHub Pages automatically detects the push
- Deployment takes 30-60 seconds
- No manual steps required

**7. Verify Deployment**

Visit: https://jeatlabs.github.io/jeatlabs-page/

Check:
- All content displays correctly
- No console errors
- All routes work (`/servicios`, `/contacto`)
- Styles are applied

## Configuration Details

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jeatlabs-page/',      // GitHub Pages subdirectory
  build: {
    outDir: '.',                 // ⚠️ BUILD TO ROOT (not 'dist')
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: false,          // Don't delete source files
  },
})
```

### src/App.jsx

```javascript
<Router basename="/jeatlabs-page">  {/* Must match vite.config.js base */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/servicios" element={<ServicesPage />} />
    <Route path="/contacto" element={<ContactPage />} />
  </Routes>
</Router>
```

### .gitignore

```
node_modules
dist              # Temp build directory (ignored)
dist-ssr
*.local

# Root index.html and assets/ are NOT ignored
# They must be committed for GitHub Pages
```

## Common Issues & Solutions

### Issue: Blank page on GitHub Pages

**Cause:** Forgot to run `npm run build` before pushing

**Solution:**
```bash
npm run build
git add index.html assets/
git commit -m "Add build output"
git push
```

### Issue: 404 on assets

**Cause:** Wrong `base` path in vite.config.js

**Solution:** Ensure `base: '/jeatlabs-page/'` matches your repo name

### Issue: Routing doesn't work

**Cause:** `basename` in Router doesn't match vite config

**Solution:** Both must be `/jeatlabs-page/`:
- vite.config.js: `base: '/jeatlabs-page/'`
- App.jsx: `<Router basename="/jeatlabs-page">`

### Issue: Changes not showing

**Cause:** Browser cache

**Solution:** Hard refresh (Cmd+Shift+R) or add query param `?v=timestamp`

## Project Structure

```
jeatlabs-page/
├── src/                      # SOURCE CODE (edit these)
│   ├── components/           # React components
│   ├── pages/                # Page components
│   ├── styles/               # CSS files
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # Entry point
│
├── index.html                # COMPILED (auto-generated)
├── assets/                   # COMPILED (auto-generated)
│   ├── index-*.js           # Bundled JavaScript
│   └── index-*.css          # Bundled CSS
│
├── dist/                     # Temp build (gitignored)
├── node_modules/             # Dependencies (gitignored)
│
├── vite.config.js            # Vite configuration
├── package.json              # Scripts and dependencies
├── claude.md                 # Workflow rules
├── DEPLOYMENT.md             # This file
└── README.md                 # Documentation
```

## Available Routes

- `/` - Home page with all sections
- `/servicios` - Services detail page
- `/contacto` - Contact page

All routes use client-side routing (SPA).

## Build Output Details

After `npm run build`:

```
index.html                   0.63 kB  (gzip: 0.36 kB)
assets/index-*.css           3.01 kB  (gzip: 1.00 kB)
assets/index-*.js          231.33 kB  (gzip: 74.00 kB)
```

Total: ~237 KB raw, ~75 KB gzipped

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server (localhost:5173)

# Production
npm run build            # Build to root directory ⚠️ CRITICAL
npm run preview          # Preview build (localhost:4173)

# Deployment
git add .
git commit -m "message"
git push                 # Auto-deploys to GitHub Pages

# Code Quality
npm run lint             # Run ESLint
```

## Deployment Checklist

Before pushing to GitHub:

- [ ] Changes made in `src/` files
- [ ] Tested with `npm run dev`
- [ ] **Ran `npm run build`** ⚠️ CRITICAL
- [ ] Verified with `npm run preview`
- [ ] All routes work correctly
- [ ] No console errors
- [ ] Committed both source AND build output
- [ ] Pushed to GitHub
- [ ] Waited 30-60 seconds
- [ ] Verified on https://jeatlabs.github.io/jeatlabs-page/

## Emergency Rollback

If deployment breaks:

```bash
# Revert to previous commit
git log --oneline          # Find previous good commit
git revert HEAD            # Revert last commit
git push

# OR reset to specific commit
git reset --hard <commit-hash>
git push --force           # ⚠️ Use with caution
```

## Support

For issues or questions, refer to:
- [README.md](README.md) - Full documentation
- [claude.md](claude.md) - Workflow rules
- [Vite Docs](https://vitejs.dev/)
- [React Router Docs](https://reactrouter.com/)
