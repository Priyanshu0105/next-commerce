import Products from "@/app/components/Products";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    categoryPath: string[];
  }>;
};

export default async function CategoryLayout({ children, params }: Props) {
  const { categoryPath } = await params;

  const currentCategory =
    categoryPath?.[categoryPath.length - 1] ?? "";

  return (
    <div
      className="
        max-w-7xl mx-auto px-4 py-4
        text-gray-950 dark:text-zinc-100
      "
    >{children}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside
          className=" my-5
            col-span-12 md:col-span-3
            rounded-2xl
            bg-white/40 dark:bg-zinc-900/60
            backdrop-blur-xl
            border border-white/30 dark:border-zinc-800/60
            shadow-sm
            p-4
          "
        >
          
        </aside>

        {/* RIGHT CONTENT */}
        <main
          className="
            col-span-12 md:col-span-9
            rounded-2xl
            bg-transparent
          "
        >
          <Products category={currentCategory} />
        </main>
      </div>
    </div>
  );
}
