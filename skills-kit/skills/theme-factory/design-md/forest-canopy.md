# Forest Canopy — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Forest Canopy draws from old-growth woodland — deep greens grounded by earth tones, dappled with moss-filtered light. The palette communicates growth, sustainability, and natural authority. It suits brands that want to feel grounded and organic without looking rustic or amateur.

- **Mood:** Grounded, organic, trustworthy, calm
- **Best for:** Environmental orgs, wellness brands, organic products, outdoor companies
- **Feel:** Earthy, warm-cool balance, textured
- **Lighting metaphor:** Afternoon sunlight filtering through a canopy — warm patches on cool green

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#2d5016` | Primary CTAs, nav background, hero sections |
| Secondary | `#6b8e23` | Links, active states, secondary buttons |
| Accent | `#8b7355` | Tertiary elements, borders, warm highlights |
| Warm Neutral | `#f5f0e8` | Page background, card fills |
| Text Primary | `#2d2d2d` | Headings and body copy |
| Text Secondary | `#5a5a4a` | Captions, meta text, placeholders |
| Text Inverse | `#f5f0e8` | Text on dark green backgrounds |
| Background Primary | `#f5f0e8` | Main page canvas |
| Background Secondary | `#ede5d8` | Alternating sections, sidebar fills |
| Border | `#c8bfa8` | Card borders, dividers, input outlines |
| Shadow Base | `rgba(45, 80, 22, 0.10)` | Green-tinted shadows |
| Success | `#2d5016` | Confirmation messages (uses primary) |
| Success Background | `#e8f0e4` | Success alert fills |
| Error | `#a63d2f` | Validation errors — muted red, not neon |
| Error Background | `#f5e6e3` | Error alert fills |
| Warning | `#b8860b` | Caution states |
| Warning Background | `#f5f0dc` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Merriweather', Georgia, 'Times New Roman', serif` — weight 700
- Body: `'Source Sans Pro', 'Segoe UI', Roboto, Helvetica, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 44px / 2.75rem | 700 | 1.2 | -0.01em |
| Section Heading (h2) | 32px / 2rem | 700 | 1.25 | -0.005em |
| Sub-heading (h3) | 22px / 1.375rem | 700 | 1.35 | 0 |
| Body | 17px / 1.0625rem | 400 | 1.75 | 0.01em |
| Button | 14px / 0.875rem | 600 | 1 | 0.05em |
| Small / Label | 13px / 0.8125rem | 600 | 1.4 | 0.02em |
| Caption | 12px / 0.75rem | 400 | 1.4 | 0.03em |

## 4. Component Stylings

**Primary Button**
```
background: #2d5016;
color: #f5f0e8;
padding: 12px 28px;
border-radius: 8px;
box-shadow: 0 2px 6px rgba(45, 80, 22, 0.15);
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
hover: background #6b8e23;
```

**Card**
```
background: #ffffff;
border: 1px solid #c8bfa8;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(45, 80, 22, 0.06);
padding: 24px;
```

**Input**
```
background: #ffffff;
border: 1px solid #c8bfa8;
border-radius: 6px;
padding: 10px 14px;
focus-ring: 0 0 0 3px rgba(107, 142, 35, 0.25);
placeholder-color: #5a5a4a;
```

**Navigation**
```
background: #2d5016;
link-color: #f5f0e8;
link-hover: #6b8e23;
active-indicator: 2px solid #6b8e23;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 80px between major sections, 40px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 700px — serif headings need room to breathe
- **Texture note:** Subtle parchment-toned backgrounds reinforce the organic feel

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 1px 4px rgba(45, 80, 22, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)` |
| Level 2 | Dropdowns, popovers | `0 6px 16px rgba(45, 80, 22, 0.10), 0 2px 4px rgba(0, 0, 0, 0.04)` |
| Level 3 | Modals, dialogs | `0 12px 36px rgba(45, 80, 22, 0.14), 0 4px 8px rgba(0, 0, 0, 0.06)` |

## 7. Do's and Don'ts

**Do:**
1. Use forest green as the dominant brand color — it carries the identity
2. Pair serif headings (Merriweather) with sans-serif body (Source Sans Pro) for contrast
3. Use bark brown for borders, dividers, and tertiary accents
4. Keep the parchment background warm — it softens the heavy greens
5. Add muted, earthy error/warning colors rather than harsh neon reds
6. Use generous line-height (1.75) for body text — it reads like a printed book

**Don't:**
1. Introduce neon or electric colors — they destroy the natural palette
2. Use more than two greens in the same component
3. Make backgrounds pure white — always lean toward parchment or cream
4. Apply heavy drop shadows — keep depth subtle and natural
5. Use thin sans-serif fonts for headings — the serif is core to the identity
6. Over-decorate with leaf or tree imagery — let the colors do the work

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Single column, 16px padding |
| Tablet | 768px | 2 | 2-col content, hamburger nav |
| Desktop | 1024px | 3 | Full nav, side-by-side layouts |
| Wide | 1280px | 4 | Max container, centered |
| Ultra-wide | 1536px | 4 | Content centered, background bleeds |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 44px to 34px (tablet) to 28px (mobile). Body stays 17px.
- **Spacing compression:** 80px to 56px (tablet) to 40px (mobile)

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #2d5016   secondary: #6b8e23   accent: #8b7355   background: #f5f0e8
text: #2d2d2d      text-muted: #5a5a4a  border: #c8bfa8   error: #a63d2f
```

**Example Prompt 1 — About Section**
> Build an about section with #ede5d8 background. Left column: image with 8px radius. Right column: Merriweather 700 32px heading in #2d2d2d, body text in Source Sans Pro 400 17px #2d2d2d, line-height 1.75. CTA button background #2d5016, text #f5f0e8, 8px radius.

**Example Prompt 2 — Testimonial Card**
> Create a testimonial card with white background, 1px #c8bfa8 border, 8px radius, shadow 0 2px 8px rgba(45,80,22,0.06). Quote in Source Sans Pro 400 italic 17px #2d2d2d. Author name in Merriweather 700 14px #2d5016. Role in 13px #5a5a4a.
