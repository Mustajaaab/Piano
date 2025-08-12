import type { Metadata } from "next";
import Image from "next/image";
import Keyboard from "/public/images/keyboards.png";
import Layout from "/public/images/PianoKeyboardLayout.png";

export const metadata: Metadata = {
  title: "Learn Piano Keyboard Online | Beginner’s Guide to Mastering the Keys",
  description:
    "Discover how to learn piano keyboard online with easy lessons, pro tips, and the best keyboards for beginners. Perfect for all ages and skill levels.",
};

export default function Home() {
  return (
    <main className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Ready to Learn Piano Keyboard Online? <br /> Start Right Here
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Dreaming of playing your favorite songs on the piano but don&apos;t know
        where to begin? You're in the right place! Whether you're a complete
        beginner or brushing up on basics,{" "}
        <span className="font-semibold">
          learning the piano keyboard online
        </span>{" "}
        has never been more accessible, fun, and beginner-friendly. <br />
        With step-by-step lessons, hands-on practice tips, and guidance on
        choosing the right keyboard, this guide is your{" "}
        <span className="font-semibold">
          first step toward becoming a confident player.
        </span>
      </p>
      <div className="flex justify-start items-center mt-14">
        <Image src={Keyboard} alt="Keyboard" width={650} height={250} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Understanding the Piano Keyboard Layout
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Before diving into notes or chords, it's important to get familiar with
        the <span className="font-semibold">piano keyboard layout:</span> <br />
        • A standard keyboard has <span className="font-semibold">88 keys</span>
        : 52 white keys (natural notes) and 36 black keys (sharps/flats).
        <br />• The <span className="font-semibold">white keys</span> are
        labeled A to G (A-B-C-D-E-F-G), repeating across the keyboard.
        <br />• <span className="font-semibold">Black keys</span> appear in sets
        of twos and threes, used for sharps (#) and flats (♭).
        <br />• <span className="font-semibold">Middle C</span> is your anchor
        point. It's the note in the center of your keyboard and helps you
        understand note positioning.
        <br />
        <span className="font-semibold underline">Pro Tip:</span> Start by
        locating <span className="font-semibold">Middle C</span>, it's the white
        key to the left of the group of two black keys in the center of your
        keyboard.
      </p>

      <div className="flex justify-start items-center mt-14">
        <Image src={Layout} alt="Keyboard" width={650} height={250} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        The First Steps to Learning
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Here&apos;s a quick-start roadmap to help you{" "}
        <span className="font-semibold">learn piano keyboard online</span> the
        smart way:
      </p>
      <h3 className="text-[#494949] lg:text-2xl text-xl font-semibold mt-2">
        1. Start with the Natural Notes
      </h3>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Focus on learning A, B, C, D, E, F, and G <br />• Practice playing and
        recognizing them by sound and location.
      </p>

      <h3 className="text-[#494949] lg:text-2xl text-xl font-semibold mt-2">
        2. Learn Simple Songs
      </h3>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Start with easy melodies like Twinkle Twinkle Little Star or Happy
        Birthday.
        <br />• This builds confidence and finger memory.
      </p>

      <h3 className="text-[#494949] lg:text-2xl text-xl font-semibold mt-2">
        3. Use Online Lessons or Apps
      </h3>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Platforms like Simply Piano, Flowkey, or YouTube tutorials are perfect
        for beginners.
        <br />• Look for courses labeled{" "}
        <span className="font-semibold">
          "learn keyboard piano online for beginners."
        </span>
      </p>

      <h3 className="text-[#494949] lg:text-2xl text-xl font-semibold mt-2">
        4. Practice Finger Exercises
      </h3>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Learn correct hand posture and finger placement.
        <br />• Try 5-finger scales to strengthen coordination and accuracy.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Best Keyboard to Learn Piano On
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Not sure which keyboard to get? Here&apos;s what to look for in a
        beginner-friendly model:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">61 to 88 keys</span> (preferably
        touch-sensitive)
        <br />•{" "}
        <span className="font-semibold">
          Try 5-finger scales to strengthen coordination and accuracy.
        </span>{" "}
        <br />• <span className="font-semibold">Weighted keys</span> (for a
        real-piano feel) <br />•{" "}
        <span className="font-semibold">Affordable price</span> with good
        reviews.
      </p>

      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 ">
        Some top picks:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Yamaha P45 or PSR-E373
        <br />
        • Casio CT-S300 <br />• Roland GO:KEYS
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Practice Tips for Beginners
      </h2>

      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8 pl-3">
        • Set aside <span className="font-semibold">15-30 minutes daily</span>{" "}
        to practice.
        <br />• Focus on{" "}
        <span className="font-semibold">one concept per session</span> (notes,
        rhythm, chords).
        <br />
        • Use headphones for private practice.
        <br />• Track your progress weekly.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Learn to Play Keyboard Piano with Confidence
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8 pl-3">
        Learning piano doesn&apos;t require years of lessons or expensive gear.
        With the right tools and the right attitude, you can master the basics
        from home. <br />
        By following this guide and using online lessons, you&apos;ll go from
        confused to confident,{" "}
        <span className="font-semibold">one note at a time.</span>
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Frequently Asked Questions About Learning Piano Keyboard Online
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
                Can I learn piano keyboard online for free?
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
                Yes, you can learn piano keyboard online for free through video
                tutorials, apps, and beginner websites. Many platforms offer
                structured lessons at no cost.
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
                What is the best way to learn keyboard piano online?
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
                The best way to learn keyboard piano online is by using
                interactive lessons, following a step-by-step course, and
                practicing daily with guidance from virtual tools.
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
                How long does it take to learn the piano keyboard online?
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
                Learning the piano keyboard online can take 3 to 6 months for
                basic skills, depending on your daily practice and learning
                pace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
