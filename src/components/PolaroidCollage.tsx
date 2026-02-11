import { BIRTHDAY_IMAGES, BIRTHDAY_VIDEOS } from "@/lib/birthday-assets";
import PolaroidItem from "./PolaroidItem";

const ROTATIONS = [-2, 2, -1, 3, 1, -3, 2, 0];

type MediaItem = { type: "image"; filename: string } | { type: "video"; filename: string };

export default function PolaroidCollage({
  children,
}: {
  children: React.ReactNode;
}) {
  const mediaItems: MediaItem[] = [
    ...BIRTHDAY_IMAGES.map((filename) => ({ type: "image" as const, filename })),
    ...BIRTHDAY_VIDEOS.map((filename) => ({ type: "video" as const, filename })),
  ].slice(0, 8);

  return (
    <div className="collage-entrance relative flex min-h-screen w-full items-center justify-center bg-zinc-50 px-4 font-sans sm:px-6 lg:px-8">
      <div className="grid max-w-4xl grid-cols-3 grid-rows-3 place-items-center gap-3 sm:gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((slot) => {
          const slotStyle = { animationDelay: `${slot * 45}ms` } as React.CSSProperties;
          if (slot === 4) {
            return (
              <div
                key="center"
                className="collage-slot-entrance flex min-h-[8rem] min-w-[8rem] items-center justify-center sm:min-h-[10rem] sm:min-w-[10rem]"
                style={slotStyle}
              >
                {children}
              </div>
            );
          }
          const itemIndex = slot < 4 ? slot : slot - 1;
          const item = mediaItems[itemIndex];
          return item ? (
            <div key={`${item.type}-${item.filename}`} className="collage-slot-entrance" style={slotStyle}>
              <PolaroidItem
                type={item.type}
                src={`/birthday/${item.type === "image" ? "photos" : "videos"}/${item.filename}`}
                alt={item.filename}
                rotation={ROTATIONS[itemIndex] ?? 0}
              />
            </div>
          ) : (
            <div key={`empty-${slot}`} className="collage-slot-entrance min-h-[6rem] min-w-[6rem] sm:min-h-[8rem] sm:min-w-[8rem]" style={slotStyle} />
          );
        })}
      </div>
    </div>
  );
}
