# Tech Innovation — Extended DESIGN.md

## 1. Visual Theme & Atmosphere

Tech Innovation is bold, electric, and unapologetically futuristic. Electric blue and neon green on a dark slate backdrop create a high-energy developer aesthetic — think launch day, not boardroom. The palette screams speed, disruption, and technical confidence.

- **Mood:** Bold, energetic, futuristic, disruptive
- **Best for:** Tech startups, developer tools, hackathon sites, product launches, SaaS
- **Feel:** Dark-mode dominant, high-contrast, electric
- **Lighting metaphor:** Neon signs in a dark room — concentrated bursts of light on deep surfaces

## 2. Color Palette & Roles

| Role | Hex | Usage |
|---|---|---|
| Primary | `#0066ff` | Primary CTAs, links, interactive elements |
| Secondary | `#39ff14` | Success states, highlights, badges, status indicators |
| Accent | `#1e1e2e` | Cards on dark backgrounds, secondary surfaces |
| Warm Neutral | `#ffffff` | Text on dark, card fills in light mode |
| Text Primary | `#ffffff` | Headings and body on dark backgrounds |
| Text Secondary | `#a0a0b8` | Captions, meta text on dark backgrounds |
| Text on Light | `#1e1e2e` | Text when used on white backgrounds |
| Background Primary | `#1e1e2e` | Main dark canvas |
| Background Secondary | `#2a2a3e` | Elevated cards, secondary panels on dark |
| Background Light | `#f4f4f8` | Light-mode sections, alternating contrast |
| Border | `#3a3a50` | Card borders, dividers on dark |
| Shadow Base | `rgba(0, 102, 255, 0.15)` | Blue-tinted glow shadows |
| Success | `#39ff14` | Confirmation, live status |
| Success Background | `rgba(57, 255, 20, 0.10)` | Success alert on dark |
| Error | `#ff4444` | Validation errors, destructive actions |
| Error Background | `rgba(255, 68, 68, 0.10)` | Error alert on dark |
| Warning | `#ffaa00` | Caution states |
| Warning Background | `rgba(255, 170, 0, 0.10)` | Warning alert on dark |

## 3. Typography Rules

**Font Families**
- Headers: `'Space Grotesk', 'Segoe UI', Roboto, sans-serif` — weight 700
- Body: `'Inter', 'Segoe UI', Roboto, Helvetica, sans-serif` — weight 400
- Code: `'JetBrains Mono', 'Fira Code', 'Courier New', monospace` — weight 400

**Hierarchy**

| Level | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display Hero | 56px / 3.5rem | 700 | 1.1 | -0.03em |
| Section Heading (h2) | 36px / 2.25rem | 700 | 1.2 | -0.02em |
| Sub-heading (h3) | 24px / 1.5rem | 600 | 1.3 | -0.01em |
| Body | 16px / 1rem | 400 | 1.65 | 0.01em |
| Button | 14px / 0.875rem | 600 | 1 | 0.04em |
| Small / Label | 12px / 0.75rem | 500 | 1.4 | 0.04em |
| Caption / Code | 13px / 0.8125rem | 400 mono | 1.5 | 0 |

## 4. Component Stylings

**Primary Button**
```
background: #0066ff;
color: #ffffff;
padding: 12px 28px;
border-radius: 8px;
box-shadow: 0 0 16px rgba(0, 102, 255, 0.30);
font-weight: 600;
letter-spacing: 0.04em;
hover: background #0055dd; box-shadow 0 0 24px rgba(0, 102, 255, 0.45);
```

**Card (dark mode)**
```
background: #2a2a3e;
border: 1px solid #3a3a50;
border-radius: 12px;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.20);
padding: 24px;
```

**Input**
```
background: #2a2a3e;
border: 1px solid #3a3a50;
border-radius: 8px;
padding: 10px 14px;
color: #ffffff;
focus-ring: 0 0 0 3px rgba(0, 102, 255, 0.30);
placeholder-color: #a0a0b8;
```

**Navigation**
```
background: #1e1e2e;
border-bottom: 1px solid #3a3a50;
link-color: #a0a0b8;
link-hover: #0066ff;
active-indicator: 2px solid #0066ff;
```

## 5. Layout Principles

- **Base unit:** 8px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Max container:** 1200px centered with `padding: 0 24px`
- **Section vertical spacing:** 96px between major sections, 48px between sub-sections
- **Grid:** 12-column with 24px gutters
- **Content width:** Prose blocks capped at 720px
- **Dark-mode first** — design on dark, adapt to light as alternate

## 6. Depth & Elevation

| Level | Usage | Box Shadow |
|---|---|---|
| Level 0 | Flat on #1e1e2e | none |
| Level 1 | Cards, inputs | `0 2px 8px rgba(0, 0, 0, 0.20), 0 0 1px rgba(0, 102, 255, 0.10)` |
| Level 2 | Dropdowns, popovers | `0 8px 24px rgba(0, 0, 0, 0.30), 0 0 4px rgba(0, 102, 255, 0.15)` |
| Level 3 | Modals, dialogs | `0 16px 48px rgba(0, 0, 0, 0.40), 0 0 8px rgba(0, 102, 255, 0.20)` |

## 7. Do's and Don'ts

**Do:**
1. Default to dark backgrounds — it is the defining characteristic of this theme
2. Use electric blue for all primary interactive elements — links, buttons, focus rings
3. Reserve neon green strictly for success states, live indicators, and small badges
4. Add a subtle blue glow to buttons and focused inputs for that neon effect
5. Use monospace fonts (JetBrains Mono) for code blocks, terminal output, and stats
6. Create contrast with white or light sections to break up long dark stretches

**Don't:**
1. Use neon green for large text or backgrounds — it is painfully bright at scale
2. Apply warm tones (oranges, browns) — they break the cold tech aesthetic
3. Use neon green and electric blue adjacent without a neutral separator
4. Make the page entirely dark with no light-section contrast relief
5. Apply border-radius above 12px — keep it sharp enough to feel technical
6. Use decorative serif fonts — this is a geometric sans-serif palette

## 8. Responsive Behavior

| Breakpoint | Width | Columns | Notes |
|---|---|---|---|
| Mobile | 375px | 1 | Full-bleed dark, 16px padding |
| Tablet | 768px | 2 | 2-col grids, hamburger nav |
| Desktop | 1024px | 3 | Full nav, dark/light alternation |
| Wide | 1280px | 4 | Max container, full grid |
| Ultra-wide | 1536px | 4 | Dark bleeds to edges |

- **Touch targets:** Minimum 44px height and width
- **Font scaling:** Hero 56px to 42px (tablet) to 32px (mobile). Body stays 16px.
- **Spacing compression:** 96px to 64px (tablet) to 48px (mobile)
- **Glow effects reduced on mobile** for performance

## 9. Agent Prompt Guide

**Quick Color Reference**
```
primary: #0066ff   secondary: #39ff14   dark-bg: #1e1e2e   card-bg: #2a2a3e
text: #ffffff      text-muted: #a0a0b8  border: #3a3a50    error: #ff4444
```

**Example Prompt 1 — Dark Hero**
> Build a hero section with #1e1e2e background, 96px vertical padding. Heading in Space Grotesk 700 56px #ffffff, letter-spacing -0.03em. Tagline in Inter 400 18px #a0a0b8. CTA button background #0066ff, text #ffffff, 8px radius, glow shadow 0 0 16px rgba(0,102,255,0.30). Small green #39ff14 "Live" badge next to tagline.

**Example Prompt 2 — Feature Cards**
> Create a 3-col grid on #1e1e2e. Cards: background #2a2a3e, 1px #3a3a50 border, 12px radius, 24px padding, shadow 0 4px 16px rgba(0,0,0,0.20). Icon in #0066ff 36px. Title in Space Grotesk 700 20px #ffffff. Description in Inter 400 15px #a0a0b8. Hover: border-color #0066ff, shadow adds blue glow.
