# JeatLabs - Landing Page

> Modern React-based landing page for JeatLabs, specialists in Shopify application development.

## Overview

Professional static website built with React and Vite, showcasing JeatLabs' services in Shopify development. Features a component-based architecture for easy maintenance and scalability.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** Vanilla CSS with CSS Modules
- **Deployment:** GitHub Pages

## Project Structure

```
jeatlabs-page/
├── src/                     # Source code (development)
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Fixed navigation header
│   │   ├── Hero.jsx         # Main hero section
│   │   ├── Services.jsx     # Services grid display
│   │   ├── About.jsx        # About company section
│   │   ├── Contact.jsx      # Contact information
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Main landing page
│   │   ├── ServicesPage.jsx # Services detail page
│   │   └── ContactPage.jsx  # Contact page
│   ├── styles/              # Component-specific styles
│   │   ├── globals.css      # Global styles and reset
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Services.css
│   │   ├── About.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── assets/              # Source assets (images, icons)
│   ├── App.jsx              # Main app component with routing
│   └── main.jsx             # Application entry point
├── public/                  # Public static assets
├── dist/                    # Build output (gitignored)
├── assets/                  # COMPILED assets for GitHub Pages (committed)
│   ├── index-*.js           # Compiled JavaScript bundle
│   └── index-*.css          # Compiled CSS bundle
├── index.html               # COMPILED HTML for GitHub Pages (committed)
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
├── claude.md                # Claude workflow rules
├── DEPLOYMENT.md            # Deployment guide
└── README.md                # This file
```

**Important:** The root `index.html` and `assets/` folder are the COMPILED build output that GitHub Pages serves. The source code lives in `src/`.

## Features

- **Component-Based Architecture:** Modular, reusable React components
- **Client-Side Routing:** Multi-page experience with React Router
- **Responsive Design:** Mobile-first approach, works on all devices
- **Fast Performance:** Vite's lightning-fast HMR and optimized builds
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Clean Codebase:** Well-documented, follows React best practices

## Available Routes

- `/` - Home page with all sections
- `/servicios` - Services detail page
- `/contacto` - Contact page

## Development

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jeatlabs/jeatlabs-page.git
   cd jeatlabs-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

   Output will be in the `dist/` directory

5. **Preview production build:**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

## Deployment to GitHub Pages

The site is deployed to GitHub Pages and serves from the `main` branch root:

**Live URL:** https://jeatlabs.github.io/jeatlabs-page/

### How It Works

GitHub Pages serves the compiled files directly from the root of the `main` branch:
- `index.html` (root) - Compiled HTML file
- `assets/` (root) - Compiled JS and CSS bundles

The source code in `src/` is NOT served, only the build output.

### Deployment Process

**IMPORTANT:** Follow these exact steps when making changes:

1. **Make changes in `src/` files** (components, styles, etc.)

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

   This compiles React to the ROOT directory:
   - Overwrites `index.html` in root with compiled version
   - Regenerates `assets/` folder with new bundles

4. **Verify build locally:**
   ```bash
   npm run preview
   ```
   Access at: http://localhost:4173/jeatlabs-page/

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

6. **Wait 30-60 seconds** for GitHub Pages to update

7. **Verify deployment:** Visit https://jeatlabs.github.io/jeatlabs-page/

### Key Configuration

**vite.config.js:**
```javascript
export default defineConfig({
  base: '/jeatlabs-page/',        // GitHub Pages subdirectory
  build: {
    outDir: '.',                   // Build to ROOT directory
    emptyOutDir: false,            // Don't delete source files
  },
})
```

**src/App.jsx:**
```javascript
<Router basename="/jeatlabs-page">  // Match Vite base path
```

### .gitignore Configuration

The `dist/` folder is gitignored, but root `index.html` and `assets/` are NOT ignored so they can be committed to the repo.

## Code Quality

- **ESLint:** Configured with React-specific rules
- **Component Documentation:** JSDoc comments on all components
- **Clean Code:** Follows React and JavaScript best practices
- **Modular CSS:** Component-scoped styles for better maintainability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`
5. Commit with descriptive messages
6. Push and create a pull request

## Contact

For inquiries about Shopify application development:

**Email:** jeat.labs@gmail.com

## License

© 2025 JeatLabs. All rights reserved.
