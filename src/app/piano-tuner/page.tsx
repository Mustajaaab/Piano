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
          playing a note. The{" "}
          <span className="font-bold lg:text-lg text-sm">piano tuner</span> will
          detect the pitch and guide you to the correct frequency. Whether
          you're{" "}
          <span className="font-bold lg:text-lg text-sm">tuning a piano</span>{" "}
          for practice or performance, this tool offers quick results for all
          skill levels.
        </p>

        <h2 className="text-[#494949] lg:text-3xl text-lg font-semibold mt-8">
          Why Regular Piano Tuning Matters
        </h2>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          A well-tuned piano doesn&apos;t just sound better, it performs better.
          Humidity, temperature, and time cause pianos to slip out of tune.
          That&apos;s why using a{" "}
          <span className="font-bold lg:text-lg text-sm">piano tuner</span>{" "}
          regularly is essential to maintaining both sound quality and internal
          balance.
        </p>
        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Even if you own a digital model, the action and feel benefit from
          routine checkups. Our{" "}
          <span className="font-bold lg:text-lg text-sm">tuner for piano</span>{" "}
          makes it easy to get precise adjustments anytime
        </p>

        <h2 className="text-[#494949] lg:text-3xl text-lg font-semibold mt-8">
          Standard Tunings for Piano{" "}
        </h2>

        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          Most acoustic pianos are tuned to{" "}
          <span className="font-bold lg:text-lg text-sm">A440</span>, meaning
          the A above middle C vibrates at 440 Hz. This has been the global
          tuning standard for decades. Each key is then tuned relative to this
          base note using equal temperament, which ensures consistent spacing
          between notes.
        </p>
        <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-7 mt-7">
          If you're using our{" "}
          <span className="font-bold lg:text-lg text-sm">piano tuner</span>,
          start by tuning A4 to 440 Hz, then continue to nearby notes. For
          digital pianos, this is often set by default but can be adjusted
          manually.
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
          • Violins and cellos <br />• Other stringed instruments
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
