# AOB Sales — Project Overview

> Source-of-truth reference for the `aob-sales` codebase. Keep this file in sync as the project evolves.

---

## 1. Identity & Purpose

- **Project name (package.json):** `aob-sales`
- **Document title (index.html):** `aob-sales`
- **Brand displayed in UI:** **AOB India — AI-Powered Revenue Systems**
- **Tagline / positioning:** People · Process · Technology · AI
- **Type:** Marketing / lead-gen single-page-style site for a sales-consulting / revenue-engineering company.

The site sells a services narrative: businesses don't have a sales problem, they have a *revenue system* problem; AOB India designs and runs that system.

---

## 2. Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | React | `^19.2.5` |
| DOM | react-dom | `^19.2.5` |
| Routing | react-router-dom | `^7.15.0` |
| Build / Dev | Vite | `^8.0.10` |
| React plugin | `@vitejs/plugin-react` (uses Oxc per README) | `^6.0.1` |
| Linter | ESLint (flat config) | `^10.2.1` |
| Lint plugins | `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals` | latest |
| Types (dev only) | `@types/react`, `@types/react-dom` | `^19.x` |
| Language | JavaScript + JSX (no TypeScript) | — |
| Module type | ESM (`"type": "module"`) | — |

**No additional libraries** are installed: no UI kit (MUI/Chakra/Tailwind), no state library (Redux/Zustand), no animation lib (Framer Motion), no form lib, no HTTP client, no testing framework. All styling is hand-written CSS Modules + CSS variables.

---

## 3. Scripts ([package.json](package.json))

```
npm run dev      # vite dev server (HMR)
npm run build    # vite build → /dist
npm run preview  # serve built /dist locally
npm run lint     # eslint .
```

No `test`, `format`, or `typecheck` scripts are defined.

---

## 4. Directory Map

```
e:/aob-sales/
├── .gitignore
├── README.md                  ← default Vite template README (not project-specific)
├── eslint.config.js           ← flat config
├── index.html                 ← entry; mounts #root, loads /src/main.jsx
├── package.json
├── package-lock.json
├── vite.config.js             ← minimal: defineConfig({ plugins: [react()] })
├── public/
│   ├── favicon.svg
│   └── icons.svg              ← SVG sprite (used only by leftover App.jsx demo)
└── src/
    ├── App.css                ← leftover from Vite template (NOT imported anywhere)
    ├── App.jsx                ← leftover Vite welcome page (NOT routed)
    ├── index.css              ← global styles + design tokens (CSS vars)
    ├── main.jsx               ← React root; wraps app in ThemeProvider + RouterProvider
    ├── routes.jsx             ← createBrowserRouter; lazy-loads every page
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/            ← shared, app-wide components
    │   ├── Button.jsx + .module.css
    │   ├── Footer.jsx + .module.css
    │   ├── Header.jsx + .module.css   ← includes hamburger + right-side drawer for ≤1024px
    │   ├── Layout.jsx          ← Header + <Suspense><Outlet/></Suspense> + Footer
    │   ├── SectionHeading.jsx + .module.css
    │   └── ThemeToggle.jsx + .module.css   ← sun/moon toggle, consumed by Footer
    ├── context/
    │   └── ThemeContext.jsx    ← dark/light theme; persists to localStorage; sets data-theme on <html>
    └── pages/
        ├── home/               ← FULLY BUILT
        │   ├── Home.jsx        ← composes 9 home sections
        │   └── components/
        │       ├── index.js    ← barrel export
        │       ├── hero/            Hero
        │       ├── the-problem/     TheProblem
        │       ├── aob-approach/    AobApproach
        │       ├── core-framework/  CoreFramework  (People/Process/Tech/AI pillars)
        │       ├── services-section/ ServicesSection
        │       ├── why-aob/         WhyAob
        │       ├── industries/      Industries
        │       ├── philosophy/      Philosophy (quote block)
        │       └── final-cta/       FinalCta
        ├── about-us/           ← STUB (just an <h1>)
        ├── services/           ← STUB
        ├── case-study/         ← STUB
        ├── blogs-media/        ← STUB
        └── contact-us/         ← STUB
```

---

## 5. Application Architecture

### 5.1 Entry & Bootstrap
- [index.html](index.html) loads `/src/main.jsx` as an ES module.
- [src/main.jsx](src/main.jsx) creates the React root and wraps the tree:
  ```
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
  ```

### 5.2 Routing — [src/routes.jsx](src/routes.jsx)
- Uses `createBrowserRouter` from react-router-dom v7.
- Every page is **lazy-loaded** via `React.lazy(...)`; `<Suspense>` lives inside [Layout.jsx](src/components/Layout.jsx) with a `"Loading..."` fallback.
- Route table:
  | Path | Component |
  |---|---|
  | `/` | `Home` |
  | `/about-us` | `AboutUs` |
  | `/services` | `Services` |
  | `/contact-us` | `ContactUs` |
  | `/case-study` | `CaseStudy` |
  | `/blogs-media` | `BlogsMedia` |
- All routes are children of a single `Layout` route (so Header + Footer always render).
- No 404 / `errorElement` defined.

### 5.3 Layout — [src/components/Layout.jsx](src/components/Layout.jsx)
```
<div className="layout-wrapper">
  <Header />
  <main><Suspense fallback="Loading..."><Outlet /></Suspense></main>
  <Footer />
</div>
```

### 5.4 Theme — [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx)
- `ThemeProvider` exposes `{ theme, toggleTheme }` via `useTheme()`.
- Initial value read from `localStorage.getItem('theme') || 'dark'`.
- On change, writes to `localStorage` and sets `document.documentElement.setAttribute('data-theme', theme)`.
- `index.css` defines variables for **dark (default)** and `[data-theme='light']`.
- UI entry point: [`ThemeToggle`](src/components/ThemeToggle.jsx) — a sun/moon button consumed by [Footer.jsx](src/components/Footer.jsx) inside the "Connect" column. It calls `toggleTheme()` from context; persistence is automatic via the provider's `useEffect`.

---

## 6. Styling System — [src/index.css](src/index.css)

Hand-rolled design system, no CSS framework.

### Design tokens (CSS variables on `:root`)
```
--bg-primary:    #060B14         (light: #FFFFFF)
--bg-secondary:  #0E1624         (light: #F3F4F6)
--bg-header:     rgba(6,11,20,0.8)
--accent-blue:   #2F80FF
--accent-cyan:   #00D1FF         (light: #00B4DB)
--accent-purple: #7A5CFF
--text-primary:  #FFFFFF         (light: #111827)
--text-secondary:#B6C2D1         (light: #4B5563)
--border-color:  #1C2A3D         (light: #E5E7EB)
--card-bg:       rgba(14,22,36,0.4)
--card-bg-hover: rgba(14,22,36,0.8)
--font-heading:  'Inter Tight', sans-serif
--font-body:     'Inter', sans-serif
--section-padding: 80px 5%
--container-width: 1200px
```
Fonts loaded from Google Fonts (Inter + Inter Tight).

### Global utilities defined in index.css
- `.container` — `max-width: var(--container-width); margin: 0 auto;`
- `.text-gradient` — blue→cyan gradient text clip
- `.layout-wrapper` — flex column, `min-height: 100vh`
- `main` flex-grows to push footer down
- `.loading-state` — centered, used by Suspense fallback

### Per-component styling: **CSS Modules** (`*.module.css`)
Pattern used everywhere: `import styles from './X.module.css'` then `className={styles.foo}`. The global `.container` is composed via template strings, e.g. `` `container ${styles.grid}` ``.

---

## 7. Shared Components

### [Button.jsx](src/components/Button.jsx)
- Props: `children`, `variant = 'primary' | 'secondary'`, `onClick`, `className`.
- Renders a `<button>` with combined module classes. No `type` prop (defaults to `submit` inside forms — worth noting).

### [SectionHeading.jsx](src/components/SectionHeading.jsx)
- Props: `heading` (required-ish), `subheading`, `supportingText`, `centered = true`, `className`.
- Renders subheading (eyebrow), `<h2>` heading, and supporting paragraph.

### [Header.jsx](src/components/Header.jsx)
- Sticky top header. Background uses `var(--bg-header)` so it themes correctly.
- Logo: "AOB **India**" (span colored blue).
- Nav links (in render order): Home, About Us, Services, Case Study, Blogs & Media, Contact Us. Links live in a `NAV_LINKS` array so the same list renders in the desktop bar and the mobile drawer.
- **Responsive behavior:**
  - `≥ 1025px` — horizontal nav bar, hamburger hidden.
  - `≤ 1024px` (tablet + mobile) — nav bar hidden, hamburger button shown. Tapping it slides a right-side drawer (`.drawer`) over a dimmed overlay.
  - Drawer closes on: link click, overlay click, Esc key, or route change (`useLocation`).
  - Body scroll is locked while the drawer is open (`document.body.style.overflow = 'hidden'`).
- Hamburger button animates its three bars into an X when open. Has `aria-expanded` / `aria-controls`; drawer is `role="dialog"` `aria-modal="true"`.

### [Footer.jsx](src/components/Footer.jsx)
- 3-column grid on desktop: Brand · Quick Links · Connect.
- The **Connect** column contains the social icons and the [`ThemeToggle`](src/components/ThemeToggle.jsx) button — this is the **only** place users can switch theme.
- Quick Links: Home / About / Services / Insights / Contact. (`/industries` link removed; that route doesn't exist.)
- **Responsive behavior:**
  - `≤ 768px` (tablet) — grid collapses to 2 columns; `Connect` spans full width on the second row.
  - `≤ 480px` (mobile) — grid stacks to 1 column; padding and headings tighten.
- Copyright uses `new Date().getFullYear()`.

### [ThemeToggle.jsx](src/components/ThemeToggle.jsx)
- Pill-shaped button. Shows a moon icon + "Dark mode" when light, sun icon + "Light mode" when dark (i.e., it shows what you'll switch *to*).
- Reads `{ theme, toggleTheme }` from `useTheme()`.
- Accepts an optional `className` for layout overrides.
- Has proper `aria-label`, `aria-pressed`, and `title`. Inline SVG icons (no icon-library dep).

---

## 8. The Home Page — fully built

[Home.jsx](src/pages/home/Home.jsx) composes 9 sections in this order:

1. **Hero** — Headline "AI-Powered / Revenue Systems", supporting copy, primary "Build Your Revenue Engine" + secondary "Book Strategy Call" buttons. Right side has an animated `aiCore` orb with a floating "+142% Revenue Growth" dashboard mockup. Animations: `pulse` + `float` keyframes.
2. **TheProblem** — Three "disconnected" nodes (Marketing / Sales / Operations). Closes with "Modern growth requires more than manpower. It requires a system."
3. **AobApproach** — "You Bring the Targets. We Build the System." Bulleted capability list + a stylized funnel visualization (Revenue Goal → Funnel Architecture → Leads & Meetings → Team + AI Execution).
4. **CoreFramework** — 4-card grid for the People / Process / Technology / AI pillars. Card data is a local array in the component.
5. **ServicesSection** — 4 service cards (AI-Powered Sales Outsourcing, AI Automation, Revenue Operations, Meeting Generation Systems). Each has a "Learn More →" link to `#`.
6. **WhyAob** — 5 differentiator blocks in a 3-col grid (Number-Driven Execution, Plug-and-Play, AI+Human Balance, End-to-End Ownership, Built for ROI).
7. **Industries** — 8 industry cards (Real Estate, EdTech, Manufacturing, Healthcare, Financial Services, B2B Services, D2C Brands, Professional Services).
8. **Philosophy** — Large quote: *"Modern Sales is an art performed within the boundaries of data, driven by the right mix of technology."* — **Dr. Praveen Kumar**.
9. **FinalCta** — "Build a Predictable Revenue Engine" with the two CTAs again.

Each section is its own folder with `<Section>.jsx` + `<Section>.module.css`, re-exported via [src/pages/home/components/index.js](src/pages/home/components/index.js) (barrel).

**Content is hard-coded** inside each component — no CMS, JSON, or markdown content layer.

---

## 9. Other Pages (current state)

All five are placeholder stubs containing a single `<h1>`:

- [src/pages/about-us/AboutUs.jsx](src/pages/about-us/AboutUs.jsx) → "About Us Page"
- [src/pages/services/Services.jsx](src/pages/services/Services.jsx) → "Services Page"
- [src/pages/contact-us/ContactUs.jsx](src/pages/contact-us/ContactUs.jsx) → "Contact Us Page"
- [src/pages/case-study/CaseStudy.jsx](src/pages/case-study/CaseStudy.jsx) → "Case Study Page"
- [src/pages/blogs-media/BlogsMedia.jsx](src/pages/blogs-media/BlogsMedia.jsx) → "Blogs & Media Page"

Each has an empty `components/index.js` ready for page-specific subcomponents — mirroring the `home/components/` pattern.

---

## 10. Conventions in Use

These patterns are followed consistently and should be preserved:

1. **Folder-per-section.** Each meaningful UI block gets its own folder containing `<Component>.jsx` + `<Component>.module.css`.
2. **CSS Modules** for component styles; **CSS variables** for the design system. No utility classes, no inline style objects (except a few one-offs inside Hero / CoreFramework / ServicesSection — see §13).
3. **Barrel `index.js`** inside `pages/<name>/components/` for grouped re-exports.
4. **Page-level components are lazy-loaded** in `routes.jsx`; sub-section components are eager.
5. **`.jsx` extension** for files containing JSX; `.js` for plain JS barrels.
6. **Default exports** for every component.
7. **PascalCase** for component file & function names; **kebab-case** for folder names (e.g., `the-problem/TheProblem.jsx`).
8. **Relative imports**, no path aliases configured.
9. **No prop-types or TypeScript** — props are documented only by reading the JSX.

---

## 11. ESLint Setup — [eslint.config.js](eslint.config.js)

Flat config:
- Extends `@eslint/js` recommended, `eslint-plugin-react-hooks` flat recommended, `eslint-plugin-react-refresh` vite preset.
- `globalIgnores(['dist'])`.
- Targets `**/*.{js,jsx}`, browser globals, `parserOptions.ecmaFeatures.jsx = true`.
- No project-specific rule overrides.

---

## 12. Build / Vite — [vite.config.js](vite.config.js)

Minimal:
```js
defineConfig({ plugins: [react()] })
```
No path aliases, no env handling, no proxy, no PWA, no compression plugins. React Compiler is **not** enabled (README note).

---

## 13. Known Gaps / Tech Debt

Things that an incoming contributor should know about today:

| # | Item | Where |
|---|---|---|
| 1 | `src/App.jsx` and `src/App.css` are leftover Vite template files; nothing imports them. Safe to delete. | [src/App.jsx](src/App.jsx), [src/App.css](src/App.css) |
| 2 | `public/icons.svg` is only referenced by the unused `App.jsx`. Likely also dead. | [public/icons.svg](public/icons.svg) |
| 3 | Router has no `errorElement` / 404 route. Unknown paths show a blank page. | [src/routes.jsx](src/routes.jsx) |
| 4 | `Button` has no `type` prop — defaults to `submit` inside forms. Add `type="button"` default. | [src/components/Button.jsx](src/components/Button.jsx) |
| 5 | A few sections sprinkle inline styles inside JSX (Hero dashboard mockup, CoreFramework pillar number, ServicesSection learnMore margin). Should migrate to CSS Modules for consistency. | Hero / CoreFramework / ServicesSection |
| 6 | `TheProblem.module.css` uses `background: dashed 2px var(--border-color)` which is **not valid CSS** for `background`. The dashed connector line doesn't render as intended. | [src/pages/home/components/the-problem/TheProblem.module.css:25](src/pages/home/components/the-problem/TheProblem.module.css#L25) |
| 7 | Footer social icons are placeholder text "In" / "Tw" — need real SVG icons + actual social URLs. | [src/components/Footer.jsx](src/components/Footer.jsx) |
| 8 | "Learn More →" links in `ServicesSection` and Hero/FinalCTA `<Button>`s have no `onClick` / `href` targets. | ServicesSection, Hero, FinalCta |
| 9 | No analytics, no SEO meta tags beyond `<title>aob-sales</title>`, no Open Graph tags, no favicon branding (still the default Vite favicon). | [index.html](index.html) |
| 10 | README is the unedited Vite + React template README — no project-specific instructions. | [README.md](README.md) |
| 11 | No tests, no CI, no formatter config (Prettier), no Husky/lint-staged. | — |
| 12 | Not a git repository at the time of analysis. | — |
| 13 | Home-page sections beyond Header/Footer (Hero, TheProblem, Industries, etc.) still need their own mobile/tablet responsive passes. Only Header and Footer have been done so far. | `src/pages/home/components/*` |

### Recently resolved (kept here briefly so future-you doesn't re-open them)

- ✅ Theme toggle is now wired via [ThemeToggle.jsx](src/components/ThemeToggle.jsx), mounted in the Footer.
- ✅ Footer "Quick Links" no longer links to the non-existent `/industries` route.
- ✅ [Header.jsx](src/components/Header.jsx) is now responsive (hamburger drawer at ≤1024px).
- ✅ [Footer.jsx](src/components/Footer.jsx) is now responsive (3-col → 2-col → 1-col).
- ✅ [Header.module.css](src/components/Header.module.css) now uses `var(--bg-header)`; [WhyAob.module.css](src/pages/home/components/why-aob/WhyAob.module.css) now uses `var(--bg-secondary)`. Both themes render correctly in those areas.

---

## 14. Quick Glossary (terms used on the site)

- **Revenue System / Revenue Engine** — AOB's term for the integrated People+Process+Tech+AI sales operation they build for clients.
- **Four Pillars** — People, Process, Technology, AI.
- **AOB India** — The company brand.
- **Dr. Praveen Kumar** — Cited author of the philosophy quote on the home page.

---

## 15. Project Decisions (confirmed with user, 2026-05-12)

These are durable choices — assume them unless explicitly revisited.

| Topic | Decision |
|---|---|
| **Language** | Stay on plain **JavaScript + JSX**. No TypeScript migration. |
| **Content layer** | **Hardcoded in components**. Copy / services / industries lists stay inline (arrays inside the `.jsx` files). No CMS, no JSON data files for now. |
| **Theming** | **Ship the dark/light toggle.** Wire a UI toggle in the Header that calls `toggleTheme()` from [ThemeContext](src/context/ThemeContext.jsx). Light-theme vars already exist in [index.css](src/index.css). |
| **Current focus** | **Make the site responsive.** Add mobile breakpoints across Header, Footer, and all Home sections. No new pages or backend work until responsive baseline is in. |

### Responsive plan (revised 2026-05-12)

| Item | Choice |
|---|---|
| **Breakpoints** | Mobile `≤ 480px`, Tablet `481–768px`, Desktop `≥ 1025px`. Header uses `≤ 1024px` as the hamburger threshold so the 769–1024 band still gets the drawer (the desktop nav doesn't fit comfortably there). |
| **Mobile nav** | Hamburger icon → **slide-in drawer from the right**. Drawer contains nav links only. Closes on link click, overlay tap, Esc, or route change. Body scroll locks while open. Implemented in [Header.jsx](src/components/Header.jsx). |
| **Theme toggle location** | **Footer "Connect" column** — single placement, no Header button. (Revised from the earlier plan that put it in the Header.) The toggle is a sun/moon pill in [ThemeToggle.jsx](src/components/ThemeToggle.jsx). |
| **Bug-fix scope (status)** | ✅ Hardcoded colors in Header / WhyAob → fixed. ✅ Dead `/industries` link in Footer → removed. ⏳ Still open: `background: dashed` in [TheProblem.module.css:25](src/pages/home/components/the-problem/TheProblem.module.css#L25), missing `type="button"` default on [Button.jsx](src/components/Button.jsx). |

### Implications for upcoming work
- New components must include mobile + tablet styles from the start, not retrofitted.
- Use `@media (max-width: 480px)` and `@media (max-width: 768px)` consistently across `.module.css` files. Header is the one place we additionally use `@media (max-width: 1024px)` (hamburger threshold).
- The single point of theme switching is `ThemeToggle` inside the Footer. Don't sprinkle additional toggles elsewhere unless we revisit this decision.
- Don't refactor copy out of components when touching them for responsive fixes — keep content hardcoded inline per §15.
- Home-page section components (Hero, TheProblem, AobApproach, CoreFramework, ServicesSection, WhyAob, Industries, Philosophy, FinalCta) still need their own responsive passes — this is tracked as item #13 in §13.
- Save bigger cleanups (delete leftover [App.jsx](src/App.jsx)/[App.css](src/App.css), SEO meta, real social icons, 404 route, README rewrite) for a follow-up pass — they're tracked in §13.

---

## 16. How to Use This Document Going Forward

When making changes:
1. **New page section?** Create `src/pages/<page>/components/<section-name>/<SectionName>.jsx` + `.module.css`, then re-export from the page's `components/index.js`. Compose into the page file.
2. **New shared component?** Place under `src/components/`, follow `<Component>.jsx` + `<Component>.module.css` convention, default-export.
3. **New design token?** Add to both the `:root` and `[data-theme='light']` blocks in [src/index.css](src/index.css).
4. **New route?** Lazy-load it in [src/routes.jsx](src/routes.jsx) and add its `<Link>` to [Header.jsx](src/components/Header.jsx) / [Footer.jsx](src/components/Footer.jsx) as appropriate.
5. **Keep this file updated** when adding routes, shared components, or design tokens.
