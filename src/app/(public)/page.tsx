import { Header } from "./_components/header";
import { Headline } from "./_components/headline";
import { VideoCard } from "./_components/video-card";

export default function Page() {
  return (
    <div className="flex flex-col gap-7">
      <Header />
      <Headline title="Almighty-K" subtitle="My Piano Performances" />
      <section className="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-[1060px]">
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-14 md:gap-y-11">
          <VideoCard
            src="https://www.youtube.com/watch?v=psZIZJfmev8"
            title="ベートーヴェン熱情 3楽章"
            artist="L.v.Beethoven"
            category="classic"
          />
          <VideoCard
            src="https://www.youtube.com/watch?v=psZIZJfmev8"
            title="ベートーヴェン熱情 3楽章"
            artist="L.v.Beethoven"
            category="classic"
          />
        </div>
      </section>
    </div>
  );
}
