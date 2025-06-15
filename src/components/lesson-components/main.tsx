import Image from "next/image";

const Main = () => {
    return (
      <div className=" w-[75%]">
        <div className="pl-4">
            <h1 className="text-black text-4xl font-medium mt-8">Music theory lessons</h1>
        </div>

        <div className="flex gap-4 mt-8">
          {/* Card 1 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Notes</h1>
              <p className="mt-3 text-lg">
                Learn about notes and their positions on the<br /> piano. Notes.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/piano.jpg"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">The Staff</h1>
              <p className="mt-3 text-lg">
                Learn about the staff and note positions on the <br /> staff. The staff.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/staff.jpg"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>



        <div className="flex gap-4 mt-8">
          {/* Card 1 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Clefs</h1>
              <p className="mt-3 text-lg">
                Learn about the four common clefs used in music notation. Clefs.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/clefs.jpg"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Accidentals</h1>
              <p className="mt-3 text-lg">
                Learn about the five different types of accidentals. Accidentals.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/accidentals.jpg"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>



        <div className="flex gap-4 mt-8">
          {/* Card 1 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Intervals</h1>
              <p className="mt-3 text-lg">
                Learn about the different types of intervals. Intervals.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/intervals.jpg"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Chords</h1>
              <p className="mt-3 text-lg">
                Learn about the different types of chords. Chords.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/chords.jpg"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        

        <div className="flex gap-4 mt-8">
          {/* Card 1 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Scales</h1>
              <p className="mt-3 text-lg">
                Learn about the different types of scales. Scales.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/intervals.jpg"
                alt="piano"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Keys</h1>
              <p className="mt-3 text-lg">
                Learn about the different keys and key signatures. Keys.
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/chords.jpg"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-[#3AB24A] shadow-lg rounded-xl overflow-hidden mt-8">
            <div className="p-4">
              <h1 className="font-medium text-2xl">Coming Soon</h1>
              <p className="mt-3 text-lg">
                More music theory lessons are coming soon. Stay tuned for new content!
              </p>
            </div>
            <div className="relative w-full h-[150px]">
              <Image
                src="/images/chords.jpg"
                alt="staff"
                fill
                className="object-cover"
              />
            </div>
          </div>

      </div>
    );
  };
  
  export default Main;