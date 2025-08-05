import PianoKeyboard from "@/components/piono/piano-keyboard";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="text-[#494949] lg:text-5xl text-3xl font-semibold text-center lg:leading-16">
          Play the Music You Love <br /> with Our Online Piano
        </h1>
        <p className="text-[#454545] font-normal text-lg leading-9 mt-7 lg:w-[782px] text-center lg:mx-auto mx-6 mb-10">
          Play your favorite songs online piano now. Learn your favorite songs
          with guided visuals, no matter your skill level. Our powerful piano
          online piano makes learning fast, easy, and fun.
        </p>
        <PianoKeyboard />
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
              desc: "Play multiple notes at once for chords and melodies.",
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
          Getting started with our online piano couldn't be easier. Pick the way
          you prefer to play:
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
                The top row of letters on your keyboard corresponds to the white
                keys, while the numbers match the black keys. This smart layout
                transforms your keyboard into a musical tool, letting you start
                playing the online piano right away — no prior experience
                needed.
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
                Use your mouse or touchscreen to press the piano keys on the
                screen. Our online piano is fully responsive, working perfectly
                on phones, tablets, and computers. This makes it ideal for
                practicing wherever you are.
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
                Yes, you can play our online piano completely free. There&apos;s
                no signup or software needed just open the page and start
                playing.
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
                To play the online piano using your keyboard, the top row of
                letters controls the white keys, and the numbers play the black
                keys.
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
                Yes, our online piano works perfectly on smartphones and
                tablets. Just tap the screen to play, no app needed.
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
                No, there&apos;s nothing to download. You can play the piano
                directly in your browser, fast, simple, and instant.
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
                Absolutely. The online piano is designed for all levels, and
                beginners can easily start by using either their keyboard or
                touchscreen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[450px] flex flex-col justify-center items-center text-center mx-auto mt-40 lg:mb-40 rounded-sm px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Start Playing with Our <br className="hidden lg:block" />
          Online Piano Today
        </h2>

        <p className="text-white font-normal text-sm sm:text-base lg:text-lg mt-4 max-w-2xl">
          Play your favorite songs with our online piano. Learn with guided
          visuals — no matter your skill level. Our powerful online piano makes
          learning fast, easy, and fun.
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
