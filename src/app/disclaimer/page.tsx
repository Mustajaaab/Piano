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
        Welcome to <span className="font-semibold">OnlinePianoPlayer</span>. By
        using our website, you acknowledge and agree to the terms of this
        disclaimer. Please read it carefully to understand how our platform
        operates and what you can expect.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Educational & Entertainment Purpose Only
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        The content on <span className="font-semibold">OnlinePianoPlayer</span>,
        including the virtual piano tool, music lessons, blogs, and tips, is
        provided for{" "}
        <span className="font-semibold">educational and entertainment</span>{" "}
        purposes only. We aim to help users explore music, learn basic piano
        concepts, and enjoy the experience of playing. We do{" "}
        <span className="font-semibold">not</span> guarantee professional
        results or certifications.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        No Professional Advice
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Any tutorials, tips, or guides on this site are{" "}
        <span className="font-semibold">
          not a substitute for professional music instruction
        </span>
        . If you're seeking advanced training or expert advice, we recommend
        working with a certified music teacher or instructor.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Accuracy of Information
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        While we strive to keep all content accurate and up-to-date, we{" "}
        <span className="font-semibold">make no warranties</span> about the
        completeness, reliability, or accuracy of any information on this site.{" "}
        <br />
        Your use of the content is at your own risk. We are not responsible for
        any errors, omissions, or misunderstandings resulting from your use of
        the site.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        External Links
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        OnlinePianoPlayer.com may include links to third-party websites for your
        convenience. We do <span className="font-semibold">not</span> endorse or
        control these external sites and are {' '}
        <span className="font-semibold">not responsible</span> for their
        content, practices, or privacy policies. <br />
        Always review those sites before engaging with them.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Limitation of Liability
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        By using this website, you agree that <span className="font-semibold">OnlinePianoPlayer</span>, its team, and
        its content creators will <span className="font-semibold">not be held liable</span> for any losses, damages, or
        issues arising from your use of our services, lessons, or tools.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Contact
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Have questions? contact us anytime at: <br />
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
