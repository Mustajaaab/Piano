import Image from "next/image";
import Phone from '/public/images/phone.png'

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="flex gap-2 border-2 border-[#E5E5E5] py-1 px-2.5 rounded-lg">
          <Image src={Phone} alt="Logo" width={20} height={22} />
          <p className="text-[#737373] text-sm">Contact Us</p>
        </div>
      </div>

      <h1 className="text-[#0A0A0A] font-semibold text-5xl text-center mt-4">
        Contact Us
      </h1>

      <p className="text-[#525252] text-[16px] text-center mt-4">
        Experiencing licensing, billing, or technical challenges? Interested in providing <br />
        feedback? Seeking information about our pricing plan? Feel free to reach out to us.
      </p>

      <form
        action="form"
        className="mt-10 px-5 py-7 border-[1px] border-[#E5E5E5] w-full max-w-[720px] mx-auto rounded-2xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="First_name" className="text-[#737373] text-sm font-semibold">
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
            <label htmlFor="Last_name" className="text-[#737373] text-sm font-semibold">
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
          <label htmlFor="Email" className="text-[#737373] text-sm font-semibold">
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
          <label htmlFor="Description" className="text-[#737373] text-sm font-semibold">
            Description
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
          Send Message
        </button>
      </form>
    </main>
  );
}
