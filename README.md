# T Hemanth — Portfolio (static)

This is a minimal static portfolio optimized for GitHub Pages. It uses Tailwind via CDN (no build step). Replace placeholders (photo, projects, resume) with your actual content.

## What I scaffolded
- `index.html` — main site (hero, projects, about, contact)
- `assets/js/main.js` — typed hero text + smooth scroll
- `assets/favicon-32.svg` and `assets/favicon-16.svg` — simple circular favicons with "TH"
- `resume.pdf` — downloadable placeholder (replace with your real resume)
- `LICENSE` — MIT

## Replace placeholders
- Profile photo: replace the image src in `index.html` (currently uses a ui-avatars URL). Recommended path: `/assets/profile.jpg`. Update the `<img src="...">` accordingly.
- Projects: edit the Projects section in `index.html` and add more project cards.
- Resume: overwrite `resume.pdf` at the repository root with your actual PDF (same filename) so the Download button keeps working.
- Social links: update links in the Contact section.

## Deploy to GitHub Pages (simple)
1. Create a new GitHub repository (this repository is created for you).
2. Commit these files to the `main` branch (root).
3. In the repository settings → Pages:
   - Source: Branch `main`
   - Folder: `/ (root)`
4. Save — GitHub Pages will build and publish the static content. Your site will be available at `https://hemanthofficialweb3.github.io/Hemanth_Portfolio/`.

## Quick edits & local preview
- Because this uses only static files, you can preview locally by opening `index.html` in a browser.
- For a better local experience, serve with a simple static server, e.g.:
  - Python 3: `python -m http.server 8000` (then open http://localhost:8000)

---

If you'd like, I can also:
- Add more project cards with links you provide.
- Replace the avatar with an uploaded photo if you provide it.
- Create a `gh-pages` branch instead of publishing from `main` if you prefer.
