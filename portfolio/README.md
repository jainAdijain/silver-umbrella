# Engineer UX Portfolio (Stitch-aligned)

This app mirrors the four desktop screens from [Stitch project `3600686482785119945`](https://stitch.withgoogle.com/projects/3600686482785119945) (**Engineer UX Portfolio**): **Home & Introduction**, **Professional Journey**, **Skills & Expertise**, and **Education & Certifications**, plus a **Contact** route wired to the nav “Contact Me” CTA.

- **Stack:** Vite, React, React Router, **Tailwind CSS v4** (`@tailwindcss/vite`) with the same **Kinetic Blueprint** color tokens as the Stitch HTML exports.
- **Typography / icons:** Space Grotesk, Manrope, Material Symbols Outlined (see `index.html`).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — TypeScript + production build to `dist/`
- `npm run preview` — serve `dist/`
- `npm run lint` — ESLint

## Routes

| Path           | Stitch screen              |
| -------------- | -------------------------- |
| `/`            | Home & Introduction        |
| `/experience`  | Professional Journey       |
| `/skills`      | Skills & Expertise         |
| `/education`   | Education & Certifications |
| `/contact`     | Contact (nav CTA; add form) |

Legacy paths (`/work`, `/about`) redirect to `/experience` and `/education`.

## Regenerating from Stitch

HTML for each screen is generated in Stitch; this repo ports that structure into React. To refresh copy or layout, re-export from Stitch or use the Stitch MCP `get_screen` / download URLs, then update the matching page component under `src/pages/`.
