import Image from "next/image";
import FingerTwo from "/public/images/finger2.png";
import Harmony from "/public/images/harmony.jpg";
import Scales from "/public/images/scaless.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chords and Harmony on Piano - Beginner's Guide",
  description:
    "Learn chords and harmony on piano to enrich your music. Perfect for beginners playing piano simple songs and improving their musical skills.",
};

const ChordsHarmony = () => {
  return (
    <div className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Chords and Harmony on Piano
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Learning <span className="font-semibold">chords and harmony</span> is
        key to making your piano playing richer and more musical. Chords form
        the building blocks of songs, while harmony adds depth and emotion.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Are Chords?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        A<span className="font-semibold">chord</span> is a group of notes played
        together, usually three or more. The most common chords are: <br />•{" "}
        <span className="font-semibold">Major Chords -</span>happy and bright
        sounding <br />• <span className="font-semibold">Minor Chords -</span>
        Supports smoother scale and chord transitions
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Is Harmony?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        <span className="font-semibold">Harmony</span> happens when two or more
        notes or chords are played together to complement the melody. It gives
        music fullness and complexity, turning simple tunes into captivating
        pieces.
      </p>

      <div className="flex justify-start items-center mt-14">
        <Image src={Harmony} alt="Keyboard" width={750} height={650} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        How to Practice Chords and Harmony
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        • Start by learning basic major and minor chords (like C, G, Am, F){" "}
        <br />
        • Practice switching between chords smoothly <br />• Play chords along
        with simple melodies or
        <span className="font-semibold">piano simple songs to play</span>
        Explore playing two-hand harmony: melody with right hand, chords with
        left hand
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Example: Playing “Twinkle Twinkle Little Star” with Chords
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Try playing the melody of “Twinkle Twinkle Little Star” with your right
        hand. Meanwhile, use your left hand to play these chords in this order:{" "}
        <br />
        <span className="font-semibold">
          C major - F major - C major - G major - C major
        </span>{" "}
        <br />
        This simple harmony adds a rich background and makes the song sound
        fuller. Practicing this will improve your coordination and musical
        understanding.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Why Chords and Harmony Matter
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Chords support the melody, giving songs emotional power. Understanding
        harmony helps you create your own arrangements and improvise with
        confidence.
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
                What are chords and harmony in music?
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
                Chords are groups of notes played together; harmony is when
                notes or chords complement a melody to enrich the sound.
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
                How do I learn piano chords and harmony?
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
                Start with basic major and minor chords, practice switching
                between them, and add harmony by combining chords with melodies.
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
                Can chords improve playing piano simple songs?
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
                Yes, chords add depth and make simple songs sound fuller and
                more expressive.
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
                What are easy chords for beginners?
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
                C major, G major, A minor, and F major are great beginner chords
                to start with.
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
                How does harmony affect music?
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
                Harmony enriches music by adding layers and emotional nuance
                beyond the main melody.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChordsHarmony;
