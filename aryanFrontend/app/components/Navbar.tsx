"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import products from "../../public/data/all-products"

import {
  Search,
  ShoppingCart,
  User,
  Menu,
  MapPin,
  Crosshair,
} from "lucide-react";


const CACHE_KEY = "delivery_location_v4";
const CACHE_TIME = 24 * 60 * 60 * 1000;

type Product = (typeof products)[number];
type SearchCache = Record<string, Product[]>;

export default function Navbar() {
  /* ===================== STATE ===================== */
  const [location, setLocation] = useState("Detecting location...");
  const [showInput, setShowInput] = useState(false);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"quick" | "scheduled">("quick");

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cache, setCache] = useState<SearchCache>({});

  const inputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* ===================== SEARCH ===================== */
  useEffect(() => {
    if (!inputValue.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (cache[inputValue]) {
        setSuggestions(cache[inputValue]);
        return;
      }

      const filtered = products
        .filter((p) =>
          p.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, 5);

      setSuggestions(filtered);
      setCache((prev) => ({ ...prev, [inputValue]: filtered }));
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, cache]);

  /* ===================== PIN INPUT FOCUS ===================== */
  useEffect(() => {
    if (showInput) inputRef.current?.focus();
  }, [showInput]);

  /* ===================== LOCATION CACHE ===================== */
  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { value, time } = JSON.parse(cached);
      if (Date.now() - time < CACHE_TIME) {
        setLocation(value);
        return;
      }
    }
    detectViaGPS();
  }, []);

  /* ===================== GPS ===================== */
  function detectViaGPS() {
    if (!navigator.geolocation) {
      fallbackToManual();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`,
            {
              headers: {
                "User-Agent": "quick-commerce-app/1.0",
              },
            }
          );

          const data = await res.json();
          const pin = data.address?.postcode;

          if (pin) resolveFromPincode(pin);
          else fallbackToManual();
        } catch {
          fallbackToManual();
        }
      },
      fallbackToManual,
      { enableHighAccuracy: true }
    );
  }

  function fallbackToManual() {
    setLocation("Enter pincode");
    setShowInput(true);
  }

  /* ===================== PINCODE ===================== */
  async function resolveFromPincode(pin: string) {
    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );
      const data = await res.json();
      const po = data?.[0]?.PostOffice?.[0];

      if (!po) {
        setError("Invalid pincode");
        return;
      }

      const finalValue = `${po.District} - ${pin}`;

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ value: finalValue, time: Date.now() })
      );

      setLocation(finalValue);
      setShowInput(false);
      setPincode("");
      setError("");
    } catch {
      setError("Unable to verify pincode");
    }
  }

  function handleSubmit() {
    if (pincode.length === 6) resolveFromPincode(pincode);
  }

  return (
    <header className="w-full">
      {/* ================= FIRST BAR ================= */}
      <div className="sticky w-full top-0 z-50 bg-[#0c5f84]/40 backdrop-blur-2xl border-b border-white/20 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <img width="90" src="/Logo.png" alt="Logo" />
            </Link>

            {/* Toggle (hidden on small) */}
            <div className="hidden md:flex relative justify-between rounded-full bg-white/20 backdrop-blur-xl border border-white/30 w-[260px]">
              {/* Sliding pill */}
              <div
                className={` absolute top-2 bottom-2 w-30 bg-white/80 rounded-2xl shadow transition-transform duration-300 ease-out ${mode === "quick" ? "translate-x-2" : "translate-x-33"}
    `}
              />

              {/* Quick */}
              <button
                onClick={() => setMode("quick")}
                className={`relative z-10 px-8 py-1 m-2 rounded-2xl transition-colors ${mode === "quick" ? "text-black font-black" : "text-white/90 font-medium"}
    `}
              >
                Quick
              </button>

              {/* Scheduled */}
              <button
                onClick={() => setMode("scheduled")}
                className={`relative z-10 px-8 py-1 m-2 font-black rounded-2xl transition-colors ${mode === "scheduled" ? "text-black font-black" : "text-white/90 font-medium"}
    `}
              >
                Scheduled
              </button>
            </div>


            {/* Search (desktop) */}
            <div className="hidden md:flex relative flex-1 items-center rounded-full px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/30">
              <Search size={18} />
              <input
                ref={searchInputRef}
                type="search"
                value={inputValue ?? ""}
                placeholder="Search in Quick"
                className="bg-transparent ml-2 w-full outline-none"
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() =>
                  setTimeout(() => setShowSuggestions(false), 150)
                }
              />

              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white text-black rounded-xl shadow-xl z-50 overflow-hidden">
                  {suggestions.map((product, index) => (
                    <div
                      key={product._id}
                      className="group"
                    >
                      <Link
                        href={`/p/${product.slug}`}
                        className="block px-4 py-3 text-sm transition-colors duration-200
                   hover:bg-gray-900 hover:text-white"
                        onMouseDown={() => {
                          setInputValue("");
                          setSuggestions([]);
                        }}
                      >
                        {product.name} <strong>₹{product.mrp}</strong>
                      </Link>

                      {/* Animated Divider */}
                      {index !== suggestions.length - 1 && (
                        <div
                          className="
            h-px mx-4
            bg-gray-200
            transition-all duration-300 ease-out
            opacity-100 scale-x-100
            group-hover:opacity-0
            group-hover:scale-x-0
            origin-left
          "
                        />
                      )}
                    </div>
                  ))}
                </div>

              )}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 ml-auto">
              <Menu className="md:hidden" />
              <ShoppingCart />
              <Link href="/login" className="flex items-center gap-1">
                <User />
                <span className="hidden md:block">Sign In</span>
              </Link>
            </div>
          </div>

          {/* Search (mobile) */}
          <div className="md:hidden mt-3 relative">
            <div className="flex items-center rounded-full px-4 py-2 bg-white/20 border border-white/30">
              <Search size={16} />
              <input
                value={inputValue ?? ""}

                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                className="bg-transparent ml-2 w-full outline-none text-sm"
                placeholder="Search in Quick"
              />
            </div>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute mt-2 w-full bg-white text-black rounded-xl shadow-xl z-50 overflow-hidden">
                {suggestions.map((product, index) => (
                  <div key={product._id} className="group">
                    <Link
                      href={`/p/${product.slug}`}
                      className="block px-4 py-3 text-sm transition-colors duration-200
                   hover:bg-gray-900 hover:text-white"
                      onMouseDown={() => {
                        setInputValue("");
                        setSuggestions([]);
                      }}
                    >
                      {product.name} <strong>₹{product.mrp}</strong>
                    </Link>

                    {index !== suggestions.length - 1 && (
                      <div
                        className="
            h-px mx-4
            bg-gray-200
            transition-all duration-300 ease-out
            opacity-100 scale-x-100
            group-hover:opacity-0
            group-hover:scale-x-0
            origin-left
          "
                      />
                    )}
                  </div>
                ))}
              </div>

            )}
          </div>
        </div>
      </div>

      {/* ================= SECOND BAR ================= */}
      <div className="bg-[#083f57]/40 backdrop-blur-xl text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 px-4 py-2 text-xs md:text-sm">

          <span
            className="
    px-3 py-1 rounded-full font-semibold whitespace-nowrap
    bg-gray-200/30
    text-whitte
    backdrop-blur-xl
    border border-white/40
    shadow-[0_8px_32px_rgba(31,38,135,0.25)]
  "
          >
            Delivery in 10 to 30 mins
          </span>


          <span className="truncate max-w-[220px] md:max-w-none">
            Quick Delivery to: <strong>{location}</strong>
          </span>

          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="flex items-center gap-1 underline"
            >
              <MapPin size={14} />
              Change
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-3 py-1">
              <input
                ref={inputRef}
                value={pincode ?? ""}

                onChange={(e) =>
                  setPincode(e.target.value.replace(/\D/g, ""))
                }
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                maxLength={6}
                placeholder="Enter pincode"
                className="bg-transparent outline-none w-24 text-sm"
              />

              <button
                onClick={handleSubmit}
                disabled={pincode.length !== 6}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${pincode.length === 6
                  ? "bg-white/80 text-[#0c5f84]"
                  : "bg-white/30 text-white/50"
                  }`}
              >
                Apply
              </button>

              <button onClick={detectViaGPS}>
                <Crosshair size={16} />
              </button>

              <button
                onClick={() => {
                  setShowInput(false);
                  setPincode("");
                  setError("");
                }}
                className="text-xs opacity-70"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {error && (
          <p className="text-red-300 text-xs px-4 pb-1">{error}</p>
        )}
      </div>
    </header>
  );
}
