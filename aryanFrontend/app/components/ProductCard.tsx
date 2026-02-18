"use client";

import { Heart, Star, Truck, RefreshCcw } from "lucide-react";

type Product = {
  _id: string;
  name: string;
  price: number;
  mrp?: number;
  discount?: {
    type: string;
    value: number;
  };
  attributes?: {
    ram?: string;
    storage?: string;
    color?: string;
  };
  ratings?: {
    average: number;
    count: number;
  };
  stock?: number;
  isReturnable?: boolean;
  shipping?: {
    freeShipping?: boolean;
  };
  image?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const discountPercent =
    product.discount?.type === "percentage"
      ? product.discount.value
      : undefined;

  return (
    <div
      className="
        relative
        w-full
        rounded-2xl
        bg-white/30
        backdrop-blur-xl
        border border-white/20
        shadow-lg
        transition
        hover:shadow-xl
        flex
        flex-row md:flex-col   /* 🔑 mobile=row, desktop=column */
      "
    >
      {/* IMAGE */}
      <div
        className="
          w-[120px] sm:w-[140px] md:w-full
          h-[120px] sm:h-[140px] md:h-[180px]
          flex items-center justify-center
          shrink-0
        "
      >
        <img
          src={product.image || "/images/default-product.jpg"}
          alt={product.name}
          className="max-h-full rounded-xl object-contain"
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col flex-1 p-3">
        {/* Wishlist */}
        <button className="absolute top-2 right-2 bg-white/70 rounded-full p-1">
          <Heart size={16} />
        </button>

        {discountPercent && (
          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full w-fit mb-1">
            {discountPercent}% OFF
          </span>
        )}

        <h3 className="text-sm font-semibold line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-gray-600 mb-1">
          {[product.attributes?.ram, product.attributes?.storage, product.attributes?.color]
            .filter(Boolean)
            .join(" | ")}
        </p>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold">
            ₹{product.price.toLocaleString()}
          </span>
          {product.mrp && (
            <span className="text-sm line-through text-gray-500">
              ₹{product.mrp.toLocaleString()}
            </span>
          )}
        </div>

        {product.ratings && (
          <div className="flex items-center gap-1 text-sm mb-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            {product.ratings.average}
            <span className="text-gray-500">
              ({product.ratings.count})
            </span>
          </div>
        )}

        <ul className="text-xs text-emerald-700 mt-auto space-y-1">
          {product.shipping?.freeShipping && (
            <li className="flex items-center gap-1">
              <Truck size={12} /> Free Delivery
            </li>
          )}
          {product.isReturnable && (
            <li className="flex items-center gap-1">
              <RefreshCcw size={12} /> Returnable
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
