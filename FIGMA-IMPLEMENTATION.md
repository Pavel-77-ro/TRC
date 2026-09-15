# Figma redesign

## Source and scope

Implemented from the user-provided `Turnu Rosu Challenge.fig` export of file
`UiNz5ZR82izaizrhK5P8PN`, website page `6:105`, main frame `6:106` (1440 px).
The export contains one complete website page. Other large frames are social
media templates, rather than additional website routes.

- Homepage: hero video, countdown, participation kit, courses, volunteers,
  stretching, massage, camping, painting workshop, FAQ, sponsors and partners.
- Shared responsive navigation and footer use the source logo and icons.
- Mobile layouts adapt the desktop composition into a single column.
- Existing route names, registration destinations, copy, dates and FAQ answers
  are retained as requested. The 2026 countdown consequently stays at zero
  after the event. No future edition or replacement registration URL is inferred.
- Existing inner pages remain available with the shared navigation, footer,
  font and palette. Their content and embedded services remain unchanged.

## Assets

`public/design` contains original raster assets and SVGs exported from the
source vector geometry, including the shirt, logo, tower and embroidery motif.
`hero.mp4` is the source video transcoded to 1280 px H.264 with audio removed
and fast-start metadata (about 50 MB instead of 223 MB). A poster is shown
before playback. Images below the hero load lazily.

The raw `.fig`, extracted binary canvas and intermediate decoding files are
not application dependencies and are not included in the repository.

## Implementation

- `src/data/design.json`: retained content and section configuration.
- `src/assets/design.css`: design tokens, page layout and responsive rules.
- `src/views/HomeView.vue`: homepage sections and native FAQ disclosure widgets.
- `src/components/VideoPlayer.vue`: muted playback, pause control and reduced
  motion support.
- `src/App.vue`: keyboard-accessible navigation, mobile menu and footer.
- Route components load on demand so secondary pages and Firebase are not
  included in the initial homepage bundle.

## Verification

Production build and ESLint on changed Vue/JavaScript files pass. Browser
checks at desktop (1440 px) and mobile (390 px) cover the extracted graphics,
horizontal overflow, menu, results dropdown, FAQ, scroll controls and opening
the existing painting registration page. No registration was submitted.

Start the local preview with `npm run dev -- --host 127.0.0.1`.
