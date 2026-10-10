# Khalid Mohammed Fahad - Portfolio

Personal portfolio built with React and Vite. All content comes from `src/data.js`.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build
```

The static site is written to `dist/`.

## Deploy

- **Netlify / Vercel**: import the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: build, then publish the `dist/` folder (the config uses a relative base, so it works from a sub-path).

## Customize

- Edit text, projects, skills and links in `src/data.js`.
- Change colours at the top of `src/styles.css` (the `:root` variables).
