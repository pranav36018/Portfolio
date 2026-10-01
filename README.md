# Pranav V Rao — Portfolio

A high-performance, responsive cloud and full-stack engineer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Extracted and reconstructed directly from [pranav-v-rao.lovable.app](https://pranav-v-rao.lovable.app/).

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Lucide icons.
- **Dark Mode / OKLCH Glow Theme**: Glassmorphic cards, gradient text, ambient animated floating orbs, and neon glow accents.
- **Scroll Reveal Animations**: Smooth entry animations using custom IntersectionObserver hooks.
- **Fully Modular Architecture**:
  - Sections divided into clean TypeScript components: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Services`, `Experience`, `Education`, `Certifications`, `Achievements`, `Contact`, `Footer`.
  - Reusable UI primitives: `Section`, `Card`, `Pill`, `Reveal`.
  - Centralized portfolio content in `src/data/portfolioData.ts` for quick updates.
- **Interactive Contact Form**: Client-side validation with real-time feedback.
- **High-Resolution Assets**:
  - High-res profile portrait (`pranav-profile.png`)
  - Featured project preview images (`project-blocklearn.jpg`, `project-outbreak.jpg`)
  - Site favicon (`favicon.ico`)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or newer).

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The output will be generated inside the `dist/` directory, ready to deploy to GitHub Pages, Vercel, Netlify, Cloudflare Pages, or Firebase.

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── pranav-profile.png
│       ├── project-blocklearn.jpg
│       └── project-outbreak.jpg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Card.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Pill.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx
│   │   ├── Section.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   └── icons.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
