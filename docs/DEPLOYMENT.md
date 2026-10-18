# Website hosting and local preview

Website: https://kaandevs-ops.github.io/navrynt-website-public/

Interactive demo: https://kaandevs-ops.github.io/navrynt-demo-public/

## Local preview

From the repository directory:

```bash
python3 scripts/validate.py
python3 -m http.server 4174 --bind 127.0.0.1 --directory site
```

Open http://127.0.0.1:4174/. No application backend, package installation or build is needed.

## GitHub Pages

The Pages workflow validates files and original media checksums before publishing only `site/`. It runs on pushes to `main` and can be started manually. Pull requests run validation without deployment. Documentation, screenshots and README files stay in the repository; `site/` contains the deployed presentation and its media.

Set Pages source to **GitHub Actions**. The deployment job uses the `github-pages` environment and only the permissions needed for publication. Forks must configure their own Pages setting and update URLs before publication.

## Links and data boundaries

`site/config.js` controls cross-project link destinations. Canonical and social sharing URLs in the HTML use the website's own Pages address. Keep these aligned if repository names change. Relative asset paths work below the repository prefix.

The static website displays historical application captures and links to a separate browser-local demo. It does not run the full application, query intelligence providers or execute biometric models. No private application source, signing material, credentials, model weights or identity galleries belong in this repository.
