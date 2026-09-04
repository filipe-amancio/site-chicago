# Botanical Garden — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Botanical Garden blends soft sage greens with blush pinks on a linen-toned backdrop. The palette feels like a curated greenhouse — natural, nurturing, and quietly sophisticated. It communicates care, wellness, and organic authenticity without the heavy earthiness of forest themes.

- **Mood:** Nurturing, fresh, gentle, authentic
- **Best for:** Health/wellness brands, organic products, spas, florists, lifestyle blogs
- **Feel:** Light, airy, warm-cool balance, soft
- **Lighting metaphor:** Morning sunlight in a conservatory — bright, warm, filtered through green

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#8fbc8f` | Primary CTAs, header accents, brand identity |
| Secondary | `#ffb7c5` | Secondary buttons, highlights, soft accents |
| Accent | `#8b7355` | Borders, tertiary elements, grounding tones |
| Warm Neutral | `#faf0e6` | Page background |
| Text Primary | `#2d2a26` | Headings and body copy |
| Text Secondary | `#6b6560` | Captions, meta text, placeholders |
| Text Inverse | `#faf0e6` | Text on dark backgrounds |
| Background Primary | `#faf0e6` | Main page canvas |
| Background Secondary | `#f0e8dc` | Alternating sections, sidebar fills |
| Border | `#d4c8b8` | Card borders, dividers |
| Shadow Base | `rgba(143, 188, 143, 0.08)` | Sage-tinted shadows |
| Success | `#6a9e6a` | Confirmation — deeper sage |
| Success Background | `#e8f0e8` | Success alert fills |
| Error | `#c0564e` | Validation errors — warm, muted red |
| Error Background | `#f5e4e2` | Error alert fills |
| Warning | `#c49a3c` | Caution states |
| Warning Background | `#f8f0dc` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Libre Baskerville', Georgia, 'Times New Roman', serif` — weight 700
- Body: `'Nunito', 'Segoe UI', Roboto, Helvetica, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 44px / 2.75rem | 700 | 1.2 | -0.01em |
| Section Heading (h2) | 32px / 2rem | 700 | 1.25 | 0 |
| Sub-heading (h3) | 22px / 1.375rem | 700 | 1.35 | 0.01em |
| Body | 16px / 1rem | 400 | 1.75 | 0.015em |
| Button | 14px / 0.875rem | 700 | 1 | 0.05em |
| Small / Label | 13px / 0.8125rem | 600 | 1.4 | 0.03em |
| Caption | 12px / 0.75rem | 400 | 1.4 | 0.02em |

## 4. Component Stylings

**Primary Button**
```
background: #8fbc8f;
color: #2d2a26;
padding: 12px 28px;
border-radius: 24px;
box-shadow: 0 2px 8px rgba(143, 188, 143, 0.20);
font-weight: 700;
letter-spacing: 0.05em;
hover: background #7aaa7a; box-shadow 0 4px 12px rgba(143, 188, 143, 0.28);
```

**Card**
```
background: #ffffff;
border: 1px solid #d4c8b8;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(143, 188, 143, 0.06);
padding: 24px;
```

**Input**
```
background: #ffffff;
border: 1px solid #d4c8b8;
border-radius: 8px;
padding: 10px 14px;
focus-ring: 0 0 0 3px rgba(143, 188, 143, 0.25);
placeholder-color: #6b6560;
```

**Navigation**
```
background: #faf0e6;
border-bottom: 1px solid #d4c8b8;
link-color: #2d2a26;
link-hover: #8fbc8f;
active-indicator: 2px solid #8fbc8f;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1120px centered with `padding: 0 24px`
- **Section vertical spacing:** 80px between major sections, 40px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 680px
- **Image style:** Soft, natural lighting; warm tones; avoid harsh filters

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 2px 6px rgba(143, 188, 143, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)` |
| Level 2 | Dropdowns, tooltips | `0 6px 16px rgba(143, 188, 143, 0.08), 0 2px 4px rgba(0, 0, 0, 0.03)` |
| Level 3 | Modals, overlays | `0 12px 32px rgba(143, 188, 143, 0.12), 0 4px 8px rgba(0, 0, 0, 0.05)` |

## 7. Do's and Don'ts

**Do:**
1. Use sage green as the primary action and brand color — it is the identity
2. Apply blush pink sparingly for warmth — badges, highlights, secondary CTAs
3. Use earth brown (#8b7355) for borders and grounding elements
4. Pair Libre Baskerville headings with Nunito body for an editorial, organic feel
5. Keep the linen background warm and textured in feeling
6. Use pill-shaped buttons (24px radius) for a soft, approachable look

**Don't:**
1. Use blush pink and sage green at equal weight — sage leads, pink accents
2. Introduce dark or heavy backgrounds — this theme is light and airy
3. Use cold grays — all neutrals should lean warm (beige, linen, cream)
4. Apply heavy shadows — keep everything gentle and low-contrast
5. Use geometric or angular decorative elements — organic curves fit better
6. Pair two serif fonts — keep Libre Baskerville for headings only

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Single column, 16px padding |
| Tablet | 768px | 2 | 2-col product/article grids |
| Desktop | 1024px | 3 | Full nav, image-text layouts |
| Wide | 1280px | 4 | Max container 1120px |
| Ultra-wide | 1536px | 4 | Linen background bleeds |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 44px to 34px (tablet) to 26px (mobile). Body stays 16px.
- **Spacing compression:** 80px to 56px (tablet) to 40px (mobile)
- **Pill buttons stay pill-shaped** at all sizes

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #8fbc8f   secondary: #ffb7c5   accent: #8b7355   background: #faf0e6
text: #2d2a26      text-muted: #6b6560  border: #d4c8b8   error: #c0564e
```

**Example Prompt 1 — About Section**
> Build an about section with #f0e8dc background, 80px vertical padding. Left: image with 12px radius. Right: heading in Libre Baskerville 700 32px #2d2a26, body in Nunito 400 16px #2d2a26 line-height 1.75. CTA pill button background #8fbc8f, text #2d2a26, 24px radius, 12px 28px padding.

**Example Prompt 2 — Product Grid**
> Create a 3-col product grid on #faf0e6 background. Cards: white fill, 1px #d4c8b8 border, 12px radius, 24px padding, shadow 0 2px 8px rgba(143,188,143,0.06). Product name in Libre Baskerville 700 20px #2d2a26. Price in Nunito 600 18px #8fbc8f. Tag pill with #ffb7c5 background, #2d2a26 text, 12px radius.
