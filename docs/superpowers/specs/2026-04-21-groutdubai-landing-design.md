# GroutDubai — Landing Page Design Spec

**Date:** 2026-04-21
**Author:** Brainstormed with Claude Code
**Status:** Draft — pending user approval

---

## 1. Context & Goal

Launch a single-page marketing site for **GroutDubai**, a grout-cleaning service operating in Dubai under the trade license of AJMAL AKBARY TECHNICAL SERVICES CO. L.L.C (License 1471576). The site must:

- Convert mostly-mobile Dubai visitors into WhatsApp conversations.
- Sell one service (grout cleaning across six surfaces) and one physical product (maintenance kit: spray + 2 microfibre towels).
- Ship fast. Designed for a same-day build, same-day deployment.
- Feel like a premium, modern tech product — not a generic cleaning service.

## 2. Brand

| Field | Value |
| --- | --- |
| Brand name (wordmark) | **GroutDubai** (capital G, capital D; "Dubai" in cyan→blue gradient) |
| Legal company (footer only) | AJMAL AKBARY TECHNICAL SERVICES CO. L.L.C |
| Trade license number | 1471576 |
| Domain | groutdubai.com |
| Contact | WhatsApp + Call: +971 55 550 1147 |
| Tagline | *Grout, restored to new.* |
| Sub-promise | *German-tech cleaning — or you don't pay.* |

## 3. Visual System (V1 — Crisp White + Cyan→Blue)

- **Background:** `#FFFFFF` / surface `#F6F8FB` / hairline `#EAEEF5`
- **Ink (primary text):** `#0A0D14`
- **Muted text:** `#5A6373`
- **Gradient accent:** `linear-gradient(90deg, #00C2FF, #0066FF)` — used on the "Dubai" wordmark, key words in the H1, CTA shadow, before/after divider glow, and section accents.
- **Typography:** Geist (display + body) → Inter as web fallback. Tight letter-spacing on H1 (`-0.035em`), heavy weight 700–800, geometric tabular mono for numbers.
- **Shape language:** 10–14 px border radius, 1 px hairlines on cards, subtle drop shadows (`0 4px 12px rgba(0,102,255,.2)` on primary CTA).
- **Motion:** Framer Motion for the before/after slider drag, accordion FAQ, chip selector, and minor reveal-on-scroll.

## 4. Information Architecture (Single Page)

Order top → bottom:

1. **Sticky nav** — `GroutDubai` logotype, anchor links (Service, Kit, Results, Book), WhatsApp icon button.
2. **Hero** (Layout C — centered).
3. **Trust strip** — small row under hero: star rating, job count, "same-day quotes", "cash / card on completion".
4. **What we clean** — 6 surface cards with "from AED —" placeholders.
5. **How it works** — 3-step process.
6. **Before & After gallery** — grid of 6 interactive slider thumbnails.
7. **The GroutDubai guarantee** — "No clean, no charge" callout + German-tech explanation.
8. **Maintenance Kit** — product section: photo (placeholder), spray + 2 towels, price placeholder, "Order Kit on WhatsApp" CTA.
9. **Testimonials** — 3 placeholder cards (name + neighborhood + quote).
10. **FAQ** — 6 accordion items.
11. **Final CTA band** — full-width gradient, "Ready? Book on WhatsApp" + inline phone number.
12. **Footer** — logotype, anchor links, WhatsApp, phone, email, legal company name, trade license number.
13. **WhatsApp FAB** — floating, always visible on mobile, with phone pulse animation.

## 5. Hero Spec (Layout C — centered, mobile-first)

```
┌──────────────────────────────────────────────────────┐
│ Nav                                                  │
│                                                      │
│          ◉ German technology · No clean, no charge   │
│                                                      │
│          Grout, restored to new.                     │
│          German-tech restoration for floors,         │
│          counters & staircases — one visit.          │
│                                                      │
│     [ Book on WhatsApp → ]   [ Get a quote in 30s ]  │
│                                                      │
│          ┌────────────────────────────┐              │
│          │  BEFORE  │ ⇔ │   AFTER     │              │
│          │  (dark)  │   │   (bright)  │              │
│          └────────────────────────────┘              │
│                                                      │
│          ★★★★★  4.9 · 120+ jobs · Same-day quotes    │
└──────────────────────────────────────────────────────┘
```

- Pill badge: live-dot + "German technology · No clean, no charge"
- H1: `Grout, [restored to new].` — bracketed phrase in gradient
- Sub: one sentence, max 110 characters
- Two CTAs side by side:
  - **Primary (dark solid, gradient shadow):** "Book on WhatsApp →" — direct WhatsApp deep-link
  - **Secondary (outlined):** "Get a quote in 30s" — scrolls to / opens booking form inline
- Before/after slider: 16:9 container, two placeholder images (gridded tile pattern, dirty tone left, bright tone right), draggable cyan divider with glow
- Trust row: stars + review count + quote promise + payment note

## 6. "What we clean" — 6 surfaces

| Card | Placeholder price | Note |
| --- | --- | --- |
| Bathroom floor & wall grout | from AED — | most requested |
| Shower grout + silicone reseal | from AED — | includes recaulking |
| Kitchen floor grout | from AED — | — |
| Kitchen backsplash | from AED — | — |
| Kitchen countertops (stone deep-clean) | from AED — | quartz/granite/marble |
| Staircase tile + grout | from AED — | per flight |

Each card: icon, title, 1-line description, placeholder price, inline "Book →" link.

## 7. Maintenance Kit section

- Photo placeholder (spray bottle + 2 rolled microfibre towels on a gradient background).
- H2: "Keep it looking new."
- Body: "Our German-formula spray + 2 microfibre towels extend your clean by months. One towel to apply, one to wipe."
- Price placeholder: "AED —"
- Primary CTA: "Order Kit on WhatsApp" (separate pre-fill)
- Small line: "Free delivery across Dubai"

## 8. Guarantee callout

- Section H2: "If we can't lift the dirt, you pay nothing."
- Supporting: "Medium-to-heavy dirt is our specialty. We'll assess on arrival. If we can't restore it to what we promised, your visit is free — no catches."
- Visual: bold outlined ticket or stamp graphic with the gradient border.

## 9. Booking flow

**Entry points:**
- Hero CTA "Get a quote in 30s"
- "Book →" links on every surface card
- Final CTA band

**Behavior:** opens a bottom-sheet / inline modal with two steps.

**Step 1 — "What needs cleaning?"**
- Multi-select chips for the 6 surfaces.
- Home size radio: 1BR / 2BR / 3BR / Villa / Other.
- "Next →"

**Step 2 — "Where & when?"**
- Name (text).
- WhatsApp number (phone input, defaults +971).
- Area (select: Downtown, Palm, Marina, JBR, JLT, Arabian Ranches, Al Furjan, Jumeirah Village, Business Bay, Emirates Hills, Other).
- Preferred day (select: Today, Tomorrow, This week, This weekend, Next week, Flexible).
- "Send to WhatsApp →" — composes a WhatsApp deep-link with all data and opens it.

**No backend required.** All submissions end in WhatsApp. No DB, no form endpoint.

## 10. WhatsApp deep-link message templates

All targeted at `+971555501147`, URL-encoded.

**Generic (hero primary CTA, FAB, nav icon):**
> Hi GroutDubai, I'd like to book a grout / counter / staircase cleaning. My location is [area] and I'm available at [time]. Can I get more info?

**After form submission:**
> Hi GroutDubai, I'd like to book:
> • Surfaces: {chips}
> • Home size: {size}
> • Name: {name}
> • Area: {area}
> • Preferred day: {day}
>
> Please confirm availability and price.

**Maintenance kit CTA:**
> Hi GroutDubai, I'd like to order the maintenance kit (spray + 2 microfibre towels). My name is [name] and my delivery address is [address].

## 11. FAQ content (6 items)

1. How long does a typical job take?
2. Will the cleaning damage my grout or tile?
3. What does "no clean, no charge" actually mean?
4. Do you work in villas and apartments?
5. How often should I clean my grout?
6. Can I buy the maintenance kit without booking a service?

All answers ~2–3 sentences, written to close objections.

## 12. Testimonials (3 placeholder cards)

Use placeholder names/neighborhoods (e.g., "Sarah — Arabian Ranches", "Mohammed — Downtown") with realistic quotes. Real testimonials to be swapped in post-launch.

## 13. Tech stack

- **Vite + React 18 + TypeScript** — matches washiio, familiar, fastest DX.
- **Tailwind CSS v4** — design system tokens.
- **Framer Motion** — slider drag, accordion, chip state.
- **No backend.** All actions are WhatsApp deep-links.
- **No database.** No user state persisted.
- **Vercel** for hosting. `vercel.json` with clean-url redirects. Deploys on push to `main`.

## 14. File/component plan

```
/Users/cmdubai/groutdubai/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── vercel.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/globals.css
│   ├── lib/whatsapp.ts         # deep-link composers
│   ├── lib/constants.ts        # phone, company name, surfaces
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── WhatWeClean.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ResultsGallery.tsx
│   │   ├── Guarantee.tsx
│   │   ├── MaintenanceKit.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFAB.tsx
│   │   └── booking/
│   │       ├── BookingSheet.tsx
│   │       ├── StepSurfaces.tsx
│   │       └── StepContact.tsx
│   └── assets/
│       └── (placeholder imagery)
└── docs/
    └── superpowers/specs/2026-04-21-groutdubai-landing-design.md
```

## 15. Constants file

```ts
export const BRAND = "GroutDubai";
export const LEGAL_COMPANY = "AJMAL AKBARY TECHNICAL SERVICES CO. L.L.C";
export const LICENSE_NO = "1471576";
export const PHONE_E164 = "+971555501147";
export const PHONE_DISPLAY = "+971 55 550 1147";
export const WA_NUMBER = "971555501147"; // no + for wa.me links
export const DOMAIN = "groutdubai.com";
```

## 16. Copy highlights

- **H1:** "Grout, restored to new."
- **H1 sub:** "German-tech restoration for floors, counters & staircases — one visit. If we can't lift the dirt, you don't pay."
- **Guarantee title:** "If we can't lift the dirt, you pay nothing."
- **Kit title:** "Keep it looking new."
- **Final CTA title:** "Ready when you are."
- **Final CTA body:** "Message us on WhatsApp — most quotes out in under 15 minutes."

## 17. Non-goals (out of scope for v1)

- Multi-language (Arabic) — English only for MVP.
- Online payment for service or kit — all via WhatsApp.
- Account creation, login, customer portal.
- Blog, before/after CMS, admin panel.
- Image upload in the booking form — handled in WhatsApp chat.
- Reviews/ratings integration — static placeholders for v1.

## 18. Deployment plan

1. Scaffold Vite + React + TS + Tailwind project in `/Users/cmdubai/groutdubai`.
2. Install deps with pnpm.
3. Build out components per the file plan.
4. Initialize git, first commit.
5. `gh repo create groutdubai --public --source=. --push` — creates GitHub repo under `candlemandubai`.
6. `vercel link` + `vercel --prod` — deploy to production.
7. Add domain: `vercel domains add groutdubai.com` and point user to DNS instructions for their registrar.

## 19. Risks & tradeoffs

| Risk | Decision | Rationale |
| --- | --- | --- |
| Placeholder prices on public site | Keep as "from AED —" until user fills | User confirmed they'll add later. Better to launch with "request a quote" feel than to invent prices. |
| No backend = no lead capture if user closes WhatsApp | Accept | MVP speed priority. WhatsApp is the capture. |
| Placeholder testimonials | Mark clearly, swap post-launch | Trust signals needed; real ones will follow. |
| No Arabic | Defer | Dubai expat service market is English-dominant; Arabic can be added in v2. |
| Before/after images are placeholders (gridded tile patterns) | Use stylized placeholders now, swap real images when available | The slider mechanic works identically; user will supply photos. |
