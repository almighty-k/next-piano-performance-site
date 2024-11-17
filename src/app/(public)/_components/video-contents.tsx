import { client } from "../_libs/client";
import { VideoContent } from "../_libs/types";
import { VideoCard } from "./video-card";

export async function VideoContents() {
  const videos = await client.getList<VideoContent>({
    endpoint: "videos",
  });
  const videoContents = {
    top: videos.contents.filter((content) => content.order === 1),
    other: videos.contents.filter((content) => content.order !== 1),
  };

  return (
    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-14 md:gap-y-11">
      {videoContents.top.map((content) => (
        <VideoCard
          key={content.id}
          src={content.src}
          title={content.title}
          artist={content.artist}
          category={content.category[0]}
        />
      ))}
      {videoContents.other.map((content) => (
        <VideoCard
          key={content.id}
          src={content.src}
          title={content.title}
          artist={content.artist}
          category={content.category[0]}
        />
      ))}
    </div>
  );
}