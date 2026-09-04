# Desert Rose — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Desert Rose draws from sun-baked landscapes — dusty pinks, warm terracotta, and natural sand. The palette is soft yet grounded, feminine without being fragile. It communicates warmth, care, and curated taste, making it ideal for brands where aesthetics and personal touch matter most.

- **Mood:** Soft, curated, warm, elegant
- **Best for:** Fashion, beauty, skincare, lifestyle blogs, boutique retail
- **Feel:** Warm, muted, tactile — like dried flowers on linen
- **Lighting metaphor:** Late afternoon desert sun — warm, diffused, golden-pink cast

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#c67a5c` | Primary CTAs, hero accents, brand marks |
| Secondary | `#c9a9a6` | Secondary elements, tags, soft backgrounds |
| Accent | `#d2b48c` | Borders, dividers, warm highlights |
| Warm Neutral | `#fffff0` | Page background |
| Text Primary | `#3d2b24` | Headings and body copy |
| Text Secondary | `#7a6b66` | Captions, meta text, placeholders |
| Text Inverse | `#fffff0` | Text on dark/terracotta backgrounds |
| Background Primary | `#fffff0` | Main page canvas |
| Background Secondary | `#f5ece6` | Alternating sections, sidebar fills |
| Border | `#dcc8b8` | Card borders, dividers |
| Shadow Base | `rgba(198, 122, 92, 0.08)` | Warm terracotta-tinted shadows |
| Success | `#7a9e7e` | Muted sage green — stays warm |
| Success Background | `#edf3ee` | Success alert fills |
| Error | `#b54a3a` | Validation errors — warm red |
| Error Background | `#f5e3e0` | Error alert fills |
| Warning | `#c6943a` | Caution states |
| Warning Background | `#f9f0e0` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Cormorant Garamond', Garamond, Georgia, serif` — weight 700
- Body: `'Lato', 'Segoe UI', Roboto, Helvetica, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 48px / 3rem | 700 | 1.15 | -0.01em |
| Section Heading (h2) | 34px / 2.125rem | 700 | 1.2 | 0 |
| Sub-heading (h3) | 24px / 1.5rem | 600 | 1.3 | 0.01em |
| Body | 16px / 1rem | 400 | 1.7 | 0.015em |
| Button | 13px / 0.8125rem | 700 | 1 | 0.08em |
| Small / Label | 12px / 0.75rem | 600 | 1.4 | 0.06em |
| Caption | 11px / 0.6875rem | 400 | 1.4 | 0.03em |

## 4. Component Stylings

**Primary Button**
```
background: #c67a5c;
color: #fffff0;
padding: 12px 32px;
border-radius: 24px;
box-shadow: 0 2px 8px rgba(198, 122, 92, 0.20);
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.08em;
hover: background #c9a9a6; box-shadow 0 4px 12px rgba(201, 169, 166, 0.25);
```

**Card**
```
background: #ffffff;
border: 1px solid #dcc8b8;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(198, 122, 92, 0.06);
padding: 24px;
```

**Input**
```
background: #ffffff;
border: 1px solid #dcc8b8;
border-radius: 8px;
padding: 12px 16px;
focus-ring: 0 0 0 3px rgba(198, 122, 92, 0.20);
placeholder-color: #7a6b66;
```

**Navigation**
```
background: #fffff0;
border-bottom: 1px solid #dcc8b8;
link-color: #3d2b24;
link-hover: #c67a5c;
active-indicator: 2px solid #c67a5c;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1120px centered with `padding: 0 24px`
- **Section vertical spacing:** 80px between major sections, 40px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 660px
- **Image-heavy layouts preferred** — generous image-to-text ratios suit this aesthetic

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 2px 6px rgba(198, 122, 92, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)` |
| Level 2 | Dropdowns, tooltips | `0 6px 16px rgba(198, 122, 92, 0.08), 0 2px 4px rgba(0, 0, 0, 0.03)` |
| Level 3 | Modals, overlays | `0 12px 36px rgba(198, 122, 92, 0.12), 0 4px 8px rgba(0, 0, 0, 0.05)` |

## 7. Do's and Don'ts

**Do:**
1. Use terracotta as the primary CTA color — it anchors the warm palette
2. Apply pill-shaped buttons (24px radius) for a soft, boutique feel
3. Pair the elegant Cormorant Garamond serif with clean Lato sans-serif
4. Use dusty rose as a secondary fill for soft background sections
5. Keep photography warm-toned — muted, natural light, slightly desaturated
6. Use sand and terracotta borders to frame content softly

**Don't:**
1. Use bright, saturated pinks — the palette is deliberately muted
2. Introduce cool blues or teals — they clash with the desert warmth
3. Apply sharp corners (0-4px radius) — this theme needs softness
4. Use heavy black text — opt for #3d2b24 dark brown instead
5. Over-layer the dusty pinks — too much rose becomes saccharine
6. Add bold geometric patterns — organic textures (linen, grain) work better

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Full-bleed images, 16px padding |
| Tablet | 768px | 2 | 2-col product grids, hamburger nav |
| Desktop | 1024px | 3 | Full nav, image-text pairs |
| Wide | 1280px | 4 | Max container 1120px |
| Ultra-wide | 1536px | 4 | Soft background bleeds |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 48px to 36px (tablet) to 28px (mobile). Body stays 16px.
- **Spacing compression:** 80px to 56px (tablet) to 40px (mobile)
- **Pill buttons stay pill-shaped** at all breakpoints

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #c67a5c   secondary: #c9a9a6   accent: #d2b48c   background: #fffff0
text: #3d2b24      text-muted: #7a6b66  border: #dcc8b8   error: #b54a3a
```

**Example Prompt 1 — Product Hero**
> Build a split hero: left half with warm-toned product image, right half #f5ece6 background. Title in Cormorant Garamond 700 48px #3d2b24. Price in #c67a5c Lato 600 24px. CTA button background #c67a5c, text #fffff0, 24px radius, 12px 32px padding, uppercase, letter-spacing 0.08em.

**Example Prompt 2 — Testimonial Section**
> Create a testimonial section on #fffff0 background. Centered quote in Cormorant Garamond 700 italic 28px #3d2b24. Author photo as 64px circle. Name in Lato 700 14px #3d2b24. Title in Lato 400 13px #7a6b66. Decorative 40px #dcc8b8 quote mark above.
