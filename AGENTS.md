# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router) marketing website for "Let's Go English!" (RaJA英会話スクール). There is no monorepo, no database, and no Docker dependency.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` (ESLint 9 via `eslint-config-next`) |
| Build | `npm run build` |
| Production preview | `npm run start` (after build) |

### Notes

- **No test suite exists.** There are no unit or integration tests configured. Manual browser testing is the only verification path.
- **Static assets are on Cloudflare R2**, served via the public CDN URL `https://pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev/…`. Images load without credentials. Only uploading new assets requires `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` in `.env.local`.
- **Contact form** (`/api/contact`) requires `RESEND_API_KEY`, `EMAIL_FROM`, and `EMAIL_TO` in `.env.local` to send email. Without these, the rest of the site works fine; only the form POST returns a 500.
- **Pre-existing lint errors** (5 errors, 10 warnings) exist in the codebase. These are `@next/next/no-html-link-for-pages`, `@next/next/no-img-element`, `react/no-unescaped-entities`, and an unused variable. They do not block the build.
- **Node version**: The project works with Node 20+ (CI uses 20; the VM has v22). No `.nvmrc` or engine field is present.
- **No git hooks** or pre-commit checks are configured.
