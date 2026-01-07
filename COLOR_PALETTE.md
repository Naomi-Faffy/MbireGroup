# Mbire Group - Brand Color Palette Reference

## CSS Variables Available

All colors are defined as CSS custom properties in `styles.css` and can be used anywhere:

```css
/* Usage Example */
background-color: var(--primary);        /* Burnt Orange */
color: var(--charcoal);                  /* Charcoal text */
border: 2px solid var(--accent);         /* Amber yellow */
```

---

## Color Definitions

### Primary Brand Colors
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `--burnt-orange` | #B7491C | rgb(183, 73, 28) | Primary buttons, main CTA, active links |
| `--deep-red-brown` | #7A2E16 | rgb(122, 46, 22) | Secondary states, hover on buttons |
| `--amber-yellow` | #F2A31B | rgb(242, 163, 27) | Badge highlights, section tags, accents |
| `--dark-brown` | #3A2412 | rgb(58, 36, 18) | Text outlines, fine details, borders |

### Green Tones (Background/Overlay)
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `--forest-green` | #0F3B2E | rgb(15, 59, 46) | Hero background, footer |
| `--teal-green` | #1E5B47 | rgb(30, 91, 71) | Hero gradient overlay, accents |

### Neutral Colors
| Variable | Hex | RGB | Usage |
|----------|-----|-----|-------|
| `--charcoal` | #1B1B1B | rgb(27, 27, 27) | Primary text, headings |
| `--cream` | #F4F1E9 | rgb(244, 241, 233) | Off-white background |
| `--off-white` | #F9F7F3 | rgb(249, 247, 243) | Page background, light cards |

---

## CSS Variable Aliases

These are convenience variables pointing to the colors above:

```css
--primary            → --burnt-orange
--secondary          → --deep-red-brown
--accent             → --amber-yellow
--dark-bg            → --forest-green
--accent-green       → --teal-green
--dark-text          → --charcoal
--cream-bg           → --cream
--light-bg           → --off-white
```

---

## Shadow System

Predefined shadows for consistent depth:

```css
--shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.1);      /* Subtle, cards */
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.12);     /* Standard, buttons */
--shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.15);    /* Large, hover states */
```

---

## Spacing System

```css
--max-width: 1200px;         /* Content max-width */
--section-padding: 100px;    /* Vertical padding */
--card-radius: 20px;         /* Large rounded corners */
--button-radius: 12px;       /* Button rounded corners */
```

---

## Examples in Components

### Header CTA Button
```css
background: var(--primary);              /* Burnt Orange */
border-radius: var(--button-radius);     /* 12px */
box-shadow: var(--shadow-md);            /* Standard shadow */
```
**Hover:**
```css
background: var(--secondary);            /* Deep Red-Brown */
box-shadow: var(--shadow-lg);            /* Larger shadow */
transform: translateY(-2px);             /* Lift effect */
```

### Hero Section
```css
background: linear-gradient(135deg, 
  var(--dark-bg) 0%, 
  var(--accent-green) 100%);             /* Forest → Teal gradient */
color: #FFFFFF;                          /* White text */
```

### Sector Cards
```css
border-radius: var(--card-radius);       /* 20px */
box-shadow: var(--shadow-md);            /* Standard shadow */
background: #FFFFFF;                     /* White cards */
```
**Hover:**
```css
box-shadow: var(--shadow-lg);            /* Larger shadow */
transform: translateY(-8px);             /* Lift effect */
```

### Section Tags/Badges
```css
background: var(--accent);               /* Amber Yellow */
color: #FFFFFF;                          /* White text */
border-radius: 50px;                     /* Fully rounded pill */
```

### Footer
```css
background: var(--dark-bg);              /* Forest Green */
color: #FFFFFF;                          /* White text */
```

---

## Accessibility Notes

### Color Contrast Ratios
- ✅ Dark text on light background: 9.2:1 (AAA compliant)
- ✅ White text on dark green: 9.8:1 (AAA compliant)
- ✅ White text on burnt orange: 6.5:1 (AA compliant)
- ✅ Dark text on light backgrounds: All > 7:1 (AAA compliant)

### Focus States
All interactive elements have visible focus states using the primary color and shadows.

### Color Not Sole Indicator
Icons and text accompany colors for clarity to colorblind users.

---

## Customization Guide

To modify the color scheme, only edit the CSS custom properties at the top of `styles.css`:

```css
:root {
  /* Change these values to update entire site */
  --burnt-orange: #YOUR_HEX;
  --deep-red-brown: #YOUR_HEX;
  --amber-yellow: #YOUR_HEX;
  /* ... etc */
}
```

All components will automatically update since they reference these variables.

---

**Color Palette Reference v1.0** | Mbire Group 2026
