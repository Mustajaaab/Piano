import Image from "next/image";
import FingerTwo from "/public/images/finger2.png";
import Finger from "/public/images/finger.jpg";
import Scales from "/public/images/scaless.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Keyboard Number Finger Placement | Proper Finger Technique for Piano Beginners",
  description:
    "Learn the correct keyboard number finger placement to play piano smoothly. Master finger numbering and positioning for better control and comfort.",
};

const FingerPlacement = () => {
  return (
    <div className="lg:container lg:mx-auto mx-6">
      <h1 className="text-[#494949] lg:text-5xl text-4xl font-semibold mt-14 text-center lg:leading-16">
        Keyboard Number Finger Placement for Piano Beginners
      </h1>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-14 mt-6 lg:leading-9 leading-8">
        Understanding{" "}
        <span className="font-semibold">keyboard number finger placement</span>{" "}
        is a vital step for new piano players. It teaches you which finger goes
        where on the keys, helping you build speed, control, and confidence.
      </p>
      <div className="flex justify-start items-center mt-14">
        <Image src={Finger} alt="Keyboard" width={750} height={650} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        What Is Keyboard Number Finger Placement?
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Each finger on your hand is assigned a number: <br />•{" "}
        <span className="font-semibold">1</span> = Thumb <br />•{" "}
        <span className="font-semibold">2</span> = Index Finger <br />•{" "}
        <span className="font-semibold">3</span> = Middle Finger <br />•{" "}
        <span className="font-semibold">4</span> = Ring Finger <br />•{" "}
        <span className="font-semibold">5</span> = Little Finger ( Pinky ){" "}
        <br />
        This numbering system is used in{" "}
        <span className="font-semibold">piano sheet music</span> and lesson
        books to guide finger movement.
      </p>
      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Why Finger Placement Matters
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Using proper finger placement: <br />
        • Reduces hand fatigue <br />
        • Improves accuracy and fluidity <br />
        • Builds muscle memory faster <br />
        • Helps you read sheet music more effectively <br />• Supports smoother
        scale and chord transitions
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Basic Finger Placement Tips
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        • Sit with a relaxed wrist and curved fingers <br />
        • Keep all fingertips touching the keys, not flat or too stiff <br />
        • Don&apos;t stretch or twist fingers unnecessarily <br />• Always
        return to your hand's natural position after a phrase
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Example: Right-Hand C Major Scale
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        Here&apos;s how to use{" "}
        <span className="font-semibold">finger numbers</span> to play the C
        major scale with your <span className="font-semibold">right hand</span>:{" "}
        <br />
        1 (Thumb) → C <br />
        2 (Index) → D <br />
        3 (Middle) → E <br />
        <span className="font-semibold">Tuck thumb under</span> <br />
        1 (Thumb) → F <br />
        2 (Index) → G <br />
        3 (Middle) → A <br />
        4 (Ring) → B <br />5 (Pinky) → C
      </p>

      <div className="flex justify-start items-center mt-14">
        <Image src={FingerTwo} alt="Keyboard" width={750} height={450} />
      </div>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Practice Drill (Try This)
      </h2>
      <p className="text-[#454545] lg:text-lg text-sm font-normal lg:mt-7 mt-3 lg:leading-9 leading-8">
        • Place your right-hand thumb (1) on{" "}
        <span className="font-semibold">middle C</span> <br />
        • Play C-D-E using 1-2-3 <br />
        • Tuck thumb under to F <br />
        • Continue up to the next C with correct finger numbers <br />• Repeat
        slowly, then try it with your left hand going down
      </p>

      <h2 className="text-[#494949] lg:text-3xl text-xl font-semibold mt-14">
        Frequently Asked Questions About Keyboard Number Finger Placement
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
                What is keyboard number finger placement?
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
                Keyboard number finger placement is a numbering system (1-5) for
                fingers that helps piano players know which finger to use on
                each key.
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
                Why is finger placement important in piano?
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
                It helps prevent strain, improves technique, and makes learning
                scales and chords easier.
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
                What is a good example of finger number placement?
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
                A right-hand C major scale uses fingers 1-2-3, then 1-2-3-4-5
                from C to C. This is a common beginner exercise.
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
                Can I use different fingers if I&apos;m more comfortable?
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
                At first, stick with standard finger numbers. Over time,
                you&apos;ll learn when and how to adjust for trickier passages.
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
                How can I practice correct finger placement?
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
                Practice scales slowly, focusing on correct fingers. Use finger
                exercise books or online tutorials for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FingerPlacement;
