import Image from "next/image";
import Note from "/public/images/notess.png";
import Finger from "/public/images/finger.jpg";
import Scales from "/public/images/scaless.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Rhythm and Beats | Learn Piano Timing and Tempo",
  description:
    "Master the basics of rhythm and beats to improve your piano timing. Understand beats, measures, and tempo for confident and accurate playing.",
};

const Rhythms = () => {
  return (
    <div className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Basic Rhythm and Beats for Piano Beginners
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Understanding <span className="font-semibold">rhythm and beats</span> is
        crucial to playing piano music accurately. Rhythm gives music its flow,
        while beats help keep time and structure.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Are Rhythm and Beats?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        <span className="font-semibold">Rhythm</span> is the pattern of sounds
        and silences in music, while
        <span className="font-semibold">beats</span> are the regular pulses that
        help you keep time. Together, they guide how music moves forward.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        How Beats Work
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Beats divide music into equal parts. A piece&apos;s{" "}
        <span className="font-semibold">tempo</span> tells you how fast or slow
        the beats happen, usually measured in beats per minute (BPM).
      </p>

      <div className="flex justify-start items-center mt-14">
        <Image src={Note} alt="Keyboard" width={750} height={650} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Measures and Time Signatures
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Music is organized into <span className="font-semibold">measures</span>{" "}
        (or bars), each containing a set number of beats. The{" "}
        <span className="font-semibold">time signature</span> tells you how many
        beats per measure, such as 4/4 (four beats per measure) or 3/4 (three
        beats per measure). <br />
        For example, the popular song “Twinkle Twinkle Little Star” follows a
        4/4 time signature, meaning you count four beats in each measure while
        playing the melody.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Rhythm Practice Tips
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        • Clap along to the beat before playing <br />
        • Use a metronome to keep steady timing <br />
        • Break down rhythms into smaller patterns <br />• Practice with rhythm
        games to make learning fun
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
                What is rhythm and beats in music?
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
                Rhythm is the pattern of sounds and silences, while beats are
                the steady pulses that keep time in music.
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
                How do I improve my rhythm and beats?
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
                Practice clapping, use a metronome, and start slow to develop
                strong rhythm and beat skills.
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
                What is a rhythm beats game?
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
                A rhythm beats game is an interactive way to practice timing and
                rhythm through fun exercises.
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
                Why is rhythm important in piano?
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
                Rhythm keeps your playing in time, making music sound organized
                and enjoyable.
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
                How do beats affect music?
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
                Beats set the tempo and structure, helping musicians play
                together and stay synchronized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rhythms;
