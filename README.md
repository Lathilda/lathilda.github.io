# lathilda.com

The published static cover for **lathilda.com**, served by GitHub Pages.

This repository is a **publication surface, not a source of truth**. The page
is authored in the private `Lathilda/lathilda.com` repository, which also
holds the unfinished application beneath it (`vinext`, `drizzle`, Cloudflare
Workers), its documentation and its tests. Only the files needed to serve the
cover are copied here.

Edit the private repository, then re-copy. An edit made directly here will be
overwritten and will not reach the real source.

Contents: `index.html`, `styles.css`, `favicon.svg`, `assets/fonts/`,
`.nojekyll`.

## Custom domain

`lathilda.com` is **not** served from here yet. It currently resolves to an
OpenAI-hosted deployment (`www` → `custom-domains.chatgpt.site`) created
earlier, serving an older page. Adding a `CNAME` file here would make GitHub
Pages claim the domain and redirect this site to that older page.

To switch the domain to this repository: add `CNAME` containing
`lathilda.com`, then repoint the GoDaddy records. Do the second step
deliberately — it takes the existing deployment offline.
