# Abhishek Dhiman — Portfolio

A modern, minimal, dark-mystical portfolio built with:

- **React + Vite** — blazing fast dev/build
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth page + element animations
- **React Three Fiber** — subtle 3D particle background
- **Lenis** — silky smooth scrolling
- **React Router** — multi-page SPA (Home, About, Contact)
- **React Icons** — skill icons

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/       # Navbar, SectionWrapper, PageWrapper
│   ├── sections/     # Hero, Skills, Projects, ContactForm
│   ├── three/        # R3F BackgroundCanvas
│   └── ui/           # Button, GlassCard, SectionHeading, Terminal, CustomCursor
├── data/             # All site content (skills, education, socials)
├── hooks/            # useScrollReveal
├── pages/            # Home, About, Contact
└── styles/           # Global CSS + Tailwind directives
```

## ✏️ Customization

| What | Where |
|------|-------|
| Name, tagline | `src/components/sections/Hero.jsx` |
| Skills list | `src/data/index.js` → `SKILLS` |
| Education | `src/data/index.js` → `EDUCATION` |
| Social links / email | `src/data/index.js` → `SOCIAL_LINKS` |
| Color theme | `tailwind.config.js` |

## 📦 Build

```bash
npm run build
npm run preview
```

## 🌐 Deploy

Works out-of-the-box on **Vercel**, **Netlify**, or any static host.
For React Router to work, configure the host to redirect all routes to `index.html`.
