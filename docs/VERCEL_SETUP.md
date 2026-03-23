# Vercel deploy (when Git shows “Blocked”)

## Why you still see “Blocked” on Vercel

Vercel shows **two different things**:

1. **Git integration deploy** (GitHub App) — runs on every push. On Hobby, this can stay **Blocked** when the Vercel team (`tech@…`) and the GitHub pusher don’t match. **That row can stay red forever** and still be OK.

2. **GitHub Actions deploy** — this workflow uses the **Vercel CLI + token**. It does **not** use that Git author check. A **green** run in **Actions** + a **new Ready** deployment in Vercel means you’re fine.

**Ignore the blocked Git deployment** if **Actions → Deploy Production** succeeds and production works.

Optional: **Vercel → Project → Settings → Git → Disconnect** the repository if you only want CLI/Actions deploys (stops the extra “Blocked” entries). You lose automatic Git-based preview deploys unless you add them another way.

---

## GitHub secrets (required)

Repo → **Settings → Secrets and variables → Actions**:

| Name | Where to get it |
|------|------------------|
| `VERCEL_TOKEN` | [Vercel → Account → Tokens](https://vercel.com/account/tokens) (create while logged in as `tech@raja-international.com`) |
| `VERCEL_ORG_ID` | Team **Settings → General → Team ID** (starts with `team_`) |
| `VERCEL_PROJECT_ID` | **Project** → **Settings → General → Project ID** |

---

## Trigger a deploy

- Push to `main`, or  
- **Actions** → **Deploy Production** → **Run workflow**

---

## Optional: Deploy Hook only (no CLI)

If you prefer a single `curl` instead of a full build on GitHub:

1. Vercel → **Project → Settings → Git → Deploy Hooks** → create hook for **Production**.
2. Add a secret `VERCEL_DEPLOY_HOOK_URL` with the hook URL.
3. Use a tiny workflow that only runs `curl -X POST "$VERCEL_DEPLOY_HOOK_URL"` (ask to add this if you want it).

---

## Production env vars

`.env.local` is not deployed. Copy the same keys into **Vercel → Project → Settings → Environment Variables** (e.g. `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`).

`EMAIL_FROM` must use your **verified Resend domain** (for example `Name <contact@info.raja-international.com>`). Using Resend’s test address `onboarding@resend.dev` only allows delivery to your Resend account email, so contact forms that notify `EMAIL_TO` will fail with a 403 until `from` is updated.

### Connect Resend (contact form) on Vercel

1. Open **[Vercel Dashboard](https://vercel.com)** → your **project** → **Settings** → **Environment Variables**.
2. Add these three variables (same values as in your local `.env.local`, not committed to git):

   | Name | Value | Notes |
   |------|--------|--------|
   | `RESEND_API_KEY` | `re_…` from [Resend → API Keys](https://resend.com/api-keys) | Treat as secret. |
   | `EMAIL_FROM` | e.g. `RaJA International <contact@info.raja-international.com>` | Must use your **verified** domain in Resend. |
   | `EMAIL_TO` | Inbox that receives form submissions (e.g. `tech@raja-international.com`) | Any real address you want notified. |

3. For each variable, enable **Production** (and **Preview** if you want the contact form to work on preview deployments too).
4. **Save**, then trigger a new deployment: **Deployments** → **⋯** on the latest → **Redeploy** (or push a commit). Env vars apply on the **next** build/runtime; older deployments do not pick them up automatically.

After deploy, submit the site’s contact form and confirm the message arrives at `EMAIL_TO`. If something fails, check **Vercel → Project → Deployments → [deployment] → Functions** logs for `/api/contact` errors.

### Optional: R2 upload keys on Vercel

If any server-side code uses `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY`, add those in the same Environment Variables screen for Production (and Preview if needed). The contact form does not require R2.
