import PianoKeyboard from "@/components/piono/piano-keyboard";


export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full">
        <PianoKeyboard />
      </div>
      <div className="container mx-auto">
        <h1 className="text-[#494949] text-3xl font-semibold mt-30">
          Play Piano Online
        </h1>
        <p className="text-[#454545] font-normal text-lg leading-9 mt-7">
          You can interact with the piano either by using your computer keyboard
          or by clicking directly on the on-screen piano keys. The top row of
          letters on your keyboard corresponds to the white keys of the piano,
          while the number row represents the black keys. This setup allows for
          a seamless and intuitive playing experience, making it easy to
          experiment with melodies and chords. Additionally, the interface
          supports polyphonic input, meaning you can play multiple notes at the
          same time—just like on a real piano. For a cleaner view while you
          play, you have the option to hide the note names by clicking the &quot;Hide
          note names&quot; button located just above the piano. This can be helpful
          if you want to test your ability to recognize notes by ear or practice
          playing without visual cues. To highlight specific notes on the
          piano—for example, notes in a chord or scale—click the &quot;Mark&quot; button.
          Once you&apos;ve marked your desired notes, a &quot;Play&quot; button will appear,
          allowing you to hear those notes played together with a single click.
          Alternatively, you can press the spacebar on your keyboard to trigger
          playback, providing a convenient way to audition chords or patterns
          you&apos;re working with. If you&apos;d like to save your current markings or
          share them with someone else, you can do so easily. Just copy the web
          address (URL) from your browser&apos;s address bar. This unique link
          retains all your markings on the piano, so when someone opens it,
          they&apos;ll see exactly what you&apos;ve created. It&apos;s a great tool for
          collaboration, teaching, or simply bookmarking ideas for later. For
          example, you can share links that display a F minor seventh chord or
          an E major scale, giving others a quick reference or starting point
          for learning and exploration.
        </p>
      </div>
    </div>
  );
}
