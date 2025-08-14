import { Tuner } from "../components/Tuner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Piano Tuner | Tune Your Piano Instantly",
  description:
    "Use our easy online piano tuner to check and adjust your piano sound in real-time. No app needed — just open and start tuning your piano with precision.",
};

export default function TunerPage() {
  return (
    <main className="container mx-auto">
      <div className="mx-6 lg:mx-0">
        <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold text-center leading-16">
          Online Piano Tuner
        </h1>

        <p className="text-[#454545] font-normal lg:text-lg leading-9 mt-7 lg:w-[800px] text-center mx-auto">
          Need a simple, accurate{" "}
          <span className="font-bold ">piano tuner</span>? You&apos;re in the
          right place. Our online{" "}
          <span className="font-bold ">tuner for piano</span> helps musicians
          tune their instruments without needing extra equipment or software.
        </p>
      </div>

      <div className="lg:w-2xl mx-auto">
        <Tuner instrument="guitar" />
      </div>
      <div className="mx-6 lg:mx-0 mt-16">
        <h2 className="text-[#494949] lg:text-3xl text-lg font-semibold mt-8">
          Tune Your Piano in Seconds
        </h2>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 mt-7">
          Just click the “Start Tuning” button, allow mic access, and begin
          playing a note. Our online{" "}
          <span className="font-bold lg:text-lg text-sm">piano tuner</span>{" "}
          listens to the sound you play. It shows you if the note is too low or
          too high. You can fix it right away. It's fast, works for beginners or
          pros, and helps you{" "}
          <span className="font-bold lg:text-lg text-sm">tuning a piano</span>{" "}
          without any stress.
        </p>

        <h2 className="text-[#494949] lg:text-3xl text-lg font-semibold mt-8">
          Why Regular Piano Tuning Matters
        </h2>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Pianos go out of tune even if you don&apos;t touch them. Heat, cold,
          and moisture change the strings inside. Over time, the notes start to
          sound wrong. Using a{" "}
          <span className="font-bold lg:text-lg text-sm">piano tuner</span>{" "}
          often keeps your piano sounding clean and clear. It also protects the
          parts inside from getting too loose or too tight.
        </p>
        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Regular{" "}
          <span className="font-bold lg:text-lg text-sm">tuner for piano</span>{" "}
          helps it last longer and play better, whether it&apos;s for home use
          or live shows. Even if you own a digital model, the action and feel
          benefit from routine checkups. Our{" "}
          <span className="font-bold lg:text-lg text-sm">tuner for piano</span>{" "}
          makes it easy to get precise adjustments anytime.
        </p>

        <h2 className="text-[#494949] lg:text-3xl text-lg font-semibold mt-8">
          Standard Tunings for Piano{" "}
        </h2>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Most pianos follow one main rule: the A key above middle C should
          sound at <span className="font-bold lg:text-lg text-sm">440 Hz</span>.
          People call this{" "}
          <span className="font-bold lg:text-lg text-sm">A440</span>, and
          it&apos;s used almost everywhere in the world. Once that A key sounds
          right, the rest of the keys are tuned around it, step by step. This
          keeps all notes even and smooth.
        </p>
        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          When using our{" "}
          <span className="font-bold lg:text-lg text-sm">piano tuner</span>,
          start with the A4 key. Make sure it matches 440 Hz, then fix the other
          keys one by one. For{" "}
          <span className="font-bold lg:text-lg text-sm">digital pianos</span>,
          A440 is usually already set, but you can still check it to be sure.
        </p>

        <h2 className="text-[#494949] lg:text-3xl text-lg font-semibold mt-8">
          Perfect for Other Instruments Too{" "}
        </h2>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Our <span className="font-bold lg:text-lg text-sm">online tuner</span>{" "}
          works beyond pianos. You can also use it to tune:
        </p>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          • Guitars and ukuleles <br />
          • Violins and cellos <br />
          • Other stringed instruments
        </p>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Whether you're at home, in a studio, or on the go, this{" "}
          <span className="font-bold">piano tuner</span> tool is built for
          convenience.
        </p>

        <div className="bg-[url('/images/bg.png')] bg-cover bg-center w-full h-[500px] sm:h-[450px] md:h-[400px] lg:h-[500px] xl:h-[550px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 mt-20 mb-20 rounded-sm text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
            More Tools for Musicians
          </h2>
          <p className="text-white font-normal text-base sm:text-lg md:text-xl mt-4">
            Looking to sharpen your ear or test your skills after{" "}
            <span className="font-bold">tuning a piano</span>?{" "}
            <br className="hidden sm:block" />
            Try our{" "}
            <span className="font-bold text-white">
              online piano keyboard
            </span>{" "}
            and explore your <br className="hidden sm:block" /> musical
            creativity.
          </p>
          <div className="mt-6">
            <Link
              href="/online-piano"
              className="inline-block font-bold text-[#454545] py-2 px-5 bg-white rounded-lg transition-transform duration-300 hover:scale-105 shadow-2xl shadow-[#454545]"
            >
              Play the Online Piano Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
