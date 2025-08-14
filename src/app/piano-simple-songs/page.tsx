import Image from "next/image";
import HappyBirthday from "/public/images/happybirthday.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piano Simple Songs - Easy Tunes for Beginners",
  description:
    "Discover fun piano simple songs for beginners. Learn easy tunes like “Happy Birthday” and “Twinkle Twinkle” to build skills and enjoy playing piano.",
};

const Songs = () => {
  return (
    <div className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Playing Piano Simple Songs for Beginners
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Starting with <span className="font-semibold">piano simple songs</span>{" "}
        is a great way to practice your skills and enjoy playing music quickly.
        Simple songs build your confidence and help you apply basic techniques.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Why Learn Simple Piano Songs?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Playing easy songs improves finger coordination, timing, and note
        reading. It also makes practicing enjoyable and motivates you to keep
        learning.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Popular Simple Piano Songs to Play
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Here are some classic beginner-friendly tunes:
        <br />
        • Twinkle Twinkle Little Star <br />•{" "}
        <span className="font-semibold">Happy Birthday</span> <br />
        • Ode to Joy <br />
        • Mary Had a Little Lamb <br />• Jingle Bells
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        How to Play “Happy Birthday” on Piano
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        “Happy Birthday” is a simple and fun song to learn. Here&apos;s a quick
        guide: <br />• Start with the note{" "}
        <span className="font-semibold">G</span> (played with your right-hand
        index finger). <br />
        • Follow this note sequence for the first line: <br />
        <span className="font-semibold">G - G - A - G - C - B </span>
        <br />
        • Continue similarly for the rest of the song, focusing on one hand at a
        time. <br />• Use finger numbers: thumb (1) for{" "}
        <span className="font-semibold">G</span>, index (2) for{" "}
        <span className="font-semibold">A</span>, middle finger (3) for{" "}
        <span className="font-semibold">B</span>, and ring finger (4) for{" "}
        <span className="font-semibold">C</span>. <br />• Practice slowly, then
        increase speed as you get comfortable.
      </p>

      <div className="flex justify-start items-center mt-14">
        <Image src={HappyBirthday} alt="Keyboard" width={750} height={650} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        How to Approach Simple Piano Songs
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        • Start slow and focus on accuracy <br />
        • Practice hands separately, then together <br />
        • Break songs into small sections <br />
        • Use a metronome to keep steady tempo <br />• Repeat regularly to build
        muscle memory
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Frequently Asked Questions
      </h2>

      <section>
        <div className="space-y-4 mt-16">
          {/* Question 1 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq1" className="peer hidden" />
            <label
              htmlFor="faq1"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                What are good piano simple songs for beginners?
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
                Songs like “Twinkle Twinkle Little Star” and “Happy Birthday”
                are excellent, easy piano simple songs to start with.
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
                How can I learn piano simple songs quickly?
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
                Learn slowly, practice hands separately, and break songs into
                small parts to master them faster.
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
                Are simple piano songs useful for beginners?
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
                Yes, simple songs help beginners develop essential piano skills
                and keep practice enjoyable.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq3" className="peer hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Can I play simple songs on any piano?
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
                Absolutely! You can play simple piano songs on any acoustic or
                digital piano, or even an online piano keyboard.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq3" className="peer hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                How do I make playing simple piano songs easier?
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
                Use finger numbers, practice regularly, and keep a steady rhythm
                with a metronome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Songs;
