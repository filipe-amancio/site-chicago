# Modern Minimalist — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Modern Minimalist strips design to its essentials. Every element earns its place through function. The grayscale palette communicates sophistication through restraint — no decoration, only structure. This is the visual language of companies that let their work speak for itself.

- **Mood:** Clean, precise, authoritative, understated
- **Best for:** SaaS products, design studios, architecture firms, consulting
- **Feel:** Neutral, spacious, systematic
- **Lighting metaphor:** Overcast studio lighting — flat, even, no drama

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#2c2c2c` | Primary CTAs, headings, nav background |
| Secondary | `#6c757d` | Secondary text, icons, borders |
| Accent | `#c0c0c0` | Dividers, subtle highlights, disabled states |
| Warm Neutral | `#f8f9fa` | Page background |
| Text Primary | `#2c2c2c` | Headings and body copy |
| Text Secondary | `#6c757d` | Captions, meta text, placeholders |
| Text Inverse | `#f8f9fa` | Text on dark backgrounds |
| Background Primary | `#f8f9fa` | Main page canvas |
| Background Secondary | `#eef0f2` | Alternating sections, sidebar, code blocks |
| Border | `#dee2e6` | Card borders, dividers, input outlines |
| Shadow Base | `rgba(0, 0, 0, 0.08)` | Neutral shadows |
| Success | `#28a745` | Confirmation messages |
| Success Background | `#e9f7ef` | Success alert fills |
| Error | `#dc3545` | Validation errors |
| Error Background | `#fce8ea` | Error alert fills |
| Warning | `#ffc107` | Caution states |
| Warning Background | `#fff9e6` | Warning alert fills |

## 3. Typography Rules

**Font Families**
- Headers: `'Helvetica Neue', Helvetica, Arial, sans-serif` — weight 700
- Body: `'Helvetica Neue', Helvetica, Arial, sans-serif` — weight 300

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 56px / 3.5rem | 700 | 1.1 | -0.03em |
| Section Heading (h2) | 36px / 2.25rem | 700 | 1.2 | -0.02em |
| Sub-heading (h3) | 24px / 1.5rem | 700 | 1.3 | -0.01em |
| Body | 16px / 1rem | 300 | 1.65 | 0.01em |
| Button | 14px / 0.875rem | 500 | 1 | 0.08em |
| Small / Label | 12px / 0.75rem | 500 | 1.4 | 0.06em |
| Caption | 11px / 0.6875rem | 400 | 1.4 | 0.04em |

## 4. Component Stylings

**Primary Button**
```
background: #2c2c2c;
color: #f8f9fa;
padding: 12px 32px;
border-radius: 4px;
box-shadow: none;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.08em;
hover: background #6c757d;
```

**Card**
```
background: #ffffff;
border: 1px solid #dee2e6;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
padding: 24px;
```

**Input**
```
background: #ffffff;
border: 1px solid #dee2e6;
border-radius: 4px;
padding: 10px 14px;
focus-ring: 0 0 0 2px rgba(44, 44, 44, 0.15);
placeholder-color: #6c757d;
```

**Navigation**
```
background: #ffffff;
border-bottom: 1px solid #dee2e6;
link-color: #6c757d;
link-hover: #2c2c2c;
active-indicator: font-weight 700, color #2c2c2c;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64, 96, 128px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 128px between major sections, 64px between sub-sections
- **Grid:** 12-column with 32px gutters (wider gutters = more breathing room)
- **Content width:** Prose blocks capped at 640px
- **Whitespace is the primary design element** — use it generously

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat elements | none |
| Level 1 | Cards, inputs | `0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)` |
| Level 2 | Dropdowns, popovers | `0 4px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)` |
| Level 3 | Modals, dialogs | `0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)` |

## 7. Do's and Don'ts

**Do:**
1. Let whitespace dominate — it is the defining characteristic
2. Keep border-radius at 4px maximum for a sharp, architectural feel
3. Use the light weight (300) for body text to contrast bold (700) headings
4. Rely on typography hierarchy and spacing rather than color to create structure
5. Use uppercase with letter-spacing for buttons and labels
6. Maintain a strict vertical rhythm based on the 8px grid

**Don't:**
1. Add color accents — the grayscale is intentional and complete
2. Use border-radius larger than 4px — rounded corners weaken the precision
3. Add decorative elements, gradients, or patterns of any kind
4. Use more than 2 font weights on the same page
5. Apply colored shadows — keep them pure gray
6. Create dense layouts — this theme needs more space than most

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Single column, 16px padding |
| Tablet | 768px | 2 | Two-column layouts begin |
| Desktop | 1024px | 3 | Full nav, 3-col grids |
| Wide | 1280px | 4 | Max container, generous gutters |
| Ultra-wide | 1536px | 4 | Content stays centered |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 56px to 40px (tablet) to 32px (mobile). Body stays 16px.
- **Spacing compression:** 128px to 80px (tablet) to 56px (mobile)
- **Whitespace ratios maintained** — compress proportionally, never eliminate

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #2c2c2c   secondary: #6c757d   accent: #c0c0c0   background: #f8f9fa
text: #2c2c2c      text-muted: #6c757d  border: #dee2e6   error: #dc3545
```

**Example Prompt 1 — Hero Section**
> Build a hero section with #f8f9fa background, 128px vertical padding. Centered heading in Helvetica Bold 56px #2c2c2c, letter-spacing -0.03em. Subtitle in Helvetica Light 18px #6c757d. CTA button background #2c2c2c, text #f8f9fa, uppercase, letter-spacing 0.08em, 4px radius, no shadow.

**Example Prompt 2 — Stats Row**
> Create a 4-column stats row on #ffffff background with 1px #dee2e6 top border. Each stat: number in Helvetica Bold 48px #2c2c2c, label in Helvetica 500 12px #6c757d uppercase letter-spacing 0.06em. 32px column gaps. Centered text.
