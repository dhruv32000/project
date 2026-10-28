# EduSpark Figma Design Plan

## 1. Product and audience
**Product:** EduSpark, a fictional online learning platform.
**Audience:** College students aged approximately 17–25, technology beginners, and students exploring career skills.
**Goal:** Help visitors understand the value quickly and encourage them to explore courses or start learning.

## 2. Frames
- Desktop: 1440 px wide; start at 2400 px tall, then resize to content.
- Mobile: 390 px wide; start at 2400 px tall, then resize to content.
- Component test area: create a separate frame or page to demonstrate components and variants.

## 3. Sections
1. Sticky-style header: logo, Home, Features, Courses, About, Get started.
2. Hero: eyebrow label, two-line headline, short supporting copy, primary and secondary buttons, learning dashboard illustration.
3. Skills strip: short uppercase labels.
4. Features: three cards — Expert-led courses, Smart learning tools, Progress that counts.
5. Courses: Web Development, AI & Machine Learning, UI/UX Design.
6. About/CTA banner: “Your ambition deserves a starting point.”
7. Signup CTA: email field and Get early access button.
8. Footer: brand, Explore links, Resources links, closing line.

## 4. Design tokens

### Colors
- Primary: `#5B5FEF`
- Primary hover: `#4548D8`
- Secondary: `#8B5CF6`
- Cyan: `#06B6D4`
- Orange: `#F59E0B`
- Ink: `#0F172A`
- Muted text: `#64748B`
- Border: `#E2E8F0`
- Surface: `#F8FAFC`
- White: `#FFFFFF`

Create Figma color styles using these names, for example `Brand/Primary`, `Brand/Secondary`, `Text/Primary`, `Text/Muted`, `Surface/Default`, and `Border/Default`.

### Typography
- Headings: Poppins, SemiBold/Bold
- Body: Inter, Regular/Medium
- Hero H1: 56 px desktop, 36–40 px mobile
- H2: 32–44 px desktop, 28–32 px mobile
- H3: 18–20 px
- Body: 14–17 px
- Small labels: 10–12 px

Create text styles for `Heading/H1`, `Heading/H2`, `Heading/H3`, `Body/Default`, `Body/Small`, and `Button/Label`.

### Spacing
Use an 8 px rhythm where practical: 8, 16, 24, 32, 48, 64 px. Use 20–28 px card padding and consistent alignment.

## 5. Components to create
At minimum, make these components with `Ctrl + Alt + K` on Windows after selecting the designed layers:
1. `Button/Primary`
2. `Button/Secondary`
3. `Card/Feature`
4. `Header/Desktop`
5. Optional: `Icon/Badge`, `Course/Row`, `Input/Email`

Use variants for button states or sizes if comfortable. For card instances, change the icon, title, body, and link while preserving the component layout.

## 6. Auto Layout settings
- Header: horizontal; align center; spacing mode Space between; horizontal padding 24 px; vertical padding 16–20 px.
- Hero content: horizontal on desktop; gap 48–64 px. Put copy and illustration in separate child frames. Stack vertically on mobile.
- Hero actions: horizontal; gap 12 px; wrap or stack on mobile.
- Feature section: vertical; gap 24–32 px; padding 48–64 px.
- Feature cards row: horizontal; gap 20–24 px; each card set to Fill container.
- Feature card: vertical; gap 12–16 px; padding 24–28 px.
- Button: horizontal; gap 8–12 px; padding 16 px vertical and 22–24 px horizontal; target height about 48–50 px.
- Course row: horizontal; gap 12–16 px; align center; padding 16 px.
- Footer: horizontal groups on desktop; vertical stack on mobile; padding 32–48 px.

Use `Hug contents` for text and button width where appropriate, and `Fill container` for cards or inputs that should expand. Use constraints thoughtfully for illustrations and decorative shapes.

## 7. Mobile adaptation
- Frame width: 390 px.
- Side margins: 18–20 px.
- Header: logo left and menu icon right.
- Hero: text and buttons first, illustration below.
- Features: one card per row.
- Courses: keep title and description readable; hide optional labels if cramped.
- CTA and footer: stack content vertically.
- Keep body text around 14–16 px and touch targets around 44 px or larger.

## 8. Figma beginner workflow
1. Create a new Figma design file.
2. Add the four pages: Design System, Desktop, Mobile, Components.
3. Add color and text styles before laying out the full page.
4. Draw desktop and mobile frames.
5. Build the header and primary button first; convert them to components.
6. Build one feature card with Auto Layout and duplicate it for the other features.
7. Assemble each page section with Auto Layout.
8. Duplicate/adapt the desktop composition for mobile; rearrange rather than simply shrinking.
9. Check alignment, spacing, contrast, and text wrapping.
10. Export desktop and mobile frames as PNG files and share the Figma file with view access.

## 9. Intended users and design choices
EduSpark is intended for college students and technology beginners. Purple and blue communicate a modern technology identity, while cyan and orange add small visual accents. Strong headings, simple copy, clear CTAs, and repeated card patterns support quick scanning. Desktop uses horizontal groups and mobile stacks content vertically to preserve readability.
