# Birthday Website

## What This Is

A single-page Next.js website to wish his girlfriend happy birthday. It shows a polaroid-style collage of their photos and videos arranged around a heartfelt birthday message in the center. He adds content by dropping image and video files into a project folder; the site picks them up and displays them. It’s for her to open on her birthday and feel the personal, heartfelt wish.

## Core Value

She opens the site and immediately sees a warm, personal birthday experience: their memories in polaroid frames with a heartfelt message at the center. If nothing else works, that moment must land.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Polaroid-style layout: photos and videos displayed in polaroid-like frames, slightly tilted/overlapping
- [ ] Central heartfelt message: one clear “Happy Birthday” (or custom) message in the center of the page
- [ ] Images from project folder: site reads image files from a designated folder (e.g. `public/birthday`) and displays them in the collage
- [ ] Videos from project folder: site reads video files from the same folder and displays them in the collage (playable in-page)
- [ ] Single-page experience: one URL, no navigation — open and see the full experience

### Out of Scope

- User accounts, login, or backend — single static/simple site, content added by dropping files
- Multiple pages or complex navigation — one page only
- Editing the message via UI — message is configurable in code/config, not a CMS
- Public hosting or deployment automation — focus is build; deploy is separate if needed

## Context

- Birthday is tomorrow; timeline is tight.
- Content (photos/videos) will be added by the creator dropping files into the project.
- Tech choice: Next.js (explicitly requested).
- Audience: one person (girlfriend); no need for scalability or multi-user features.

## Constraints

- **Tech stack**: Next.js — user’s choice for the birthday site.
- **Timeline**: Ready by tomorrow — scope and implementation must stay minimal and achievable.
- **Content**: Images and videos supplied as files in the repo (no external URLs or APIs required for v1).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Polaroid-style with center message | User wanted cute, personal collage with message as focal point | — Pending |
| Content via project folder (files) | User will drop image and video files into the project | — Pending |
| Next.js | User requested Next.js for the site | — Pending |

---
*Last updated: 2026-02-10 after initialization*
