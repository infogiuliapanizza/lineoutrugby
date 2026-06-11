# lineoutrugby

LINEOUT official website — helping Italian rugby players move to Spain.

**Non parti da solo. · Live, Learn & Play**

Static site (no build step): open `index.html` or serve the folder with any static server, e.g.

```sh
npx http-server .
```

## Structure

- `index.html` — home (hero, cosa facciamo, perché noi, come funziona, l'idea, CTA)
- `fondatori.html` — the three founders, careers and group photo
- `come-funziona.html` — detailed 5-step path + FAQ
- `contatti.html` — contact info + Formspree form
- `css/style.css` — styles, brand palette and self-hosted `@font-face` rules
- `js/i18n.js` — IT/ES translations and UI behaviour (language toggle, mobile nav, reveal)
- `assets/crest.svg` — LINEOUT crest (vector, self-contained)
- `assets/fonts/` — Anton + Archivo (latin subsets, woff2)

## i18n

The site is bilingual IT/ES. Every translatable element carries a `data-i18n` key resolved
against the `translations` object in `js/i18n.js`; the navbar pill toggles the language and
persists the choice in `localStorage`. Default language is Italian.

## Before launch

- Replace the Formspree form ID in `contatti.html` (`xpwzgkdv` is a placeholder).
- Replace the founder photo placeholders in `fondatori.html` (swap the `placeholder`
  `<img>` for a `class="real"` one pointing to the uploaded photos).

## Brand

Per the visual identity guidelines v1.0: granata `#3F0909` and crema `#F6E4BE` as warm bases,
ambra `#E0A23F` as accent only (one word or detail per block); Anton (display, italic) +
Archivo (text); chevron field-line pattern on granata heroes; no gradients, no blue.
The brand name is always written as one word — LINEOUT — except in stacked graphics.
