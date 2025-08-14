import Image from "next/image";
import Phone from "/public/images/phone.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Online Piano Player",
  description:
    "Have questions or need assistance? Contact now to get support with our online piano tools. We're here to help you learn and play with ease.",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="flex gap-2 border-2 border-[#E5E5E5] py-1 px-2.5 rounded-lg">
          <Image src={Phone} alt="Logo" width={20} height={22} />
          <p className="text-[#737373] text-sm">Contact Us</p>
        </div>
      </div>

      <h1 className="text-[#0A0A0A] font-semibold lg:text-5xl text-4xl text-center mt-4">
        Contact Now
      </h1>

      <p className="text-[#525252] lg:text-[16px] text-center mt-4">
        Have a question? Need help? We are always ready to listen. You can ask <br />
        us anything about our online piano lessons.
      </p>

      <h2 className="text-[#0A0A0A] text-3xl font-semibold text-center mt-20">
        Get in Touch
      </h2>

      <p className="text-[#525252] text-[16px] text-center mt-2">
        Just fill this form. We will reply to you soon.
      </p>

      <form
        action="form"
        className="mt-10 px-5 py-7 border-[1px] border-[#E5E5E5] w-full max-w-[720px] mx-auto rounded-2xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="First_name"
              className="text-[#737373] text-sm font-semibold"
            >
              First name
            </label>
            <input
              type="text"
              name="First_name"
              className="text-[#A3A3A3] border-[1px] border-[#E5E5E5] text-lg p-3 placeholder:text-[#A3A3A3] rounded-xl w-full"
              placeholder="John"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="Last_name"
              className="text-[#737373] text-sm font-semibold"
            >
              Last name
            </label>
            <input
              type="text"
              name="Last_name"
              className="text-[#A3A3A3] border-[1px] border-[#E5E5E5] text-lg p-3 placeholder:text-[#A3A3A3] rounded-xl w-full"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-6">
          <label
            htmlFor="Email"
            className="text-[#737373] text-sm font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            name="Email"
            className="text-[#A3A3A3] border-[1px] border-[#E5E5E5] text-lg p-3 placeholder:text-[#A3A3A3] rounded-xl w-full"
            placeholder="johndoe@mail.com"
          />
        </div>

        <div className="flex flex-col gap-1 mt-6">
          <label
            htmlFor="Description"
            className="text-[#737373] text-sm font-semibold"
          >
            Message
          </label>
          <textarea
            name="Description"
            rows={6}
            className="border-[1px] border-[#E5E5E5] text-lg p-3 placeholder:text-[#A3A3A3] text-[#A3A3A3] rounded-xl resize-none w-full"
            placeholder="Message"
          />
        </div>

        <button
          style={{ background: "linear-gradient(to left, #3AB24A, #56DD68)" }}
          className="w-full text-[16px] font-semibold py-4 mt-14 rounded-2xl hover:underline"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
