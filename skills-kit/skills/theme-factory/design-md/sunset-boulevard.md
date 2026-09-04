# Sunset Boulevard — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Sunset Boulevard radiates warmth, energy, and creative confidence. The coral-to-gold gradient palette evokes a California golden hour — vibrant but never garish. This theme suits brands that want to feel approachable, lively, and design-forward without tipping into childish territory.

- **Mood:** Warm, creative, optimistic, approachable
- **Best for:** Creative agencies, lifestyle brands, food/drink, event platforms
- **Feel:** Warm-toned, rounded, inviting
- **Lighting metaphor:** Golden hour — warm directional light, long soft shadows

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#ff6b6b` | Primary CTAs, hero accents, brand marks |
| Secondary | `#ffa07a` | Secondary buttons, hover states, illustrations |
| Accent | `#ffd700` | Highlights, badges, star ratings, notifications |
| Warm Neutral | `#fffef2` | Page background, card fills |
| Text Primary | `#2d2d2d` | Headings and body copy |
| Text Secondary | `#6b6b6b` | Captions, meta text, placeholders |
| Text Inverse | `#fffef2` | Text on coral/dark backgrounds |
| Background Primary | `#fffef2` | Main page canvas |
| Background Secondary | `#fff5ee` | Alternating sections, aside panels |
| Border | `#f0d6c8` | Card borders, dividers |
| Shadow Base | `rgba(255, 107, 107, 0.10)` | Warm-tinted shadows |
| Success | `#4caf50` | Confirmation, success states |
| Success Background | `#e8f5e9` | Success alert fills |
| Error | `#d32f2f` | Validation errors, destructive actions |
| Error Background | `#fce4ec` | Error alert fills |
| Warning | `#ff8f00` | Caution states |
| Warning Background | `#fff3e0` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif` — weight 700
- Body: `'Lato', 'Segoe UI', Roboto, Helvetica, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 52px / 3.25rem | 700 | 1.15 | -0.02em |
| Section Heading (h2) | 36px / 2.25rem | 700 | 1.2 | -0.01em |
| Sub-heading (h3) | 24px / 1.5rem | 600 | 1.3 | 0 |
| Body | 16px / 1rem | 400 | 1.7 | 0.01em |
| Button | 15px / 0.9375rem | 700 | 1 | 0.03em |
| Small / Label | 13px / 0.8125rem | 600 | 1.4 | 0.02em |
| Caption | 12px / 0.75rem | 400 | 1.4 | 0.02em |

## 4. Component Stylings

**Primary Button**
```
background: #ff6b6b;
color: #fffef2;
padding: 14px 32px;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(255, 107, 107, 0.25);
font-weight: 700;
hover: background #ffa07a; box-shadow 0 6px 16px rgba(255, 160, 122, 0.30);
```

**Card**
```
background: #ffffff;
border: 1px solid #f0d6c8;
border-radius: 16px;
box-shadow: 0 4px 16px rgba(255, 107, 107, 0.08);
padding: 28px;
```

**Input**
```
background: #ffffff;
border: 1.5px solid #f0d6c8;
border-radius: 10px;
padding: 12px 16px;
focus-ring: 0 0 0 3px rgba(255, 107, 107, 0.20);
placeholder-color: #6b6b6b;
```

**Navigation**
```
background: #fffef2;
link-color: #2d2d2d;
link-hover: #ff6b6b;
active-indicator: 3px solid #ff6b6b, border-radius 2px;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 80px between major sections, 40px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 680px for readability
- **Asymmetry encouraged:** Offset grids (7/5 or 8/4 splits) add visual energy

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 2px 8px rgba(255, 107, 107, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)` |
| Level 2 | Dropdowns, tooltips | `0 8px 24px rgba(255, 107, 107, 0.10), 0 2px 6px rgba(0, 0, 0, 0.04)` |
| Level 3 | Modals, dialogs | `0 16px 48px rgba(255, 107, 107, 0.14), 0 4px 12px rgba(0, 0, 0, 0.06)` |

## 7. Do's and Don'ts

**Do:**
1. Use coral as the hero color — let it pop against the ivory background
2. Apply generous border-radius (12-16px) for a friendly, modern feel
3. Use golden yellow sparingly for micro-accents (stars, badges, highlights)
4. Let warm orange serve as the secondary interaction color on hovers
5. Add subtle warm-tinted shadows to reinforce the sunset feel
6. Pair bold Poppins headings with regular Lato body for clear hierarchy

**Don't:**
1. Use all four colors at equal intensity in a single section — pick one lead
2. Apply coral to large background areas — it overwhelms at scale
3. Introduce cool blues or greens — they fight the warm palette
4. Use sharp corners (0-4px radius) — they contradict the friendly mood
5. Set body text lighter than #2d2d2d on ivory — contrast matters
6. Stack warm orange and coral directly next to each other without separation

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Full-bleed cards, 16px padding |
| Tablet | 768px | 2 | 2-col grid, hamburger nav |
| Desktop | 1024px | 3 | Full nav, asymmetric layouts |
| Wide | 1280px | 4 | Max container, centered |
| Ultra-wide | 1536px | 4 | Decorative bleed backgrounds |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero drops to 40px (tablet), 32px (mobile). Body stays 16px.
- **Spacing compression:** Section spacing 80 to 56px (tablet) to 40px (mobile)
- **Border-radius:** Stays consistent — do not flatten on mobile

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #ff6b6b   secondary: #ffa07a   accent: #ffd700   background: #fffef2
text: #2d2d2d      text-muted: #6b6b6b  border: #f0d6c8   error: #d32f2f
```

**Example Prompt 1 — Feature Card Grid**
> Build a 3-column card grid on #fffef2 background. Each card: white fill, 1px #f0d6c8 border, 16px radius, shadow 0 4px 16px rgba(255,107,107,0.08), 28px padding. Title in Poppins 700 24px #2d2d2d. Description in Lato 400 16px #6b6b6b. CTA link in #ff6b6b hover #ffa07a.

**Example Prompt 2 — Newsletter Signup**
> Create a newsletter block with #fff5ee background, centered layout max 560px. Heading in Poppins 700 36px #2d2d2d. Input with 1.5px #f0d6c8 border, 10px radius. Submit button background #ff6b6b, text #fffef2, 14px 32px padding, 12px radius, shadow 0 4px 12px rgba(255,107,107,0.25).
