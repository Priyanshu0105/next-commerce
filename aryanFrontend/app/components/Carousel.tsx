"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Mattress",
    price: "From ₹2,999",
    subtitle: "Wakefit, Sleepwell & more",
    image: "/images/1.png",
    gradient: ["#3b82f6", "#1e40af"],
  },
  {
    title: "Sofas",
    price: "From ₹5,999",
    subtitle: "Modern & Comfort Living",
    image: "/images/2.png",
    gradient: ["#6366f1", "#4338ca"],
  },
  {
    title: "Refrigerators",
    price: "From ₹9,999",
    subtitle: "LG, Samsung & more",
    image: "/images/3.png",
    gradient: ["#06b6d4", "#0e7490"],
  },
  {
    title: "Washing Machines",
    price: "From ₹12,499",
    subtitle: "Top & Front Load",
    image: "/images/4.png",
    gradient: ["#0ea5e9", "#075985"],
  },
  {
    title: "Smart TVs",
    price: "From ₹14,999",
    subtitle: "Sony, MI, Samsung",
    image: "/images/5.png",
    gradient: ["#2563eb", "#1e3a8a"],
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + slides.length) % slides.length);
  const next = () =>
    setIndex((index + 1) % slides.length);

  return (
    <div className="w-full flex justify-center mt-6 sm:mt-8">
      <div
        className="
        mx-3
          w-full max-w-7xl
          h-[180px] sm:h-[260px] md:h-[280px]
          rounded-2xl overflow-hidden relative
          transition-all duration-700
        "
        style={{
          background: `linear-gradient(90deg, ${slides[index].gradient[0]}, ${slides[index].gradient[1]})`,
        }}
      >
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-xl" />

        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40" />

        {/* Content */}
        <div
          className="
            relative h-full
            flex flex-row sm:flex-row
            items-center
            justify-center sm:justify-start
            px-4 sm:px-8 md:px-16
            gap-4 sm:gap-8
          "
        >
          {/* Image Card */}
          <div
            className="
            
              w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48
              rounded-2xl
              bg-white/50 dark:bg-zinc-900/50
              backdrop-blur-xl
              border border-white/40 dark:border-zinc-800/60
              shadow-lg
              flex items-center justify-center
              shrink-0
            "
          >
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              width={160}
              height={160}
              className="object-contain w-[70%] h-[70%]"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-white text-center sm:text-left">
            <h2 className="text-sm sm:text-l md:text-xl lg:text-2xl font-semibold">
              {slides[index].title}
            </h2>
            <h1 className="text-s sm:text-2xl md:text-3xl font-bold mt-1">
              {slides[index].price}
            </h1>
            <p className="text-white/90 mt-1 sm:mt-2 text-xs sm:text-base">
              {slides[index].subtitle}
            </p>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="
            absolute left-1 sm:left-4 top-1/2 -translate-y-1/2
            w-5 h-5 sm:w-10 sm:h-10
            rounded-full
            bg-white/80 dark:bg-zinc-900/80
            backdrop-blur
            flex items-center justify-center
            shadow
            hover:scale-105 transition
          "
        >
          <ChevronLeft className="text-black dark:text-white w-4 h-4" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="
            absolute right-1 sm:right-4 top-1/2 -translate-y-1/2
            w-5 h-5 sm:w-10 sm:h-10
            rounded-full
            bg-white/80 dark:bg-zinc-900/80
            backdrop-blur
            flex items-center justify-center
            shadow
            hover:scale-105 transition
          "
        >
          <ChevronRight className="text-black dark:text-white w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="absolute  bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 mt-5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-black dark:bg-white"
                  : "w-2 bg-white/60 dark:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
