import Image from "next/image";

const Main = () => {
    return (
      <div className=" lg:w-[75%] mx-auto container">
        <div className="pl-4">
            <h1 className="text-black lg:text-[52px] text-2xl font-medium lg:font-semibold mt-20 text-center">Music theory lessons</h1>
        </div>

        <div className="lg:flex gap-4 lg:mt-16 mt-10 mx-4 lg:mx-0">
          {/* Card 1 */}
          <div className="lg:w-1/2 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Notes</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about notes and their positions on the piano. Notes.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/piano.png"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:w-1/2 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden mt-14 lg:mt-0">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">The Staff</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the staff and note positions on the staff. The staff.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/staff.png"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>



        <div className="lg:flex gap-4 lg:mt-8 mt-14 mx-4 lg:mx-0">
          {/* Card 1 */}
          <div className="lg:w-1/2 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Clefs</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the four common clefs used in music notation. Clefs.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/clefs.png"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:w-1/2 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden mt-14 lg:mt-0">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Accidentals</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the five different types of accidentals. Accidentals.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/accidentals.png"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>



        <div className="lg:flex gap-4 lg:mt-8 mt-14 mx-4 lg:mx-0">
          {/* Card 1 */}
          <div className="lg:w-1/2 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Intervals</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the different types of intervals. Intervals.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/intervals.png"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:w-1/2 mt-14 lg:mt-0 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Chords</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the different types of chords. Chords.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/chords.png"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        

        <div className="lg:flex gap-4 lg:mt-8 mt-14 mx-4 lg:mx-0">
          {/* Card 1 */}
          <div className="lg:w-1/2 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Scales</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the different types of scales. Scales.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/scales.png"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:w-1/2 mt-14 lg:mt-0 border-[1px] border-[#E3E3E3] shadow-lg overflow-hidden">
            <div className="p-4">
              <h1 className="lg:font-medium font-semibold lg:text-3xl text-2xl text-[#494949] text-center mt-6 lg:mt-10">Keys</h1>
              <p className="lg:text-lg text-sm text-[#494949] text-center lg:mt-10 mt-8 w-80 mx-auto">
                Learn about the different keys and key signatures. Keys.
              </p>
            </div>
            <div className="relative w-full h-[190px] mt-4">
              <Image
                src="/images/keys.png"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        

      </div>
    );
  };
  
  export default Main;