# Brahmareddy Pittu — Data Analyst Portfolio

A single-page portfolio site styled around a "spreadsheet / SQL editor" theme —
sheet-style tabs for navigation, a SQL query as the hero, and a skills section
laid out like a worksheet. Pure HTML/CSS/JS, no build step, no dependencies
beyond Google Fonts.

## Files

```
index.html      → all page content
style.css       → all styling
script.js       → scroll-spy for the active nav tab
assets/
  Brahmareddy_Pittu_Resume.pdf  → powers the "Resume ↓" download buttons
```

## Before you publish — quick checklist

- [ ] Swap `assets/Brahmareddy_Pittu_Resume.pdf` for your latest resume any
      time you update it (keep the same filename, or update the two `href`s
      in `index.html` that point to it).
- [ ] Double-check the LinkedIn, Tableau Public, email and phone links in
      `index.html` (hero buttons + footer) still point to the right place.
- [ ] If you add a real headshot or screenshots of your dashboards, drop the
      images into `assets/` and reference them from `index.html`.

## Deploying with GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or
   `brahmareddy-pittu.github.io` if you want it at the root of your GitHub
   Pages domain).
2. Upload these files to the repo, keeping the folder structure above —
   either drag-and-drop them in the GitHub web UI, or from your machine:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. GitHub will give you a live URL after a minute or two, usually:
   - `https://<your-username>.github.io/<repo-name>/`, or
   - `https://<your-username>.github.io/` if your repo is named
     `<your-username>.github.io`.

That's it — no build tools, no npm install. Any time you edit `index.html`,
`style.css`, or the resume PDF and push to `main`, the live site updates
automatically within a minute or so.

## Making changes later

Everything is plain HTML/CSS, so you can edit `index.html` directly:
- New project → copy one of the `<article class="card project-card">` blocks
  inside `#projects` and edit the text.
- New certification → copy a `<li>` inside `.cert-list`.
- Colors/fonts → all defined once at the top of `style.css` under
  `:root { ... }`, so changing `--navy` or `--amber` there updates the whole
  site.
