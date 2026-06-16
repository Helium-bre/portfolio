# Personal Portfolio

A minimalist personal website to showcase your **career, education, and
achievements** on the home page, plus a dedicated **Research** page describing
your lab work and the projects you contributed to (with images and videos).
Built with plain HTML, CSS, and JavaScript — no frameworks and no build step —
so it deploys to GitHub Pages as-is.

## Quick start

All of your content lives in **one file**: [`assets/data/content.js`](assets/data/content.js).
Open it, replace the placeholder text, and you're done — no HTML editing
required. Both pages render themselves from that data.

### Preview locally

Just open `index.html` in your browser (double-click it). Everything works
from the local filesystem.

If you prefer a local server (recommended, mirrors GitHub Pages exactly):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Pages

| Page            | Shows                                                        |
| --------------- | ----------------------------------------------------------- |
| `index.html`    | Hero, About, Experience, Education, Achievements, Contact   |
| `research.html` | Lab intro + one section per research project (text + media) |

The two pages share the same header, footer, styles, and theme. The header and
footer are defined once in `assets/js/layout.js`, so the navigation never drifts
between pages.

## Project structure

```
.
├── index.html              # Home page
├── research.html           # Research page
├── .nojekyll               # Tell GitHub Pages to serve files as-is
├── assets/
│   ├── css/
│   │   ├── variables.css   # Design tokens: colors, spacing, fonts (edit here)
│   │   ├── base.css        # Reset + base typography
│   │   ├── layout.css      # Header, nav, sections, footer
│   │   ├── components.css  # Hero, cards, timeline, tags, buttons
│   │   └── research.css    # Research-page-only styles (media gallery, etc.)
│   ├── js/
│   │   ├── icons.js        # Inline SVG icon set
│   │   ├── utils.js        # Shared helpers (escape, slugify, markup bits)
│   │   ├── layout.js       # Shared header + footer + nav
│   │   ├── render.js       # Renders the home page
│   │   ├── research.js     # Renders the research page
│   │   ├── ui.js           # Theme toggle, mobile menu, scroll-spy
│   │   └── app.js          # Entry point (picks the renderer per page)
│   ├── data/
│   │   └── content.js      # ← ALL YOUR CONTENT GOES HERE
│   ├── images/
│   │   ├── profile/        # Your portrait
│   │   ├── projects/       # Project images
│   │   └── favicon.svg     # Site icon
│   ├── videos/             # Project video files (e.g. demo.mp4)
│   └── files/              # Downloadables (e.g. resume.pdf)
└── README.md
```

## How to customize

| I want to change…              | Edit…                                            |
| ------------------------------ | ------------------------------------------------ |
| Name, bio, jobs, research, etc.| `assets/data/content.js`                         |
| Colors / fonts / spacing       | `assets/css/variables.css`                       |
| Page titles & social preview   | the `<head>` of `index.html` / `research.html`   |
| Navigation links               | `NAV` array in `assets/js/layout.js`             |

### Add a job, degree, or achievement

Copy an existing entry in the matching list in `content.js` and edit the
fields. Lists render in order, so put the most recent first.

### Add a research project (with images / videos)

Add an entry to `research.projects` in `content.js`. Each project has a text
write-up and a `media` list. Media items can be:

```js
// An image (put the file in assets/images/projects/)
{ type: "image", src: "assets/images/projects/fig1.png", caption: "..." }

// A video file you host yourself (put it in assets/videos/)
{ type: "video", src: "assets/videos/demo.mp4", poster: "", caption: "..." }

// An embedded YouTube/Vimeo video — use the EMBED url, not the watch url:
//   YouTube: https://www.youtube.com/embed/VIDEO_ID
//   Vimeo:   https://player.vimeo.com/video/VIDEO_ID
{ type: "embed", src: "https://www.youtube.com/embed/VIDEO_ID", caption: "..." }
```

Each project automatically gets a shareable anchor based on its `slug`
(e.g. `research.html#project-one`).

### Images & theme

Drop your portrait in `assets/images/profile/` and set `profile.avatar` in
`content.js` (leave it empty to show your initials instead). A light/dark theme
toggle is included; it remembers the visitor's choice and respects their system
preference. Change the palette in `variables.css`.

## Deploy to GitHub Pages

1. Create a repository on GitHub and push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose the **`main`** branch and the **`/ (root)`** folder, then **Save**.
4. Wait a minute; your site will be live at
   `https://<you>.github.io/<repo>/`.

> **Tip:** To use it as your main profile site at `https://<you>.github.io`,
> name the repository `<you>.github.io`.

## License

You own your content. Feel free to adapt this template however you like.
