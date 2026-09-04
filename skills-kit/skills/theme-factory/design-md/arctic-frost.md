# Arctic Frost — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Arctic Frost captures the crystalline clarity of winter — ice blues against deep midnight, with steel accents bridging the range. The palette communicates precision, innovation, and clean efficiency. It suits tech brands that want to feel futuristic without cold sterility, balanced by the warmth of glacier white.

- **Mood:** Crisp, innovative, precise, forward-looking
- **Best for:** Tech products, SaaS platforms, winter campaigns, data/analytics tools
- **Feel:** Cool-dominant, high-contrast, clean
- **Lighting metaphor:** Clear arctic day — bright, high-contrast, blue-tinted ambient light

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#1a1a2e` | Nav background, hero sections, primary dark |
| Secondary | `#5c7a99` | Secondary buttons, links, active states |
| Accent | `#a8d8ea` | Highlights, badges, info callouts, illustrations |
| Warm Neutral | `#f0f8ff` | Page background, card fills |
| Text Primary | `#1a1a2e` | Headings on light backgrounds |
| Text Secondary | `#5c7a99` | Captions, meta text, descriptions |
| Text Inverse | `#f0f8ff` | Text on dark backgrounds |
| Background Primary | `#f0f8ff` | Main page canvas |
| Background Secondary | `#e3eef6` | Alternating sections, sidebars |
| Border | `#c4d4e0` | Card borders, dividers, input outlines |
| Shadow Base | `rgba(26, 26, 46, 0.10)` | Cool-tinted shadows |
| Success | `#27ae60` | Confirmation messages |
| Success Background | `#e8f8ef` | Success alert fills |
| Error | `#e74c3c` | Validation errors |
| Error Background | `#fce8e6` | Error alert fills |
| Warning | `#f39c12` | Caution states |
| Warning Background | `#fef5e7` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Montserrat', 'Segoe UI', Helvetica, Arial, sans-serif` — weight 700
- Body: `'Open Sans', 'Segoe UI', Roboto, Helvetica, sans-serif` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 48px / 3rem | 700 | 1.15 | -0.02em |
| Section Heading (h2) | 32px / 2rem | 700 | 1.25 | -0.01em |
| Sub-heading (h3) | 22px / 1.375rem | 600 | 1.3 | 0 |
| Body | 16px / 1rem | 400 | 1.65 | 0.01em |
| Button | 14px / 0.875rem | 700 | 1 | 0.06em |
| Small / Label | 12px / 0.75rem | 600 | 1.4 | 0.04em |
| Caption | 11px / 0.6875rem | 400 | 1.4 | 0.03em |

## 4. Component Stylings

**Primary Button**
```
background: #1a1a2e;
color: #f0f8ff;
padding: 12px 28px;
border-radius: 6px;
box-shadow: 0 2px 6px rgba(26, 26, 46, 0.15);
font-weight: 700;
letter-spacing: 0.06em;
hover: background #5c7a99;
```

**Card**
```
background: #ffffff;
border: 1px solid #c4d4e0;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(26, 26, 46, 0.06);
padding: 24px;
```

**Input**
```
background: #ffffff;
border: 1px solid #c4d4e0;
border-radius: 6px;
padding: 10px 14px;
focus-ring: 0 0 0 3px rgba(168, 216, 234, 0.40);
placeholder-color: #5c7a99;
```

**Navigation**
```
background: #1a1a2e;
link-color: #a8d8ea;
link-hover: #ffffff;
active-indicator: 2px solid #a8d8ea;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 96px between major sections, 48px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 720px
- **High contrast encouraged** — dark midnight sections alternating with glacier white

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 1px 3px rgba(26, 26, 46, 0.06), 0 1px 2px rgba(26, 26, 46, 0.04)` |
| Level 2 | Dropdowns, popovers | `0 6px 16px rgba(26, 26, 46, 0.10), 0 2px 4px rgba(26, 26, 46, 0.04)` |
| Level 3 | Modals, dialogs | `0 12px 32px rgba(26, 26, 46, 0.14), 0 4px 8px rgba(26, 26, 46, 0.06)` |

## 7. Do's and Don'ts

**Do:**
1. Alternate between dark (#1a1a2e) and light (#f0f8ff) sections for dramatic contrast
2. Use ice blue (#a8d8ea) for interactive highlights and data visualization accents
3. Apply steel blue (#5c7a99) for secondary text and supporting UI elements
4. Keep backgrounds strictly cool — glacier white, not warm cream
5. Use Montserrat's geometric shapes for a tech-forward heading presence
6. Apply subtle focus rings in ice blue for accessible, on-brand interactions

**Don't:**
1. Introduce warm colors (oranges, reds, yellows) into the primary UI
2. Use ice blue for body text — it lacks sufficient contrast on white
3. Make everything midnight dark — balance is critical
4. Apply heavy shadows — keep depth light and crisp, matching the frost metaphor
5. Use serif fonts — they conflict with the tech-forward identity
6. Over-saturate the ice blue — it works best as a cool whisper, not a shout

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Single column, 16px padding |
| Tablet | 768px | 2 | 2-col grids, hamburger nav |
| Desktop | 1024px | 3 | Full nav, dark/light section alternation |
| Wide | 1280px | 4 | Max container, full layouts |
| Ultra-wide | 1536px | 4 | Midnight backgrounds bleed to edges |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 48px to 36px (tablet) to 28px (mobile). Body stays 16px.
- **Spacing compression:** 96px to 64px (tablet) to 48px (mobile)

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #1a1a2e   secondary: #5c7a99   accent: #a8d8ea   background: #f0f8ff
text: #1a1a2e      text-muted: #5c7a99  border: #c4d4e0   error: #e74c3c
```

**Example Prompt 1 — Dark Hero**
> Build a hero section with #1a1a2e background, 96px vertical padding. Heading in Montserrat 700 48px #f0f8ff. Subtitle in Open Sans 400 18px #a8d8ea. CTA button background #5c7a99, text #f0f8ff, 6px radius, 12px 28px padding, shadow 0 2px 6px rgba(26,26,46,0.15). Hover background #a8d8ea, hover text #1a1a2e.

**Example Prompt 2 — Feature Grid**
> Create a 3-col feature grid on #f0f8ff background. Each card: white fill, 1px #c4d4e0 border, 8px radius, 24px padding, shadow 0 2px 8px rgba(26,26,46,0.06). Icon in #a8d8ea 40px. Title in Montserrat 700 20px #1a1a2e. Description in Open Sans 400 16px #5c7a99.
