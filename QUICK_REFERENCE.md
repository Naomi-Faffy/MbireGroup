# Ecoland Website - Quick Reference Guide

## 🎨 Visual Summary

### Page Sections (Top to Bottom)
1. **Header** - Sticky, glassmorphic, navigation
2. **Hero** - Farm background, large headline, 2 buttons
3. **Highlights** - Yellow section with 3 image cards
4. **Services** - 3-column grid with farm images
5. **Sustainability** - 3 cards with practice images
6. **Contact** - 2-column form layout
7. **Footer** - Dark green, 4-column layout

---

## 🎯 Color Quick Reference

```
Primary Actions: #2E7D32 (Dark Green)
Text & Headings: #1B3B1A (Dark Green Text)
Accents/Highlights: #FFC107 (Yellow)
Backgrounds: #FFFFFF or #F3F3F3 (White/Light Gray)
```

---

## 💎 Glassmorphism Quick Guide

Applied to:
- ✅ Header (frosted glass effect)
- ✅ Highlight cards (semi-transparent + blur)
- ✅ Service cards (frosted background)
- ✅ Form inputs (light glass effect)
- ✅ Sustainability cards (subtle glass effect)

CSS: `backdrop-filter: blur(16px)` + semi-transparent rgba backgrounds

---

## 🖼️ Image Areas

### Hero Section
- Full-width farm landscape background
- Dark green overlay for text readability
- Right side: Responsive image

### Highlights Section (Yellow)
- Three circular image avatars (150x150px)
- Background: Farm-related Unsplash photos

### Services Grid
- Service card images (240px height)
- Dark overlay gradients
- Farm, crop, dairy images

### Sustainability
- Three image-based cards
- Farming/nature photography

---

## 🔘 Button Styles

### Primary (Dark Green)
- Background: #2E7D32
- Text: White, bold
- Shape: Pill (border-radius: 50px)
- Hover: Darker shade, lift effect

### Secondary/Outline (Yellow)
- Border: 2px solid #FFC107
- Text: Yellow
- Background: Transparent
- Hover: Light yellow background

---

## 📱 Responsive Behavior

### Desktop (768px+)
- Multi-column grids (3 columns)
- Two-column layouts
- Hero side-by-side

### Mobile (<768px)
- All grids collapse to 1 column
- Single column layouts
- Full-width sections
- Hero stacks vertically

---

## 🧩 Component Mapping

| Component | Purpose | Key Feature |
|-----------|---------|------------|
| Header | Navigation | Glassmorphic sticky bar |
| Hero | Introduction | Farm background + overlay |
| About | Highlights | Yellow section with images |
| Sector | Services | 3-card grid with images |
| Sustainability | Practices | 3-card sustainable focus |
| Contact | Lead form | 2-column layout |
| Footer | Links | Dark green footer |

---

## ✨ Key Effects

### Hover States
- Buttons: Color change + lift (transform: translateY(-3px))
- Cards: Larger shadow + lift (transform: translateY(-8px))
- Links: Color change (0.3s transition)

### Transitions
- All: 0.3s ease
- Smooth color/shadow changes
- Lift effects on interaction

### Shadows
- Small: 0 4px 12px rgba(0,0,0,0.08)
- Medium: 0 8px 24px rgba(0,0,0,0.12)
- Large: 0 12px 40px rgba(0,0,0,0.15)

---

## 🚀 Getting Started

1. **View the site**: Build with npm & open in browser
2. **Check styles**: Look in `src/styles.css` for color variables
3. **Modify components**: Update `.jsx` files as needed
4. **Adjust images**: Change Unsplash URLs in components
5. **Update colors**: Edit CSS custom properties at top of styles.css

---

## 🔗 Navigation Structure

```
Header Links:
├── Home → #home
├── About Us → #about
├── Services → #services
├── Shop → #shop
└── Get Started Now → #contact (CTA)
```

---

## 📊 Page Flow

```
User lands on site
        ↓
Sees hero (farm image + headline)
        ↓
Scrolls through highlights (yellow band)
        ↓
Views services (3-card grid)
        ↓
Learns about sustainability
        ↓
Fills contact form or shops
```

---

## 🎨 CSS Variables (For Customization)

### Colors
```css
--dark-green: #2E7D32
--dark-green-text: #1B3B1A
--yellow-accent: #FFC107
--white: #FFFFFF
--light-gray: #F3F3F3
```

### Effects
```css
--glass-bg: rgba(255, 255, 255, 0.15)
--glass-border: rgba(255, 255, 255, 0.3)
--glass-blur: 16px
```

### Spacing
```css
--max-width: 1400px
--section-padding: 100px
--card-radius: 16px
--button-radius: 50px
```

To change the entire look, modify these variables in `src/styles.css` line 1-39.

---

## ✅ Checklist

- ✅ Glassmorphism applied throughout
- ✅ Image-based design (no icons)
- ✅ Eco-agriculture branding
- ✅ Responsive design
- ✅ Smooth interactions
- ✅ Modern aesthetics
- ✅ All components built
- ✅ Ready to deploy

---

**Last Updated**: January 6, 2026
**Status**: Ready for Development
