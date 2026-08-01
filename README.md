# Nakladki Hugo Netlify

Hugo/Netlify wrapper for the optimized static Nakladki website.

## Deploy

Netlify settings:

- Build command: `hugo --gc`
- Publish directory: `public`
- Hugo version: `0.163.3`

The same settings are already defined in `netlify.toml`.

## Site Files

The optimized HTML/CSS/JS files are stored in `static/`. Hugo copies them to `public/` during build.

Current production URL in metadata, `robots.txt`, and `sitemap.xml`:

```text
https://nakladki.netlify.app
```

If the domain changes later, replace this URL globally in `static/**/*.html`, `static/robots.txt`, `static/sitemap.xml`, and `hugo.yaml`.

## Images

Upload site images to these paths before publishing:

- `static/images/gallery/`
- `static/images/promo/`
- `static/images/svg/`

The HTML already references images as `https://nakladki.netlify.app/images/...`.
