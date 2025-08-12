import Image from "next/image";
import Link from "next/link";
import Notes from "/public/images/piano.png";
import Staff from "/public/images/staff.png";
import Clefs from "/public/images/clefs.png";
import Accidentals from "/public/images/accidentals.png";
import Intervals from "/public/images/intervals.png";
import Chords from "/public/images/chords.png";
import Scales from "/public/images/scales.png";
import Keys from "/public/images/keys.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easy Piano Lessons for Beginners | Learn Piano Step-by-Step",
  description:
    "Start learning piano with easy and fun piano lessons for beginners. Discover finger placement, scales, notes, and play your first songs today!",
};

const Lesson = () => {
  return (
    <div className="lg:w-[75%] mx-auto container">
      <div className="mx-4">
        <h1 className="text-black lg:text-5xl text-3xl font-semibold mt-20 text-center">
          Basic Piano Lessons for Beginners
        </h1>
        <p className="text-[#454545] lg:text-lg text-sm font-normal mt-7 leading-7 text-center">
          Ready to start your <span className="font-bold">piano lessons</span>{" "}
          journey? These{" "}
          <span className="font-bold">basic piano music lessons</span> cover
          everything a beginner needs from understanding the keyboard to playing
          your first songs with confidence. Our clear, step-by-step lessons make
          learning piano easy and fun.
        </p>
      </div>

      <div className="lg:flex gap-4 lg:mt-16 mt-10 mx-4 lg:mx-0">
        {/* Card 1 */}
        <div className="lg:w-1/2 border border-[#E3E3E3] shadow-lg overflow-hidden mt-14 lg:mt-0 transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image src={Notes} alt="staff" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Learn Piano Keyboard
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Learn the layout of the white and black keys, identify middle C,
              and recognize note names. Knowing the Piano keyboard well helps
              you play smoothly and accurately.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./learn-piano-keyboard-online"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="lg:w-1/2 border border-[#E3E3E3] shadow-lg overflow-hidden mt-14 lg:mt-0 transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image src={Staff} alt="staff" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Reading Piano Sheet Music
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Discover how to read Piano music notation, including the staff,
              treble and bass clefs, note values (whole, half, quarter notes),
              and rests. This knowledge lets you play any sheet music with ease.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./reading-piano-sheet-music"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-4 lg:mt-8 mt-14 mx-4 lg:mx-0">
        {/* Card 3 */}
        <div className="lg:w-1/2 border border-[#E3E3E3] shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image src={Clefs} alt="piano" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Finger Numbers and Placement
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Proper finger placement is key to good technique. Learn which
              fingers to use on specific keys to play comfortably and avoid
              injury.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./lessons-components/notes"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="lg:w-1/2 border border-[#E3E3E3] shadow-lg overflow-hidden mt-14 lg:mt-0 transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image
              src={Accidentals}
              alt="accidentals"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Piano Scales
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-19 mt-8 mx-auto">
              Practice major and minor piano scales regularly to build finger
              strength, improve dexterity, and familiarize yourself with musical
              key patterns.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./piano-scales"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-4 lg:mt-8 mt-14 mx-4 lg:mx-0">
        {/* Card 5 */}
        <div className="lg:w-1/2 border border-[#E3E3E3] shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image
              src={Intervals}
              alt="intervals"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Basic Rhythm and Beats
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Understand the fundamentals of rhythm, beats, measures, and tempo.
              Mastering timing ensures your playing is both accurate and
              musical.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./lessons-components/notes"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="lg:w-1/2 mt-14 lg:mt-0 border border-[#E3E3E3] shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image src={Chords} alt="chords" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Playing Piano Simple Songs
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Apply your theory knowledge by learning easy melodies and chord
              progressions designed to boost your confidence and keep you
              motivated.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./lessons-components/notes"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-4 lg:mt-8 mt-14 mx-4 lg:mx-0">
        {/* Card 7 */}
        <div className="lg:w-1/2 border border-[#E3E3E3] shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Image src={Scales} alt="scales" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Chords and Harmony
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Explore major and minor chords, understand chord structures, and
              learn how to play common chord patterns that add harmony to your
              music.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./lessons-components/notes"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="lg:w-1/2 mt-14 lg:mt-0 border border-[#E3E3E3] shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl hover:-translate-y-2 bg-white">
          <div className="relative w-full h-[190px]">
            <Link href=""></Link>
            <Image src={Keys} alt="keys" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">
              Dynamics and Expression
            </h1>
            <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 mx-auto">
              Learn how to control volume and add emotion through dynamics,
              bringing your piano performances to life.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./lessons-components/notes"
                className="text-black font-semibold underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
