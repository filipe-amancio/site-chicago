# Golden Hour — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Golden Hour captures the richness of late autumn — burnished metals, deep reds, and amber warmth. The palette conveys luxury, heritage, and craftsmanship. This is whiskey in a leather chair, not cocktails on a rooftop. Every choice signals quality and restraint.

- **Mood:** Luxurious, warm, refined, heritage
- **Best for:** Luxury brands, premium food/drink, autumn campaigns, real estate, hospitality
- **Feel:** Rich, deep, warm-dominant, textured
- **Lighting metaphor:** Low afternoon sun through amber glass — warm, directional, intimate

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#cc5500` | Primary CTAs, brand marks, hero accents |
| Secondary | `#ffbf00` | Highlights, badges, premium indicators |
| Accent | `#8b0000` | Borders, hover states, deep emphasis |
| Warm Neutral | `#fff8dc` | Page background, card fills |
| Text Primary | `#2b1810` | Headings and body copy |
| Text Secondary | `#6b5b4e` | Captions, meta text, placeholders |
| Text Inverse | `#fff8dc` | Text on dark backgrounds |
| Background Primary | `#fff8dc` | Main page canvas |
| Background Secondary | `#f5ecd0` | Alternating sections, sidebar fills |
| Border | `#d4c4a0` | Card borders, dividers |
| Shadow Base | `rgba(139, 0, 0, 0.08)` | Warm red-tinted shadows |
| Success | `#6b8e23` | Confirmation — olive green to stay warm |
| Success Background | `#f0f4e4` | Success alert fills |
| Error | `#8b0000` | Validation errors (uses accent) |
| Error Background | `#f5e0e0` | Error alert fills |
| Warning | `#cc5500` | Caution states (uses primary) |
| Warning Background | `#fef0dc` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Playfair Display', Georgia, 'Times New Roman', serif` — weight 700
- Body: `'Raleway', 'Segoe UI', Helvetica, Arial, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 52px / 3.25rem | 700 | 1.15 | -0.02em |
| Section Heading (h2) | 36px / 2.25rem | 700 | 1.2 | -0.01em |
| Sub-heading (h3) | 24px / 1.5rem | 700 | 1.3 | 0 |
| Body | 16px / 1rem | 400 | 1.7 | 0.015em |
| Button | 13px / 0.8125rem | 600 | 1 | 0.1em |
| Small / Label | 12px / 0.75rem | 600 | 1.4 | 0.08em |
| Caption | 11px / 0.6875rem | 400 | 1.4 | 0.03em |

## 4. Component Stylings

**Primary Button**
```
background: #cc5500;
color: #fff8dc;
padding: 14px 36px;
border-radius: 4px;
box-shadow: 0 2px 8px rgba(204, 85, 0, 0.20);
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.1em;
hover: background #8b0000;
```

**Card**
```
background: #ffffff;
border: 1px solid #d4c4a0;
border-radius: 4px;
box-shadow: 0 2px 8px rgba(139, 0, 0, 0.06);
padding: 28px;
```

**Input**
```
background: #ffffff;
border: 1px solid #d4c4a0;
border-radius: 4px;
padding: 12px 16px;
focus-ring: 0 0 0 3px rgba(204, 85, 0, 0.20);
placeholder-color: #6b5b4e;
```

**Navigation**
```
background: #2b1810;
link-color: #fff8dc;
link-hover: #ffbf00;
active-indicator: 2px solid #ffbf00;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1120px centered with `padding: 0 32px` (slightly narrower for intimacy)
- **Section vertical spacing:** 96px between major sections, 48px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 680px
- **Asymmetric layouts encouraged** — offset hero images, overlapping cards

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 2px 6px rgba(139, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04)` |
| Level 2 | Dropdowns, tooltips | `0 6px 18px rgba(139, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)` |
| Level 3 | Modals, overlays | `0 16px 40px rgba(139, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.06)` |

## 7. Do's and Don'ts

**Do:**
1. Use burnt orange as the primary action color — it commands attention without shouting
2. Reserve amber/gold for premium micro-accents (star ratings, price tags, badges)
3. Pair Playfair Display serif headings with Raleway sans-serif body for elegant contrast
4. Use deep red sparingly for emphasis and hover states
5. Apply uppercase + wide letter-spacing on buttons and labels for a luxury feel
6. Keep border-radius tight (4px) — sharp edges signal precision and quality

**Don't:**
1. Use amber as a background color — it overwhelms and cheapens the palette
2. Mix in cool tones (blues, greens) — this palette is strictly warm
3. Apply rounded corners above 8px — it contradicts the refined aesthetic
4. Use the deep red for large areas — it reads as aggressive at scale
5. Set body text in serif — reserve Playfair strictly for headings
6. Add playful or casual elements — the tone is consistently sophisticated

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Single column, 16px padding |
| Tablet | 768px | 2 | 2-col layouts, stacked hero |
| Desktop | 1024px | 3 | Full nav, asymmetric hero |
| Wide | 1280px | 4 | Max container 1120px |
| Ultra-wide | 1536px | 4 | Dark background bleeds |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 52px to 40px (tablet) to 30px (mobile). Body stays 16px.
- **Spacing compression:** 96px to 64px (tablet) to 48px (mobile)
- **Uppercase buttons stay uppercase** at all sizes — no style compromise

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #cc5500   secondary: #ffbf00   accent: #8b0000   background: #fff8dc
text: #2b1810      text-muted: #6b5b4e  border: #d4c4a0   error: #8b0000
```

**Example Prompt 1 — Luxury Hero**
> Build a hero section with #2b1810 background. Centered heading in Playfair Display 700 52px #fff8dc. Tagline in Raleway 400 18px #d4c4a0. CTA button background #cc5500, text #fff8dc, uppercase, letter-spacing 0.1em, 4px radius, shadow 0 2px 8px rgba(204,85,0,0.20). 96px vertical padding.

**Example Prompt 2 — Product Card**
> Create a product card with white background, 1px #d4c4a0 border, 4px radius, shadow 0 2px 8px rgba(139,0,0,0.06). Product name in Playfair Display 700 22px #2b1810. Price in #cc5500 Raleway 600 20px. Description in Raleway 400 16px #6b5b4e. Amber #ffbf00 star ratings.
