# EduSpark — Responsive Product Landing Page

A fictional education-platform landing page created for a UI/UX using Figma assignment. This repository includes a responsive HTML/CSS/JavaScript implementation and a design plan for recreating the interface in Figma.

## Product concept

**EduSpark** helps college students explore practical learning in web development, AI and machine learning, and UI/UX design.

**Target audience:** College students (roughly ages 17–25), technology beginners, and students exploring internship and career skills.

**Design goals**
- Friendly, modern education-tech identity
- Clear hierarchy and prominent calls to action
- Responsive desktop and mobile layouts
- Consistent spacing, typography, colors, and reusable UI patterns
- Accessible navigation, form labels, focus states, and reduced-motion support

## Files

- `index.html` — page structure and content
- `styles.css` — visual styles, responsive breakpoints, and component patterns
- `script.js` — mobile navigation, demo form feedback, and dynamic footer year
- `FIGMA_DESIGN_PLAN.md` — Figma frame sizes, design tokens, components, Auto Layout settings, and build steps

## Run locally

1. Download or clone this repository.
2. Keep `index.html`, `styles.css`, and `script.js` in the same folder.
3. Open `index.html` in a browser. For a smoother development workflow, use the **Live Server** extension in VS Code and choose **Open with Live Server**.
4. Resize the browser to test desktop and mobile layouts.

No build step or package installation is required. Google Fonts are loaded online; system fallbacks are included.

## Figma recreation plan

Create a Figma file named `EduSpark — Responsive Landing Page`.

Suggested pages:
1. `01 — Design System`
2. `02 — Desktop Landing Page`
3. `03 — Mobile Landing Page`
4. `04 — Components`

Recommended frames:
- Desktop design: 1440 px wide
- Mobile design: 390 px wide
- Adjust frame height to fit all sections

Use Auto Layout (`Shift + A`) for the header, buttons, feature cards, card row, CTA, and footer groups. Create reusable components for `Button / Primary`, `Button / Secondary`, `Card / Feature`, and `Header / Navigation`. Use Hug contents and Fill container thoughtfully, and make a separate mobile layout rather than relying on frame resizing alone.

## Design system

### Colors

| Token | Hex | Use |
|---|---|---|
| Primary | `#5B5FEF` | Main CTA, links, highlights |
| Primary dark | `#4548D8` | Hover state |
| Secondary | `#8B5CF6` | Gradient accents |
| Cyan | `#06B6D4` | Secondary accents |
| Orange | `#F59E0B` | Small highlights |
| Ink | `#0F172A` | Main text and footer |
| Muted | `#64748B` | Body copy |
| Surface | `#F8FAFC` | Section background |
| White | `#FFFFFF` | Cards and page background |
| Border | `#E2E8F0` | Dividers and card outlines |

### Typography

- Headings: Poppins, 500–800
- Body/UI: Inter, 400–700
- Desktop hero heading: about 56–62 px
- Section heading: 32–44 px
- Card heading: 18–20 px
- Body: 14–17 px
- Small labels: 10–12 px

### Spacing and shape

Use a consistent 8 px spacing rhythm where practical: 8, 16, 24, 32, 48, 64 px. Cards use about 22 px corner radius; buttons use about 13 px; smaller icon tiles use 12–16 px.

## Interaction notes

- The mobile navigation opens and closes with the menu button.
- Anchor links scroll to page sections.
- The signup form validates an email and displays demo confirmation only. It does **not** send, store, or subscribe an email address. A real backend or form service would be required for that.

## GitHub submission steps

1. Sign in to GitHub and create a **new public repository** named `eduspark-landing-page` (or another name approved by your instructor).
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and `FIGMA_DESIGN_PLAN.md` to the repository root. Alternatively, use GitHub Desktop or Git commands.
3. In your Figma file, select **Share** and set link access to **Anyone with the link can view** if your college permits it. Do not enable edit access unless required.
4. Export desktop and mobile preview frames as PNG files. Add them to a folder named `screenshots` in the repository if required.
5. Optional: publish the website with GitHub Pages: repository **Settings → Pages → Deploy from a branch**, select `main` and `/ (root)`, then save. Wait for GitHub Pages to publish the site.
6. Open the repository URL and verify that the files are visible. If using GitHub Pages, verify the published website too.
7. Paste the GitHub repository URL (and Figma view link if the sheet has a separate column) into the class Google Sheet.

## Suggested submission explanation

EduSpark is a fictional online learning platform designed for college students and technology beginners. The landing page uses a clean layout, purple-blue accents, strong headings, consistent spacing, and clear calls to action. Auto Layout and reusable components are part of the Figma design workflow. The desktop design uses horizontal content groups, while the mobile design stacks content vertically for readability on narrow screens.

## Credits and scope

This is a student project concept, not a real education service. The signup interaction is a front-end demo and does not collect or transmit data.
