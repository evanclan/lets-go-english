# Vercel deploy (when GitHub integration shows “Blocked”)

Your Git commits already use the correct author email (`eoalferez@gmail.com`). If Vercel still blocks production deploys (“commit author does not have contributing access”), use **GitHub Actions** so deploys use a **Vercel token** instead of the Git author check.

## 1. Create a Vercel token

1. Open [Vercel → Account Settings → Tokens](https://vercel.com/account/tokens)
2. Create a token (e.g. name: `github-actions-lets-go-english`)
3. Copy it once (you won’t see it again)

## 2. Get Org and Project IDs

1. Open your project in Vercel → **Settings → General**
2. Copy **Project ID**
3. Copy **Team / Personal account** ID if shown, or use **Vercel CLI**:  
   `npx vercel whoami` then in `.vercel/project.json` after `vercel link` you’ll see `orgId` and `projectId`

Alternatively run locally in the repo:

```bash
npx vercel link
cat .vercel/project.json
```

You need `orgId` → `VERCEL_ORG_ID` and `projectId` → `VERCEL_PROJECT_ID`.

## 3. Add GitHub repository secrets

GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Name                 | Value              |
|----------------------|--------------------|
| `VERCEL_TOKEN`       | Token from step 1  |
| `VERCEL_ORG_ID`      | From step 2        |
| `VERCEL_PROJECT_ID`  | From step 2        |

## 4. Push to `main` or run the workflow manually

- Every push to `main` runs **Deploy Production** (after secrets exist).
- Or: **Actions** tab → **Deploy Production** → **Run workflow**.

## 5. Optional: avoid double deploys

If the native Vercel Git integration **also** starts succeeding again, you might get two deploys per push. Then either:

- Leave only one method active, or  
- In Vercel: **Project → Settings → Git** and adjust automation if available for your plan.

---

**Note:** `.env.local` is not in git. Set the same variables in **Vercel → Project → Settings → Environment Variables** for Resend, etc.
