# Expandable Information Card

A focused frontend component built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## What it does

A single card that toggles between two states:

- **Collapsed** — label, title, short description, small media placeholder, and an Open button.
- **Expanded** — same label and title, longer description, larger media placeholder, and Close / Continue actions.

State is local (`useState`). No backend, no routing, no external libraries.

## Stack

| | |
|---|---|
| Framework | Next.js 16.2.4 (App Router, Turbopack) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint (next lint removed in v16 — runs eslint directly)
```

## Component structure

```
app/
├── page.tsx                        # Centered layout, renders the card
├── layout.tsx                      # Root layout, Geist font, metadata
├── globals.css                     # Tailwind import, body base styles
└── components/
    ├── ExpandableInfoCard.tsx       # Stateful root component ('use client')
    ├── CardHeader.tsx               # Label pill + title + divider
    ├── CardActions.tsx              # Button row (Open / Close + Continue)
    ├── MediaPlaceholder.tsx         # Sized placeholder box
    └── ui/
        ├── Button.tsx               # Reusable button — primary / secondary variants
        └── Typography.tsx           # Heading, Text, Badge primitives
```