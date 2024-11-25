"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type TabsProps = {
  tabItems: Array<{
    label: string;
    category: string;
  }>;
};

export function Tabs({ tabItems }: TabsProps) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const category = searchParams.get("category") || "all";

  const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="inline-flex border-b border-white/50 text-white">
      {tabItems.map((tabItem) => (
        <button
          key={tabItem.category}
          className="rounded-t-md px-3 py-2 hover:bg-white/5 data-[current=true]:border-b-2 data-[current=true]:border-white"
          onClick={() => handleClick(tabItem.category)}
          data-current={category === tabItem.category}
        >
          {tabItem.label}
        </button>
      ))}
    </div>
  );
}
