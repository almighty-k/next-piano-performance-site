"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type TabProps = {
  category: string;
  children: React.ReactNode;
};

export function Tab({ category, children }: TabProps) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentCategory = searchParams.get("category") || "all";

  function handleClick(category: string) {
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <button
      key={category}
      className="rounded-t-md px-3 py-2 hover:bg-white/5 data-[current=true]:border-b-2 data-[current=true]:border-white"
      onClick={() => handleClick(category)}
      data-current={category === currentCategory}
    >
      {children}
    </button>
  );
}
