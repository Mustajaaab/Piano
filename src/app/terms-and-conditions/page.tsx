import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Online Piano Player",
  description:
    "Review the Terms & Conditions for using OnlinePianoPlayer. Learn about user responsibilities, content usage, and limitations of liability.",
};

export default function Home() {
  return (
    <main className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center">
        Terms & Conditions
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        July 18, 2025
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 mt-4">
        Welcome to <span className="font-semibold">OnlinePianoPlayer!</span> By
        using our website, you agree to follow the terms below. Please read them
        carefully before continuing.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Use of the Website
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        You may use OnlinePianoPlayer.com for personal, non-commercial purposes
        only. You agree not to misuse the site or attempt to harm its
        functionality. <br />
        Examples of misuse include: <br />
        • Copying or redistributing content without permission
        <br />
        • Uploading harmful code or software
        <br />
        • Using bots or automated scripts to interact with the platform
        <br />
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Intellectual Property
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        All content on this website, such as piano interfaces, text, graphics,
        icons, audio samples, and features, is the property of{" "}
        <span className="font-semibold">OnlinePianoPlayer</span> or its content
        partners. <br />
        You may <span className="font-semibold">not</span>: <br />
        • Reproduce or distribute content from the site without written
        permission <br />• Use any part of the site for commercial purposes
        without our approval
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        No User Accounts
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Our platform does <span className="font-semibold">not</span> require you
        to sign up or create an account. You are free to use the online piano
        tool without providing personal information.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Third-Party Links
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may include links to helpful tools, resources, or affiliate products.
        We don&apos;t control those websites and are not responsible for their
        content, privacy policies, or practices. <br />
        Please review their terms and policies before interacting with those
        external sites.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Limitation of Liability
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        OnlinePianoPlayer.com is provided "as is" and "as available." We do our
        best to keep the site running smoothly and error-free, but we cannot
        guarantee perfect functionality at all times. <br />
        We are <span className="font-semibold">not liable</span> for any
        damages, losses, or interruptions resulting from your use of the site.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Data Security
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We follow best practices to keep your browsing secure. Since we
        don&apos;t store any personal data, there&apos;s nothing on our servers
        that can be accessed or compromised.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Changes to the Terms
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may update these terms from time to time. Continued use of our site
        means you accept any changes. You should revisit this page occasionally
        to stay informed.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Governing Law
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        These Terms & Conditions are governed by the laws of <span className='font-semibold'>Pakistan</span> (or your
        country of operation). Any legal disputes must be handled in a local
        court of jurisdiction.
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
