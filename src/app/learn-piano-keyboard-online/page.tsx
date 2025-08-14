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
        Dreaming of playing your favorite songs on the piano, but don&apos;t
        know where to begin? You&apos;re in the right place. This simple guide
        is made for beginners who want to{" "}
        <span className="font-semibold">
          learning the piano keyboard online
        </span>{" "}
        from home, even if you've never touched a piano before. <br />
        We'll walk you through how a keyboard works, what to practice first, how
        to pick the best beginner keyboard, and how to keep getting better with
        time. No music background needed, just curiosity and a little time each
        day.
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
        : 52 white keys (natural notes) and 36 black keys (sharps/flats). But
        beginners can start with 61 or more.
        <br />• The <span className="font-semibold">white keys</span> are named
        A, B, C, D, E, F and G - they repeat in that order.
        <br />• The <span className="font-semibold">Black keys</span> are the
        ones in groups of two and three. These are for notes called sharps (#)
        and flats (♭).
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
        <span className="font-semibold">learn piano keyboard online</span> is
        like learning a new language start small and build up. Here&apos;s how
        you can begin:
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
        Pick easy tunes like “Twinkle Twinkle Little Star” or “Happy Birthday.”
        You&apos;ll recognize the melody, which makes learning more fun and less
        scary. It also helps your fingers get used to moving around.
      </p>

      <h3 className="text-[#494949] lg:text-2xl text-xl font-semibold mt-2">
        3. Use Online Lessons or Apps
      </h3>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Platforms like onlinepianoplayer, or YouTube tutorials are perfect for
        beginners.
        <br />• Look for courses labeled{" "}
        <span className="font-semibold">
          "learn keyboard piano online for beginners."
        </span>
      </p>

      <h3 className="text-[#494949] lg:text-2xl text-xl font-semibold mt-2">
        4. Practice Finger Exercises
      </h3>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        Start with simple finger workouts. Place your fingers on five white keys
        in a row and play them one by one. This builds strength, control, and
        helps you move smoothly on the keyboard.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Best Keyboard to Learn Piano On
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        You don&apos;t need a grand piano to get started. Many beginner-friendly
        <span className="font-semibold">keyboard pianos</span> are affordable
        and easy to use. Below are these models that help you{" "}
        <span className="font-semibold">learn piano keyboard online</span> with
        tools that guide your practice.
      </p>
      <p className="text-[#454545] lg:text-lg text-sm  mt-1 lg:leading-9 leading-8 font-semibold">
        Look for these features:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 mt-1 leading-8 pl-3">
        • <span className="font-semibold">61 to 88 keys</span> - more keys give
        you more room to grow
        <br />• <span className="font-semibold">Touch-sensitive keys</span> -
        sound changes with how hard you press
        <br />• <span className="font-semibold">Built-in lessons</span> or modes
        for beginners <br />•{" "}
        <span className="font-semibold">Weighted keys</span> - feel more like a
        real piano
      </p>

      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 ">
        Good Beginner Keyboards:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Yamaha PSR-E373 - easy to use and full of features
        <br />
        • Casio CT-S300 - great value for beginners
        <br />
        • Roland GO: KEYS - fun and portable
        <br />• Yamaha P45 - simple and close to real-piano feel
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Practice Tips for Beginners
      </h2>

      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8 pl-3">
        • Set a daily time - stick to a small, regular routine
        <br />
        • Focus on one thing at a time - don&apos;t mix too many skills
        <br />
        • Use headphones - helps with focus and won&apos;t disturb others
        <br />• Keep track of progress - note what you practiced and what got
        easier
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Learn to Play Keyboard Piano with Confidence
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8 pl-3">
        You don&apos;t need a music degree, a private tutor, or expensive
        lessons. If you can follow instructions and stay curious, you can learn
        the <span className="font-semibold">piano keyboard online</span> from
        your living room.
        <br />
        This guide is just the beginning. Try out the tools, stay playful, and
        enjoy each small win like finding Middle C or playing your first melody.
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
                Yes! Many platforms offer free tutorials, lessons, and apps for
                beginners. Start with onlinepianoplayer websites, YouTube, or
                free versions of learning apps.
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
                Do I need a full-size keyboard to start?
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
                No. A 61-key touch-sensitive keyboard is enough to begin. You
                can upgrade later as you grow.
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
                Do I need to read sheet music?
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
                Not right away. Many apps and tutorials use easy methods like
                letters or numbers. Reading music can come later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
