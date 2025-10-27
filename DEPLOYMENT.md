# Deployment Guide

## Current Status

✅ **React Application:** Fully functional and tested locally
⚠️ **GitHub Pages:** Requires configuration change

## What Has Been Done

1. ✅ Migrated static HTML to React + Vite
2. ✅ Configured routing with React Router DOM
3. ✅ Set up basename for GitHub Pages subdirectory
4. ✅ Built production bundle successfully
5. ✅ Deployed to `gh-pages` branch
6. ✅ Tested locally - works perfectly

## GitHub Pages Configuration Needed

The site is currently deployed to the `gh-pages` branch, but GitHub Pages needs to be configured to serve from that branch.

### Steps to Configure (Manual - GitHub Settings):

1. Go to: https://github.com/jeatlabs/jeatlabs-page/settings/pages
2. Under "Source", select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
3. Click "Save"
4. Wait 2-3 minutes for deployment
5. Site will be live at: https://jeatlabs.github.io/jeatlabs-page/

## Local Development

### Start Development Server
```bash
npm run dev
```
Access at: http://localhost:5173

### Build for Production
```bash
npm run build
```
Output in `dist/` directory

### Preview Production Build
```bash
npm run preview
```
Access at: http://localhost:4173/jeatlabs-page/

### Deploy to GitHub Pages
```bash
npm run deploy
```
This builds and pushes to `gh-pages` branch automatically.

## Project Structure

The React app is organized as follows:

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/           # Page-level components
│   ├── Home.jsx
│   ├── ServicesPage.jsx
│   └── ContactPage.jsx
├── styles/          # Component styles
│   ├── globals.css
│   ├── Header.css
│   ├── Hero.css
│   ├── Services.css
│   ├── About.css
│   ├── Contact.css
│   └── Footer.css
└── App.jsx          # Main app with routing
```

## Available Routes

- `/` - Home page (all sections)
- `/servicios` - Services detail page
- `/contacto` - Contact page

## Build Output

Production build creates:
- `dist/index.html` - Single HTML file
- `dist/assets/` - Bundled JS and CSS files
- Total size: ~237 KB (minified + gzipped: ~74 KB)

## Notes

- The app uses client-side routing (SPA)
- All routes work correctly with the basename configuration
- Build is optimized for production (minified, tree-shaken)
- No server-side configuration needed
