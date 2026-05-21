# Sushma EVS — Portfolio

Personal portfolio website. Static site — pure HTML/CSS/JS with React loaded from CDN. No build step required.

## Live site
[sushma62216.github.io/portfolio](https://sushma62216.github.io/portfolio/)

## Local preview
Just open `index.html` in a browser. Or with Python:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files
- `index.html` — entry point
- `data.js` — resume content (edit here to update copy)
- `story-app.jsx` — main app + hero
- `story-sections.jsx` — About, Skills, Experience, Projects, Now, Education, Contact
- `story-helpers.jsx` — palette, scroll hooks, fade-in animations
- `image-slot.js` — drag-and-drop image placeholder web component
- `tweaks-panel.jsx` — color/font/dark-mode controls

## Deploy to GitHub Pages
1. Push to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Wait ~30s for build
