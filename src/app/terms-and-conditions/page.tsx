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
        You can use this site for free to play piano for fun or learning. You
        must not use it to do anything wrong or harmful. <br /> Some examples of
        wrong use include: <br />
        • Taking or sharing things from the site without asking
        <br />
        • Adding bad code or anything that breaks the website
        <br />
        • Using bots or tools to click or play automatically
        <br />
        • This site is for normal people to enjoy. Please treat it kindly.
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
        • You must not copy or share anything without permission <br />• You
        must not use our content to make money unless we say it's okay <br />•
        All parts of this site are protected by law.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        No User Accounts
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        You don&apos;t have to sign up or give us your name or email to use this
        piano. Just open the website and start playing. We don&apos;t ask for
        your personal information, so you can stay private and enjoy the music
        right away.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Third-Party Links
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Sometimes, we share links to other sites that might help you or show you
        more tools or products. We don&apos;t control those websites. If you
        click on them, please be careful and read their rules. We are not
        responsible for what happens on those sites.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Our Responsibility
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We try hard to keep the website working well all the time. But
        sometimes, things might not work perfectly. If the site stops working or
        causes problems, we are not responsible for any troubles or losses you
        might have. Please use the site carefully.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Changes to These Rules
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        We might change these terms now and then. When we do, we will update the
        date here. If you keep using the site, it means you agree with the new
        rules. It&apos;s a good idea to check this page once in a while to know
        what&apos;s new.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Governing Law
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        These terms follow the laws of Pakistan (or the country where you live,
        if different). If there is ever a big problem, it will be handled by a
        local court as per the law.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-8">
        Contact
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        If you have any questions about these rules or anything else.<br />
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
