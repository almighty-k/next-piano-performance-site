import { Header } from "./_components/header";
import { Headline } from "./_components/headline";
import { VideoContents } from "./_components/video-contents";

export default async function Page() {
  return (
    <div className="flex flex-col gap-7">
      <Header />
      <Headline title="Almighty-K" subtitle="My Piano Performances" />
      <section className="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-[1060px]">
        <VideoContents />
      </section>
    </div>
  );
}
