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
        <span className="font-semibold">Piano sheet music</span> is a written
        guide that tells you which notes to play, when to play them, and how
        long to hold each one. It uses a system of symbols like{" "}
        <span className="font-medium">staff lines, clefs, and notes</span> to
        communicate music
      </p>
      <div className="flex justify-start items-center mt-14">
        <Image src={Readings} alt="Keyboard" width={750} height={450} />
      </div>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Understanding the Staff
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        The <span className="font-semibold">staff</span> is made up of five
        lines and four spaces. Each line or space represents a different note.{" "}
        <br />
        There are two main staffs used in piano music:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">Treble clef</span> (top staff) - for
        right-hand notes <br />•{" "}
        <span className="font-semibold">Bass clef</span> (bottom staff) - for
        left-hand notes
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Reading the Clefs
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Clefs show where the notes begin:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">Treble clef</span> Also called the
        G-clef, it circles around the G note. You'll play these with your right
        hand. <br />• <span className="font-semibold">Bass clef</span> Also
        known as the F-clef, it marks where the F note sits. You'll use your
        left hand for these notes.
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8">
        Knowing where <span className="font-semibold">Middle C</span> falls
        between both clefs helps anchor your reading.
      </p>
      <div className="flex justify-start items-center mt-14">
        <Image src={ReadingClef} alt="Keyboard" width={750} height={450} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Notes in Piano Sheet Music
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Each note symbol represents a pitch and duration. Here are the basic
        types:
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 pl-3">
        • <span className="font-semibold">Whole Note</span> - 4 Beats
        <br />• <span className="font-semibold">Half Note</span> - 2 beats{" "}
        <br />• <span className="font-semibold">Quarter Note</span> - 1 beats{" "}
        <br />• <span className="font-semibold">Eighth Note</span> - ½ beats{" "}
        <br />
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8">
        Each note sits on a line or in a space on the staff, showing which key
        to play.
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
