# Notes v4 — Soft Journal

A standalone Next.js notes app with a blush, paper-inspired journal design.

## Run it

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For verification, run:

```bash
npm run typecheck
npm run build
```

## Requirement mapping

- `app/page.tsx`: `useState` state, `useEffect` load/save/duplicate checks, validation, feedback, confirmation, and localStorage error handling.
- `components/NoteItem.tsx`: separate note row component with edit and delete actions.
- Add, view, edit, and delete are all functional. Titles are normalized with `trim()`, lowercase conversion, and repeated-whitespace collapsing; editing excludes the current note ID.
- Storage key: `notefolio-notes-journal-v4`.
- `app/globals.css`: spacious journal pages plus desktop, tablet, and 360px-friendly responsive rules, focus states, readable contrast, and touch-sized controls.
- No backend, login, or remote data is used.
