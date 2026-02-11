export default function PolaroidItem({
  type = "image",
  src,
  alt,
  rotation = 0,
}: {
  type?: "image" | "video";
  src: string;
  alt: string;
  rotation?: number;
}) {
  return (
    <div
      className="inline-block bg-white p-2 shadow-lg transition-shadow hover:shadow-xl"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative h-24 w-24 overflow-hidden sm:h-32 sm:w-32">
        {type === "video" ? (
          <video
            src={src}
            autoPlay
            muted
            playsInline
            loop
            className="h-full w-full object-cover"
            aria-label={alt}
            title={alt}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
