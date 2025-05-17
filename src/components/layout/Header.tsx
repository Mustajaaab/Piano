'use client'

import Image from "next/image";
import Link from 'next/link'
const Header = () => {
    return (
      <header className="text-white p-9">
        <div className="container mx-auto flex justify-between items-center">
            <Image src='/images/player.png' alt="Logo" width={293} height={45} className="cursor-pointer"/>
            <nav>
                <ul className="flex gap-9">
                    <li className="text-[#3AB24A] cursor-pointer font-semibold text-sm"><Link href=''>Virtual Piano</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href='/tuner'>Tuner</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href=''>Basic Lessons</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href=''>Privacy Policy</Link></li>
                    <li className="text-[#494949] cursor-pointer font-semibold text-sm"><Link href=''>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        <div className="my-8 mx-auto w-full px-40">
          <div className="h-px bg-gray-300 w-full" />
        </div>

      </header>
    );
  };
  
  export default Header;
  