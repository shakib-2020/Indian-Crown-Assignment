// components/Footer.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="custom-container bg-black text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Left Section */}
        <div className="mb-6">
          <Image
            src={"/logo.webp"}
            alt="Indian Crown Logo"
            width={150}
            height={50}
          />
          <h2 className="mt-4 font-serif mb-2">Opening hours:</h2>
          <div className="flex flex-col gap-2">
            <p className="footer-text">Mon – Wed: 12:00AM to 8:00PM</p>
            <p className="footer-text">
              Thu – Fri: 12:00AM to 8:30PM (Saturday Close)
            </p>
            <p className="footer-text">Sunday: 1:00PM to 8:30PM</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a className="text-[#9ca3af] hover:text-gray-200" href="#">
              <Facebook />
            </a>
            <a className="text-[#9ca3af] hover:text-gray-200" href="#">
              <Youtube />
            </a>
            <a className="text-[#9ca3af] hover:text-gray-200" href="#">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold font-serif mb-2">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" className="hover:underline footer-text">
              Home
            </Link>

            <Link href="#" className="hover:underline footer-text">
              About
            </Link>

            <Link href="#" className="hover:underline footer-text">
              Take Out
            </Link>

            <Link href="#" className="hover:underline footer-text">
              Contact
            </Link>

            <Link href="#" className="hover:underline footer-text">
              Menu
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold font-serif mb-2">Our Service</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" className="hover:underline footer-text">
              Take Out
            </Link>
            <Link href="#" className="hover:underline footer-text">
              Catering
            </Link>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold font-serif mb-2">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Repeat this block for each Instagram image */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-700 h-24 rounded-lg">
                <Image
                  src={"/images/deal.webp"}
                  alt="demo image"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-gray-800 mt-4" />
      {/* bottom section */}
      <div className="lg:flex text-center lg:justify-between mt-10 ">
        <p className="footer-text">
          Indian Crown Inc. © 2023 All Rights Reserved.
        </p>
        <p className="footer-text">
          Website By <span className="text-green-500">Techplato, Inc.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
