import type { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Privacy Policy | Online Piano Player",
  description:
    "Read how OnlinePianoPlayer.com protects your privacy. We collect no personal data or images and keep your musical experience secure and anonymous.",
};

export default function Home() {
  return (
    <main className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center">
        Privacy Policy
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        July 18, 2025
      </p>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:leading-9 leading-8 mt-4">
        At <span className="font-semibold">OnlinePianoPlayer</span>, your
        privacy matters. We don&apos;t collect or store any personal data,
        images, or user files on our servers. This page explains how we handle
        cookies, third-party links, and any non-personal data used to enhance
        your experience.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        No Personal Data Collected
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We don&apos;t collect, store, or share any personal information. No
        signups, no account creation, no photo uploads. Your piano experience is
        entirely private.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Cookies
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may use cookies to improve your experience, like remembering your
        last played instrument or preferred settings. These cookies: <br />• Do{" "}
        <span className="font-semibold">not</span> collect personal data <br />
        • Are only used to improve functionality <br />• Can be disabled in your
        browser at any time
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Third-Party Services & Links
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Our site may include links to tools, videos, or affiliate products.
        We&apos;re not responsible for the privacy practices of other websites.
        Always check their privacy policies before sharing any data
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Third-Party Ads & Analytics
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may display ads from trusted third-party networks. These services
        might use anonymous cookies or tracking pixels to personalize ads. No
        personally identifiable information is shared or tracked.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Affiliate Disclosure
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Some links may be affiliate links. If you click and make a purchase, we
        may earn a small commission at no extra cost to you. We only recommend
        products we genuinely support.
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
        Updates to This Policy
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may update this Privacy Policy occasionally. We recommend checking
        this page from time to time. Continued use of the site means you accept
        any updates.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Contact
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Have questions? contact us anytime at: <br />
        <Link href='./contact-now' className="text-[#3AB24A] font-semibold underline">Contact Now</Link>
      </p>
    </main>
  );
}
