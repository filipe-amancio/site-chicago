# Ocean Depths — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Ocean Depths channels the authority and depth of the open sea. Deep navy grounds the experience in trust and professionalism, while teal and seafoam accents bring clarity and calm. The palette feels like standing on a corporate trading floor with floor-to-ceiling windows overlooking a harbor.

- **Mood:** Authoritative, trustworthy, composed
- **Best for:** Corporate sites, financial dashboards, law firms, consulting
- **Feel:** Cool-toned, structured, institutional confidence
- **Lighting metaphor:** Overcast coastal morning — even, diffused, no harsh highlights

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#1a2332` | Nav background, hero sections, primary CTAs |
| Secondary | `#2d8b8b` | Links, active states, secondary buttons |
| Accent | `#a8dadc` | Highlights, badges, info callouts, hover states |
| Warm Neutral | `#f1faee` | Page background, card fills |
| Text Primary | `#1a2332` | Headings, body copy on light backgrounds |
| Text Secondary | `#4a5568` | Captions, meta text, placeholders |
| Text Inverse | `#f1faee` | Text on dark backgrounds |
| Background Primary | `#f1faee` | Main page canvas |
| Background Secondary | `#e8f4f0` | Alternating sections, sidebar fills |
| Border | `#c5d5d5` | Card borders, dividers, input outlines |
| Shadow Base | `rgba(26, 35, 50, 0.12)` | Card and dropdown shadows |
| Success | `#2d8b8b` | Confirmation messages, success states |
| Success Background | `#e6f5f5` | Success alert fills |
| Error | `#c0392b` | Validation errors, destructive actions |
| Error Background | `#fce8e6` | Error alert fills |
| Warning | `#d4a017` | Caution states |
| Warning Background | `#fef9e7` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'DejaVu Sans Bold', 'Segoe UI Bold', Arial Black, sans-serif`
- Body: `'DejaVu Sans', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 48px / 3rem | 700 | 1.15 | -0.02em |
| Section Heading (h2) | 32px / 2rem | 700 | 1.25 | -0.01em |
| Sub-heading (h3) | 24px / 1.5rem | 700 | 1.3 | 0 |
| Body | 16px / 1rem | 400 | 1.6 | 0.01em |
| Button | 14px / 0.875rem | 700 | 1 | 0.04em |
| Small / Label | 13px / 0.8125rem | 600 | 1.4 | 0.02em |
| Caption | 12px / 0.75rem | 400 | 1.4 | 0.02em |

## 4. Component Stylings

**Primary Button**
```
background: #1a2332;
color: #f1faee;
padding: 12px 28px;
border-radius: 6px;
box-shadow: 0 2px 4px rgba(26, 35, 50, 0.15);
font-weight: 700;
letter-spacing: 0.04em;
hover: background #2d8b8b;
```

**Card**
```
background: #ffffff;
border: 1px solid #c5d5d5;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(26, 35, 50, 0.08);
padding: 24px;
```

**Input**
```
background: #ffffff;
border: 1px solid #c5d5d5;
border-radius: 6px;
padding: 10px 14px;
focus-ring: 0 0 0 3px rgba(45, 139, 139, 0.25);
placeholder-color: #4a5568;
```

**Navigation**
```
background: #1a2332;
link-color: #a8dadc;
link-hover: #ffffff;
active-indicator: 2px solid #2d8b8b;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 96px between major sections, 48px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 720px for readability

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 1px 3px rgba(26, 35, 50, 0.08), 0 1px 2px rgba(26, 35, 50, 0.06)` |
| Level 2 | Dropdowns, popovers | `0 4px 12px rgba(26, 35, 50, 0.12), 0 2px 4px rgba(26, 35, 50, 0.06)` |
| Level 3 | Modals, dialogs | `0 12px 32px rgba(26, 35, 50, 0.18), 0 4px 8px rgba(26, 35, 50, 0.08)` |

## 7. Do's and Don'ts

**Do:**
1. Use deep navy as the dominant dark tone — it anchors trust
2. Reserve teal for interactive elements (links, buttons, focus rings)
3. Keep generous whitespace; let the cream breathe
4. Use seafoam sparingly for highlights and info states
5. Pair bold headings with regular-weight body text for hierarchy
6. Maintain high contrast — dark text on light backgrounds, light text on navy

**Don't:**
1. Use bright or saturated accent colors — they clash with the muted palette
2. Cover more than 30% of any viewport with the navy background
3. Mix warm tones (oranges, reds) into the primary UI
4. Use thin font weights below 400 for body text
5. Apply rounded corners larger than 8px — keep it sharp and professional
6. Add decorative gradients — the palette works best as flat, solid fills

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Stack all, 16px side padding |
| Tablet | 768px | 2 | Side-by-side cards, collapsed nav |
| Desktop | 1024px | 3 | Full nav visible, 3-col grids |
| Wide | 1280px | 4 | Max container kicks in |
| Ultra-wide | 1536px | 4 | Content stays centered, backgrounds bleed |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero drops to 36px at tablet, 28px at mobile. Body stays 16px.
- **Spacing compression:** Section spacing drops from 96px to 64px (tablet) to 48px (mobile)

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #1a2332   secondary: #2d8b8b   accent: #a8dadc   background: #f1faee
text: #1a2332      text-muted: #4a5568  border: #c5d5d5   error: #c0392b
```

**Example Prompt 1 — Hero Section**
> Build a hero section with background #1a2332, centered white heading in DejaVu Sans Bold 48px, a subtitle in #a8dadc at 18px, and a CTA button with background #2d8b8b, text #f1faee, 12px 28px padding, 6px radius.

**Example Prompt 2 — Pricing Card**
> Create a pricing card with white background, 1px #c5d5d5 border, 8px radius, shadow 0 2px 8px rgba(26,35,50,0.08). Price in #1a2332 DejaVu Sans Bold 32px. Feature list in #4a5568 16px. CTA button background #1a2332, hover #2d8b8b.
