# My Personal Website

Personal 3D portfolio site for Neil Gupta — Software Engineer at PayPal. Built with **React**, **TypeScript**, **Three.js**, and **GSAP**, featuring an interactive 3D scene, an AI chat that role-plays as Neil, project/course/hobby pages, and smooth scroll-driven animations.

> Live: https://neilgupta.vercel.app/

## Features

- **3D / WebGL landing experience** built with `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`, and `@react-three/cannon`
- **AI chat ("Play")** — a serverless endpoint (`api/chat.js`) proxies to Groq's Llama 3.3 70B model so visitors can chat with an AI version of Neil
- **Content-driven** — bio, experience, projects, courses, and hobbies are all defined in `src/config.ts`
- Smooth scrolling via `lenis` and animations via `gsap`
- Pages for Projects, Courses & Learning, Hobbies, and the AI chat

## Tech Stack

- React 18 + TypeScript + Vite
- Three.js via React Three Fiber / Drei / Rapier / Cannon
- GSAP + Lenis for animation and scroll
- React Router
- Vercel serverless function for the chat API (Groq)

## Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Configure environment

Copy `.env.example` to `.env` and set your Groq API key (used by `api/chat.js` for the AI chat feature):

```bash
cp .env.example .env
```

```
GROQ_API_KEY=your_actual_api_key_here
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview a production build

```bash
npm run preview
```

## Project Structure

```
api/            Vercel serverless functions (Groq chat proxy)
src/
  components/   3D scene, layout, and UI components
  pages/        Route-level pages (Projects, Courses, Hobbies, Play)
  context/      React context providers (loading state)
  config.ts     Single source of truth for site content (bio, experience, projects, etc.)
```

## Customizing

Nearly all personal content lives in [`src/config.ts`](src/config.ts) — update the `developer`, `social`, `about`, `experiences`, `projects`, `contact`, `skills`, `courses`, and `hobbies` fields to repurpose this for your own portfolio. The chat persona in [`src/pages/Play.tsx`](src/pages/Play.tsx) is defined separately via `SYSTEM_PROMPT`.

## Deployment

This project is configured for [Vercel](https://vercel.com/) (see `vercel.json`), including SPA rewrites and the `/api/chat` serverless function. Set the `GROQ_API_KEY` environment variable in your Vercel project settings.

## License

MIT — see [LICENSE](LICENSE).
