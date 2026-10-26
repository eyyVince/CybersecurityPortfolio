# Vincent Bernaldo — Portfolio (React)

A React + Vite rebuild of the portfolio site, same design system as the original HTML version (dark theme, amber/teal accents, `nmap`-scan hero).

## Project structure

```
src/
  data.js              ← all content lives here (experience, skills, projects, certs)
  index.css            ← global styles / design tokens
  App.jsx              ← page layout
  components/
    Nav.jsx
    Hero.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
    Certifications.jsx
    Footer.jsx
```

To update content (new job, new project, new skill), edit `src/data.js` — you don't need to touch the components.

## Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy to Vercel (matches your existing eyyvinceportfolio.vercel.app setup)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite** (auto-detected). No extra config needed.
4. Deploy — Vercel runs `npm run build` and serves `dist/` automatically.

Or from the CLI:

```bash
npm install -g vercel
vercel
```
