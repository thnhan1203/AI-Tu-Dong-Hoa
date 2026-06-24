# Changelog

> Per-feature log of work done. Updated after each feature/fix. For commit-level history, see `git log`.

## Format
```
### YYYY-MM-DD · <feature name> — `<short-hash>`
- What was done (bullet 1)
- What was done (bullet 2)

**Commits:** `<hash1>`, `<hash2>`
```

---

### 2026-06-24 · Repo bootstrap & GitHub push — `1bbbc97`, `b5a8516`, `e565b51`
- Initialize git repo, push to https://github.com/Tuoi-SE/DemoLandingPage.git
- `.gitignore` covering macOS, OMC state, Claude local, verification artifacts, research notes
- `README.md` with project overview and dev instructions
- `docs/WORKFLOW.md` — branching, Conventional Commits, worktree, quality gate, daily ritual
- `.github/ISSUE_TEMPLATE/feature.md` for issue-driven dispatch
- GitHub labels created: `ready`, `in-progress`, `review`

### 2026-06-24 · Design system docs — (no commit, in SPEC + design.md)
- `docs/SPEC.md` — validated scope, audience, acceptance criteria
- `docs/design.md` — full SOHub design system spec (colors, type, components, layout, responsive)

### 2026-06-24 · Initial landing page (dark theme, v1) — pre-commit
- `src/index.html`, `src/css/style.css`, `src/js/script.js` — first clone
- Smoke test + responsive check passed
- **Replaced by:** `accurate-sohub-clone` refactor (hero was wrong, services layout wrong, font missing)

### 2026-06-24 · Deep research on sohub.digital — `.research/` (gitignored)
- Playwright DOM inspection, computed styles, image URLs, @font-face extraction
- **Findings**: hero is 3D render + tagline, services are STACKED dark cards with progressive shading, "Don't be shy" uses 144px publicaPlay custom font, intro text has 72px emphasis spans
- **Assets**: homeRender, careerChair, footerRender (sohub), 4 work screenshots (Razer/Themis/CHR/Profit), PublicaPlay woff2
- 2 work cards (1UP Nova, AEVA Team) confirmed as placeholders in original (Sanity 402)

### 2026-06-24 · Accurate clone refactor — `3640d17`
- **Hero**: homeRender.png 3D image + 56px/600 tagline "Your story builds our history."
- **Work**: 2-col grid, 4 real Sanity images + 2 SVG placeholders
- **Work intro**: 72px text with italic emphasis spans (`diligent`, `unusual`)
- **Services**: 4 STACKED dark cards progressive bg (#0C1016 → #50555A), 48px radius
- **CTA**: 144px publicaPlay font for "Don't be shy" + careerChair.png
- **Footer**: footerRender.png overlay
- 9 files added (assets + font), HTML/CSS refactored

### 2026-06-24 · CSS split (4 partials) — `955bf52`
- `_tokens.css` — design tokens (colors, type, spacing, radii, fonts)
- `_base.css` — reset, body, focus, utilities
- `_components.css` — buttons, nav, service card
- `_sections.css` — header, hero, work, services, cta, footer, responsive
- `style.css` — entry, imports partials via `@import`
- 567 lines split across 5 files, no build step

### 2026-06-24 · Gitignore updates — `f660499`, `11e154b`, `e565b51`
- `.research/` excluded (1.3MB bulky notes)
- `v2-*.png` excluded (verification artifacts)
- `.claude/` excluded entirely

### 2026-06-24 · CHANGELOG pattern setup — `c045133`
- This file. Per-feature format going forward.

---

## Open items
- [ ] Replace 2 SVG placeholder work cards (1UP Nova, AEVA Team) when Sanity bandwidth quota resets
- [ ] Lighthouse score check (manual)
- [ ] Real social handles (LinkedIn, Instagram, X) — currently point to platform homepages
- [ ] Mobile menu animation polish (currently uses `transform`, no smooth ease)

### 2026-06-24 · Header accurate to sohub.digital — `dc98859` (branch: `feature/header-accurate`)
- **Layout**: fixed header, transparent bg, padding 40px 48px
- **Logo**: large bold "sohub" (~36-40px, weight 700)
- **Right cluster** (always visible):
  - CHAT pill: light gray (#D9E0E3), with chat icon
  - MENU/CLOSE pill: dark (#0C1016), with hamburger+dot icon
- **Slide-down nav panel** (when MENU open):
  - 4 items: Home, Studio, Work, Contact (48px font, weight 600, letter-spacing -3.6px)
  - Padding 16px 24px, border-radius 16px on hover
- **Removed**: old horizontal nav pattern (3 items), slide animation (text swap simpler)
- **Branch**: `feature/header-accurate` — pending user review + squash merge

### 2026-06-24 · Logo SVG wordmark — `55d6dc9` (squashed into main)
- Replaced text "sohub" with the actual SOHub wordmark SVG (5 vector paths)
- Logo uses `currentColor` for theming

### 2026-06-24 · Header buttons hover effect — `5b7e4a3`
- **CHAT pill**: hover → scale 1.04, text weight 600, letter-spacing +0.01em, bg #C9D1D6
- **MENU pill**: hover → scale 1.04, text weight 700, letter-spacing +0.02em, bg --cta-primary-hover
- **Transition**: 0.2s ease for font-weight + letter-spacing (variable Inter font)
- **Active** (press): scale 0.97 (preserved from previous)

### 2026-06-24 · Hero restructure — `e1f7a82`
- **`.hero-display`**: large SOHub wordmark SVG (~280px tall, full container width)
- **`.hero-render`**: 3D render overlaps right side of display (was corner)
- **`.hero-tagline`**: 56px → clamp(20px, 2.4vw, 36px), lighter weight
- **`.scroll-indicator`**: bottom-center → bottom-left

### 2026-06-24 · Hero float animation — `9c4a7b1`
- `.hero-render` bobs up/down: 4s cycle, ease-in-out, ±24px
- Position refactored: `top: 50%; translateY(-50%)` → `top: 0; bottom: 0; margin: auto 0`
