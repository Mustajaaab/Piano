
import { Tuner } from "../components/Tuner"

export default function Home() {
  return (
    <main className="container mx-auto">
        <div className="w-2xl mx-auto mt-14">
          <Tuner instrument="guitar" />
        </div>
        <h1 className="text-[#494949] text-3xl font-semibold mt-40">What Is a Tuner and How Does It Work?</h1>
        
        <p className="text-[#454545] text-lg font-normal mt-7 leading-9">A tuner is a tool—either a physical device or a digital application—that helps musicians ensure their instrument is properly in tune. When you play a note, the tuner listens to the sound, identifies its pitch, and compares it to the correct pitch for that note. It then tells you if the note is flat (too low), sharp (too high), or perfectly in tune. This feedback makes it easy to fine-tune your instrument and achieve the best possible sound. </p>
        <p className="text-[#454545] text-lg font-normal leading-9">Tuners are especially helpful for stringed instruments like <span className="font-bold text-lg">Guitars</span>, <span className="font-bold text-lg">Violins</span>, <span className="font-bold text-lg">Bass Guitars</span>, and <span className="font-bold text-lg">Ukuleles</span>, which tend to fall out of tune as their strings stretch and wear over time. Most modern tuners are chromatic, meaning they can recognize all twelve pitches of the chromatic scale, making them versatile and suitable for a wide range of instruments.</p>


        <h1 className="text-[#494949] text-3xl font-semibold mt-8">Tuning with the Online Tuner</h1>

        <p className="text-[#454545] text-lg font-normal leading-9 mt-7">Tuning your instrument online is simple and convenient. Here&apos;s how to use the online tuner:</p>
        
        <p className="text-[#454545] text-lg font-normal leading-9 "><span className="font-semibold">1. Click the Green Start Tuning</span> To Begin</p>
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">2.  Grant Microphone Access</span>when prompted—this allows the tuner to hear your instrument.</p>  
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">3. Play a Single Note</span> on your Instrument.</p> 
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">4. Watch the Tuner Display</span>, which will tell you the note you're playing and whether it&apos;s in tune.</p> 
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">5. Adjust Your Instrument&apos;s Tuning Pegs</span> until the tuner shows that the note is correctly tuned.</p> 

        <h1 className="text-[#494949] text-3xl font-semibold mt-8">Standard Tunings for Popular Instruments</h1>
        
        <p className="text-[#454545] text-lg font-normal leading-9 mt-7">Below is a list of common string instruments and their standard tunings. These are the typical notes each string is tuned to, listed from the lowest-pitched string to the highest—except for instruments like the ukulele and banjo, which may not follow a strict low-to-high pitch order:</p>
    
        <p className="text-[#454545] text-lg font-normal leading-9 mt-4"><span className="font-semibold">• Guitar</span> E A D G B E</p>
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Bass Guitar</span> E A D G</p>  
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Ukulele</span> G C E A</p> 
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Banjo</span> G D G B D</p> 
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Mandolin</span> G G D D A A E E</p> 
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Violin</span> G D A E</p>
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Viola</span> C G D A</p>
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Cello</span> C G D A</p>
        <p className="text-[#454545] text-lg font-normal leading-9"><span className="font-semibold">• Double Bass</span> E A D G</p>

        <p className="text-[#454545] text-lg font-normal leading-9 mt-4">Keep in mind, these are the <span className="font-semibold">Most Widely Used Standard Tunings</span>. Many musicians experiment with alternate tunings to achieve different sounds and styles—especially in genres like folk, rock, and jazz.</p>

    </main>
  )
}
