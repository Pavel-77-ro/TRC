# Security hardening review

This change updates the build toolchain, removes unused Axios and Swiper dependencies,
refreshes the lockfile, and adds browser security headers and dependency update checks.
Use Node.js 22.12 or newer in the Node 22 release line, including in Vercel settings.

Firebase 10.14.1 pins Undici 6.19.7 in its Node adapters. A scoped npm override
uses patched Undici 6.28+ within the same major version. Revisit this override when
upgrading Firebase; the browser app does not use the Node HTTP adapter. This refresh
does not migrate Firebase to a new major version or change its public application API.

## Browser protections

Vercel applies a CSP that prevents other sites from framing this site, disables object
embeds, and restricts base URLs to this origin. X-Frame-Options provides a compatible
fallback. This does not block the external iframes displayed inside this site.
Script and connection allowlists are deliberately deferred until the Strava, Sportic,
Google and Firebase integrations can be observed in a staging browser session.
The policy does not yet restrict script sources.

Sportic widgets must now receive a user gesture before navigating the top-level page.
Review this behavior in staging, especially any payment or registration redirects.
Scripts loaded directly into the parent page are not isolated by the iframe sandbox.

## Outstanding: Firestore access controls

The routes /inscrieri and /inscrieri_pictura still use Firestore directly. The runner
form stores CNP, email and telephone. Both forms read a document identified by email
before writing it. The current repository does not contain the deployed rules.

Before considering this issue resolved:

1. Inspect the deployed rules for participanti and participanti_pictura. Verify that
   visitors cannot read participant documents or lists, edit confirmation state, or
   overwrite/delete registrations. Test these denials in the Firebase emulator.
2. Decide whether to retire these routes now that the home page links to RaceOffice.
   Removing routes alone does not revoke direct access to Firestore.
3. If retained, move duplicate checks to a trusted service that does not return personal
   documents; enforce input schema, atomic creation and abuse limits server-side.
   App Check can supplement these controls but does not replace authorization.

Changing the client alone cannot prove this issue fixed. No Firebase rules, personal
records or production registration flows were modified in this change.

## Review before publishing

Local validation on 2026-09-15: npm ci --ignore-scripts and npm run build passed
on Node 22.13.0. The final npm audit --package-lock-only reported zero known
vulnerabilities (baseline: 36 affected packages). JSON configuration and Dependabot
YAML were parsed successfully. This does not validate deployed Firebase rules or
third-party registration/payment behavior. ESLint 8 remains deprecated and should
be migrated separately; deprecation warnings are not covered by a clean npm audit.

- Run npm ci, npm run build, and npm audit on the committed lockfile.
- Verify home, courses, results, gallery, participants and registration routes in staging.
- Check actual Vercel response headers; Vite preview does not apply vercel.json headers.
- Confirm user-initiated widget redirects still work and required embedded features
  do not need camera, microphone or geolocation permissions.
- Resolve the Firestore items above separately before treating participant data access
  as verified secure.
