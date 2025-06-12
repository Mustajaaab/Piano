"use client"

import Image from "next/image";
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
                    <li className="text-[#3AB24A] cursor-pointer">Virtual Piano</li>
                    <li className="text-[#494949] cursor-pointer">Tuner</li>
                    <li className="text-[#494949] cursor-pointer">Basic Lessons</li>
                    <li className="text-[#494949] cursor-pointer">Privacy Policy</li>
                    <li className="text-[#494949] cursor-pointer">Contact Us</li>
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
  