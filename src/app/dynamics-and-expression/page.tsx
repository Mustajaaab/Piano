import Image from "next/image";
import Keyboard from "/public/images/grand.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamics and Expression | Add Emotion to Your Piano Playing",
  description:
    "Learn how dynamics and expression bring life to piano music. Discover tips to play piano simple songs with feeling and improve your musical performance.",
};

const DynamicsExpressions = () => {
  return (
    <div className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Dynamics and Expression on Piano
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Understanding{" "}
        <span className="font-semibold">dynamics and expression</span> is
        essential to playing piano with emotion and impact. Dynamics refer to
        how loudly or softly you play, while expression involves the feeling you
        put into the music. Together, they turn simple notes into moving
        performances.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Are Dynamics?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Dynamics describe the volume levels in music, ranging from very soft
        (pianissimo) to very loud (fortissimo). Using dynamics effectively can
        create mood and interest in your playing.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Is Expression?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Expression goes beyond volume, it&apos;s how you convey emotion through
        timing, touch, and phrasing. Playing with expression makes{" "}
        <span className="font-semibold">piano simple songs to play</span> sound
        more engaging and personal.
      </p>

      <div className="flex justify-start items-center mt-14">
        <Image src={Keyboard} alt="Keyboard" width={750} height={650} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        How to Add Dynamics and Expression
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        • Vary your touch on the keys: press softly for gentle sounds and harder
        for louder notes. <br />
        • Use crescendos (gradually getting louder) and decrescendos (gradually
        getting softer) <br />
        • Continue similarly for the rest of the song, focusing on one hand at a
        time. <br />
        • Pause slightly between phrases to add breathing space. <br />
        • Emphasize important notes or chords to highlight the melody <br />•
        Experiment with tempo changes to make the music feel alive
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Example: Expressing Emotion in “Happy Birthday”
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        When playing “Happy Birthday,” start softly on the first line and
        gradually increase volume on the chorus. Pause slightly before the last
        phrase to create anticipation. This dynamic shaping makes a simple song
        heartfelt and memorable.
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Frequently Asked Questions
      </h2>

      <section>
        <div className="space-y-4 mt-16">
          {/* Question 1 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq1" className="peer hidden" />
            <label
              htmlFor="faq1"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                What are dynamics in piano music?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Dynamics refer to the volume levels, from soft to loud, used to
                add emotion and interest.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq2" className="peer hidden" />
            <label
              htmlFor="faq2"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                How do I add expression to piano playing?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Use variations in volume, timing, and phrasing to convey feeling
                and make music more engaging.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq3" className="peer hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Why are dynamics important in piano simple songs?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Dynamics bring simple songs to life by making them sound less
                mechanical and more emotional.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq3" className="peer hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                Can beginners learn to play with dynamics and expression?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Absolutely! Start with basic volume changes and gradually add
                more expression as you improve.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="border rounded-lg overflow-hidden">
            <input type="checkbox" id="faq3" className="peer hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 peer-checked:bg-blue-100"
            >
              <h3 className="font-medium text-[#454545]">
                How does expression affect musical performance?
              </h3>
              <svg
                className="w-5 h-5 transition-transform peer-checked:rotate-180 text-[#454545]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="bg-white px-4 pb-4 pt-4 hidden peer-checked:block">
              <p className="text-[#454545]">
                Expression connects the player and listener emotionally, making
                performances more impactful.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicsExpressions;
