# DiJia (Andy) Su — personal website

A static, responsive academic website for `djsu-andy/andysu.github.io`, intended to be served at `https://andysu.org/`. It uses plain HTML, CSS, and JavaScript, so there is no build step.

## Publishing

Upload the contents of this folder to the root of the `djsu-andy/andysu.github.io` repository. In GitHub, set **Settings → Pages → Build and deployment** to **Deploy from a branch**, `main`, `/ (root)`.

The included `CNAME` claims `andysu.org`. After the GitHub Pages URL works, update the Squarespace DNS records:

- Apex `@` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`
- `www` CNAME: `djsu-andy.github.io`

Changing those records moves traffic away from the current Squarespace website. Confirm the GitHub preview first.

## Owner-only visitor analytics

Statcounter owner analytics can show visitor counts, timestamps, visit paths, referrers, devices, approximate location, and IP details available under the selected Statcounter plan/settings. Nothing is displayed on the public homepage; reports are visible only after signing in to the private Statcounter dashboard.

To activate owner analytics, copy the public `sc_project` and `sc_security` values from a Statcounter installation snippet into `assets/analytics-config.js`. Do not add a password or private API key. Until both values are set, no Statcounter request is sent.

The invisible analytics loader respects Global Privacy Control and Do Not Track. Review `privacy.html` and the provider's IP-masking/retention settings before activation.

## Files

- `index.html` — biography, publications, patents, metadata, and social-preview tags
- `assets/site.css` — visual design and responsive layout
- `assets/analytics.js` — invisible owner-analytics loader
- `assets/analytics-config.js` — public Statcounter counter identifiers
- `assets/og-card.png` — social preview image
- `privacy.html` — privacy notice
- `publications.json` — publication source data
- `CNAME` — custom domain for GitHub Pages
- `robots.txt` and `sitemap.xml` — search-engine discovery

Academic content was adapted from the public `andysu.org` page on September 12, 2026. Review publication status and dates before future updates.
