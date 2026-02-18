"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";

import products from "../../public/data/all-products";
import ProductCard from "./ProductCard";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProductsProps = {
  category: string;
};

type SortOption =
  | "relevance"
  | "popularity"
  | "priceLowHigh"
  | "priceHighLow"
  | "discount";

const sortLabelMap: Record<SortOption, string> = {
  relevance: "Relevance",
  popularity: "Popularity",
  priceLowHigh: "Price: Low to High",
  priceHighLow: "Price: High to Low",
  discount: "Discount",
};

const Products = ({ category }: ProductsProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("relevance");

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter(
      (product) => product.categories?.[0] === category
    );

    switch (sortBy) {
      case "popularity":
        return [...filtered].sort(
          (a, b) => (b.ratings?.count ?? 0) - (a.ratings?.count ?? 0)
        );
      case "priceLowHigh":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "priceHighLow":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "discount":
        return [...filtered].sort(
          (a, b) => (b.discount?.value ?? 0) - (a.discount?.value ?? 0)
        );
      default:
        return filtered;
    }
  }, [category, sortBy]);

  return (
    <section>
      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-gray-600">
          {filteredAndSortedProducts.length} items available
        </p>

        {/* Sort */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full bg-white/70 px-4 py-2 text-sm shadow">
              Sort: {sortLabelMap[sortBy]}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            {(Object.keys(sortLabelMap) as SortOption[]).map((option) => (
              <DropdownMenuItem
                key={option}
                onClick={() => setSortBy(option)}
                className="flex justify-between"
              >
                {sortLabelMap[option]}
                {sortBy === option && <Check size={16} />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* PRODUCT LIST / GRID */}
      <div
        className="
          grid
          grid-cols-1          /* 📱 mobile list */
          sm:grid-cols-1
          md:grid-cols-3       /* 💻 desktop grid */
          lg:grid-cols-4
          gap-4 md:gap-6
        "
      >
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="mt-16 text-center text-gray-500">
          No products found in this category.
        </div>
      )}
    </section>
  );
};

export default Products;
