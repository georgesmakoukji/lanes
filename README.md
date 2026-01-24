## Lanes — Shipping Facilitation Landing Page (Next.js)

This is a marketing site for **Lanes**, a company that specializes in shipping facilitation for clients. It is built as a modern **Next.js** single-page app with a dark, card-based UI and smooth client-side interactions.

### Tech stack

- **Next.js 14** (App Router, React 18)
- **React** client components for navigation, smooth scrolling, and the contact form
- **Global CSS** for the layout, typography, and visual design

### Structure

- `app/layout.js`: Root layout and metadata definitions.
- `app/page.js`: Main landing page with sections for hero, services, how it works, why Lanes, and contact, implemented as a React component.
- `app/globals.css`: Custom responsive styling with a dark, gradient-heavy look and card-based layout.
- `next.config.mjs`: Basic Next.js configuration.
- `package.json`: Scripts and dependencies for running and building the app.

### Running locally

From the project root:

```bash
cd /Users/georgesantoinemakoukji/Desktop/development/lanes
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Deploying on Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, click **New Project** and import the repo.
3. Vercel will auto-detect **Next.js**:
   - **Framework**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Click **Deploy** — your Lanes site will be available on your Vercel domain.



