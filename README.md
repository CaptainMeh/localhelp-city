# localhelp.city — website

Static site for **localhelp.city** — someone local when Cluj gets confusing.
Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). No backend, no CMS, no payments — by design, for launch.

## Run locally

```bash
npm install
npm run dev        # → http://localhost:4321
```

```bash
npm run build      # static output → dist/
npm run preview    # serve the built site locally
```

## Where things live

| Path | What it is |
|---|---|
| `src/lib/site.ts` | **Edit this first.** WhatsApp number, office address, email, pre-filled messages, pricing anchors, navigation. |
| `src/lib/schema.ts` | JSON-LD builders (Organization, LocalBusiness). |
| `src/layouts/BaseLayout.astro` | HTML shell: title, meta description, canonical, Open Graph, schema slot. |
| `src/components/` | Reusable pieces — header, footer, hero, FAQ, payment explainer, CTA blocks, etc. |
| `src/pages/` | One file per page. Copy is edited directly in these files. |
| `src/styles/global.css` | Design tokens (colors, fonts) and base styles. |
| `public/images/` | Placeholder SVGs — replace with real photography, keep the same filenames or update references. |

## Before launch (TODO markers in code)

- Replace `whatsappNumber` in `src/lib/site.ts` (currently `40000000000`, a placeholder).
- Replace the office address + email in `src/lib/site.ts` (used in footer and LocalBusiness schema).
- Replace placeholder images in `public/images/` with real photos (team, office, everyday Cluj).
- Replace `public/images/og-default.svg` with a real 1200×630 Open Graph image (JPG/PNG).
- Review guide cards in `src/pages/cluj/guides/index.astro` — link articles as they're written.
- Add geo coordinates + opening hours to `localBusinessSchema()` once office details are final.

## Editing rules (from the strategy)

- The brand is written **localhelp.city**, lowercase, always with `.city`. Never "LocalHelp".
- Primary CTA: **Ask us one question**. Secondary: **Get local guidance**.
- Launch model: *Ask someone local. Pay what feels fair.* Anchors are guidance, never packages or tiers.
- Core sentence (keep verbatim): *Before you sign, pay, book, visit, decide, or panic — ask someone local.*
- "Foreigner" appears only in the `/cluj/foreigner-support/` slug, title tags, and metadata — never as a visible label.
- Avoid: subscription-as-CTA, "per month" in heroes, packages, tiers, unlimited, 24/7, concierge, premium, platform, marketplace, help-desk tone, fake urgency, pleading language.
