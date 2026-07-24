/* Renders a category gallery from js/products.js.
   The page shell sets <body data-category="..."> */

(function () {
  const slug = document.body.dataset.category;
  const cat = CATEGORIES[slug];
  if (!cat) return;

  document.title = "WALLPR — " + cat.title;
  const hero = document.querySelector(".gal-hero");
  // Resolve against the page URL: url() vars otherwise resolve relative to the stylesheet.
  hero.style.setProperty("--cover", "url('" + new URL(cat.cover, document.baseURI).href + "')");
  document.querySelector(".gal-kicker").textContent = cat.kicker;
  document.querySelector(".gal-title").textContent = cat.title;
  document.querySelector(".gal-tagline").textContent = cat.tagline;

  const items = WALLPAPERS.filter(function (w) { return w.category === slug; });

  // Checkout links: Lemon Squeezy URLs get the overlay class (lemon.js);
  // anything else opens in a new tab. Empty URL -> disabled "Coming soon".
  let needsLemon = false;
  function buyEl(url, label) {
    if (!url) {
      const b = document.createElement("button");
      b.className = "btn disabled";
      b.disabled = true;
      b.textContent = "Coming soon";
      return b;
    }
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    if (/\.lemonsqueezy\.com\//.test(url)) {
      a.className = "btn accent lemonsqueezy-button";
      needsLemon = true;
    } else {
      a.className = "btn accent";
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  // bundle bar
  const bar = document.querySelector(".bundle-bar");
  const copy = document.createElement("div");
  copy.className = "bundle-copy";
  const strong = document.createElement("strong");
  strong.textContent = cat.bundle.label;
  const span = document.createElement("span");
  span.textContent = "Choose any 4 wallpapers from this collection — $" + cat.bundle.price.toFixed(2) + ". Tell us your picks at checkout.";
  copy.appendChild(strong);
  copy.appendChild(span);
  bar.appendChild(copy);
  bar.appendChild(buyEl(cat.bundle.buyUrl, "Buy the pack — $" + cat.bundle.price.toFixed(2)));

  // grid
  const grid = document.querySelector(".wall-grid");
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "New " + cat.title.toLowerCase() + " wallpapers are on the easel — check back soon.";
    grid.replaceWith(empty);
  } else {
    items.forEach(function (w) {
      const card = document.createElement("article");
      card.className = "wall-card";

      const thumb = document.createElement("div");
      thumb.className = "wall-thumb";
      const img = document.createElement("img");
      img.src = w.preview;
      img.alt = w.title + " — " + cat.title + " wallpaper preview";
      img.loading = "lazy";
      img.draggable = false;
      thumb.appendChild(img);

      const meta = document.createElement("div");
      meta.className = "wall-meta";

      const name = document.createElement("h3");
      name.className = "wall-name";
      name.textContent = w.title;

      const tags = document.createElement("div");
      tags.className = "size-tags";
      w.sizes.forEach(function (s) {
        const t = document.createElement("span");
        t.className = "size-tag";
        t.textContent = s;
        tags.appendChild(t);
      });

      const buy = document.createElement("div");
      buy.className = "wall-buy";
      const price = document.createElement("span");
      price.className = "price";
      price.textContent = "$" + w.price.toFixed(2);
      buy.appendChild(price);
      buy.appendChild(buyEl(w.buyUrl, "Buy"));

      meta.appendChild(name);
      meta.appendChild(tags);
      meta.appendChild(buy);
      card.appendChild(thumb);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  // Block the right-click/long-press menu on previews (deterrent only —
  // real protection is that full-res files are never served by this site).
  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest(".wall-thumb, .gal-hero")) e.preventDefault();
  });

  // Load lemon.js only when a Lemon Squeezy link is actually on the page.
  if (needsLemon) {
    const s = document.createElement("script");
    s.src = "https://assets.lemonsqueezy.com/lemon.js";
    s.defer = true;
    document.head.appendChild(s);
  }
})();
