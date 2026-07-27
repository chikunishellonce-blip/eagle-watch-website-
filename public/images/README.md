# /public/images

Drop the client's real field photos here with these exact filenames (referenced from
`lib/data/content.ts`), so `next/image` can optimise and lazy-load them:

- `field-electric-fence.jpg` — electric fence install
- `field-gate-cabling.jpg` — gate cable routing
- `field-technician-work.jpg` — technician equipment work
- `field-cctv-mount.jpg` — CCTV sensor mount
- `og-cover.jpg` — 1200×630 Open Graph / social share image
- `eagle-watch-logo.svg` — already included as a placeholder mark; swap for the real logo

Recommended source size: at least 1600px on the long edge — Next.js generates the
smaller responsive sizes automatically at build/request time.
