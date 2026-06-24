# Changelog

> Daily log of work done. Updated after each feature/fix. For full diff history, see `git log`.

## Format
```
## YYYY-MM-DD
- **Area**: What was done (commit ref)
```

---

## 2026-06-24

### Project bootstrap
- **Repo**: Initialized git, push to https://github.com/Tuoi-SE/DemoLandingPage.git
- **.gitignore**: macOS, OMC state, Claude local, verification artifacts, research notes
- **README.md**: Project overview, dev instructions
- **docs/WORKFLOW.md**: Branching (feature/*), Conventional Commits, worktree pattern, quality gate, daily ritual
- **.github/ISSUE_TEMPLATE/feature.md**: Issue-driven dispatch

### Design system
- **docs/SPEC.md**: Validated scope — clone sohub.digital 1:1 with authorization
- **docs/design.md**: SOHub design system spec (colors, typography, components, layout)

### Implementation v1 (dark theme)
- **src/**: HTML + CSS + JS — first dark-theme clone based on shallow WebFetch research
- Smoke test passed, mobile + desktop responsive

### Research (.research/ — gitignored)
- Deep Playwright-based research on sohub.digital
- **Findings**: Hero is 3D render image + tagline (not big SOHub h1), services are STACKED dark cards with progressive bg, "Don't be shy" uses 144px publicaPlay custom font, section intros have 72px emphasis spans, real Sanity images for 4/6 work cards (1UP Nova + AEVA Team use SVG placeholders in original)
- **Assets downloaded**: homeRender, careerChair, footerRender (sohub.digital), 4 work screenshots (Razer/Themis/CHR/Profit), PublicaPlay Regular woff2

### Implementation v2 (refactor to accurate structure)
- **Hero**: homeRender.png 3D image + 56px/600 tagline
- **Work**: 2-col grid, 4 real images + 2 SVG placeholders
- **Work intro**: 72px text with italic emphasis spans
- **Services**: 4 STACKED dark cards progressive bg (#0C1016 → #50555A)
- **CTA**: 144px publicaPlay font for "Don't be shy"
- **Footer**: footerRender.png overlay

### Code structure
- **CSS split** into 4 partials + entry: `_tokens.css`, `_base.css`, `_components.css`, `_sections.css` (567 lines, no build step)
- HTML keeps section comments, JS unchanged (30 lines)

### Open items
- [ ] Replace 2 SVG placeholder work cards (1UP Nova, AEVA Team) with real images when Sanity bandwidth quota resets
- [ ] Lighthouse score check (deferred — manual)
- [ ] Social links still point to platform homepages (need real SOHub handles)
