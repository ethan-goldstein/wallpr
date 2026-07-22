# WALLPR

Minimal one-page hero storefront for impasto-painted wallpapers (iPhone + desktop digital downloads). Static HTML/CSS/JS — no build step, no backend, no secrets.

**Live:** https://ethan-goldstein.github.io/wallpr/

## Structure

- `index.html` — non-scrollable hero; 4 category panels (Sports, Places, Lifestyle, Animals)
- `sports|places|lifestyle|animals.html` — thin shells; `js/gallery.js` renders each gallery from `js/products.js`
- `js/products.js` — the entire catalog: categories, bundles, wallpapers, checkout URLs
- `legal.html` — terms, privacy, refunds, personal-use license
- `assets/covers/` — category cover art (compressed webp)
- `assets/previews/` — **downscaled previews only** for sold wallpapers

## Adding a wallpaper

1. Export a compressed preview (~1400px wide, <300 KB) into `assets/previews/`.
2. Add an entry to `WALLPAPERS` in `js/products.js` (id, title, category, preview, sizes, price, buyUrl).
3. Upload the **full-resolution** file only to the checkout provider (see `STORE-SETUP.md`).

## Security model

- Full-res product files are never committed here — this repo/site is public; buyers get files via the checkout provider's expiring signed links.
- Checkout is 100% hosted by the merchant-of-record provider: no card data, no API keys, no PII on this site.
- CSP meta tags restrict scripts/frames to self + the checkout provider. No analytics, no cookies, no forms.
