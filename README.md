# lathilda.com

The published static site for **lathilda.com**, served by GitHub Pages.

This repository is a **publication surface, not a source of truth**. The page
is authored and reviewed in the private `Lathilda/lathilda.com` repository,
which holds the tests, brand documentation and review record. Only the files
needed to serve the static site are copied here.

Edit the private repository, then re-copy and verify byte parity. An edit made
directly here will be overwritten and will not reach the canonical source.

Published contents: `index.html`, `styles.css`, `site.js`, `favicon.svg`,
`og.png`, `assets/fonts/`, `CNAME`, and `.nojekyll`.

## Custom domain

`lathilda.com` is served from this GitHub Pages repository. The apex uses the
GitHub Pages address set, `www` aliases `lathilda.github.io`, and `CNAME`
contains `lathilda.com`. Preserve all three parts when publishing.
