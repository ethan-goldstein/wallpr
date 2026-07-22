# Store setup — connecting real checkout (do this once)

The site is fully built; every buy button is in "Coming soon" state until you paste
checkout URLs into `js/products.js`. You (not Claude) need to create the merchant
account, since it involves identity/banking details.

## 1. Pick the provider

**Lemon Squeezy → Stripe Managed Payments.** Lemon Squeezy was acquired by Stripe and
is being folded into **Stripe Managed Payments** (public preview since Feb 2026,
35+ countries). Either works with this site — both are merchant-of-record (MoR),
meaning *they* are the legal seller: they handle global sales tax/VAT, receipts,
fraud, and secure file delivery. If Lemon Squeezy signup is closed when you try,
use Stripe Managed Payments, or fall back to **Payhip** (5% fee) or **Gumroad**
(10% fee) — the site's buttons accept any hosted checkout URL.

## 2. Create the store + products

For each of the 4 categories create:
- **1 bundle product** — e.g. "The Sports Pack" ($9.99): a single .zip containing every
  full-res wallpaper in that category (both iPhone 1290×2796 and desktop 3840×2160
  versions if you have them).
- **1 product per individual wallpaper** ($3.99): the full-res file(s).

Upload the FULL-RESOLUTION files there and only there — never into this repo
(the repo is public; anything in `assets/` is free to download).

## 3. Paste the checkout links

Each product gets a hosted checkout URL (e.g. `https://<store>.lemonsqueezy.com/buy/...`).
In `js/products.js`:
- `CATEGORIES.<cat>.bundle.buyUrl` ← bundle link
- each `WALLPAPERS[n].buyUrl` ← individual link

Lemon Squeezy links automatically open as an on-page overlay (lemon.js loads only
when needed); other providers open in a new tab. Buttons stop saying "Coming soon"
the moment a URL is present.

## 4. Test before announcing

Every MoR has a test mode — make a test purchase and confirm:
1. checkout opens from the site, 2. payment completes, 3. the download email
arrives with working links, 4. the files in the zip are the right ones.

## 5. Payouts & taxes on your side

- Connect your bank in the provider dashboard; payouts arrive on their schedule.
- The provider remits sales tax/VAT worldwide (that's the MoR part). Your payouts
  are still **your income** — keep records; they issue year-end tax docs.
