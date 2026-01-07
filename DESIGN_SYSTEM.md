# Mbire Group Website - Design System Implementation

## Overview
Your website has been completely redesigned with a modern, professional agricultural theme using your brand colors. The design features a clean hierarchy, generous spacing, rounded corners, and strategic use of your brand palette throughout.

---

## 🎨 Color System Implemented

### Primary Brand Colors
- **Burnt Orange** (#B7491C) - Primary CTA buttons, links, highlights
- **Deep Red-Brown** (#7A2E16) - Secondary hover states, darker accents
- **Amber Yellow** (#F2A31B) - Badge highlights, featured elements, section tags
- **Dark Brown** (#3A2412) - Text, outlines, fine details

### Background & Accent Palette
- **Forest Green** (#0F3B2E) - Hero section, footer, dark backgrounds
- **Teal Green** (#1E5B47) - Hero gradient overlay, section accents
- **Charcoal Black** (#1B1B1B) - Primary text color
- **Cream** (#F4F1E9) - Off-white background
- **Light Off-White** (#F9F7F3) - Page background, card backgrounds

---

## 📐 Layout & Spacing

### Key Measurements
- **Max Content Width**: 1200px (centered with generous gutters)
- **Section Padding**: 100px vertical (60px mobile)
- **Card Border Radius**: 20px (rounded corners everywhere)
- **Button Border Radius**: 12px
- **Internal Padding**: 24-40px on cards/sections
- **Grid Gaps**: 2.5-4rem between sections
- **Negative Space**: Generous margins & padding throughout

### Typography Hierarchy
- **Hero Heading**: 3.5rem (bold, letter-spacing -1px)
- **Section Titles**: 2.8rem (bold, letter-spacing -1px)
- **Card Titles**: 1.4rem (bold)
- **Body Text**: 1rem (line-height 1.7)
- **Font**: Segoe UI, Inter, system sans-serif

---

## 🏗️ Component Structure

### 1. **Header** (Always Sticky)
- Clean white background
- Logo (44px rounded) + brand name on left
- Centered navigation links with hover effects
- Pill-shaped CTA button (Burnt Orange background)
- Active link highlighting in primary color
- Responsive: Stacks on mobile

### 2. **Hero Section**
- Full-width dark green gradient (Forest Green → Teal Green)
- Subtle dotted pattern overlay
- Left: Large bold white typography (3.5rem heading)
- Right: Imagery with rounded corners (20px)
- Two buttons:
  - Primary (solid Burnt Orange with icon)
  - Secondary (outlined white with icon)
- Drop shadow on imagery
- 120px vertical padding

### 3. **About Section** (New Highlight Band)
- White background
- Section tag (yellow badge): "Our Company"
- Large centered title
- 3-column grid of highlight cards:
  - Circular amber icons (80px)
  - Title & description
  - Hover effects
- Vision & Mission boxes (2-column grid)
- Core Values box with light gray background

### 4. **Sector Cards Grid** (Agriculture, Mining, Manufacturing)
- 3-column responsive grid
- Each sector displays 3 cards:
  - Card 1: Overview with emoji icon
  - Card 2: Focus areas
  - Card 3: Impact promise
- Card styling:
  - Rounded corners (20px)
  - Image top with green gradient (240px height)
  - Yellow badge labels
  - Drop shadow with hover lift effect
  - Arrow links with hover animation
- White card bodies with padding (2rem)

### 5. **Sustainability Section**
- Dark green gradient background (Forest → Teal)
- White text
- 3-column initiative cards
- 2-column community programs grid
- Glassmorphism effect on program cards
- Same tag/title structure as About

### 6. **Contact Section**
- White background
- Full-width layout
- 2-column: Text info + form
- Contact details with emoji icons
- Form with styled inputs:
  - 2-column grid (stacks on mobile)
  - Light borders, focus state with shadow
  - Focus color: Burnt Orange
- Success message styling (amber background)

### 7. **Footer**
- Dark green background (Forest Green)
- 4-column footer content grid
- Links with hover effects
- Copyright and brand message
- Responsive: Stacks to 1 column on mobile

---

## 🎯 Design Features

### Shadows & Depth
- **Small**: `0 4px 12px rgba(0,0,0,0.1)` - Subtle cards
- **Medium**: `0 8px 24px rgba(0,0,0,0.12)` - Standard cards
- **Large**: `0 12px 40px rgba(0,0,0,0.15)` - Hero images, hover states

### Button Styles
- **Primary Button**: 
  - Background: Burnt Orange
  - Padding: 0.75rem 1.5rem
  - Hover: Deep Red-Brown + lift (translateY -3px)
  
- **Outline Button** (Hero):
  - Border: 2px white
  - Background: transparent
  - Hover: 10% white background

### Card Hover Effects
- Slight lift: `transform: translateY(-8px)`
- Shadow increase to large shadow
- Smooth transition: 0.3s ease

### Border Radius Consistency
- Large elements (sections, cards): 20px
- Medium elements (buttons, form inputs): 12px
- Small elements (badges, icons): 6-8px

---

## 📱 Responsive Design

### Breakpoint: 768px
- All multi-column grids collapse to 1 column
- Section padding reduces to 60px
- Hero text reduces to 2.5rem
- Header nav wraps with proper spacing
- Full-width images

---

## 🔄 Updated Components

### Header.jsx
✓ Sticky positioning
✓ Active link state tracking
✓ Pill-shaped CTA button
✓ Proper spacing & typography

### Hero.jsx
✓ Dark green gradient background
✓ Large typography (3.5rem)
✓ Two styled buttons with icons
✓ Right-side imagery with rounded corners
✓ Responsive 2-column → 1-column

### About.jsx (Completely Redesigned)
✓ Section tag + large title
✓ 3-column highlight card grid
✓ Vision/Mission 2-column grid
✓ Core values box
✓ Emoji icons for visual interest

### Sector.jsx (Completely Redesigned)
✓ 3-column card grid per sector
✓ Yellow badge labels on cards
✓ Emoji-based imagery
✓ Proper hover effects
✓ Arrow links with animation

### Sustainability.jsx (Completely Redesigned)
✓ Dark green gradient background
✓ 3 initiative highlight cards
✓ 2-column community programs
✓ Glassmorphism card effects
✓ White text on dark background

### Contact.jsx (Completely Redesigned)
✓ 2-column layout (info + form)
✓ Styled form inputs
✓ Focus state styling
✓ Success message
✓ Emoji contact icons

### Footer.jsx (Completely Redesigned)
✓ 4-column footer grid
✓ Dark green background
✓ Proper link styling
✓ Brand message
✓ Copyright footer

---

## 🎨 CSS File Structure

### Global Variables (lines 1-39)
- All brand colors defined
- Spacing system (padding, gaps)
- Shadow definitions
- Typography settings

### Header Styles (lines 47-69)
- Sticky positioning
- Navigation styling
- CTA button

### Hero Styles (lines 71-104)
- Gradient background
- Pattern overlay
- Grid layout
- Button styling

### Buttons (lines 106-114)
- Primary button styles
- Outline button styles
- Hover effects

### Sections & Highlights (lines 116-156)
- Section title wrapper
- Tag/badge styling
- Highlight card grid
- Icon circles

### Sector Styles (lines 158-214)
- Sector grid layout
- Card styling
- Image containers
- Badge labels
- Link styling

### Sustainability (lines 216-224)
- Dark background styling
- Text color overrides
- Card styling

### Contact & Form (lines 226-244)
- Form grid
- Input styling
- Focus states
- Notice styling

### Footer (lines 246-256)
- Dark background
- Grid layout
- Link styling
- Bottom bar

### Responsive (lines 258-270)
- Mobile-first breakpoint at 768px
- Grid collapses
- Font sizing adjustments
- Padding reductions

---

## ✨ Key Design Achievements

1. **Strong Brand Identity**: All sections use the brand color palette strategically
2. **Visual Hierarchy**: Large hero, clear section separation, proper typography scale
3. **Modern Aesthetics**: Rounded corners, subtle shadows, generous whitespace
4. **Responsive Excellence**: Adapts beautifully from desktop to mobile
5. **Professional Feel**: Clean layouts, consistent spacing, polished interactions
6. **Accessibility**: Proper color contrast, semantic HTML, keyboard navigation
7. **Performance**: Optimized CSS, minimal image assets, fast load times

---

## 🚀 Next Steps (Optional Enhancements)

1. Replace emoji icons with actual SVG/PNG assets
2. Add smooth scroll behavior to anchors
3. Implement animations on scroll (fade-in, slide-up)
4. Add form backend integration
5. Include actual product/service images
6. Add testimonials section
7. Implement newsletter signup
8. Add blog/news section
9. Mobile menu toggle with hamburger (for longer nav)
10. Dark mode toggle (optional)

---

## 📊 Build Status
✅ **Build Successful** - All components compile without errors
✅ **Responsive** - Tested mobile, tablet, desktop layouts
✅ **Brand Compliant** - All colors match your palette
✅ **Modern Design** - Matches professional agricultural business aesthetic

---

**Design System v1.0** | January 2026
Built with React + Vite | Mbire Group
