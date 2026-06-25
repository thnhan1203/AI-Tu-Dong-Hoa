# Deploy to Vercel

Static site, zero config build. Vercel serves `src/` directly.

## 1. One-time setup

### a. Create Vercel account
- Go to https://vercel.com/signup
- **Continue with GitHub** (recommended — links to your repo)
- Free Hobby plan is enough

### b. Install Vercel CLI (optional, for local testing)

```bash
npm i -g vercel
vercel login
```

## 2. Deploy via Dashboard (recommended first time)

1. Go to https://vercel.com/new
2. **Import** the GitHub repo `Tuoi-SE/DemoLandingPage`
3. Vercel auto-detects the project. Configure:
   | Setting        | Value              |
   |----------------|--------------------|
   | Project Name   | `demo-landing-page` (or anything) |
   | Framework      | `Other`            |
   | Root Directory | `.` (leave blank)  |
   | Build Command  | (leave empty)      |
   | Output Dir     | `src`              |
   | Install Command| (leave empty)      |
4. Click **Deploy**
5. Wait ~30s → URL like `https://demo-landing-page-xxx.vercel.app` is live

The `vercel.json` at the repo root tells Vercel to serve `src/` as the output, so paths like `/css/style.css` and `/js/main.js` resolve correctly.

## 3. Deploy via CLI (faster for repeat deploys)

From project root:

```bash
# First deploy (interactive, asks to link/create project)
vercel

# Production deploy
vercel --prod
```

CLI auto-detects `vercel.json` and uses `src/` as the output directory.

## 4. Auto-deploy on push (default)

Once the project is created, every push to `main` auto-deploys to production. Pushes to other branches create preview URLs.

## 5. Custom domain (optional)

1. Vercel dashboard → Project → **Settings** → **Domains**
2. Add your domain (e.g. `sohub.digital`)
3. Update DNS at your registrar:
   - `A` record: `76.76.21.21`
   - `CNAME` for `www`: `cname.vercel-dns.com`
4. SSL auto-provisioned within minutes

## 6. Verify contact form still works

After deploy, submit the form once. Apps Script writes to your Google Sheet regardless of where the site is hosted — same endpoint, same flow.

## Troubleshooting

| Symptom                              | Cause                            | Fix                              |
|--------------------------------------|----------------------------------|----------------------------------|
| 404 on `/css/style.css`              | Output dir not set to `src`      | Set Output Directory = `src`     |
| Page loads but assets broken         | Cache from older deploy          | Hard refresh (Cmd/Ctrl+Shift+R)  |
| `Module not found`                   | Vercel trying to run build       | Clear Build Command (leave empty)|
| Form submits but no Sheet row        | Apps Script changed/expired      | Re-deploy Apps Script, update URL in `js/config.js` |