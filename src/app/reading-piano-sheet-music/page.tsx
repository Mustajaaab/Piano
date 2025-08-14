import Image from "next/image";
import ReadingClef from "/public/images/reading-clef.png";
import Readings from "/public/images/reading.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Reading Piano Sheet Music for Beginners | Easy Music Not mation Guide",
  description:
    "Master the basics of reading piano sheet music. Learn about notes, staffs, clefs, rhythms, and how to read music sheet for piano step-by-step.",
};

const Reading = () => {
  return (
    <div className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Reading Piano Sheet Music for Beginners
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Learning to{" "}
        <span className="font-semibold">read piano sheet music</span> is like
        learning a new language. Once you know the symbols, patterns, and note
        positions, it becomes a skill that transforms your piano journey
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8">
        Whether you're brand new or brushing up on basics, this guide will walk
        you through the essential steps, clearly and simply.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Is Piano Sheet Music?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Piano sheet music is a paper or screen with symbols that show you how to
        play a song on the piano. It tells you:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • Which keys to play <br />
        • When to play them <br />• How long to hold each key
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        Instead of words, it uses lines, notes, and marks. These signs help your
        eyes tell your hands what to do.
      </p>
      <div className="flex justify-start items-center mt-14">
        <Image src={Readings} alt="Keyboard" width={750} height={450} />
      </div>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Understanding the Staff
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        The staff is a set of five lines. Notes sit on these lines or in the
        spaces between. Each spot gives a different sound. In piano music, we
        use two staffs together. This is called the grand staff:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • The top lines are for your right hand (higher notes) <br />
        • The bottom lines are for your left hand (lower notes) <br />• You read
        both at the same time when playing.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Reading the Clefs
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Clefs show where the notes begin:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">Treble Clef:</span> Also called the
        G-clef, it circles around the G note. Used for high sounds. You&apos;ll
        play these with your right hand.
        <br />• <span className="font-semibold">Bass Clef:</span> Also known as
        the F-clef, it marks where the F note sits. Used for low sounds. You'll
        use your left hand for these notes.
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8">
        The note Middle C sits between the two staffs. It&apos;s a good place to
        start learning from.
      </p>
      <div className="flex justify-start items-center mt-14">
        <Image src={ReadingClef} alt="Keyboard" width={750} height={450} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Notes in Piano Sheet Music
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Notes are little round shapes that tell you which piano key to press.
        They also show how long to hold the key down. Here are the basic note
        types:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">Whole Note</span> - hold for 4 counts
        <br />• <span className="font-semibold">Half Note</span> - hold for 2 counts{" "}
        <br />• <span className="font-semibold">Quarter Note</span> - hold for 1 count{" "}
        <br />• <span className="font-semibold">Eighth Note</span> - hold for Half counts{" "}
        <br />
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Rhythms and Rests
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Understanding <span className="font-semibold">rhythm</span> helps you
        play with the correct timing.
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">Time signatures</span> (like 4/4 or
        3/4) show how many beats per measure.
        <br />• <span className="font-semibold">Rests</span> are symbols that
        tell you when to pause playing.
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8">
        Practicing clapping rhythms before playing them helps you get the timing
        right.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Tips for Reading Music Sheet for Piano
      </h2>

      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3 lg:mt-7 mt-3">
        • <span className="font-semibold">Start slow</span> - Focus on one line
        at a time.
        <br />• <span className="font-semibold">Say note names aloud</span>{" "}
        while playing. <br />•{" "}
        <span className="font-semibold">Practice reading daily</span> -
        Repetition builds memory. <br />•{" "}
        <span className="font-semibold">Use note-reading games</span> or
        flashcards for fun practice
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Why Learning to Read Sheet Music Matters
      </h2>

      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Being able to{" "}
        <span className="font-semibold">read piano sheet music</span> opens
        doors. You can play new songs, follow lessons more easily, and
        understand music deeply. It's a skill that brings freedom to your
        playing.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Frequently Asked Questions About Reading Piano Sheet Music
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
                What is piano sheet music used for?
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
                Piano sheet music shows which keys to play, when to play them,
                and how long to hold each note.
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
                How do I start reading piano sheet music?
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
                Start reading piano sheet music by learning the staff, treble
                and bass clefs, and simple notes like middle C.
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
                What are the notes in piano sheet music?
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
                Notes in piano sheet music include A, B, C, D, E, F, and G,
                repeating across the keyboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reading;
