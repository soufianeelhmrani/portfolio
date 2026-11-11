# Assets

This folder is for optional local media.

Suggested use:

- `portrait.*` — a real photo to replace the designed monogram in `src/components/ProfileVisual.jsx`.
- `projects/*.png|webp` — real project screenshots to replace the generated artwork from `src/components/ProjectArtwork.jsx`.
- `og-image.*` — a 1200×630 social preview image.

Import files with Vite so they are hashed and optimized:

```jsx
import portrait from "../assets/portrait.webp";
```

The site currently ships without binary assets on purpose: the hero portrait and project previews are generated with CSS/SVG, so the repository stays lightweight and nothing looks broken before you add your own images.
