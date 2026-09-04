# Midnight Galaxy — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Midnight Galaxy is theatrical and immersive — deep purples and cosmic blues punctuated by star-gold accents on a near-black canvas. The palette feels cinematic, expansive, and a little magical. It suits brands that deal in wonder, entertainment, and big ideas.

- **Mood:** Dramatic, immersive, magical, expansive
- **Best for:** Entertainment, gaming, space/science, event platforms, nightlife
- **Feel:** Dark-dominant, rich, jewel-toned, high contrast
- **Lighting metaphor:** Deep space — mostly dark with brilliant points of concentrated light

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#4169e1` | Primary CTAs, links, interactive highlights |
| Secondary | `#2d1b69` | Hero backgrounds, secondary panels, depth layers |
| Accent | `#ffd700` | Star ratings, premium badges, highlights, CTAs |
| Dark Base | `#0d0d1a` | Main dark canvas |
| Text Primary | `#f0eef8` | Headings and body on dark backgrounds |
| Text Secondary | `#9a94b8` | Captions, meta text on dark |
| Text on Light | `#0d0d1a` | Dark text for any light sections |
| Background Primary | `#0d0d1a` | Main page canvas |
| Background Secondary | `#1a1a30` | Elevated cards, panels |
| Background Tertiary | `#2d1b69` | Hero sections, feature callouts |
| Border | `#2e2e48` | Card borders, dividers |
| Shadow Base | `rgba(65, 105, 225, 0.12)` | Blue-tinted cosmic glow |
| Success | `#4caf50` | Confirmation states |
| Success Background | `rgba(76, 175, 80, 0.12)` | Success on dark |
| Error | `#ef5350` | Validation errors |
| Error Background | `rgba(239, 83, 80, 0.12)` | Error on dark |
| Warning | `#ffd700` | Caution (shares accent gold) |
| Warning Background | `rgba(255, 215, 0, 0.10)` | Warning on dark |

## 3. Typography Rules

**Font Families**
- Headers: `'Orbitron', 'Segoe UI', Helvetica, Arial, sans-serif` — weight 700
- Body: `'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 52px / 3.25rem | 700 | 1.1 | 0.04em |
| Section Heading (h2) | 34px / 2.125rem | 700 | 1.2 | 0.03em |
| Sub-heading (h3) | 22px / 1.375rem | 700 | 1.3 | 0.02em |
| Body | 16px / 1rem | 400 | 1.65 | 0.01em |
| Button | 14px / 0.875rem | 700 | 1 | 0.08em |
| Small / Label | 12px / 0.75rem | 500 | 1.4 | 0.06em |
| Caption | 11px / 0.6875rem | 400 | 1.4 | 0.03em |

## 4. Component Stylings

**Primary Button**
```
background: #4169e1;
color: #f0eef8;
padding: 14px 32px;
border-radius: 8px;
box-shadow: 0 0 20px rgba(65, 105, 225, 0.30);
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.08em;
hover: background #5a80f0; box-shadow 0 0 28px rgba(65, 105, 225, 0.45);
```

**Gold Accent Button**
```
background: transparent;
color: #ffd700;
border: 2px solid #ffd700;
padding: 12px 28px;
border-radius: 8px;
hover: background #ffd700; color #0d0d1a;
```

**Card**
```
background: #1a1a30;
border: 1px solid #2e2e48;
border-radius: 12px;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.30);
padding: 24px;
```

**Input**
```
background: #1a1a30;
border: 1px solid #2e2e48;
border-radius: 8px;
padding: 10px 14px;
color: #f0eef8;
focus-ring: 0 0 0 3px rgba(65, 105, 225, 0.30);
placeholder-color: #9a94b8;
```

**Navigation**
```
background: #0d0d1a;
border-bottom: 1px solid #2e2e48;
link-color: #9a94b8;
link-hover: #ffd700;
active-indicator: 2px solid #4169e1;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 96px between major sections, 48px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 720px
- **Theatrical spacing:** Hero sections get generous 128px+ vertical padding
- **Full-bleed dark backgrounds** — edge-to-edge color is core to the drama

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat on #0d0d1a | none |
| Level 1 | Cards, inputs | `0 2px 8px rgba(0, 0, 0, 0.25), 0 0 2px rgba(65, 105, 225, 0.08)` |
| Level 2 | Dropdowns, popovers | `0 8px 24px rgba(0, 0, 0, 0.35), 0 0 6px rgba(65, 105, 225, 0.12)` |
| Level 3 | Modals, overlays | `0 16px 48px rgba(0, 0, 0, 0.45), 0 0 12px rgba(65, 105, 225, 0.18)` |

## 7. Do's and Don'ts

**Do:**
1. Lead with the dark space (#0d0d1a) as the dominant canvas — it sets the mood
2. Use cosmic blue for primary interactions and gold for premium/accent moments
3. Add subtle blue glow effects to buttons and focused elements
4. Use Orbitron's wide letter-spacing for headings — it reads as futuristic
5. Create depth with the three dark tones (#0d0d1a, #1a1a30, #2d1b69)
6. Let gold accent appear sparingly — stars, badges, premium CTAs — so it feels rare

**Don't:**
1. Use gold for large text blocks or backgrounds — it loses its specialness
2. Apply warm pastels or earth tones — they flatten the cosmic drama
3. Use more than one level of purple in the same component
4. Leave sections without visual anchors — dark pages need focal points
5. Apply Orbitron to body text — it is a display face only
6. Add realistic star-field backgrounds — let the color palette imply space, not clipart

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Full-bleed dark, 16px padding |
| Tablet | 768px | 2 | 2-col grids, hamburger nav |
| Desktop | 1024px | 3 | Full nav, theatrical hero |
| Wide | 1280px | 4 | Max container, centered |
| Ultra-wide | 1536px | 4 | Dark bleeds edge-to-edge |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 52px to 40px (tablet) to 30px (mobile). Body stays 16px.
- **Spacing compression:** 96px to 64px (tablet) to 48px (mobile)
- **Glow effects scale down on mobile** — reduce shadow spread by ~50%
- **Orbitron letter-spacing stays wide** at all sizes

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #4169e1   secondary: #2d1b69   accent: #ffd700   dark-bg: #0d0d1a
card-bg: #1a1a30   text: #f0eef8       text-muted: #9a94b8  border: #2e2e48
```

**Example Prompt 1 — Dark Hero**
> Build a hero section with #2d1b69 background, 128px vertical padding. Heading in Orbitron 700 52px #f0eef8, letter-spacing 0.04em. Tagline in Roboto 400 18px #9a94b8. CTA button background #4169e1, text #f0eef8, uppercase, letter-spacing 0.08em, 8px radius, glow 0 0 20px rgba(65,105,225,0.30). Second CTA: ghost button with 2px #ffd700 border, text #ffd700.

**Example Prompt 2 — Event Card Grid**
> Create a 3-col grid on #0d0d1a background. Cards: background #1a1a30, 1px #2e2e48 border, 12px radius, 24px padding, shadow 0 4px 16px rgba(0,0,0,0.30). Title in Orbitron 700 20px #f0eef8. Date in Roboto 500 13px #ffd700. Description in Roboto 400 15px #9a94b8. Hover: border-color #4169e1, blue glow added.
