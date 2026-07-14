// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://projects.avetavos.com',
  base: '/fittrack',
  output: 'static',
  integrations: [starlight({
    title: 'FitTrack — Real-World Project',
    head: [
      { tag: 'script', attrs: { type: 'module', src: '/fittrack/mermaid-init.js' } },
      { tag: 'link', attrs: { rel: 'manifest', href: '/fittrack/manifest.webmanifest' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/fittrack/apple-touch-icon.png' } },
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/fittrack/icon-192.png' } },
      { tag: 'meta', attrs: { name: 'theme-color', content: '#3776AB' } },
    ],
    defaultLocale: 'en',
    locales: {
      en: { label: 'English', lang: 'en' },
      th: { label: 'ไทย', lang: 'th' },
    },
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/realworld-fittrack' }],
    sidebar: [
      { label: 'Introduction', items: [{ autogenerate: { directory: 'introduction' } }] },
      { label: '1 · Setup & Tooling', items: [{ autogenerate: { directory: 'setup' } }] },
      { label: '2 · Supabase Foundation', items: [{ autogenerate: { directory: 'supabase' } }] },
      { label: '3 · FastAPI Foundation', items: [{ autogenerate: { directory: 'fastapi' } }] },
      { label: '4 · Auth (Supabase JWT)', items: [{ autogenerate: { directory: 'auth' } }] },
      { label: '5 · Domain Model', items: [{ autogenerate: { directory: 'domain' } }] },
      { label: '6 · Exercises API', items: [{ autogenerate: { directory: 'exercises' } }] },
      { label: '7 · Workouts API', items: [{ autogenerate: { directory: 'workouts' } }] },
      { label: '8 · Progress & Stats', items: [{ autogenerate: { directory: 'progress' } }] },
      { label: '9 · Flutter — Foundation', items: [{ autogenerate: { directory: 'flutter-foundation' } }] },
      { label: '10 · Flutter — Tracking', items: [{ autogenerate: { directory: 'flutter-tracking' } }] },
      { label: '11 · Svelte Web Companion', items: [{ autogenerate: { directory: 'svelte-companion' } }] },
      { label: '12 · Testing', items: [{ autogenerate: { directory: 'testing' } }] },
      { label: '13 · Deployment', items: [{ autogenerate: { directory: 'deployment' } }] },
      { label: '14 · Wrap-up', items: [{ autogenerate: { directory: 'wrap-up' } }] },
    ],
  }), preact()],
});
