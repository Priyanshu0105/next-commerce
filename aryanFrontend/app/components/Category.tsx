"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoryItem {
  title: string;
  image?: string;
}

const DEFAULT_IMAGE = "/images/default-category.png";

const categories: CategoryItem[] = [
  { title: "Groceries", image: "/images/groceries.png" },
  { title: "Fashion", image: "/images/fashion.png" },
  { title: "Electronics", image: "/images/electronics.png" },
  { title: "Home & Lifestyle", image: "/images/home_&_lifestyle.png" },
  {
    title: "Industrial & Professional Supplies",
    image: "/images/Industrial_&_Professional_Supplies.png",
  },
  { title: "Furniture", image: "/images/furniture.png" },
  {
    title: "School, Office & Stationery",
    image: "/images/school-office.png",
  },
];

const toSlug = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const Category: React.FC = () => {
  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(`/c/${toSlug(title)}`);
  };

  return (
    <div className="lg:ml-24 w-full mt-2">

      {/* MOBILE → SLIDER | DESKTOP → GRID */}
      <div
        className="
        
          flex md:grid
          md:grid-cols-7 lg:grid-cols-9
          gap-2 sm:gap-1
          px-2 mx-3
          max-w-7xl 
          overflow-x-auto md:overflow-visible
          scrollbar-hide
          snap-x snap-mandatory
        "
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="
            
              snap-start
              shrink-0 md:shrink
              w-20 sm:w-22 md:w-24
              flex flex-col items-center
            "
          >
            <button
              onClick={() => handleClick(cat.title)}
              className="
                w-full
                h-16 sm:h-18 md:h-20
                rounded-xl
                bg-white/30 dark:bg-zinc-900/50
                backdrop-blur-lg
                border border-white/30 dark:border-zinc-800/60
                shadow-sm
                flex items-center justify-center
                cursor-pointer
                hover:bg-white/40 dark:hover:bg-zinc-800/60
                transition
                focus:outline-none
              "
            >
              <Image
                src={cat.image || DEFAULT_IMAGE}
                alt={cat.title}
                width={64}
                height={64}
                sizes="(max-width: 640px) 800px, (max-width: 768px) 4008px, 5600px"
                className="
    object-contain
    w-16 sm:w-18 md:w-20
    h-auto
  "
              />
            </button>

            <span
              className="
                mt-1
                text-[10px] sm:text-xs
                text-center
                leading-tight
                line-clamp-2
                break-words
              "
              title={cat.title}
            >
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
