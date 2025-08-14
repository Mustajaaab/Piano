import SpaceNebula from "@/components/space-nebula/space-nebula";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full">
        <SpaceNebula />
      </div>

      {/* Cards */}

      <div className="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 mt-10 lg:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "/images/one.png",
              title: "Play 88-Key Online Piano",
              desc: "Play a full 88-key online piano from any device.",
            },
            {
              img: "/images/two.png",
              title: "Easy Keyboard Controls",
              desc: "Use your computer keys to play piano online naturally.",
            },
            {
              img: "/images/three.png",
              title: "Polyphonic Support",
              desc: "You can press more than one note at a time to easily play chords or add depth to your melodies.",
            },
            {
              img: "/images/four.png",
              title: "Record & Playback",
              desc: "Capture your music and listen anytime.",
            },
            {
              img: "/images/five.png",
              title: "Mark & Highlight Notes",
              desc: "Highlight chords or scales and share with a link.",
            },
            {
              img: "/images/six.png",
              title: "No Download Needed",
              desc: "Start playing instantly, no sign-up or install.",
            },
          ].map((item, index) => (
            <div className="flex items-start gap-4" key={index}>
              <img src={item.img} alt="" className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl text-[#454545] font-semibold">
                  {item.title}
                </h4>
                <p className="text-[#454545] mt-2 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Play */}

      <div className="lg:mt-20 mt-40 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#454545] text-3xl sm:text-4xl font-semibold">
          How to Use Our Free Online Piano
        </h2>
        <p className="text-center text-[#454545] font-normal text-base sm:text-lg mt-6 max-w-3xl mx-auto">
          Getting started with our{" "}
          <span className="font-semibold">online piano</span> couldn't be
          easier. Pick the way you prefer to play:
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-12 items-start mt-16">
          {/* Method 1 */}
          <div className="flex gap-4 sm:gap-6 max-w-xl mx-auto">
            <img
              src="/images/keyboard.png"
              alt="Keyboard Icon"
              className="w-8 h-8 flex-shrink-0"
            />
            <div>
              <h3 className="text-[#454545] text-xl sm:text-2xl font-semibold">
                1. Play with Your Computer Keyboard
              </h3>
              <p className="text-[#454545] mt-4 text-sm sm:text-base">
                You can play the piano by pressing keys on your computer
                keyboard. The letter keys play the white piano keys, and the
                number keys play the black ones. It&apos;s easy to use, no need
                to know anything before. Just press any key and enjoy making
                music.
              </p>
            </div>
          </div>

          {/* Method 2 */}
          <div className="flex gap-4 sm:gap-6 max-w-xl mx-auto">
            <img
              src="/images/click.png"
              alt="Click Icon"
              className="w-8 h-8 flex-shrink-0"
            />
            <div>
              <h3 className="text-[#454545] text-xl sm:text-2xl font-semibold">
                2. Play by Clicking or Tapping
              </h3>
              <p className="text-[#454545] mt-4 text-sm sm:text-base">
                If you like, you can also use your mouse or finger to press the
                piano keys on the screen. Our online piano works well on all
                devices, phones, tablets, and computers. This way, you can
                practice piano anytime, anywhere, even when you&apos;re on the
                move.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs*/}

      <section className="max-w-5xl mx-auto p-6 mt-40">
        <h2 className="text-center text-[#454545] text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[#454545] font-normal text-lg mt-7">
          Curious about our online piano? Here are quick answers to common
          questions:
        </p>

        <div className="space-y-4 mt-16">
          {/* Question 1 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq1" className="peer hidden" />
            <label
              htmlFor="faq1"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Can I play piano online for free?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Yes. You can use the online piano for free. No sign-up, no
                download—just open the page and start playing.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq2" className="peer hidden" />
            <label
              htmlFor="faq2"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                How do I play the online piano with my keyboard?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Your keyboard&apos;s top letter row plays the white notes, and
                the number keys play the black ones. Just press the keys to
                start playing.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq3" className="peer hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Does the online piano work on mobile devices?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Yes. The piano works on smartphones and tablets. Just tap the
                screen to play—no app required.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq4" className="peer hidden" />
            <label
              htmlFor="faq4"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Do I need to download anything to use the piano?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                No installation needed. You can play the piano right in your
                browser. It&apos;s quick and easy.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq5" className="peer hidden" />
            <label
              htmlFor="faq5"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Is this piano suitable for beginners?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Definitely. It&apos;s built for all skill levels. If you&apos;re
                new, you can start playing right away using your keyboard or
                touchscreen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[450px] flex flex-col justify-center items-center text-center mx-auto mt-40 lg:mb-40 rounded-sm px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Start Playing with Our <br className="hidden lg:block" />
          <span className="font-semibold">Online Piano</span> Today
        </h2>

        <p className="text-white font-normal text-sm sm:text-base lg:text-lg mt-4 max-w-2xl">
          Whether you explore, learn your first notes, or play for fun, our
          <span className="font-semibold">online piano</span> makes it easy to start here. Try it out and enjoy the
          sound of real keys, right from your screen. No downloads. No signups.
          Just music.
        </p>

        <div className="mt-6">
          <button className="font-bold text-[#454545] py-2 px-4 bg-white rounded-lg transition-transform duration-300 hover:scale-105 shadow-2xl shadow-[#454545]">
            Play the Online Piano Now
          </button>
        </div>
      </div>
    </div>
  );
}
