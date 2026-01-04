# T Hemanth — Portfolio (static)

This is a minimal static portfolio optimized for GitHub Pages. It uses Tailwind via CDN (no build step). Replace placeholders (photo, projects, resume) with your actual content.

## What I scaffolded
- `index.html` — main site (hero, projects, about, contact)
- `assets/js/main.js` — typed hero text + smooth scroll
- `resume.pdf` — downloadable placeholder (replace with your real resume)
- `LICENSE` — MIT

## Replace placeholders
- Profile photo: replace the image src in `index.html` (currently uses a ui-avatars URL). Recommended path: `/assets/profile.jpg`. Update the `<img src="...">` accordingly.
- Projects: edit the Projects section in `index.html` and add more project cards.
- Resume: overwrite `resume.pdf` at the repository root with your actual PDF (same filename) so the Download button keeps working.
- Social links: update links in the Contact section.

## Deploy to GitHub Pages (simple)
1. Create a new GitHub repository (or push to an existing one).
2. Commit these files to the `main` branch (root).
3. In the repository settings → Pages:
   - Source: Branch `main`
   - Folder: `/ (root)`
4. Save — GitHub Pages will build and publish the static content. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

Alternatively, you can publish from a `gh-pages` branch or use the `docs/` folder. See GitHub Pages documentation for details.

## Quick edits & local preview
- Because this uses only static files, you can preview locally by opening `index.html` in a browser.
- For a better local experience, serve with a simple static server, e.g.:
  - Python 3: `python -m http.server 8000` (then open http://localhost:8000)

## Customization ideas
- Replace Tailwind CDN with a build step if you want a production-optimized CSS file.
- Add more project cards and case studies.
- Swap the placeholder avatar for your photo at `/assets/profile.jpg`.
- Add a contact form using Formspree or Netlify Forms if you want an in-site message flow.

---

If you'd like, I can:
- Commit these files into a new GitHub repo for you (I would need repo name and whether you want it public).
- Add more project cards from the details you provide.
- Replace the avatar with an uploaded photo if you provide it.

What should I do next? Would you like me to create the repository and push these files to it, or make any immediate edits? 