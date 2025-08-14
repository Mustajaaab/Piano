import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Online Piano Player",
  description:
    "Read our disclaimer to understand the limitations of liability and the educational purpose of OnlinePianoPlayer.com.",
};

export default function Home() {
  return (
    <main className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center">
        Disclaimer
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        July 18, 2025
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 mt-4">
        Welcome to OnlinePianoPlayer.com. When you use this website, you agree
        to the terms in this disclaimer. Please read it carefully so you know
        what to expect when using our site.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Educational & Entertainment Purpose Only
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        This website is here to help you learn piano basics and have fun playing
        music. The virtual piano, lessons, and articles are for teaching and
        enjoyment only. We don&apos;t promise you will become a professional or
        get any certificates from using our site.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        No Professional Advice
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        The tips and lessons here are simple and made for beginners. If you want
        serious music training, it&apos;s best to find a real piano teacher. Our
        site can&apos;t replace lessons from an expert.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Accuracy of Information
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We always try to share correct and fresh information. But sometimes,
        there might be mistakes or things that are not clear. If you see
        anything wrong, please remember that using this website is your choice.
        We cannot be responsible if you face any problems because of those
        mistakes.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        External Links
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may share links to other helpful websites. But we don&apos;t own or
        control those sites. Please be careful and check their rules before
        using them. We are not responsible for anything that happens on those
        pages.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Limitation of Liability
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        By using this site, you agree that we (OnlinePianoPlayer and our team)
        are not responsible if you have any losses or problems from using our
        tools or lessons. Use everything here at your own risk.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Need to Ask Something?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        If you have questions about this disclaimer or need clarification on any
        part of it, feel free to contact us:
        <br />
        <Link
          href="./contact-now"
          className="text-[#3AB24A] font-semibold underline"
        >
          Contact Now
        </Link>
      </p>
    </main>
  );
}
