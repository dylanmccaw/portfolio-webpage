# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build to dist/
npm run deploy    # Build and deploy to GitHub Pages (gh-pages -d dist)
```

No test suite is configured.

## Architecture

This is a single-page React portfolio site deployed to [dylan.software](https://dylan.software) via GitHub Pages.

**Two-column layout (desktop) / stacked (mobile):**
- `Layout.jsx` — top-level shell. Manages `activeSection` state via scroll detection and passes it down. Uses `react-device-detect` to switch between a fixed left + scrolling right desktop layout and a stacked mobile layout.
- `LeftSection.jsx` — fixed sidebar with name, contact info, and section nav. Highlights the active section and handles smooth-scroll on click.
- `RightSection.jsx` — scrollable content area. Renders section components (`About`, `Experience`, `Education`) each wrapped in a `div` with an `id` matching the section name for scroll targeting.

**Data layer (`src/data/`):** Plain JS exports (`experiences.js`, `education.js`, `projects.js`, `blogs.js`, `socialmedia.js`). Components import directly — no state management library.

**Theme:** Dark/light toggle managed in `App.jsx` via `useLocalStorage` (Mantine hook). Toggling adds/removes a `.dark` class on `<body>`, which switches CSS variables defined in `index.css`. Accent color throughout is `#10b981`.

**Sections currently disabled:** `Projects` and `Blogs` are commented out in both `RightSection.jsx` and the `sections` array in `LeftSection.jsx`. The components and data files still exist.

## Key dependencies

- **Mantine v7** (`@mantine/core`, `@mantine/hooks`) — UI components and utilities
- **tabler-icons-react** — icon set
- **typewriter-effect** — animated role title in `LeftSection`
- **styled-components** — present as a dep but Mantine's `@emotion/react` is the primary styling approach; global styles live in `src/styles/index.css`
- **Space Mono** — font loaded from Google Fonts, applied globally in `index.css`
