# Step-by-step: fix “Blocked” on Vercel (Hobby + two accounts)

You have **two different things** happening on every `git push`:

| What | Who it uses | Often shows |
|------|-------------|-------------|
| **A) Vercel ↔ GitHub** (automatic) | “Does this **Git author** match the **Vercel team**?” | **Blocked** |
| **B) GitHub Actions** (our workflow) | **Vercel token** (no Git author check) | **Ready** ✅ |

**Goal:** Make **(B)** your real production deploys, and **stop worrying about (A)** — or turn **(A)** off.

---

## Part 1 — Make sure Actions deploy works (5 min)

Do this **logged into GitHub as someone who can edit the repo** (e.g. `evanclan`).

### Step 1.1 — Open secrets

1. GitHub → repo **`lets-go-english`**  
2. **Settings** → **Secrets and variables** → **Actions**

### Step 1.2 — Confirm these three exist

| Secret name | What it is |
|-------------|------------|
| `VERCEL_TOKEN` | Created in Vercel while logged in as **`tech@raja-international.com`** → [Account → Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Vercel → **Team** → **Settings** → **General** → **Team ID** (starts with `team_`) |
| `VERCEL_PROJECT_ID` | Vercel → **Project `lets-go-english`** → **Settings** → **General** → **Project ID** |

If any is missing or wrong, add/fix it and **Save**.

### Step 1.3 — Run the workflow once

1. GitHub → **Actions** tab  
2. Click **Deploy Production** (left)  
3. **Run workflow** → branch **main** → **Run workflow**  
4. Wait until it finishes **green** ✅  

If it’s **red**, open the failed job, scroll to the error, and fix (usually token or wrong Team/Project ID).

**When this is green, your site *can* update from Actions — this is the deploy you trust.**

---

## Part 2 — Stop the annoying “Blocked” rows (optional but recommended)

**Blocked** comes from **(A) Vercel’s Git integration**. You can turn that off **without** deleting the project.

### Step 2.1 — Log into Vercel as the team owner

Use **`tech@raja-international.com`** (the account that owns **tech-9714’s projects**).

### Step 2.2 — Open the *project* Git settings

1. [Vercel Dashboard](https://vercel.com/dashboard)  
2. Click project **`lets-go-english`** (not only the team name).  
3. **Settings** (gear in the project sidebar)  
4. Click **Git** in the left menu  

Direct URL pattern (replace `YOUR_TEAM_SLUG`):

`https://vercel.com/YOUR_TEAM_SLUG/lets-go-english/settings/git`

### Step 2.3 — Disconnect

Under **Connected Git Repository**, click **Disconnect** and confirm.

**After this:** pushes to GitHub **no longer** create that automatic Vercel “Git” deployment — so **no new Blocked** from that path.

**Your production updates** come from **Part 1** (GitHub Actions) when you push to `main` (the workflow file is already in the repo).

### Step 2.4 — Don’t reconnect Git unless you fix the team issue

If you click **Connect Git Repository** again, **Blocked** will usually **come back** on Hobby until:

- you **upgrade to Pro** and add **Evan’s GitHub user** as a **team member**, or  
- only **`tech@`** pushes/commits (not ideal for daily dev).

---

## Part 3 — Deploy new code from now on

1. Edit code locally → **commit** → **push** to **`main`**.  
2. GitHub **Actions** runs **Deploy Production** automatically.  
3. Check **Actions** = green ✅  
4. Check your **live URL** — changes should appear after the deploy finishes.

You do **not** need a green “Git” deploy on Vercel for this setup.

---

## Part 4 — Production environment variables (contact form, etc.)

`.env.local` is **not** on GitHub. For the live site:

1. Vercel → **lets-go-english** → **Settings** → **Environment Variables**  
2. Add the same keys as local (e.g. `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`)  
3. Enable **Production**, **Save**  
4. **Redeploy** once (or push a commit) so new vars apply  

Details: see **VERCEL_SETUP.md** in this folder.

---

## Quick reference

| Question | Answer |
|----------|--------|
| Is **Blocked** always bad? | Only the **Git** deploy failed. If **Actions is green**, you’re usually fine. |
| Do I need a new GitHub account? | **No.** |
| Do I need to delete the Vercel project? | **No.** |
| Real fix for **Git** auto-deploy without Blocked? | **Vercel Pro** + add collaborator, **or** only use **Actions** + **Disconnect Git**. |

---

## If you’re stuck

1. Screenshot **GitHub → Actions → last failed run** (expand the red error).  
2. Confirm **Disconnect** under **Project → Settings → Git** really shows **no** connected repo.

That’s the full fix path for your setup.
