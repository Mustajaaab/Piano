import type { Metadata } from "next";
import Link from "next/link";

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
        At <span className="font-semibold">OnlinePianoPlayer.com</span> your
        privacy is very important to us. We don&apos;t ask for your name, email,
        or any personal information. You can use the piano freely without
        signing up or creating an account. This page explains how we keep your
        visit safe and private.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        No Personal Data Collected
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We don&apos;t collect or keep any personal information from you. You
        don&apos;t need to share your name, email, or photos. We don&apos;t ask
        for logins, and there are no forms to fill out. You simply visit the
        website and play. Nothing about your identity is saved or shared.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Cookies
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Sometimes, we use small files called cookies to make your visit better.
        These help you remember what instrument you played last or what volume
        you liked. But don&apos;t worry, these cookies do not store your name,
        address, or anything personal. You can turn off cookies in your browser
        if you want.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Third-Party Services & Links
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Our site may include links to tools, videos, or affiliate products.
        We&apos;re not responsible for the privacy practices of other websites.
        Always check their privacy policies before sharing any data.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Third-Party Ads & Analytics
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may show ads to help keep the website free. Some trusted ad companies
        may use simple tools like cookies or small tracking images to show
        better ads based on what you like. These tools don&apos;t know your name
        or who you are they only guess based on your general activity.
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
        Some links on our site may be affiliate links. This means if you click
        and buy something, we may earn a small amount. It doesn&apos;t cost you
        anything extra. We only link to things we believe are good and useful.
        This helps support the website.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Updates to This Policy
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We may make small changes to this page in the future. When we do,
        we&apos;ll update the date at the top. Please check this page now and
        then to stay informed. If you keep using the website, that means
        you&apos;re okay with the updates.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Contact
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        If you have questions or want to know more, feel free to reach out. You
        can contact us anytime using the form on our website. <br />
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
