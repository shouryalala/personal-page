# shourya.io — personal site

Hugo static site for Shourya Lala, deployed on Cloudflare Pages from `master`. Theme is `themes/blog-page` (a fork of liva-hugo, vendored in this repo, not a submodule).

## Commands

```bash
hugo server                       # local dev at http://localhost:1313
hugo --gc --minify                # production build into public/ (baseURL comes from config.toml)
```

Requires Hugo **extended** 0.166 or newer (SCSS, new template system). Cloudflare Pages must set the `HUGO_VERSION` environment variable to the version you tested with. Build command on Cloudflare should be `hugo --gc --minify` with no `-b` override, otherwise the sitemap and RSS emit relative URLs.

## Layout

| Path | Purpose |
|------|---------|
| `config.toml` | Site config, params used by templates, output formats |
| `content/posts/*.md` | Posts. Every post needs `title`, `date`, `description`, `image`, `subtitle`, `categories`, `tags`, `type: "featured"` |
| `content/about/_index.md` | Bio + contact text. Not rendered as its own page; the homepage and sidebar read its params (`aboutme`, `getintouch`, `image`) |
| `content/bookmark/_index.md` | Bookmarks as a `bookmarks:` list (`title`/`author`/`favorite` or `url`). Never use taxonomies for this |
| `content/profile/_index.md` | Front matter only; the résumé body lives in `themes/blog-page/layouts/profile/section.html` |
| `themes/blog-page/layouts/_partials/head.html` | All `<head>` metadata: title, description, canonical, Open Graph, Twitter cards, feed links |
| `themes/blog-page/layouts/_partials/jsonld.html` | Schema.org JSON-LD (WebSite, Person, BlogPosting, ProfilePage) |
| `themes/blog-page/layouts/robots.txt` | robots.txt template (explicitly allows AI crawlers, points at sitemap and llms.txt) |
| `themes/blog-page/layouts/home.llms.txt`, `home.llmsfull.txt` | `/llms.txt` and `/llms-full.txt` for LLM agents |
| `themes/blog-page/layouts/page.markdown.md` | Per-post Markdown alternate at `/posts/<slug>/index.md` |
| `themes/blog-page/layouts/404.html` | Real 404 page (Cloudflare serves it with a 404 status) |
| `static/_redirects`, `static/_headers` | Cloudflare Pages redirects and cache headers |
| `static/images/` | Images as WebP, animations as MP4 (`<video autoplay loop muted playsinline>`), never GIF |

## Conventions

- `description` in post front matter is the meta description and the llms.txt summary. Keep it under 160 characters and specific to the post; never copy it from another post.
- Only `categories` is a taxonomy. `tags` are plain metadata (used for `article:tag` and JSON-LD keywords) and do not generate pages.
- URLs in templates go through `absURL` / `.Permalink` so the 404 page and feeds work from any path.
- The only client-side dependency is Bootstrap's CSS. No jQuery, no icon fonts, no external fonts; icons are inline SVG in `_partials/icon.html`, and the nav toggle is a few lines in `assets/js/script.js`. Keep it that way.
- Comments explain a non-obvious why, not what the code does.
- Run `hugo --gc --minify` before committing and check the output for warnings; confirm `public/sitemap.xml` contains only real pages.
- Commit prefixes: `fix:`, `feat:`, `update:`, `chore:`, `refactor:`.
- Commits are authored by the repo owner only. No `Co-Authored-By` trailers, no tool attribution.

## Agent-facing outputs

| URL | What it is |
|-----|------------|
| `/llms.txt` | Site summary with links to every post and its Markdown version |
| `/llms-full.txt` | Full text of all posts as Markdown |
| `/posts/<slug>/index.md` | Single post as Markdown with YAML front matter |
| `/index.json` | JSON array of posts with plain-text contents |
| `/index.xml` | RSS feed |
| `/sitemap.xml`, `/robots.txt` | Standard crawler entry points |
