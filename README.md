# Personal portfolio

## Project layout

- `index.html` — page content and editable personal information.
- `css/styles.css` — colors, layout, typography, responsive styles, and dark theme.
- `js/main.js` — mobile menu, theme toggle, project filters, and contact form behavior.
- `assets/` — résumé and future images or downloads.
- `404.html` — not-found page for static hosts that support custom 404 pages.
- `robots.txt` and `sitemap.xml` — replace the example domain before launch.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server (for example, `python -m http.server 8000`). No package installation or build step is needed.

## Personalise the site

1. In `index.html`, update the name, title, location, email, biography, skills, projects, experience, education, services, and article prompts. Search for square brackets to find remaining prompts.
2. Replace the YN monogram and social profile URLs with your own. Add actual project links and images; example project links are intentionally disabled.
3. Add genuine testimonials only with permission. Remove sections that do not apply.
4. Replace `assets/your-name-cv.txt` with your résumé PDF and change the résumé link in the hero to `assets/your-name-cv.pdf`.
5. In `css/styles.css`, edit the color variables at the top to change the palette.
6. In `js/main.js`, change `hello@example.com` in the contact handler to the email address that should receive messages.
7. Replace `your-domain.example` in `robots.txt` and `sitemap.xml` with the deployed domain.

## Contact form

The browser validates the form and opens the visitor’s configured email app with a prefilled message. It does not send data to a server. To accept submissions directly on the website, connect a secure form provider or backend and update the handler in `js/main.js`. Keep private API credentials on the server.

## Deploy

Upload this folder to a static host such as GitHub Pages, Netlify, or Cloudflare Pages. Configure HTTPS and your real domain, then update the sitemap and robots URLs. This project has no admin dashboard or server-side storage.
