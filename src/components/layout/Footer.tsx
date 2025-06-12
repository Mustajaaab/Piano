"use client"

import Image from "next/image";
import { useState } from "react";

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <>
        <div style={{ background: "linear-gradient(to left, #3AB24A, #56DD68)" }} className="mt-8">
          <footer className="py-8 md:py-14 px-4 md:px-0 flex flex-col justify-center items-center">
              <Image 
                src='/images/logoo.png' 
                alt="Logo" 
                width={293} 
                height={45}
                className="w-[200px] md:w-[293px]"
              />
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden mt-4 text-white"
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
              <nav className="hidden md:block mt-9">
                  <ul className="flex gap-9">
                      <li className="font-bold text-sm cursor-pointer text-white">Virtual Piano</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Tuner</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Basic Lessons</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Privacy Policy</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Contact Us</li>
                  </ul>
              </nav>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <nav className="md:hidden mt-4 w-full">
                  <ul className="flex flex-col items-center gap-4">
                      <li className="font-bold text-sm cursor-pointer text-white">Virtual Piano</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Tuner</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Basic Lessons</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Privacy Policy</li>
                      <li className="font-bold text-sm cursor-pointer text-white">Contact Us</li>
                  </ul>
                </nav>
              )}
          </footer>
        </div>
        <div className="container mx-auto py-6 px-4 md:px-0">
            <h1 className="text-[#454545] text-base md:text-lg font-medium text-center md:text-left">© 2025 onlinepianoplayer</h1>
        </div>
      </>
    );
  };
  
  export default Footer;
  