import Image from "next/image";
import Logo from "/public/images/logoo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        style={{ background: "linear-gradient(to left, #3AB24A, #56DD68)" }}
        className="mt-8"
      >
        <footer className="py-10 px-4 flex flex-col items-center text-center">
          <div className="w-36 sm:w-48 lg:w-[243px]">
            <Image
              src={Logo}
              alt="Logo"
              width={243}
              height={45}
              className="w-full h-auto"
              priority
            />
          </div>

          <nav className="mt-8 w-full">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base font-bold">
              <li>
                <Link href="/online-piano">Virtual Piano</Link>
              </li>
              <li>
                <Link href="/piano-tuner">Tuner</Link>
              </li>
              <li>
                <Link href="/piano-lessons">Basic Lessons</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact-now">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>

      <div className="w-full px-4 py-4 text-center bg-white">
        <p className="text-[10px] sm:text-xs lg:text-sm text-[#454545] font-medium">
          © 2025 onlinepianoplayer
        </p>
      </div>
    </>
  );
};

export default Footer;
