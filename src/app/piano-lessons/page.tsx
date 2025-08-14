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
          If you want to start <span className="font-bold">piano lessons</span>{" "}
          , this is the right place. We&apos;ll help you learn the piano
          keyboard step by step. Soon, you&apos;ll play your first songs without
          feeling stuck. Our lessons make learning fun and easy for everyone.
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
              First, get to know the white and black keys on the piano. Find the
              middle C and learn the names of the notes. Knowing the keyboard
              well helps you play faster and makes your lessons for piano
              lessons easier to follow.
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
              Learn how to read music notes on the page. You will see the lines
              called the staff, and symbols like treble and bass clefs. We also
              explain note types like whole notes, half notes, and rests. This
              will help you play songs from sheet music smoothly.
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
              Using the right fingers on the right keys makes playing easier and
              keeps your hands safe. We show you which fingers to use so your
              hands don&apos;t get tired or hurt during piano lessons
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./keyboard-number-finger-placement"
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
              Practice playing major and minor scales. Scales help your fingers
              get stronger and more flexible. They also teach you how notes work
              together in music.
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
              Rhythm is the beat that makes music move. Beats are the regular
              sounds you can tap your foot to. Measures are groups of beats that
              help keep time. Tempo is how fast or slow the music goes. Learning
              these helps you play songs correctly and makes your music sound
              nice and smooth.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./basic-rhythm-and-beats"
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
                href="./piano-simple-songs"
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
              Chords happen when you press two or more keys together. Some sound
              happy, some sound sad. Chords make your music sound better. You
              will learn them step by step.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./chords-and-harmony"
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
              Music feels alive when you change how loud or soft you play. This
              is called dynamics. Learning to control your playing helps you
              show feelings in your music and makes your piano songs more
              exciting to listen to.
            </p>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="./dynamics-and-expression"
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
