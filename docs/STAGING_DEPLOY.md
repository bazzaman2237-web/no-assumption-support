# Netlify Staging Deployment — Client Review Only

**Do not connect `noassumption.com.au` DNS yet.**  
The live Jimdo site stays active until the client gives written approval.

---

## One-time setup

1. Install dependencies (includes Netlify CLI):

   ```bash
   npm install
   ```

2. Log in to Netlify (opens browser):

   ```bash
   npx netlify login
   ```

3. Link this repo to a **new** Netlify site (staging only — not the production domain):

   ```bash
   npx netlify init
   ```

   - Choose **Create & configure a new project**
   - Suggested site name: `no-assumption-staging` (or similar)
   - Build command: `npm run build` (already in `netlify.toml`)
   - Publish directory: `.output/public` (already in `netlify.toml`)

---

## Deploy staging preview

```bash
npm run deploy:staging
```

This builds with the Netlify TanStack Start preset and uploads a **draft deploy**.  
The CLI prints a **Unique Deploy URL** — share that link with the client.

Example output:

```
Website Draft URL: https://67abc123--no-assumption-staging.netlify.app
```

**Do not** run `deploy:staging:prod` or attach the custom domain until after client approval.

---

## Pre-share checklist (verified locally)

| Check | Status |
|-------|--------|
| Homepage loads | ✅ |
| Service card images (`/images/*`) | ✅ |
| All 21 public pages return 200 | ✅ |
| `/about` → `/about-us`, `/services` → `/our-services` | ✅ 301/redirect |
| `/forms` opens (defaults to referral tab) | ✅ |
| `/sitemap.xml`, `/robots.txt` | ✅ |
| Contact: +61 468 880 557, info@, Forrestfield | ✅ |
| “Registration in progress” (no “Registered NDIS Provider”) | ✅ |

Re-run after each deploy:

```bash
# Replace STAGING_URL with the Netlify draft URL
curl -I STAGING_URL/
curl -I STAGING_URL/our-services
curl -I STAGING_URL/ndis-supports
curl -I STAGING_URL/forms
```

---

## What the client should review

- Desktop and mobile layout
- Homepage service cards and images
- All service detail pages (8 services)
- Forms (referral, careers, feedback)
- Footer and nav links
- Meet & Greet, cultural diversity, contact pages
- NDIS registration wording (“Registration in progress”)

---

## After client approval (later — not now)

1. Client signs off in writing
2. `npm run deploy:staging:prod` or promote deploy in Netlify UI
3. **Only then** attach `www.noassumption.com.au` in Netlify domain settings
4. Submit sitemap in Google Search Console
