# DemoLandingPage

Static landing page clone of [sohub.digital](https://sohub.digital/) — pure HTML/CSS/JS, no build step.

## Stack
- HTML5
- CSS3 (no framework, no preprocessor)
- Vanilla JavaScript
- Zero dependencies, zero build

## Local development

```bash
python3 -m http.server 8000
# or
npx http-server
```

Open http://localhost:8000/src/

## Project structure

```
DemoLandingPage/
├── src/
│   ├── index.html
│   ├── css/style.css
│   └── js/script.js
├── docs/
│   ├── SPEC.md        — validated scope
│   └── design.md      — design system spec
└── README.md
```

## Documentation
- [`docs/SPEC.md`](./docs/SPEC.md) — feature scope, audience, acceptance criteria
- [`docs/design.md`](./docs/design.md) — color tokens, typography, components, layout rules

## License
SOHub brand and content used with authorization.
