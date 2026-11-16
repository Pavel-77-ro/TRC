# Interior pages — October 2026 design

Source: Figma file GkpQjIYi5sMwqBxseH65jd, Website page 6:105.
Read using the Figma design context and screenshots on 29 October 2026.

## Screens and behavior

- Results (68:2104): edition tabs for 2024/2025, race tabs for half marathon/cross,
  statistics, podium and top ten. The historical summary in src/data/results.json
  is transcribed from the four Figma Results Board variants. It is a static
  historical snapshot, not a live timing feed. “Clasament complet în RaceHub” opens
  the original provider page directly. The optional “Vezi clasamentul în pagină”
  retains the original RaceHub iframe for the chosen edition.
  Existing /rezultate/2024 and /rezultate/2025 links work; /rezultate redirects to 2026.
- Participants (97:1976): real Kadenza custom element, unchanged competition and
  filters. Capacity cards use the same public competition endpoint that the official
  widget uses, refreshing every minute. Occupied places are capacity minus available
  slots; they are labeled as occupied places rather than confirmed registrations.
  Distances, elevation and availability come from Kadenza. Mock names/counts from
  the Figma prototype are intentionally not published. A failed capacity request
  does not prevent the separate participant widget from loading.
- Gallery (99:2297): the exact five Figma images in their designed positions.
  A native modal dialog implements the lightbox (99:2440), with previous/next,
  wrapping, arrow keys, Escape, modal focus handling and focus restoration.
  The Memzo CTA reveals the existing embedded photo lookup, with its original
  URL and an external fallback link. No photo upload or face search was submitted
  during testing. The old event's exact date is omitted from the CTA; Memzo
  identifies the connected album.
- Regulations (95:1834): ten independently expandable sections, expand/collapse
  all, numbered badges and summary sidebar. All existing substantive regulation
  text is retained, including the corrected Standard period (2 January–2 May),
  prices, and the start announcement two weeks before the event. Subsections
  7.1–7.12 are grouped under section 7. No regulation text is truncated.

## Implementation and assets

Vue 3 components reuse the site's Inter font, color variables and CTA styles.
New page styles live in src/assets/interior-pages.css and apply to these pages.
Gallery PNGs and lightbox/accordion icons are stored under public/design/october.
They are downloaded source assets, not screenshots of the page. There are no
temporary Figma URLs in runtime code.

The existing shared header/footer and homepage were outside this request and
remain unchanged. The provider-rendered Kadenza and RaceHub interiors retain
their own layout and controls rather than being replaced by static mock tables.

## Verification

- Production build and ESLint on changed Vue/JS files.
- Browser checks: all four result combinations; direct RaceHub classification loading;
  live participant capacity and Kadenza race filter; regulation individual and
  all-section toggles, all twelve procedure subsections and all fee tiers;
  all gallery images loaded; lightbox wrapping, Escape and focus return;
  Memzo iframe and its official selfie link loaded.
- Desktop visual comparison with Figma and 390px mobile checks for all four
  pages, with no document-level horizontal overflow.

Known provider limitation: RaceHub's g-live.html unconditionally reads
window.parent.location.search. In a cross-origin iframe this throws a SecurityError
and prevents its classification from rendering. The original embed is preserved,
but the primary complete-results action opens RaceHub directly, verified with the
2025 classification. Resolving the embedded script error requires a provider fix.

## Results 2026

Added /rezultate/2026 and navigation entries. Source, read 30 October 2026:
https://cronometraj.racetecresults.com/results.aspx?CId=16648&RId=2463
The event date is 16 May 2026. The top-ten rows, category positions, winning
times and first female finishers are transcribed from the official results.
Semimarathon: 79 records, 72 finishers, 1 DNF, 6 DNS; starters = 73.
Cross: 106 records, 96 finishers, 10 DNS; starters = 96.
Club names are not supplied in the source table, so the club column is hidden
for 2026. The full results link selects EId=1 or EId=2 according to the selected
race. RaceTec refuses iframe connections, verified in the browser, so 2026 uses
the working direct link only. Older RaceHub embeds remain available.
Power Hiking is noncompetitive and links to EId=3.
This is a historical snapshot, not a background scraper or live results feed.

## Full 2026 lists — 16 November 2026

Re-read every RaceTec result page: 79 Semimarathon records, 106 Cross records,
and 55 noncompetitive Power Hiking records. All 240 are displayed locally.
Bib numbers identify rows; DNF/DNS retain empty place/time rather than invented
results. Search matches names without diacritics and bib numbers. Power Hiking
has its own tab without podium, rank or finish-time claims. Verified counts,
DNF/DNS name search, race switching and return to the 2025 summary in browser.
Production build and changed-component ESLint passed.

## Full 2024 and 2025 lists — 16 November 2026

Replaced Figma top-ten snapshots with complete official RaceHub tables:
2025 Semimarathon 63 (61 finishers, 2 Withdrawal), Cross 78 (77 finishers,
1 Withdrawal); 2024 Semimarathon 37 and Cross 46 (all finishers).
Preserved bibs, clubs, categories and the provider's hundredth-second times.
Withdrawal is displayed as Retras; no unsupported DNF/DNS inference is made.
All four lists support the same name/bib search as 2026.

## Authentic gallery photos — 16 November 2026

Gallery tiles now use the existing event photographs src/assets/images/trc1.jpg
through trc5.jpg instead of the Figma sample images. Captions describe the actual
subjects. Verified all five images load and lightbox navigation works. Memzo is
retained. Corrected the homepage activity heading to Stretching.
