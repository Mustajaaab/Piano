'use client'

import Image from "next/image";
<<<<<<< HEAD
import Link from 'next/link'
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <header className="text-white p-4 md:p-9">
        <div className="container mx-auto flex justify-between items-center">
            <Image 
              src='/images/player.png' 
              alt="Logo" 
              width={293} 
              height={45} 
              className="cursor-pointer w-[200px] md:w-[293px]"
            />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#494949]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-9">
                    <li className="text-[#3AB24A] cursor-pointer font-semibold text-sm"><Link href='/'>Virtual Piano</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href='/tuner'>Tuner</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href='/basic-lessons'>Basic Lessons</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href='/privacy-policy'>Privacy Policy</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href='/contact-us'>Contact Us</Link></li>
                </ul>
            </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
                <li className="text-[#3AB24A] cursor-pointer">Virtual Piano</li>
                <li className="text-[#494949] cursor-pointer">Tuner</li>
                <li className="text-[#494949] cursor-pointer">Basic Lessons</li>
                <li className="text-[#494949] cursor-pointer">Privacy Policy</li>
                <li className="text-[#494949] cursor-pointer">Contact Us</li>
            </ul>
          </nav>
        )}

        <div className="my-8 mx-auto w-full px-4 md:px-40">
          <div className="h-px bg-gray-300 w-full" />
        </div>
      </header>
    );
};

export default Header;
  
=======
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for burger and close

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white p-6 lg:p-9">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/images/player.png"
          alt="Logo"
          width={180}
          height={45}
          className="cursor-pointer"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-9">
            <li className="text-[#3AB24A] cursor-pointer font-semibold text-sm">
              <Link href="/">Virtual Piano</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/tuner">Tuner</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/basic-lessons">Basic Lessons</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/contact-us">Contact Us</Link>
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

      {/* Mobile Nav - show when menuOpen */}
      {menuOpen && (
        <nav className="lg:hidden px-6 w-full">
          <ul className="flex flex-col gap-4 bg-white ">
            <li className="text-[#3AB24A] cursor-pointer font-semibold text-sm">
              <Link href="/">Virtual Piano</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/tuner">Tuner</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/basic-lessons">Basic Lessons</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-[#494949] cursor-pointer font-semibold text-sm">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
>>>>>>> main
