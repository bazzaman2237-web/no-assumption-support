# SEO Revamp Audit — No Assumption Support Service

**Live site (Jimdo):** https://www.noassumption.com.au/  
**Revamped site:** this repository  
**Audit date:** June 2026  
**Rule:** Staging/preview first — live site stays active until client approves DNS cutover.

---

## 1. Old URL list (live site)

Crawled all nav-linked pages and verified HTTP 200. Live sitemap returns **500** (no reliable index from Jimdo).

| URL | Status | Notes |
|-----|--------|-------|
| `https://www.noassumption.com.au/` | 200 | Homepage — mission, vision, 6 service cards, contact strip |
| `https://www.noassumption.com.au/about-us` | 200 | Founder story, team bios, contact form |
| `https://www.noassumption.com.au/our-services` | 200 | Full service descriptions (accommodation, support coordination, etc.) |
| `https://www.noassumption.com.au/contact` | 200 | Contact form, WhatsApp, email |
| `https://www.noassumption.com.au/faqs` | 200 | 8 NDIS educational FAQs |
| `https://www.noassumption.com.au/ndis-resources` | 200 | Minimal — link to NDIS.gov.au |
| `https://www.noassumption.com.au/ndis-quality-and-safeguards-commission` | 200 | Quality & safeguards FAQ content |

**Not separate indexed URLs on live site** (homepage/our-services sections only):

- NDIS supports, Daily Living Support, Positive Behaviour Support, Guidance, Collaboration (nav anchors / page sections, not standalone paths)
- Legacy homepage service cards: Transition, Development Life Skills, Assist Personal Activities, Participate Community, Daily Task / Shared Living

**Technical (live):**

| URL | Status |
|-----|--------|
| `/sitemap.xml` | **500** — broken |
| `/robots.txt` | Timeout/unreliable |

---

## 2. New URL list (revamped site)

21 public pages in sitemap + 2 legacy redirect handlers + SEO utilities.

### Public pages (sitemap)

| URL | Purpose |
|-----|---------|
| `/` | Homepage — teasers, trust strip, mission/vision, contact |
| `/about` | About — mission, vision, founder story, team |
| `/services` | All services overview |
| `/ndis-supports` | NDIS supports detail |
| `/daily-living-support` | Daily living detail |
| `/support-coordination` | Support coordination detail |
| `/accommodation-supports` | Accommodation (ILO, SIL) detail |
| `/personal-care-and-transitions` | Personal care & transitions detail |
| `/positive-behaviour-support` | PBS implementation detail |
| `/guidance` | NDIS guidance detail |
| `/collaboration` | Collaboration detail |
| `/forms` | Referral, careers, feedback |
| `/meet-and-greet` | FREE 45-Minute Meet & Greet |
| `/cultural-diversity` | Cultural diversity & inclusion |
| `/community-get-together` | Annual community event |
| `/consent` | Consent information |
| `/ndis-funding` | NDIS funding & pricing |
| `/contact` | Contact form & details |
| `/faqs` | Merged live + new FAQs |
| `/ndis-resources` | Curated NDIS links |
| `/ndis-quality-and-safeguards-commission` | Quality & safeguards (same URL as live) |

### Legacy URL handlers (redirect only — not in sitemap)

| URL | Behaviour |
|-----|-----------|
| `/about-us` | 301 → `/about` |
| `/our-services` | 301 → `/services` |

### SEO utilities

| URL | Purpose |
|-----|---------|
| `/sitemap.xml` | Dynamic sitemap (21 URLs) |
| `/robots.txt` | Allow all + sitemap reference |

---

## 3. Redirect recommendations

| Old URL | New URL | Priority | Status |
|---------|---------|----------|--------|
| `/about-us` | `/about` | **301 required** — indexed Jimdo page | ✅ Implemented |
| `/our-services` | `/services` | **301 required** — indexed Jimdo page | ✅ Implemented |
| `/` | `/` | Keep same | ✅ No redirect |
| `/contact` | `/contact` | Keep same | ✅ No redirect |
| `/faqs` | `/faqs` | Keep same | ✅ No redirect |
| `/ndis-resources` | `/ndis-resources` | Keep same | ✅ No redirect |
| `/ndis-quality-and-safeguards-commission` | same path | Keep same | ✅ No redirect |

**Implementation layers (all in repo):**

- `src/lib/redirects.ts` + `src/server.ts` (server 301)
- `src/routes/about-us.tsx`, `src/routes/our-services.tsx` (router fallback)
- `public/_redirects` (Netlify / Cloudflare Pages)

**No redirect needed for homepage service sections** — they were never standalone URLs; content lives on new detail pages (SEO gain, not loss).

**Post-deploy verification:**

```bash
curl -I https://STAGING_URL/about-us      # expect 301 → /about
curl -I https://STAGING_URL/our-services  # expect 301 → /services
```

---

## 4. Pages / content preserved

| Live content | New location | Notes |
|--------------|--------------|-------|
| Mission statement | `/`, `/about` | Verbatim from live |
| Vision statement | `/`, `/about` | Verbatim from live |
| Homepage intro (“never assume, always ask”) | `/`, service pages | Preserved |
| Six homepage service cards | Mapped to detail pages | See mapping below |
| `/our-services` — accommodation (ILO, SIL) | `/accommodation-supports` | Full copy merged |
| `/our-services` — support coordination | `/support-coordination` | Full copy merged |
| `/our-services` — community, daily living, PBS, etc. | Respective service pages | Preserved & expanded |
| Founder story (Jennifer) | `/about` | **Merged this audit** |
| Team: Jennifer G. Pratt, George Garley, Lisa Gullo | `/about` | **Merged this audit** |
| Live FAQs (8 NDIS education Q&As) | `/faqs` | **Merged this audit** |
| NDIS Quality & Safeguards FAQs | `/ndis-quality-and-safeguards-commission` | Same URL; honest registration wording |
| Contact: phone, email, WhatsApp, address | `/contact`, footer, `site.ts` | +61 468 880 557, info@, welisten@ |
| ABN 36 692 156 737 | Footer / contact | Preserved |
| NDIS registration “In Progress” | Site-wide | Correct — not “NDIS Approved” |
| Service area Forrestfield / Perth metro | FAQs, contact, structured data | Preserved + named suburbs |
| Jimdo service images | `/public/images/` | Reused on new site |

### Legacy homepage cards → new pages

| Live card | New page |
|-----------|----------|
| Transition and Support | `/personal-care-and-transitions` |
| Development Life Skills | `/daily-living-support` |
| Assist Personal Activities | `/personal-care-and-transitions` |
| Participate Community | `/ndis-supports` |
| Daily Task / Shared Living | `/daily-living-support` |
| We Listen, We Don't Assume | `/ndis-supports` |

---

## 5. Pages / content replaced or changed

| Item | Live | New | Action |
|------|------|-----|--------|
| About URL | `/about-us` | `/about` | 301 redirect ✅ |
| Services URL | `/our-services` | `/services` | 301 redirect ✅ |
| Page titles | “NDIS Approved” in `<title>` | Accurate registration wording | **Intentional fix** |
| Opening hours | Mon–Sun 12:00am–11:59pm (Jimdo default) | “Available by appointment” | **Client to confirm** |
| Consultation | Not on live nav | Meet & Greet (`/meet-and-greet`) | **Client-requested** |
| Contact form delivery | Jimdo form submit | mailto (staging) | **Replace with Formspree/API before cutover** |
| `/ndis-resources` | Single NDIS link | Curated resource hub | **Improved** — no SEO loss |
| “Experience Through the Years” gallery | `/about-us` | Not yet on new site | **Optional** — confirm with client if photos should be migrated |
| Live social media links | Contact page | Not replicated | **Confirm** if accounts should be linked |

### New pages (no live equivalent — additive SEO)

`/forms`, `/meet-and-greet`, `/cultural-diversity`, `/community-get-together`, `/consent`, `/ndis-funding`, and eight service detail pages.

---

## 6. Pre-launch approval checklist

### Staging & governance

- [ ] Deploy revamped build to **preview/staging URL** (not production domain)
- [ ] **Keep** https://www.noassumption.com.au live until client signs off
- [ ] Share staging link with client (mobile + desktop review)
- [ ] **Client written approval** before DNS/domain switch

### 1. Old vs new pages

- [ ] All 7 live pages accounted for (see tables above)
- [ ] New service detail pages reviewed by client

### 2. Changed URLs

- [ ] `/about-us` → `/about` returns **301**
- [ ] `/our-services` → `/services` returns **301**
- [ ] No other live URLs changed without redirect

### 3. Redirects

- [ ] Test server redirects on staging host
- [ ] Test `public/_redirects` if using Netlify/Cloudflare
- [ ] No indexed URL returns 404

### 4. Forms

- [ ] Contact form (`/contact`, `/`)
- [ ] Referral / careers / feedback (`/forms`)
- [ ] Meet & Greet flows to contact
- [ ] **Production:** replace mailto with reliable form backend

### 5. Contact details

- [ ] Phone: +61 468 880 557
- [ ] Email: info@noassumption.com.au
- [ ] Feedback: welisten@noassumption.com.au
- [ ] Address: Forrestfield, Perth WA 6058
- [ ] ABN: 36 692 156 737
- [ ] WhatsApp: wa.me/61468880557

### 6. Service areas

- [ ] Forrestfield base stated correctly
- [ ] Perth metropolitan area stated correctly
- [ ] Suburbs in FAQs match client list
- [ ] No incorrect locations anywhere

### 7. Images & logos

- [ ] Logo, NDIS logo, hero, service images display correctly
- [ ] Australia + Aboriginal flags in footer
- [ ] Favicon present
- [ ] No third-party (Paramount Care) branding

### 8. Sitemap & robots.txt

- [ ] `/sitemap.xml` returns 200 with 21 URLs
- [ ] `/robots.txt` allows crawl and references sitemap
- [ ] Canonical tags on all pages
- [ ] Submit sitemap in Google Search Console **after** cutover

### 9. NDIS registration claims

- [ ] Site says **“Registration in progress”** only
- [ ] No “Registered NDIS Provider” / “NDIS Approved” in titles or body
- [ ] JSON-LD does not claim full registration
- [ ] FAQs explain status honestly

### 10. Client approval

- [ ] Design approved (Paramount Care–inspired palette, No Assumption branding)
- [ ] Content approved (team, services, Meet & Greet, cultural diversity)
- [ ] Contact details and service areas confirmed
- [ ] **DNS cutover authorised**

---

## Summary

| Metric | Count |
|--------|-------|
| Live indexed pages | **7** |
| New sitemap pages | **21** |
| URLs requiring 301 | **2** (`/about-us`, `/our-services`) |
| URLs kept identical | **5** |
| Redirects implemented | **2/2** |
| Content gaps closed this audit | Founder/team on `/about`, live FAQs merged on `/faqs` |

**Next step:** Deploy to staging → run checklist → client approval → DNS switch → Search Console sitemap submission.
