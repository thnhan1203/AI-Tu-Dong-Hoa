# Design System Inspired by SOHub

> Source of truth for visual language. 2026-06-24.

## 1. Visual Theme & Atmosphere

SOHub's design system embodies a sophisticated, forward-thinking digital agency aesthetic. The visual language balances minimalist elegance with bold technological undertones, creating an environment that feels both professional and innovative. Deep, near-black foundation tones establish a premium, tech-forward atmosphere, while light neutral surfaces provide breathing room and accessibility. The design philosophy prioritizes clarity and intentionality, with generous whitespace, crisp typography, and carefully placed interactive elements that guide users through immersive digital experiences. This is a system built for creative expression yet anchored in functional precision.

**Key Characteristics**
- Ultra-dark foundations paired with pristine light surfaces for maximum contrast
- Minimalist interaction patterns with rounded, pill-shaped buttons
- Premium spacing strategy emphasizing generous margins and breathing room
- Clean, modern typography hierarchy favoring weight variation over color
- Technology-forward aesthetic suggesting innovation and precision
- Accessibility-first approach with clear visual hierarchy

## 2. Color Palette & Roles

### Primary
- **Deep Navy Black** (`#11181C`): Primary background and dominant text color; used for headlines, primary interface elements, and main container backgrounds (130 uses)
- **Ultra Dark Navy** (`#0C1016`): Darkest accent for high-contrast situations, premium CTAs, and deep background layers (47 uses)
- **Dark Charcoal** (`#1E232C`): Secondary dark tone for cards, containers, and elevated surface areas (28 uses)

### Neutral Scale
- **Off-White** (`#F0F6F8`): Primary light surface and body text color; used extensively for main page backgrounds and content areas (134 uses)
- **Pure White** (`#FFFFFF`): Secondary light surface for contrast layers, overlay backgrounds, and premium content zones (64 uses)
- **Dark Gray** (`#555555`): Mid-tone text for secondary information and reduced-emphasis labels (20 uses)
- **Light Gray** (`#A5ABAD`): Tertiary text for disabled states, hints, and low-emphasis content (8 uses)
- **Soft Border Gray** (`#D9E0E3`): Border lines and divider elements between light surfaces (6 uses)

### Surface & Borders
- **Charcoal Surface** (`#363A40`): Card backgrounds and contained regions on dark backgrounds (5 uses)
- **Medium Gray** (`#4C5157`): Secondary surface for layered depth and subtle differentiation (5 uses)
- **Deep Slate** (`#20242A`): Tertiary surface tone for hover states and interactive overlays (5 uses)
- **Alternative Dark** (`#10141C`): Rare accent for specific premium interactions and edge cases (5 uses)

### Interactive
- **Black Interactive** (`#000000`): Maximum contrast for clickable elements and focus states (28 uses)

## 3. Typography Rules

### Font Family
**Primary:** Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
**Secondary:** Inter (consistent throughout)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|---|---|
| Display / Hero | Inter | 56px | 600 | 56px | 0px | Maximum visual impact for hero sections and key statements |
| Heading 1 (H1) | Inter | 16px | 400 | 24px | 0px | Primary heading for page sections and major content blocks |
| Heading 2 (H2) | Inter | 20px | 600 | 28px | 0px | Secondary heading for subsections and card titles |
| Body (Paragraph) | Inter | 16px | 400 | 24px | 0px | Standard reading text for all body content |
| Emphasis (Span) | Inter | 18px | 500 | 28px | 0px | Highlighted text within body for emphasis without disrupting flow |
| Link | ui-sans-serif | 16px | 400 | 24px | 0px | Interactive text links consistent with body sizing |
| Button Text | Inter | 16px | 400 | 24px | 0px | Call-to-action and interactive button labels |

### Principles
- **Weight-based hierarchy:** Emphasis achieved through font-weight (400, 500, 600) rather than color shifts
- **Consistent scale:** All text sizes maintain alignment to a 4px baseline grid where possible
- **Generous line height:** Minimum 1.5x line height for all body text ensures readability on light and dark backgrounds
- **Neutral color strategy:** Text color relies on semantic contrast (dark on light, light on dark) rather than accent colors
- **Accessibility first:** Font sizes never drop below 16px for body copy, maintaining WCAG AA readability standards

## 4. Component Stylings

### Buttons

#### Primary Button (Dark)
- **Background:** `#0C1016`
- **Text Color:** `#11181C`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `4.8px 4.8px`
- **Height:** `57.6px` (approximately)
- **Width:** `180px` (auto-adjusts to content)
- **Border Radius:** `3356px` (fully rounded pill shape)
- **Border:** None
- **Box Shadow:** None
- **Line Height:** `24px`
- **Hover State:** Opacity increase to `0.85`, subtle background lightening to `#1E242C`
- **Focus State:** Outline `2px solid #11181C` at `4px` offset

#### Secondary Button (Light)
- **Background:** `#D9E0E3`
- **Text Color:** `#11181C`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `4.8px 4.8px`
- **Height:** `57.6px` (approximately)
- **Width:** `263px` (auto-adjusts to content)
- **Border Radius:** `3356px` (fully rounded pill shape)
- **Border:** None
- **Box Shadow:** None
- **Line Height:** `24px`
- **Hover State:** Background darkens to `#A5ABAD`, opacity to `0.9`
- **Focus State:** Outline `2px solid #0C1016` at `4px` offset

#### Tertiary Button (Ghost/Dark)
- **Background:** `#0C1016`
- **Text Color:** `#11181C`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `4.8px 4.8px`
- **Height:** `57.6px` (approximately)
- **Width:** `178px` (auto-adjusts to content)
- **Border Radius:** `3356px` (fully rounded pill shape)
- **Border:** None
- **Box Shadow:** None
- **Line Height:** `24px`
- **Hover State:** Background opacity to `0.8`
- **Focus State:** Outline `2px solid #11181C` at `4px` offset

### Navigation
- **Background:** Transparent
- **Text Color:** `#11181C`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** None
- **Box Shadow:** None
- **Line Height:** `24px`
- **Hover State:** Text color shifts to `#555555`, weight increases to `500`
- **Active State:** Text color becomes `#000000`, font-weight `600`
- **Gap Between Items:** `24px`

### Links
- **Background:** Transparent
- **Text Color:** `#11181C` (default) or `#0C1016` (on light surfaces)
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** None
- **Box Shadow:** None
- **Line Height:** `24px`
- **Hover State:** Text color to `#000000`, opacity to `0.7`
- **Visited State:** Text color to `#555555`
- **Focus State:** Outline `2px solid #11181C` at `2px` offset

### CTA Link Button (Light)
- **Background:** `#D9E0E3`
- **Text Color:** `#11181C`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `4.8px 4.8px`
- **Height:** `57.6px` (approximately)
- **Width:** `294px`
- **Border Radius:** `3356px` (fully rounded pill shape)
- **Border:** None
- **Box Shadow:** None
- **Line Height:** `24px`
- **Hover State:** Background to `#A5ABAD`
- **Focus State:** Outline `2px solid #0C1016` at `4px` offset

### Cards & Containers
- **Background:** `#FFFFFF` or `#F0F6F8` (light modes) / `#0C1016` or `#1E232C` (dark modes)
- **Border Radius:** `16px` (for image containers); `0px` (for text containers)
- **Padding:** `40px` (default), `48px` (spacious), `24px` (compact)
- **Margin:** `0px` (flush), `24px` (default), `40px` (generous)
- **Border:** `1px solid #D9E0E3` (on light surfaces) or none (on dark)
- **Box Shadow:** None (flat design)
- **Gap Between Child Elements:** `16px`

### Inputs & Forms
- **Background:** `#FFFFFF`
- **Border:** `1px solid #D9E0E3`
- **Text Color:** `#11181C`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Font Family:** Inter
- **Padding:** `12px 16px`
- **Height:** `44px` (minimum)
- **Border Radius:** `8px`
- **Line Height:** `24px`
- **Focus State:** Border color to `#11181C`, outline `2px solid #11181C` at `2px` offset
- **Placeholder Text Color:** `#A5ABAD`
- **Disabled State:** Background to `#F0F6F8`, border to `#D9E0E3`, text color to `#A5ABAD`

## 5. Layout Principles

### Spacing System
**Base Unit:** `4px`

**Scale:**
- `4px` — Micro spacing for button padding and tight grouping
- `8px` — Extra-small gaps between closely related elements
- `12px` — Small margins and compact spacing
- `16px` — Standard gap for related content blocks
- `20px` — Medium spacing for section separations
- `24px` — Default section and component spacing
- `32px` — Large spacing for distinct sections
- `40px` — Extra-large container padding
- `48px` — Spacious container padding for featured content
- `56px` — Major section margins for visual breathing room
- `64px` — Large section margins for distinct layout areas
- `80px` — Hero and full-width section margins

### Grid & Container
- **Max Width:** `1440px` (full-width content area with generous margins)
- **Column Strategy:** Flexible 12-column grid, adapts to 6 columns on tablet, 2 columns on mobile
- **Section Patterns:** Full-bleed hero sections, padded content sections with `40px`–`80px` horizontal margins
- **Gutter Width:** `24px` between columns; `40px` between major content blocks

### Whitespace Philosophy
SOHub's design prioritizes generous whitespace as a design element. Sections breathe with `40px` to `80px` margins. Compact layouts are avoided; instead, negative space emphasizes hierarchy and directs attention. Light backgrounds (`#F0F6F8`, `#FFFFFF`) contrast with dark text and accents to maximize clarity. This breathing room creates a premium, uncluttered aesthetic.

### Border Radius Scale
- `0px` — Buttons with sharp corners (when needed), text containers, flat elements
- `8px` — Input fields, small component corners
- `16px` — Image containers, cards, contained media
- `3356px` (extremely large) — Pill-shaped buttons and fully rounded interactive elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0dp) | No shadow, no offset | Primary containers, text blocks, navigation elements |
| Raised (2dp) | `0px 2px 4px rgba(0, 0, 0, 0.1)` | Hover states on cards, slightly elevated interactive elements |
| Elevated (4dp) | `0px 4px 8px rgba(0, 0, 0, 0.15)` | Floating elements, modals, dropdown menus |
| High (8dp) | `0px 8px 16px rgba(0, 0, 0, 0.2)` | Stacked modals, premium overlays, focus states |

**Shadow Philosophy:**
SOHub employs a flat design strategy with minimal shadow usage. Elevation is suggested primarily through background color shifts and proximity rather than drop shadows. When shadows are used, they are subtle (`rgba(0, 0, 0, 0.1)` maximum opacity) and applied only to interactive hover states or floating elements. This maintains the clean, modern aesthetic while preserving visual hierarchy through color and spacing.

## 7. Do's and Don'ts

### Do
- **Use generous spacing:** Apply minimum `24px` margins between major sections; `40px`–`80px` for hero areas
- **Maintain color contrast:** Ensure text on backgrounds meets WCAG AA standards (minimum 4.5:1 for body text)
- **Leverage weight over color:** Use font-weight (400, 500, 600) to establish hierarchy rather than multiple accent colors
- **Apply rounded pills to buttons:** Use `border-radius: 3356px` for all primary interactive buttons
- **Keep backgrounds flat:** Avoid complex gradients; use solid colors from the palette or subtle opacity shifts
- **Align to grid:** All spacing, padding, and margins should be multiples of `4px`
- **Prioritize typography clarity:** Ensure line-height is at least 1.5x font-size for readability
- **Use semantic color roles:** Apply colors consistently—dark backgrounds with light text, light backgrounds with dark text

### Don't
- **Mix too many accent colors:** Stick to the defined palette; avoid introducing new colors
- **Compress whitespace excessively:** Avoid margins below `16px` for section separation
- **Use small font sizes:** Never set body text below `16px`; prioritize accessibility
- **Layer deep shadows:** Avoid shadows beyond `8px` blur radius or opacity above `0.2`
- **Create visual clutter:** Each component should have a clear purpose; remove redundant visual elements
- **Ignore focus states:** Always provide visible keyboard navigation focus indicators
- **Force rounded corners on text containers:** Reserve `border-radius` for interactive elements and images
- **Override the typography hierarchy:** Stick to defined sizes (16px, 18px, 20px, 56px); avoid arbitrary sizes

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|------------|
| Mobile | 320px–767px | Single-column layout; `24px` horizontal padding; font sizes reduce by 2–4px for display text; buttons stack vertically; navigation collapses to hamburger menu |
| Tablet | 768px–1023px | 2-column grid; `32px` horizontal padding; section margins reduce to `32px`–`56px`; navigation remains horizontal; buttons remain full-width or 50% width |
| Desktop | 1024px+ | 12-column grid / full-width layouts; `40px`–`80px` horizontal padding; all spacing scales to full values; navigation fully expanded |
| Large Desktop | 1440px+ | Max-width container at `1440px` with centered margins; spacing maintains `80px` gutters |

### Touch Targets
- **Minimum size:** `44px` × `44px` (all interactive elements—buttons, links, inputs)
- **Recommended size:** `48px` × `48px` (buttons with text)
- **Spacing between targets:** Minimum `8px`–`16px` to prevent accidental activation
- **Icon-only buttons:** Maintain `44px` minimum; add padding around the icon

### Collapsing Strategy
- **Hero sections:** Hero text sizes reduce from `56px` to `32px` on mobile; line-height maintains readable proportion
- **Navigation:** Horizontal menu collapses to vertical stack or hamburger menu below `768px`
- **Cards:** 2-up grid collapses to single column below `1023px`; margins adjust from `24px` to `16px` between cards
- **Buttons:** Full-width at mobile (`100%`), constrained width at tablet/desktop (`auto` or fixed widths)
- **Padding:** Container padding reduces from `80px` to `48px` on tablet; to `24px` on mobile
- **Whitespace:** Section margins decrease proportionally—`80px` → `56px` (tablet) → `32px` (mobile)

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Ultra Dark Navy (`#0C1016`)
- **Secondary CTA:** Soft Border Gray (`#D9E0E3`)
- **Primary Background:** Off-White (`#F0F6F8`)
- **Alternate Background:** Pure White (`#FFFFFF`)
- **Dark Background:** Deep Navy Black (`#11181C`)
- **Primary Text:** Deep Navy Black (`#11181C`)
- **Light Text:** Pure White (`#FFFFFF`)
- **Secondary Text:** Dark Gray (`#555555`)
- **Disabled Text:** Light Gray (`#A5ABAD`)
- **Border Color:** Soft Border Gray (`#D9E0E3`)
- **Focus Outline:** Black (`#000000`)

### Iteration Guide

1. **All buttons use pill-shaped rounded corners (`border-radius: 3356px`)** — Dark buttons use `#0C1016` background with `#11181C` text; light buttons use `#D9E0E3` background with `#11181C` text.

2. **Typography hierarchy is weight-based, not color-based** — Use Inter font consistently; vary weight (400, 500, 600) and size (16px, 18px, 20px, 56px) to establish hierarchy; never use accent colors for text emphasis.

3. **Spacing follows a 4px grid; minimum `24px` margins between sections** — Container padding ranges from `24px` (compact) to `80px` (hero); never use margins below `16px` for section separation.

4. **All text maintains minimum 16px size and 1.5x line-height** — Ensure WCAG AA contrast compliance; dark text on light backgrounds (4.5:1 minimum), light text on dark backgrounds (4.5:1 minimum).

5. **Flat design with minimal shadows; use color and spacing for depth** — Reserve subtle shadows (`0px 2px 4px rgba(0, 0, 0, 0.1)`) for hover states only; establish hierarchy through background colors, not overlays.

6. **Touch targets minimum 44px × 44px; spacing at least 8px–16px apart** — Ensure mobile usability; never squeeze interactive elements; use padding to scale interactive zones.

7. **Navigation is horizontal on desktop (16px font, Inter weight 400); collapses to hamburger below 768px** — Active states use weight 600 and `#000000` text color.

8. **Focus states visible for keyboard navigation** — Apply `2px solid #11181C` outline at `4px` offset for all interactive elements.

9. **Breakpoints: Mobile 320px–767px (Mobile-first with 24px padding); Tablet 768px–1023px (2-column, 32px padding); Desktop 1024px+ (12-column, 80px max margin); container max-width 1440px.**

10. **Image containers use `border-radius: 16px`; never force rounded corners on text containers** — Reserve rounded corners for visual emphasis on media and buttons only.
