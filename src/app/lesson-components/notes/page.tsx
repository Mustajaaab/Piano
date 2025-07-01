import Image from 'next/image'

const Note = () => {
    return (
        <section className="container mx-auto">
            <h1 className="font-semibold text-[52px] text-black py-16 text-center">Notes</h1>
            <p className="text-lg leading-9 text-black">In classical and popular music, especially 
                from the Western world, there are twelve different notes. Seven of these notes are 
                called the natural notes and they are represented by the white keys on the piano. 
                The black keys on the piano represent the remaining five notes.</p>
            <div className="p-6 bg-[#29CA531A] w-[30%] mt-10">
                <h2 className="text-xl font-medium text-black leading-9">Content</h2>
                <p className="text-xl text-black leading-9 mt-3.5">1. Natural Notes</p>
                <p className="text-xl text-black leading-9">2. Middle C</p>
                <p className="text-xl text-black leading-9">3. Octaves</p>
                <p className="text-xl text-black leading-9">4. Half steps and whole steps</p>
            </div>
            <h2 className="text-black font-semibold text-2xl mt-20">1. Natural Notes</h2>
            <p className="text-lg leading-9 text-black mt-10">The Natural Notes are named after the first seven letters of the alphabet. 
            Their names are A, B, C, D, E, F, and G. The names of the notes are always capitalized.<br/>
            The piano is a helpful aid because it provides a visual overview of the notes. 
            Below is a section of piano keys labeled with their corresponding notes. The starting point
            is usually based on the note C. This is also the case on the piano here. Click on the piano
            to listen to the notes;</p>
            <Image
              src="/images/piano-board.png"
              alt="piano-player"
              width={365}
              height={111}
              className="cursor-pointer mt-10"
            />
            <p className="text-lg leading-9 text-black mt-10">The black keys are arranged in alternating groups of two and three. The note C is always on the white key to the left of the group of two black keys. Each note is in several places on the piano; the further to the right a note is located, the higher it is, and the further to the left, the lower it is.</p>

            <div className='bg-[#EAFAEE] py-9 px-11 rounded-xl border-l-[17px] border-[#a7dcae] mt-10 flex items-center gap-10'>
                <div>
                    <Image
                    src='/images/pie.png'
                    alt='pie'
                    width={60}
                    height={60}/>
                </div>
                <div>
                    <h2 className='text-lg font-medium text-black leading-7'>Exercise 1</h2>
                    <div className='flex items-center space-x-2'>
                      <p className='text-black text-lg'>Notes</p>
                      <Image src='/images/arrow-green.png' width={10} height={10} alt='arrow' className='h-2.5 w-2.5'/>
                      <p className='text-black text-lg'>Piano</p>
                      <Image src='/images/arrow-green.png' width={10} height={10} alt='arrow' className='h-2.5 w-2.5'/>
                      <p className='text-black text-lg'>Naturals1 And Naturals 2</p>
                    </div>
                </div>
            </div>


            <h2 className="text-black font-semibold text-2xl mt-16">2. Middle C</h2>
            <p className='text-black text-lg leading-8 mt-10'>The middlemost C on the piano is
             called middle C. On a standard piano with 88 keys, middle C is the fourth C from the 
             left. Click on the piano to hear the note:</p>
            <Image
              src="/images/piano-board.png"
              alt="piano-player"
              width={365}
              height={111}
              className="cursor-pointer mt-10"
            />
            <div className="w-[10px] h-[10px] bg-[#40BC51] rounded-full mt-2.5 ml-48"></div>
            <p className='text-black text-lg leading-8 mt-10'>Middle C is an essential reference point. 
            The specific high or low version of a note you play is important, and using middle C as the
            reference point, makes it easier to play the right version of the note.</p>


            <h2 className="text-black font-semibold text-2xl mt-16">3. Octaves</h2>
            <p className='text-black text-lg leading-8 mt-10'>A standard piano with 88 keys has seven to
            eight versions of each note. The distance from any note to the nearest lower or higher version 
            of the same note is called an octave:</p>
            <Image
              src="/images/piano-board.png"
              alt="piano-player"
              width={365}
              height={111}
              className="cursor-pointer mt-10"
            />
            <p className='text-black text-lg leading-8 mt-10'>Usually, a note is referred to with the same
                name, regardless of whether it is low or high. However, there is a system for naming low and
                high notes that can be used if you need to distinguish between them. In this system, a number
                is added after the name of the note corresponding to the octave number in which the note falls.
            </p>
            <p className='text-black text-lg leading-8 mt-6'>Each octave, starting from the note C, has a number.
                The octave of the lowest C on the piano has number 1, while the octave of the highest C has number 
                8. All notes from C up to the next octave have the same number (e.g., C1, D1, E1, F1, G1, A1 and B1).
                These are the most common octaves and their numbers:
            </p>
        </section>
    )
}

export default Note