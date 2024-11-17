import { Header } from "./_components/header";
import { Headline } from "./_components/headline";
import { Tabs } from "./_components/tabs";
import { VideoContents } from "./_components/video-contents";
import { VIDEO_CATEGORY_ITEMS } from "./_libs/constants";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    category?: string;
  }>;
}) {
  const params = await searchParams;
  const currentCategory = params?.category || null;

  return (
    <div className="flex flex-col gap-7">
      <Header />
      <Headline title="Almighty-K" subtitle="My Piano Performances" />
      <section className="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-[1060px]">
        <Tabs tabItems={VIDEO_CATEGORY_ITEMS} />
        <VideoContents currentCategory={currentCategory} />
      </section>
    </div>
  );
}
