# FitTrack — Real-World Project Guide

A bilingual (English / ไทย) step-by-step guide that teaches you to build **FitTrack**, a mobile-first workout tracker — a Python/FastAPI backend on Supabase, a Flutter mobile app, and a Svelte web companion sharing one JWT-secured API.

It is project **#4** of the Learn Hub [Real-World Projects](https://projects.avetavos.com/taskflow/en/introduction/roadmap/) series — each project rebuilds a real application while adapting a different slice of the Learn Hub courses.

**Live:** https://projects.avetavos.com/fittrack/en/

## What you build

| Layer | Tech |
|-------|------|
| Backend | Python 3.14 · FastAPI · SQLAlchemy 2 (async) · Pydantic v2 |
| Platform | Supabase (managed Postgres 17, Auth, RLS) |
| Mobile | Flutter · Riverpod · go_router · supabase_flutter |
| Web | SvelteKit · Svelte 5 runes |
| Testing | pytest + pytest-asyncio against a real database · Flutter widget tests |
| Runtime | Docker image for the API · hosted Supabase for prod |

Features: sign-up/sign-in through Supabase Auth with JWT verification (JWKS/ES256 with HS256 fallback), an exercise catalog with ownership rules, workout logging with sets, progress aggregation queries, and two clients on the same API.

## The guide itself

This repo is an [Astro Starlight](https://starlight.astro.build/) site. The lessons live in `src/content/docs/en/**` and `src/content/docs/th/**`, grouped into 15 modules (auth → deployment → domain → exercises → fastapi → flutter-foundation → flutter-tracking → introduction → progress → setup → supabase → svelte-companion → testing → workouts → wrap-up). Each lesson follows the same shape: *what we're building → why → pros & cons → build it → verify → recap*, with full copy-pasteable code. Every code block is byte-identical between the two languages (`npm run check` enforces it), and the project has been assembled from the lessons and built/run end to end as part of review.

## Run the guide locally

```bash
npm install
npm run dev      # http://localhost:4321/fittrack/
npm run build    # static build to dist/
npm run check    # EN/TH parity check
```

## Deployment

Static site (`output: 'static'`, `base: '/fittrack'`) served by its own Cloudflare Worker at `projects.avetavos.com/fittrack/*`. `npm run deploy` builds, stages `dist/` under `.cf-assets/fittrack/` and runs `wrangler deploy`; the whole series can be redeployed with `learn-hub/tools/deploy-realworld.sh`.
