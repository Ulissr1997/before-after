# Before / After

A browser-only tool for building Instagram posts: two photos side by side or stacked,
or a single photo, with a logo and labels. Everything runs on the device — no server,
no upload, no build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app: markup, styles, canvas rendering |
| `sw.js` | Service worker, caches the app for offline use |
| `manifest.webmanifest` | Makes it installable to the Home Screen |
| `icon-180.png` | Apple touch icon |
| `icon-192.png`, `icon-512.png` | Manifest icons |

All paths are relative, so it works from a GitHub Pages project subpath without changes.

## Running it

Open `index.html` in any browser, or serve the folder over HTTPS. The service worker and
the share sheet both need HTTPS (or `localhost`), so the offline and Save-to-Photos
behaviour only appears on the deployed version.

## Output

1080 px wide, exported as JPEG at 0.92 quality:

- Square — 1080 × 1080
- Portrait — 1080 × 1350
- Story — 1080 × 1920

## Notes

- Settings and the logo persist in `localStorage`. Photo zoom and position reset each session.
- The logo is stored downscaled to 600 px wide as a PNG, so transparency survives.
- After changing any file, bump `CACHE` in `sw.js` or the old version keeps being served.
