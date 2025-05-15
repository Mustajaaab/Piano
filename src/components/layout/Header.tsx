import Image from "next/image";
const Header = () => {
    return (
      <header className="text-white p-9">
        <div className="container mx-auto flex justify-between items-center">
            <Image src='/images/player.png' alt="Logo" width={293} height={45} className="cursor-pointer"/>
            <nav>
                <ul className="flex gap-9">
                    <li className="text-[#3AB24A] cursor-pointer">Virtual Piano</li>
                    <li className="text-[#494949] cursor-pointer">Tuner</li>
                    <li className="text-[#494949] cursor-pointer">Basic Lessons</li>
                    <li className="text-[#494949] cursor-pointer">Privacy Policy</li>
                    <li className="text-[#494949] cursor-pointer">Contact Us</li>
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
  