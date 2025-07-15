import Image from "next/image";
import Logo from '/public/images/logoo.png';
const Footer = () => {
  return (
    <>
      <div
        style={{ background: "linear-gradient(to left, #3AB24A, #56DD68)" }}
        className="mt-8"
      >
        <footer className="py-14 flex flex-col justify-center items-center px-4">
          <div className="w-[145px] lg:w-[243px]">
            <Image
              src={Logo}
              alt="Logo"
              width={243}
              height={45}
              className="w-full h-auto"
            />
          </div>
          <nav className="mt-9 w-full">
            <ul className="flex justify-center items-center gap-4 sm:gap-9 text-center">
              <li className="font-bold lg:text-sm text-[8px] cursor-pointer">Virtual Piano</li>
              <li className="font-bold lg:text-sm text-[8px] cursor-pointer">Tuner</li>
              <li className="font-bold lg:text-sm text-[8px] cursor-pointer">Basic Lessons</li>
              <li className="font-bold lg:text-sm text-[8px] cursor-pointer">Privacy Policy</li>
              <li className="font-bold lg:text-sm text-[8px] cursor-pointer">Contact Us</li>
            </ul>
          </nav>
        </footer>
      </div>
      <div className="container mx-auto px-4 py-6 text-left">
        <h1 className="text-[#454545] text-[8px] lg:text-lg font-medium">
          © 2025 onlinepianoplayer
        </h1>
      </div>
    </>
  );
};

export default Footer;
