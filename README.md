# Mbire Group — React Site (Vite)

This is a minimal React + Vite scaffold for the Mbire Group corporate website. It contains pages and components pre-filled with the provided company content for Agriculture, Mining, and Manufacturing.

## Quick start (PowerShell)

1. Install dependencies:

```powershell
cd "C:\Users\User\Videos\Mbire"
npm install
```

2. Run the development server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
npm run preview
```

Notes:
- This is a static frontend scaffold. The contact form is demo-only and does not send messages to a backend.
- Replace contact details in `src/components/Contact.jsx` or wire the form to your preferred backend.

If you want, I can:
- Add TypeScript support
- Scaffold a simple Node/Express API endpoint for contact form handling
- Deploy this to Netlify, Vercel, or GitHub Pages

What I changed in this update:

- Added simple SVG assets in `src/assets/` for the hero and sector icons.
- Improved the hero layout and added an illustration (`src/components/Hero.jsx`).
- Updated `src/components/Sector.jsx` to use icon cards for each division.
- Enhanced `src/styles.css` for a responsive hero and sector card layout.

Next recommended steps:

- Replace placeholder contact details in `src/components/Contact.jsx`.
- If you want a working contact form, ask me to scaffold a small Node/Express backend and I will add it and wiring.
- I can also convert the project to TypeScript if you prefer stronger typing.
