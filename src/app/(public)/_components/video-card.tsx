import MediaThemeSutro from "player.style/sutro/react";
import YoutubeVideo from "youtube-video-element/react";

interface CategoryChipProps {
  category: "classic" | "anime";
}

function CategoryChip({ category }: CategoryChipProps) {
  return (
    <span
      className={[
        `inline-block w-28 rounded-md py-2 text-center text-sm`,
        category === "classic" ? "bg-green/10 text-green" : "",
        category === "anime" ? "bg-purple/10 text-purple" : "",
      ].join(" ")}
    >
      {category === "classic" ? "クラシック" : "アニメ"}
    </span>
  );
}

interface VideoCardProps {
  src: string;
  title: string;
  artist: string;
  category: "classic" | "anime";
}

export function VideoCard({ src, title, artist, category }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-md bg-black-secondary px-4 py-5">
      <MediaThemeSutro className="aspect-video w-full">
        <YoutubeVideo slot="media" src={src} playsInline></YoutubeVideo>
      </MediaThemeSutro>
      <p className="text-lg text-white">{title}</p>
      <div className="flex h-10 items-center justify-between">
        <CategoryChip category={category} />
        <span className="text-white-secondary">{artist}</span>
      </div>
    </div>
  );
}
