# No Assumption Support Service — Site Revamp Checklist

**Live site (stay active until client approval):** [https://www.noassumption.com.au](https://www.noassumption.com.au)  
**Revamped build:** this repository (`no-assumption-support`)  
**Staging rule:** deploy preview first; do **not** switch DNS/domain until the client signs off.

---

## Deployment approach (staging first)

1. Build: `npm run build`
2. Deploy the build output to a **preview/staging URL** (e.g. Lovable preview, Netlify/Cloudflare preview branch, or temporary subdomain such as `preview.noassumption.com.au`).
3. Share the staging link with the client for review on mobile and desktop.
4. Keep the Jimdo live site running until checklist items below are confirmed and the client approves cutover.
5. On cutover: point `www.noassumption.com.au` DNS to the new host, verify redirects, submit updated sitemap in Google Search Console.

---

## 1. Compare old site pages vs new site pages

| Live (Jimdo) URL | New site URL | Content status |
|------------------|--------------|----------------|
| `/` | `/` | **Preserved & expanded** — mission, vision, services teasers, contact, trust strip; homepage is shorter with detail on child pages |
| `/about-us` | `/about` | **Preserved** — mission, vision, about copy; URL redirects (301) |
| `/our-services` | `/services` | **Preserved & expanded** — service overview + 8 dedicated service pages; URL redirects (301) |
| `/contact` | `/contact` | **Preserved** — phone, email, WhatsApp, address, contact form |
| `/faqs` | `/faqs` | **Preserved & expanded** — includes registration-in-progress FAQ |
| `/ndis-resources` | `/ndis-resources` | **Preserved** — curated external links |
| `/ndis-quality-and-safeguards-commission` | `/ndis-quality-and-safeguards-commission` | **Preserved** — same URL; FAQ content from live site; honest registration wording |
| *(homepage sections only)* | `/ndis-supports`, `/daily-living-support`, `/support-coordination`, `/accommodation-supports`, `/personal-care-and-transitions`, `/positive-behaviour-support`, `/guidance`, `/collaboration` | **New detail pages** — content from live `/our-services` and client brief, not SEO loss |
| *(not on live nav)* | `/forms`, `/meet-and-greet`, `/cultural-diversity`, `/community-get-together`, `/consent`, `/ndis-funding` | **New** — client-requested additions |

### Legacy homepage service cards (live) → new mapping

| Live homepage card | New destination |
|--------------------|-----------------|
| Transition | `/personal-care-and-transitions` |
| Development Life Skills | `/daily-living-support` |
| Assist Personal Activities | `/personal-care-and-transitions` |
| Assist with Daily Tasks | `/daily-living-support` |
| Community Participation | `/ndis-supports` (community access) |
| Assist with Travel/Transport | `/ndis-supports` |

### Intentional copy changes (client-approved)

- **Consultation** → **FREE 45-Minute Meet & Greet** site-wide
- **Opening hours:** live showed `Mon–Fri 12:00am–11:59pm` (likely Jimdo default); new site uses **“Monday – Sunday: available by appointment”**
- **NDIS registration:** live titles said “NDIS Approved”; new site correctly states **“Registration in progress”** — do not revert to “registered provider” claims

---

## 2. Old URLs that changed

| Old URL | New canonical URL | Action |
|---------|-------------------|--------|
| `/about-us` | `/about` | **301 redirect** — `src/server.ts`, `src/routes/about-us.tsx`, `public/_redirects` |
| `/our-services` | `/services` | **301 redirect** — same layers |

**Unchanged URLs (no redirect needed):** `/`, `/contact`, `/faqs`, `/ndis-resources`, `/ndis-quality-and-safeguards-commission`

---

## 3. Redirects

- [x] Server-side 301 in `src/server.ts` via `src/lib/redirects.ts`
- [x] Router fallback redirects in `src/routes/about-us.tsx` and `src/routes/our-services.tsx`
- [x] `public/_redirects` for Netlify / Cloudflare Pages
- [ ] After deploy: test each old URL returns **301** to the correct new path (not 404)
- [ ] Configure host-level redirects if the platform does not use Nitro/`_redirects`

---

## 4. Confirm all forms work

| Form | Location | Delivery | Staging test |
|------|----------|----------|--------------|
| Contact | `/contact` | mailto → `info@noassumption.com.au` | [ ] Opens email client with correct fields |
| Homepage contact | `/` | mailto → `info@` | [ ] |
| Referral | `/forms` (referral tab) | mailto → `info@` | [ ] |
| Careers | `/forms?tab=career` | mailto → `info@` | [ ] |
| Feedback | `/forms?tab=feedback` | mailto → `welisten@noassumption.com.au` | [ ] |
| Meet & Greet | `/meet-and-greet` | Links to `/contact` (no separate booking form) | [ ] |

**Before production cutover (recommended):** replace mailto with Formspree, Web3Forms, or API endpoint for reliable inbox delivery; optional Calendly for Meet & Greet.

---

## 5. Confirm contact details

Source of truth: `src/data/site.ts` → `siteContact`

| Field | Value | Verified |
|-------|-------|----------|
| Phone | +61 468 880 557 | [ ] Matches client / live site |
| Email | info@noassumption.com.au | [ ] |
| Feedback | welisten@noassumption.com.au | [ ] |
| WhatsApp | wa.me/61468880557 | [ ] |
| Address | Forrestfield, Perth WA 6058 | [ ] |
| ABN | 36 692 156 737 | [ ] |
| Hours | Monday – Sunday: available by appointment | [ ] Client confirms wording |

---

## 6. Confirm service areas

Source of truth: `src/data/site.ts` → `serviceArea`

- [ ] Forrestfield base stated correctly
- [ ] Perth metropolitan area stated correctly
- [ ] Named suburbs in FAQs: Kalamunda, High Wycombe, Maida Vale, Midland, Cannington, Belmont
- [ ] No incorrect locations (e.g. Brisbane) anywhere on site

---

## 7. Confirm images and logos

| Asset | Path | Verified |
|-------|------|----------|
| Logo | `/images/logo.png` | [ ] |
| NDIS “I Support the NDIS” | `/images/ndis-logo.png` | [ ] |
| Hero | `/images/hero.jpg` | [ ] |
| Service images | `/images/service-*.webp/jpg` | [ ] |
| Australia + Aboriginal flags | `/images/australia-flag.svg`, `aboriginal-flag.svg` | [ ] |
| Favicon | `/images/favicon.png` | [ ] |

- [ ] Alt text present on key images
- [ ] No Paramount Care branding or copied assets

---

## 8. Confirm sitemap and robots.txt

| Item | Location | Status |
|------|----------|--------|
| Sitemap | `/sitemap.xml` (`src/routes/sitemap[.]xml.ts`, 21 URLs) | [ ] Returns 200 on staging |
| Robots | `/robots.txt` (`src/routes/robots[.]txt.ts`) | [ ] Allows crawl; references sitemap |
| Canonicals | Per-page via `src/lib/seo.ts` | [ ] |
| JSON-LD | `src/lib/structured-data.ts` | [ ] LocalBusiness; no false NDIS registration |

**Note:** Live Jimdo sitemap currently errors (500). New sitemap should be submitted in Google Search Console after cutover.

---

## 9. Confirm no incorrect NDIS registration claims

- [ ] Site says **“Registration in progress”** (or equivalent) — not “Registered NDIS Provider” / “NDIS Approved”
- [ ] FAQs explain registration status honestly
- [ ] JSON-LD does not claim `Registered NDIS Provider`
- [ ] Meta titles/descriptions do not imply full registration
- [ ] NDIS Quality & Safeguards page references Practice Standards without claiming completed registration

---

## 10. Client approval before DNS/domain switch

- [ ] Staging link shared with client
- [ ] Client reviewed on mobile and desktop
- [ ] Client confirmed contact details, service areas, and NDIS wording
- [ ] Client approved design (Paramount Care–inspired palette, No Assumption branding)
- [ ] Client signed off on new pages (Meet & Greet, cultural diversity, forms, etc.)
- [ ] **Only then:** update DNS / domain to new host
- [ ] Post-cutover: smoke-test all URLs, forms, redirects; monitor Search Console for 404s

---

## Quick smoke-test commands (after staging deploy)

```bash
# Redirects (expect 301 Location header)
curl -I https://STAGING_URL/about-us
curl -I https://STAGING_URL/our-services

# SEO files
curl -I https://STAGING_URL/sitemap.xml
curl -I https://STAGING_URL/robots.txt
```

Replace `STAGING_URL` with the actual preview hostname.
