# Motion Connected Interactive Graphic (no-cost demo)

This is a lightweight, no-framework HTML/CSS/JS interactive graphic.
Click the yellow dots to open a modal panel (like the example you shared).

## Run locally (fastest)
1. Download this folder.
2. Double-click `index.html`.

If your browser blocks local JS file access, run a tiny local server:

### Option A: Python (already on most Macs)
```bash
cd mc-interactive
python3 -m http.server 8000
```
Open: http://localhost:8000

### Option B: VS Code
Use the "Live Server" extension.

## Publish free on GitHub Pages
1. Create a new repo (public is simplest).
2. Upload these files at the repo root:
   - index.html
   - styles.css
   - script.js
   - assets/scene.png
3. Repo Settings -> Pages -> Deploy from branch -> select `main` / root.
4. Your link will look like: https://YOURUSER.github.io/REPO

## Edit the clickable image
Open `script.js` and update `INTERACTIVE_IMAGE`:
- `src`: path to your image file (example: `assets/scene.png`)
- `alt`: accessibility text for the image

## Edit the content
Open `script.js` and edit the `PANELS` array:
- title
- risk
- solution
- bullets
- linkText / link

## Move hotspots
Hotspot positions are percentages in `HOTSPOTS` (script.js). Update x/y values.
