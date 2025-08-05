"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for burger and close
import playerImage from "/public/images/player.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- Get current path

  // A helper function to apply active class
  const linkClass = (path: string) =>
    `cursor-pointer font-semibold text-sm ${
      pathname === path ? "text-[#3AB24A]" : "text-[#494949]"
    }`;

  return (
    <header className="text-white p-6 lg:p-9">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={playerImage}
          alt="Logo"
          width={180}
          height={45}
          className="cursor-pointer"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-9">
            <li className={linkClass("/online-piano")}>
              <Link href="/online-piano">Virtual Piano</Link>
            </li>
            <li className={linkClass("/piano-tuner")}>
              <Link href="/piano-tuner">Tuner</Link>
            </li>
            <li className={linkClass("/piano-lessons")}>
              <Link href="/piano-lessons">Basic Lessons</Link>
            </li>
            <li className={linkClass("/privacy-policy")}>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className={linkClass("/contact-now")}>
              <Link href="/contact-now">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Burger icon on mobile */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 mx-auto w-full px-6 lg:px-40">
        <div className="h-px bg-gray-300 w-full" />
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden px-6 w-full">
          <ul className="flex flex-col gap-4 bg-white">
            <li className={linkClass("/online-piano")}>
              <Link href="/online-piano">Virtual Piano</Link>
            </li>
            <li className={linkClass("/piano-tuner")}>
              <Link href="/piano-tuner">Tuner</Link>
            </li>
            <li className={linkClass("/piano-lessons")}>
              <Link href="/piano-lessons">Basic Lessons</Link>
            </li>
            <li className={linkClass("/privacy-policy")}>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className={linkClass("/contact-now")}>
              <Link href="/contact-now">Contact Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
