"use client"

import { useState, useEffect, useRef } from "react"
import * as Tone from "tone"
import PianoKey from "./piano-key"

// Define the piano key data structure
interface PianoKeyData {
  note: string // Full note name with octave (e.g., "C4")
  keyboardKey: string // Computer keyboard key
  isBlack: boolean // Whether it's a black key
  index: number // Position index for layout
  flatName?: string // Flat equivalent name
}

// Create a standard 3-octave piano (C3 to B5)
const generatePianoKeys = (): PianoKeyData[] => {
  // Standard musical sequence for one octave with flat names
  const octaveNotes = [
    { note: "C", isBlack: false, flatName: null },
    { note: "C#", isBlack: true, flatName: "Db" },
    { note: "D", isBlack: false, flatName: null },
    { note: "D#", isBlack: true, flatName: "Eb" },
    { note: "E", isBlack: false, flatName: null },
    { note: "F", isBlack: false, flatName: null },
    { note: "F#", isBlack: true, flatName: "Gb" },
    { note: "G", isBlack: false, flatName: null },
    { note: "G#", isBlack: true, flatName: "Ab" },
    { note: "A", isBlack: false, flatName: null },
    { note: "A#", isBlack: true, flatName: "Bb" },
    { note: "B", isBlack: false, flatName: null },
  ]

  // Custom keyboard mapping as requested:
  // First Octave (C3-B3)
  // White keys: Z, X, C, Q, W, E, R
  // Black keys: S, D, 2, 3, 4
  const firstOctaveMap = []
  firstOctaveMap[0] = "z" // C3
  firstOctaveMap[1] = "s" // C#3
  firstOctaveMap[2] = "x" // D3
  firstOctaveMap[3] = "d" // D#3
  firstOctaveMap[4] = "c" // E3
  firstOctaveMap[5] = "q" // F3
  firstOctaveMap[6] = "2" // F#3
  firstOctaveMap[7] = "w" // G3
  firstOctaveMap[8] = "3" // G#3
  firstOctaveMap[9] = "e" // A3
  firstOctaveMap[10] = "4" // A#3
  firstOctaveMap[11] = "r" // B3

  // Second Octave (C4-B4)
  // White keys: T, Y, U, I, O, P, [
  // Black keys: 6, 7, 9, 0, -
  const secondOctaveMap = []
  secondOctaveMap[0] = "t" // C4
  secondOctaveMap[1] = "6" // C#4
  secondOctaveMap[2] = "y" // D4
  secondOctaveMap[3] = "7" // D#4
  secondOctaveMap[4] = "u" // E4
  secondOctaveMap[5] = "i" // F4
  secondOctaveMap[6] = "9" // F#4
  secondOctaveMap[7] = "o" // G4
  secondOctaveMap[8] = "0" // G#4
  secondOctaveMap[9] = "p" // A4
  secondOctaveMap[10] = "-" // A#4
  secondOctaveMap[11] = "[" // B4

  // Third Octave (C5-B5)
  // White keys: ], V, B, N, M, ,, .
  // Black keys: F, G, J, K, L
  const thirdOctaveMap = []
  thirdOctaveMap[0] = "]" // C5
  thirdOctaveMap[1] = "f" // C#5
  thirdOctaveMap[2] = "v" // D5
  thirdOctaveMap[3] = "g" // D#5
  thirdOctaveMap[4] = "b" // E5
  thirdOctaveMap[5] = "n" // F5
  thirdOctaveMap[6] = "j" // F#5
  thirdOctaveMap[7] = "m" // G5
  thirdOctaveMap[8] = "k" // G#5
  thirdOctaveMap[9] = "," // A5
  thirdOctaveMap[10] = "l" // A#5
  thirdOctaveMap[11] = "." // B5

  // Combine all octaves
  const keyboardMap = [...firstOctaveMap, ...secondOctaveMap, ...thirdOctaveMap]

  const keys: PianoKeyData[] = []
  let keyIndex = 0
  let whiteKeyIndex = 0

  // Generate keys for octaves 3-5 (three full octaves)
  for (let octave = 3; octave <= 5; octave++) {
    for (let i = 0; i < octaveNotes.length; i++) {
      const { note, isBlack, flatName } = octaveNotes[i]

      // Calculate the position index (for layout)
      // White keys are positioned sequentially
      // Black keys are positioned relative to their adjacent white keys
      const index = isBlack ? whiteKeyIndex - 0.5 : whiteKeyIndex

      if (!isBlack) {
        whiteKeyIndex++
      }

      keys.push({
        note: `${note}${octave}`,
        keyboardKey: keyIndex < keyboardMap.length ? keyboardMap[keyIndex] : "",
        isBlack,
        index,
        flatName: flatName ? `${flatName}${octave}` : undefined,
      })

      keyIndex++
    }
  }

  return keys
}

const pianoKeys = generatePianoKeys()

export default function PianoKeyboard() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const samplerRef = useRef<Tone.Sampler | null>(null)
  const compressorRef = useRef<Tone.Compressor | null>(null)
  const eqRef = useRef<Tone.EQ3 | null>(null)
  const reverbRef = useRef<Tone.Reverb | null>(null)
  const limiterRef = useRef<Tone.Limiter | null>(null)

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Check if mobile and handle orientation
  useEffect(() => {
    const checkDeviceAndOrientation = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
        setIsLandscape(window.innerWidth > window.innerHeight)
      }
    }

    checkDeviceAndOrientation()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkDeviceAndOrientation)
      window.addEventListener("orientationchange", checkDeviceAndOrientation)
      return () => {
        window.removeEventListener("resize", checkDeviceAndOrientation)
        window.removeEventListener("orientationchange", checkDeviceAndOrientation)
      }
    }
  }, [])

  // Initialize Tone.js with Musicca-like sound profile
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return

    // Configure Tone.js for low latency before creating any audio nodes
    // This is the proper way to set latency hint in Tone.js
    Tone.setContext(new Tone.Context({ latencyHint: "interactive" }))

    // Create a limiter to prevent clipping
    const limiter = new Tone.Limiter(-0.5).toDestination()
    limiterRef.current = limiter

    // Create a subtle reverb for natural piano sound (Musicca has a slight room ambience)
    const reverb = new Tone.Reverb({
      decay: 3.0, // Increased decay for longer sustain
      wet: 0.15, // Slightly increased reverb for longer sustain
      preDelay: 0.01,
    }).connect(limiter)
    reverbRef.current = reverb

    // Create EQ to match Musicca's bright but warm sound
    const eq = new Tone.EQ3({
      low: -1.5, // Slightly reduce bass for clarity
      mid: 0.5, // Slight boost in mids for warmth
      high: 2, // Boost highs for brightness but not as much as before
    }).connect(reverb)
    eqRef.current = eq

    // Create compressor for dynamics control - Musicca has a very natural dynamic range
    const compressor = new Tone.Compressor({
      threshold: -20,
      ratio: 3,
      attack: 0.003, // Fast but not instant attack
      release: 0.5, // Longer release for extended sustain
      knee: 4,
    }).connect(eq)
    compressorRef.current = compressor

    // Load the reverb
    reverb.generate().then(() => {
      console.log("Reverb generated")
    })

    // Create the Sampler with piano samples
    // Using the Salamander Grand Piano samples which are high quality
    const sampler = new Tone.Sampler({
      urls: {
        // More sample points for better quality across the range
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3",
      },
      release: 3.0, // Extended release to 3 seconds for longer note duration
      volume: -2, // Slightly quieter to prevent clipping
      attack: 0.002, // Very fast attack for immediate response
      curve: "exponential", // More natural sounding curve
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        setIsLoaded(true)
        setLoadingProgress(100)
        console.log("Sampler loaded")
      },
      onerror: (error) => {
        console.error("Error loading sampler:", error)
      },
    }).connect(compressor)

    samplerRef.current = sampler

    // Preload all samples
    Tone.loaded().then(() => {
      console.log("All samples loaded")
    })

    // Start Tone.js audio context on user interaction
    const handleFirstInteraction = () => {
      if (Tone.context.state !== "running") {
        Tone.start()
        console.log("Tone.js started")
      }
      window.removeEventListener("click", handleFirstInteraction)
      window.removeEventListener("keydown", handleFirstInteraction)
      window.removeEventListener("touchstart", handleFirstInteraction)
    }

    window.addEventListener("click", handleFirstInteraction)
    window.addEventListener("keydown", handleFirstInteraction)
    window.addEventListener("touchstart", handleFirstInteraction)

    // Cleanup
    return () => {
      window.removeEventListener("click", handleFirstInteraction)
      window.removeEventListener("keydown", handleFirstInteraction)
      window.removeEventListener("touchstart", handleFirstInteraction)

      if (samplerRef.current) {
        samplerRef.current.dispose()
      }

      if (compressorRef.current) {
        compressorRef.current.dispose()
      }

      if (eqRef.current) {
        eqRef.current.dispose()
      }

      if (reverbRef.current) {
        reverbRef.current.dispose()
      }

      if (limiterRef.current) {
        limiterRef.current.dispose()
      }
    }
  }, [])

  // Play a note with Musicca-like sound characteristics
  const playNote = (note: string, velocity = 0.8) => {
    if (!samplerRef.current || !isLoaded) {
      console.warn("Sampler not loaded yet")
      return
    }

    try {
      // Use a 3-second duration for each note as requested
      samplerRef.current.triggerAttackRelease(
        note,
        "3.0", // 3 second duration as requested
        undefined, // Use current time
        velocity, // Dynamic control (0-1)
      )
      console.log(`Playing note ${note} with velocity ${velocity} for 3 seconds`)
    } catch (error) {
      console.error(`Error playing note ${note}:`, error)
    }
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent repeating keys when held down
      if (e.repeat) return

      const key = e.key.toLowerCase()
      const pianoKey = pianoKeys.find((k) => k.keyboardKey === key)

      if (pianoKey && !activeKeys.has(pianoKey.note)) {
        setActiveKeys((prev) => {
          const newSet = new Set(prev)
          newSet.add(pianoKey.note)
          return newSet
        })

        // Calculate velocity based on key type
        // Black keys are typically played with slightly less force
        const velocity = pianoKey.isBlack ? 0.75 : 0.85
        playNote(pianoKey.note, velocity)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      const pianoKey = pianoKeys.find((k) => k.keyboardKey === key)

      if (pianoKey) {
        setActiveKeys((prev) => {
          const newSet = new Set(prev)
          newSet.delete(pianoKey.note)
          return newSet
        })
        // Note: We don't stop the sound on key up to allow the full 3-second duration
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [activeKeys, isLoaded])

  // Handle mouse/touch events with velocity sensitivity
  const handleMouseDown = (note: string, isBlack: boolean) => {
    setActiveKeys((prev) => {
      const newSet = new Set(prev)
      newSet.add(note)
      return newSet
    })

    // Calculate velocity based on key type for more natural sound
    const velocity = isBlack ? 0.75 : 0.85
    playNote(note, velocity)
  }

  const handleMouseUp = (note: string) => {
    setActiveKeys((prev) => {
      const newSet = new Set(prev)
      newSet.delete(note)
      return newSet
    })
    // Note: We don't stop the sound on mouse up to allow the full 3-second duration
  }

  // Calculate the width of the keyboard
  const whiteKeyCount = pianoKeys.filter((key) => !key.isBlack).length
  const keyboardWidth = "100%"

  return (
    <div className={`w-full p-0 ${isMobile ? ' pt-10' : 'pt-10'} md:h-full relative `}>
      {isMobile && !isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-2 z-50 bg-black/50 text-white px-3 py-1 rounded-md text-sm"
        >
          Fullscreen
        </button>
      )}
      {isMobile && isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="fixed top-2 right-2 z-50 bg-black/50 text-white px-3 py-1 rounded-md text-sm"
        >
          Exit
        </button>
      )}
      {isMobile && !isLandscape && (
        <div className="absolute top-0 left-0 right-0 bg-black/50 text-white text-center py-2 z-50">
          <p className="text-sm">Rotate your device for a better experience</p>
        </div>
      )}
      <div
        className={`w-full h-full ${isMobile && isFullscreen ? 'fixed inset-0 bg-white' : ''}`}
        style={{
          width: keyboardWidth,
          minWidth: "100%",
          height: isMobile ? (isLandscape ? "100vh" : "20vh") : "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isMobile && !isLandscape ? "40px" : "0"
        }}
      >
        <div 
          className="relative w-full h-full"
          style={{
            maxWidth: "100%",
            maxHeight: "100%"
          }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 rounded-md">
              <div className="text-white text-center p-4 w-64">
                <p className="mb-2">Loading piano sounds... {loadingProgress}%</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: `${loadingProgress}%` }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Render white keys first (so black keys can overlay) */}
          {pianoKeys
            .filter((key) => !key.isBlack)
            .map((key) => (
              <PianoKey
                key={key.note}
                note={key.note}
                keyboardKey={key.keyboardKey}
                isBlack={false}
                isActive={activeKeys.has(key.note)}
                onMouseDown={() => handleMouseDown(key.note, false)}
                onMouseUp={() => handleMouseUp(key.note)}
                onTouchStart={() => handleMouseDown(key.note, false)}
                onTouchEnd={() => handleMouseUp(key.note)}
                index={key.index}
                showOctave={false}
                width={100 / whiteKeyCount}
                isLandscape={isLandscape}
              />
            ))}

          {/* Render black keys on top */}
          {pianoKeys
            .filter((key) => key.isBlack)
            .map((key) => (
              <PianoKey
                key={key.note}
                note={key.note}
                keyboardKey={key.keyboardKey}
                isBlack={true}
                isActive={activeKeys.has(key.note)}
                onMouseDown={() => handleMouseDown(key.note, true)}
                onMouseUp={() => handleMouseUp(key.note)}
                onTouchStart={() => handleMouseDown(key.note, true)}
                onTouchEnd={() => handleMouseUp(key.note)}
                index={key.index}
                showOctave={false}
                flatName={key.flatName}
                width={100 / whiteKeyCount}
                isLandscape={isLandscape}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
