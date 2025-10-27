# Claude Workflow Rules - JeatLabs Page

## Technology Stack

This project is a **React + Vite application** that compiles to static files for GitHub Pages.

- **Source Code:** `src/` - React components, styles, pages
- **Build Output:** Root `index.html` + `assets/` folder
- **Deployment:** GitHub Pages serves from `main` branch root

## CRITICAL: GitHub Pages Build Process

**ALWAYS follow these exact steps when making changes:**

### 1. Make Changes in Source Files

Edit files in `src/` directory:
- Components: `src/components/*.jsx`
- Pages: `src/pages/*.jsx`
- Styles: `src/styles/*.css`
- App routing: `src/App.jsx`

**NEVER edit the root `index.html` or `assets/` directly - they are auto-generated!**

### 2. Test Locally During Development

```bash
npm run dev
```

Access at: http://localhost:5173

### 3. Build for GitHub Pages

**THIS IS CRITICAL - NEVER SKIP THIS STEP:**

```bash
npm run build
```

This command:
- Compiles all React code
- **Overwrites** `index.html` in the root directory
- **Regenerates** `assets/` folder with new JS/CSS bundles
- Output goes to ROOT directory (not `dist/`)

### 4. Verify Build Locally

```bash
npm run preview
```

Access at: http://localhost:4173/jeatlabs-page/

This simulates exactly how GitHub Pages will serve the site.

### 5. Commit Build Output

```bash
git add .
git commit -m "Your descriptive message"
git push
```

**IMPORTANT:** You MUST commit the compiled `index.html` and `assets/` files, not just the source code.

### 6. Wait for GitHub Pages Deployment

- Wait 30-60 seconds after pushing
- GitHub Pages automatically deploys from `main` branch root

### 7. Verify with Playwright

```bash
# In Claude, use Playwright to verify:
- Navigate to https://jeatlabs.github.io/jeatlabs-page/
- Take full page screenshot
- Check snapshot for all components
- Verify no console errors
```

## Configuration Reference

### vite.config.js

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/jeatlabs-page/',      // MUST match repo name
  build: {
    outDir: '.',                 // Build to ROOT (not 'dist')
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: false,          // Don't delete source files
  },
})
```

### src/App.jsx

```javascript
<Router basename="/jeatlabs-page">  // MUST match vite.config.js base
```

## Common Mistakes to Avoid

❌ **DON'T** edit root `index.html` directly
❌ **DON'T** forget to run `npm run build` before committing
❌ **DON'T** gitignore the root `assets/` folder
❌ **DON'T** change `base` in vite.config.js without matching it in App.jsx
❌ **DON'T** commit without building first

✅ **DO** edit files in `src/` directory
✅ **DO** run `npm run build` after every change
✅ **DO** commit both source and compiled files
✅ **DO** verify with Playwright before marking as complete
✅ **DO** wait 30-60 seconds for GitHub Pages to update

## Change Implementation Process

When a change is requested:

1. **Edit source files** in `src/`
2. **Test with** `npm run dev`
3. **Build with** `npm run build` ← CRITICAL STEP
4. **Preview with** `npm run preview`
5. **Commit and push** (includes compiled files)
6. **Wait** 30-60 seconds
7. **Verify with Playwright** at https://jeatlabs.github.io/jeatlabs-page/
8. **Take screenshot** for confirmation
9. **Check snapshot** for all components
10. **Mark as complete** only after verification

## TodoWrite Usage

- Create todos at the start of each task
- Mark tasks `in_progress` when starting
- Mark tasks `completed` ONLY after Playwright verification
- Track build step separately from code changes

## Verification Checklist

Before marking a task complete:

- [ ] Changes made in `src/` files
- [ ] `npm run build` executed successfully
- [ ] Root `index.html` and `assets/` updated
- [ ] Changes committed and pushed to GitHub
- [ ] Waited 30-60 seconds for deployment
- [ ] Playwright navigation successful
- [ ] Screenshot shows expected changes
- [ ] No console errors in browser
- [ ] All components rendering correctly
