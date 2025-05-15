import Image from "next/image";
const Footer = () => {
    return (
      <>
      <div style={{ background: "linear-gradient(to left, #3AB24A, #56DD68)" }} className="mt-8">
        <footer className="py-14 flex flex-col justify-center items-center">
            <Image src='/images/logoo.png' alt="Logo" width={293} height={45}/>
            <nav className="mt-9">
                <ul className="flex gap-9">
                    <li className="font-bold text-sm cursor-pointer">Virtual Piano</li>
                    <li className="font-bold text-sm cursor-pointer">Tuner</li>
                    <li className="font-bold text-sm cursor-pointer">Basic Lessons</li>
                    <li className="font-bold text-sm cursor-pointer">Privacy Policy</li>
                    <li className="font-bold text-sm cursor-pointer">Contact Us</li>
                </ul>
            </nav>
        </footer>
      </div>
        <div className="container mx-auto py-6">
            <h1 className="text-[#454545] text-lg font-medium">© 2025 onlinepianoplayer</h1>
        </div>
      </>
    );
  };
  
  export default Footer;
  