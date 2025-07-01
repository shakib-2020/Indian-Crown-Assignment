"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon for hamburger & close

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center lg:px-[140px] px-4 py-4 sticky top-0 bg-white z-50 border-b">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={"/logo.webp"} alt="logo" width={160} height={74} />
      </Link>

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
