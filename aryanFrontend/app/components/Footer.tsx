"use client";

import React from "react";
import Link from "next/link";

const browserSupport = [
  "Microsoft Edge 81+",
  "Mozilla Firefox 75+",
  "Safari 5.1.5+",
  "Google Chrome 80+",
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const headingClass =
    "mb-4 text-sm font-semibold tracking-wide text-white";

  const linkClass =
    "block text-sm text-white/70 hover:text-white transition";

  return (
    <footer className="w-full mt-20 overflow-x-hidden">
      <div
        className="
          relative
          bg-[#0c5f84]/30
          backdrop-blur-2xl
          border-t border-white/20
          shadow-[0_-10px_40px_rgba(0,0,0,0.25)]
          text-white
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-14">

          {/* ===== Top Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Categories */}
            <div>
              <h4 className={headingClass}>All Categories</h4>
              <ul className="space-y-2">
                {[
                  "Grocery",
                  "Electronics",
                  "Fashion",
                  "Home & Lifestyle",
                  "Premium Fruits",
                  "Books",
                  "Furniture",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className={linkClass}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={headingClass}>Popular Categories</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Biscuits & Drinks",
                  "Fruits & Vegetables",
                  "Cooking Essentials",
                  "Dairy & Bakery",
                  "Personal Care",
                  "Beauty",
                  "Home",
                  "Mom & Baby Care",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={headingClass}>Customer Account</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "My Account",
                  "My Orders",
                  "Wishlist",
                  "Delivery Addresses",
                  "Wallet",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={headingClass}>Help & Support</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "About Us",
                  "FAQ",
                  "Terms & Conditions",
                  "Privacy Policy",
                  "E-waste Policy",
                  "Cancellation & Return",
                  "Shipping & Delivery",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={headingClass}>Contact Us</h4>
              <p className="text-sm text-white/70 mb-2">
                WhatsApp: <span className="font-medium">XXXXXXXXX</span>
              </p>
              <p className="text-sm text-white/70 mb-2">
                Call: <span className="font-medium">1800XXXXXXX</span>
              </p>
              <p className="text-xs text-white/50">
                8:00 AM – 8:00 PM, 365 days
              </p>
            </div>
          </div>

          {/* ===== Bottom Bar ===== */}
          <div
            className="
              mt-14 pt-6
              border-t border-white/20
              flex flex-col md:flex-row
              items-center justify-between
              gap-4
              text-xs text-white/60
            "
          >
            <p>© {year} All rights reserved.</p>
            <p className="text-center max-w-md">
              Best viewed on {browserSupport.join(", ")}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
