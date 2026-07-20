# SSMLEC — Vite + React (converted from TanStack Start)

This project was converted from a TanStack Start (SSR) app to a plain **Vite + React SPA**.

## What changed
- Removed `@tanstack/react-start`, `@tanstack/react-router`, `nitro`, and the Lovable Vite config.
- Added `react-router-dom` for client-side routing (`src/App.tsx`, `BrowserRouter` in `src/main.tsx`).
- File-based routes (`src/routes/*.tsx`) were converted to plain page components in `src/pages/*.tsx`.
- Per-route `head()` metadata is now handled by a small `<Seo>` component (`src/components/seo.tsx`) that sets `<title>`, `<meta>`, `<link>` and JSON-LD `<script>` tags on mount.
- The root document shell (`<html>`, fonts, favicon, theme-init script, org JSON-LD) now lives in `index.html`.
- SSR error-handling files (`start.ts`, `server.ts`, `lib/error-page.ts`, `lib/error-capture.ts`, `lib/lovable-error-reporting.ts`) were removed and replaced by a lightweight client-side `ErrorBoundary` component.

## Known follow-up
- `src/assets/ssmlec-logo.jpg.asset.json` points at a Lovable-hosted CDN URL (`/__l5e/assets-v1/...`) and will not resolve outside the Lovable platform. Replace `logoAsset.url` in `src/components/logo.tsx` with a real local image (e.g. drop a `logo.jpg` into `src/assets` and `import logo from "@/assets/logo.jpg"`).

## Getting started
```bash
npm install
npm run dev      # start dev server on http://localhost:8080
npm run build    # production build to dist/
npm run preview  # preview the production build
```
