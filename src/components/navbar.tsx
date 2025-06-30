"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon for hamburger & close

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Today's Deal", href: "/todays_deal" },
  { label: "Menu", href: "/menu" },
  { label: "Find Us", href: "/find_us" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center lg:px-[140px] px-4 py-4 sticky top-0 bg-white z-50 border-b">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={"/logo.webp"} alt="logo" width={160} height={74} />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <Link
            className="font-semibold text-black/80 transition-all duration-200 hover:text-amber-800"
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Order by Phone (Hidden on small screens) */}
      <a
        className="hidden md:block text-lime-500 hover:text-lime-500/50 transition-all duration-200 font-medium text-base"
        href=""
      >
        Order By Phone 416-792-3714
      </a>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-18 left-0 w-full h-screen bg-white shadow-md px-4 py-4 flex flex-col gap-4 md:hidden z-40">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold text-black/80 hover:text-amber-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="text-lime-500 hover:text-lime-500/50 transition-all duration-200 font-medium text-base"
            href=""
          >
            Order By Phone 416-792-3714
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
