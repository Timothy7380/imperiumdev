# Imperiumdev — Timothy Olaomoju Portfolio

## View the site
Double-click **index.html** in this folder. No install or server needed.
Keep `images/`, `cv.pdf` and `favicon.svg` next to it.

## Folder layout
index.html        the finished site (generated — don't edit by hand)
images/ cv.pdf    assets used by the finished site (generated copies)
source/           the editable React + Vite project
  src/data.js     ALL content: projects, links, stats, skills, email
  src/index.css   all styling (custom CSS)
  public/         original images, cv.pdf, favicon

## Edit and rebuild
npm install       # first time only
npm run dev       # live preview in the browser while you edit
npm run build     # regenerates index.html + images/ in this folder


## Deploy
Drag this folder onto Netlify Drop, or push to GitHub and use GitHub Pages
(serve the repository root) or Vercel (build command `npm run build`,
output directory `.`).
