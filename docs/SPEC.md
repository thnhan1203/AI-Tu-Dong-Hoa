# SPEC: sohub.digital clone

> Spec validated 2026-06-24. Source of truth for scope.

## Goal
Clone landing page [sohub.digital](https://sohub.digital/) 1:1 — same structure, same content, same visual treatment. User is authorized to use original content/brand.

## Audience
End-user / non-tech. Tone: confident, minimal copy, slogan-driven. Service descriptions use second-person plural ("Our team will…").

## Acceptance criteria
- [ ] Header với logo + nav (Home/Studio/Work/Contact) + persistent "Chat with SOHub" CTA
- [ ] Hero section: "SOHub — Creative Digital Experiences" + tagline "Your story builds our history." + render image + scroll indicator
- [ ] Work section: 6 project cards (1UP Nova, Razer, Themis, AEVA Team, CHR Innovations, Profit Saloon), mỗi card link tới `/work/[slug]`
- [ ] Services section: 4 blocks với sub-lists — Brand Identities, Smart Development, Marketing Campaigns, 3D Visualization
- [ ] Final CTA: "Don't be shy" + "Chat with SOHub" link + "BOOK A MEETING" button + career chair image
- [ ] Footer: © SOHub Digital, "Award-Winning Digital Agency" tagline, social icons (LinkedIn/Instagram/X), link columns (STUDIO/WORK/CONTACT), Chat CTA, back-to-top button
- [ ] Mobile: hamburger menu, responsive layout
- [ ] Dark/black background dominant, white text, accent theo render imagery
- [ ] Bold display sans-serif cho headlines, lighter body
- [ ] Generous vertical padding giữa các section

## Out of scope
- CMS integration
- Form submission backend
- Analytics
- i18n
- Heavy animations / 3D effects
- /work/[slug] detail pages (placeholder hrefs OK)

## Open questions
- Fonts: dùng Google Fonts (miễn phí) hay self-host? Default: Google Fonts.
- Project images: user cung cấp assets thật hay dùng placeholder gradients? Default: placeholder gradients matching original aesthetic.
- Social links: trỏ tới sohub.digital social handles, hay placeholder? Default: trỏ tới handles gốc (user authorized).

## Tech
- 3 files: `index.html`, `css/style.css`, `js/script.js`
- Static, no build, no framework
- Deploy: bất kỳ static host

## Open issues
- (none)
