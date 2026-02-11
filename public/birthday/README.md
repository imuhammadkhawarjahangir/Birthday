# Birthday media folder

Drop media into the appropriate subfolder — they are picked up **automatically** at build time.

- **Photos** → `public/birthday/photos/` — jpg, jpeg, png, gif, webp
- **Videos** → `public/birthday/videos/` — mp4, webm (compressed 720p recommended)
- **Music**  → `public/birthday/music.mp3` (plays when she taps "Tap to see your gift")

No manual code changes needed. Just add files, then run `npm run dev` or `npm run build`.

The build-time script (`scripts/generate-birthday-assets.cjs`) scans the photos/ and videos/ folders and generates the asset list automatically.

**Tip:** Test on a real phone or Chrome DevTools device mode (375px) to confirm splash, music, and collage work.
