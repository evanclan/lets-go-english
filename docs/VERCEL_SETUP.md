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
