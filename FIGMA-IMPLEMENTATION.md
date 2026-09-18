# Figma redesign

## Source and scope

Implemented from the user-provided `Turnu Rosu Challenge.fig` export of file
`UiNz5ZR82izaizrhK5P8PN`, website page `6:105`, main frame `6:106` (1440 px).
The export contains one complete website page. Other large frames are social
media templates, rather than additional website routes.

- Homepage: hero video, countdown, participation kit, courses, volunteers,
  stretching, massage, brunch, painting workshop, FAQ, sponsors and partners.
- Shared responsive navigation and footer use the source logo and icons.
- Mobile layouts adapt the desktop composition into a single column.
- The event date is 5 June 2027. The countdown targets midnight in Romania
  (`+03:00`), since race start times will be announced two weeks before the event.
  Registration closes on 23 May. The 2027 fee tiers
  include Marathon, Half Marathon, Cross and Power Hiking.
- Race registration and the participant list use the supplied Kadenza competition.
  The legacy `/inscrieri` route redirects to `/inregistrare`. External historical
  results, GPX file names and the separate volunteer link are retained.
- Existing inner pages remain available with the shared navigation, footer,
  Inter font and palette. Historical third-party iframe contents retain their
  provider-controlled typography.

## Assets

`public/design` contains original raster assets and SVGs exported from the
source vector geometry, including the shirt, logo, tower and embroidery motif.
`hero.mp4` is the source video transcoded to 1280 px H.264 with the original
AAC audio restored and fast-start metadata (about 54 MB instead of 223 MB).
Playback starts muted; separate buttons control playback and sound. A poster is shown
before playback. Images below the hero load lazily.

The favicon (`public/favicon/trc.svg`) reuses the tower geometry from the new
logo. The hero overlay opacity is 58% so more of the footage remains visible.

### Brunch image

`public/design/brunch.png` is an illustrative AI-generated photograph, created
with the built-in image generation tool, replacing the camping section image.
The old camping reservation link was removed from this section.

Generation prompt:

> Use case: photorealistic-natural. Asset type: landscape 3:2 website section photo for a Romanian mountain trail running competition's Brunch section. Primary request: an inviting outdoor brunch on a rustic wooden picnic table at the foot of green Carpathian mountains. Fresh bread, local cheeses, tomatoes, cucumbers, fruit, pastries and small bowls arranged naturally, morning sunlight, relaxed communal atmosphere, soft green meadow and distant mountains in background. Editorial food photography with realistic natural textures, warm light, food in sharp focus, no visible people, no text, no logos, no watermark. This is an illustrative website image, not documentation of a real event.

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
