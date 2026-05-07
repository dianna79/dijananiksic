# Dijana Niksic Portfolio

Original single-page portfolio build for Dijana Niksic.

## Files

- `index.html`
- `assets/css/main.css`
- `assets/js/main.js`
- `downloads/dijana-niksic-cv.pdf`
- `images/profile-placeholder.svg`
- `images/profile.jpg`
- `images/favicon.svg`
- `images/seo-preview.png`
- `images/certificate-placeholder.svg`
- `images/high-school-cap.svg`

## Notes

- This version uses newly written HTML, CSS, and vanilla JavaScript.
- The site uses Google Fonts and a local `images` folder for visual assets.
- Replace the LinkedIn link in `index.html` before publishing.
- The contact form is prepared for a secure hosted form endpoint. Replace `https://formspree.io/f/REPLACE_WITH_FORM_ID` with your real form endpoint.
- The Download CV button points to `downloads/dijana-niksic-cv.pdf`.
- SEO meta tags are configured for `https://dianna79.github.io/dijananiksic/`.
- To add your own photo, place it in `images` and update the About image source in `index.html`.
- To add certificate screenshots, place them in `images` and replace `images/certificate-placeholder.svg` in each Education card.
- Footer copyright is set to `(c) 2026 Dijana Niksic. All rights reserved.`

## Updating Content

Work cards are flexible. To add another experience, copy one full `.work-card` block in `index.html`, paste it inside `.work-grid`, then update the image, company/date, role, and paragraphs.

Skills are flexible. To add another skill, add another `<span>Skill name</span>` inside the relevant `.skill-list`. The layout wraps automatically.

Education cards are flexible. To add another certificate, copy one `.timeline-item`, update the text, credential link, and image path. Add the certificate screenshot to the `images` folder first.

The CSS uses responsive grids with `auto-fit`, so new cards and skills should wrap instead of breaking the layout.
