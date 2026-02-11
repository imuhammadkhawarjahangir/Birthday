/**
 * Build-time script: scans public/birthday/photos and public/birthday/videos
 * and writes src/lib/birthday-assets.generated.ts with the file lists.
 *
 * Run automatically via "prebuild" in package.json, or manually:
 *   node scripts/generate-birthday-assets.cjs
 */
const fs = require("fs");
const path = require("path");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm"]);

function listFiles(dir, extensions) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return extensions.has(ext);
    })
    .sort();
}

const photosDir = path.join(process.cwd(), "public", "birthday", "photos");
const videosDir = path.join(process.cwd(), "public", "birthday", "videos");

const images = listFiles(photosDir, IMAGE_EXTENSIONS);
const videos = listFiles(videosDir, VIDEO_EXTENSIONS);

const outDir = path.join(process.cwd(), "src", "lib");
fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, "birthday-assets.generated.ts");
const content = `// AUTO-GENERATED — do not edit. Run "node scripts/generate-birthday-assets.cjs" to regenerate.
export const BIRTHDAY_IMAGES: string[] = ${JSON.stringify(images, null, 2)};

export const BIRTHDAY_VIDEOS: string[] = ${JSON.stringify(videos, null, 2)};
`;

fs.writeFileSync(outFile, content, "utf-8");
console.log(
  `Generated ${outFile}: ${images.length} image(s), ${videos.length} video(s)`
);
