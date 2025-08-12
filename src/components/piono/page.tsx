"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

// Type definitions
interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  max: number;
  step: number;
  className?: string;
}

interface IconProps {
  className?: string;
}

interface KeyData {
  note: string;
  displayNote: string;
  octave: number;
  type: "white" | "black";
  frequency: number;
  keyboardKey: string;
  index: number;
}

// Custom Slider Component
const Slider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  max,
  step,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange([parseInt(e.target.value)]);
  };

  return (
    <input
      type="range"
      min="0"
      max={max}
      step={step}
      value={value[0]}
      onChange={handleChange}
      className={`h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${className}`}
      style={{
        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
          (value[0] / max) * 100
        }%, #e5e7eb ${(value[0] / max) * 100}%, #e5e7eb 100%)`,
      }}
    />
  );
};

// Icons
const Volume2: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M6.343 6.343L10 10h4v4l-3.657 3.657a1 1 0 01-1.414 0L6.343 15.05a.993.993 0 01-.29-.707V9.657c0-.265.105-.52.29-.707z"
    />
  </svg>
);

const Waves: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"
    />
  </svg>
);

const ExpandIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
    />
  </svg>
);

const XIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Piano harmonic series for realistic timbre (from first app)
interface HarmonicData {
  ratio: number;
  amplitude: number;
}

const pianoHarmonics: HarmonicData[] = [
  { ratio: 1.0, amplitude: 1.0 },
  { ratio: 2.0, amplitude: 0.6 },
  { ratio: 3.0, amplitude: 0.4 },
  { ratio: 4.0, amplitude: 0.3 },
  { ratio: 5.0, amplitude: 0.2 },
  { ratio: 6.0, amplitude: 0.15 },
  { ratio: 7.0, amplitude: 0.1 },
  { ratio: 8.0, amplitude: 0.08 },
];

// Keyboard mapping from first app
const keyboardMap: { [key: string]: string } = {
  // White keys
  a: "C4",
  s: "D4",
  d: "E4",
  f: "F4",
  g: "G4",
  h: "A4",
  j: "B4",
  k: "C5",
  l: "D5",
  ";": "E5",
  "'": "F5",
  z: "G5",
  x: "A5",
  c: "B5",
  v: "C6",
  b: "D6",
  n: "E6",
  m: "F6",
  ",": "G6",
  ".": "A6",
  "/": "B6",

  // Black keys
  w: "C#4",
  e: "D#4",
  t: "F#4",
  y: "G#4",
  u: "A#4",
  o: "C#5",
  p: "D#5",
  "[": "F#5",
  "]": "G#5",
  "\\": "A#5",
  q: "C#6",
  r: "D#6",
  i: "F#6",
  "1": "G#6",
  "2": "A#6",
};

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["C#", "D#", "", "F#", "G#", "A#", ""];

// Calculate frequency for a note
function getFrequency(note: string, octave: number): number {
  const noteFrequencies: { [key: string]: number } = {
    C: 261.6256,
    "C#": 277.1826,
    D: 293.6648,
    "D#": 311.127,
    E: 329.6276,
    F: 349.2282,
    "F#": 369.9944,
    G: 391.9954,
    "G#": 415.3047,
    A: 440.0,
    "A#": 466.1638,
    B: 493.8833,
  };

  const baseFreq = noteFrequencies[note] || 440;
  return baseFreq * Math.pow(2, octave - 4);
}

// Get keyboard key for a note
function getKeyboardKey(note: string): string {
  for (const [key, mappedNote] of Object.entries(keyboardMap)) {
    if (mappedNote === note) {
      return key.toUpperCase();
    }
  }
  return "";
}

// Generate piano keys with proper layout
const generateKeys = (): KeyData[] => {
  const keys: KeyData[] = [];
  let whiteKeyIndex = 0;
  
  for (let octave = 4; octave <= 6; octave++) {
    whiteKeys.forEach((key, keyIndex) => {
      // White key
      keys.push({
        note: `${key}${octave}`,
        displayNote: key,
        octave,
        type: "white",
        frequency: getFrequency(key, octave),
        keyboardKey: getKeyboardKey(`${key}${octave}`),
        index: whiteKeyIndex,
      });
      whiteKeyIndex++;

      // Black key (if exists)
      if (blackKeys[keyIndex]) {
        keys.push({
          note: `${blackKeys[keyIndex]}${octave}`,
          displayNote: blackKeys[keyIndex],
          octave,
          type: "black",
          frequency: getFrequency(blackKeys[keyIndex], octave),
          keyboardKey: getKeyboardKey(`${blackKeys[keyIndex]}${octave}`),
          index: whiteKeyIndex - 0.5,
        });
      }
    });
  }
  return keys;
};

// Piano Key Component
interface PianoKeyProps {
  keyData: KeyData;
  isActive: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
  whiteKeyCount: number;
  isMobile: boolean;
  isFullscreen: boolean;
  isLandscape: boolean;
}

const PianoKey: React.FC<PianoKeyProps> = ({
  keyData,
  isActive,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  whiteKeyCount,
  isMobile,
  isFullscreen,
  isLandscape,
}) => {
  const { note, displayNote, type, keyboardKey, index } = keyData;
  
  if (type === "white") {
    const keyWidth = 100 / whiteKeyCount;
    const leftPosition = index * keyWidth;
    
    return (
      <div
        className={`absolute select-none ${
          isMobile && !isFullscreen
            ? "h-16"
            : isMobile && isFullscreen && isLandscape
            ? "h-32"
            : isFullscreen
            ? "h-48"
            : "h-32"
        } bg-white border border-gray-300 rounded-b-lg shadow-md hover:bg-gray-50 active:bg-gray-100 transition-all duration-75 flex flex-col items-center justify-between py-2 text-xs font-medium text-gray-600 cursor-pointer ${
          isActive ? "bg-blue-100 shadow-inner transform translate-y-0.5 border-blue-300" : ""
        }`}
        style={{
          left: `${leftPosition}%`,
          width: `${keyWidth}%`,
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          onMouseDown();
        }}
        onMouseUp={onMouseUp}
        onTouchStart={(e) => {
          e.preventDefault();
          onTouchStart();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          onTouchEnd();
        }}
      >
        <div className={`${
          isMobile && !isFullscreen ? "text-xs" : "text-xs"
        } text-gray-400 font-mono bg-gray-100 px-1 rounded ${
          isMobile && !isFullscreen ? "hidden sm:block" : ""
        }`}>
          {keyboardKey}
        </div>
        <div className={`text-gray-600 ${
          isMobile && !isFullscreen ? "text-xs" : ""
        }`}>
          {displayNote}
        </div>
      </div>
    );
  } else {
    // Black key
    const whiteKeyWidth = 100 / whiteKeyCount;
    const leftPosition = index * whiteKeyWidth;
    const blackKeyWidth = whiteKeyWidth * 0.6;
    
    return (
      <div
        className={`absolute select-none z-10 ${
          isMobile && !isFullscreen
            ? "h-10"
            : isMobile && isFullscreen && isLandscape
            ? "h-20"
            : isFullscreen
            ? "h-32"
            : "h-20"
        } bg-gray-800 hover:bg-gray-700 active:bg-gray-600 rounded-b-lg shadow-lg transition-all duration-75 flex flex-col items-center justify-between py-1 text-xs font-medium text-white cursor-pointer ${
          isActive ? "bg-blue-700 shadow-inner transform translate-y-0.5" : ""
        }`}
        style={{
          left: `${leftPosition}%`,
          width: `${blackKeyWidth}%`,
          marginLeft: `${-blackKeyWidth / 2}%`,
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          onMouseDown();
        }}
        onMouseUp={onMouseUp}
        onTouchStart={(e) => {
          e.preventDefault();
          onTouchStart();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          onTouchEnd();
        }}
      >
        <div className={`${
          isMobile && !isFullscreen ? "text-[9px]" : "text-[9px]"
        } text-gray-300 font-mono bg-gray-700 px-1 rounded ${
          isMobile && !isFullscreen ? "hidden sm:block" : ""
        }`}>
          {keyboardKey}
        </div>
        <div className={`text-white ${
          isMobile && !isFullscreen ? "text-[9px]" : "text-[9px]"
        }`}>
          {displayNote}
        </div>
      </div>
    );
  }
};

export default function UltimatePiano(): React.ReactElement {
  const [volume, setVolume] = useState([70]);
  const [reverb, setReverb] = useState([30]);
  const [activeKeys, setActiveKeys] = useState(new Set<string>());
  const [pressedKeys, setPressedKeys] = useState(new Set<string>());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const reverbNodeRef = useRef<ConvolverNode | null>(null);
  const pianoContainerRef = useRef<HTMLDivElement | null>(null);

  // Check device type and orientation
  useEffect(() => {
    const checkDeviceAndOrientation = () => {
      if (typeof window !== "undefined") {
        const mobile = window.innerWidth < 768;
        const landscape = window.innerWidth > window.innerHeight;
        
        setIsMobile(mobile);
        setIsLandscape(landscape);
      }
    };

    checkDeviceAndOrientation();
    window.addEventListener('resize', checkDeviceAndOrientation);
    window.addEventListener('orientationchange', () => {
      setTimeout(checkDeviceAndOrientation, 100);
    });
    
    return () => {
      window.removeEventListener('resize', checkDeviceAndOrientation);
      window.removeEventListener('orientationchange', checkDeviceAndOrientation);
    };
  }, [isFullscreen]);

  // Initialize audio context (from first app)
  useEffect(() => {
    const initAudio = async () => {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();
      const ctx = audioContextRef.current;

      masterGainRef.current = ctx.createGain();
      masterGainRef.current.connect(ctx.destination);

      reverbNodeRef.current = ctx.createConvolver();

      const length = ctx.sampleRate * 3;
      const impulse = ctx.createBuffer(2, length, ctx.sampleRate);

      for (let channel = 0; channel < 2; channel++) {
        const channelData = impulse.getChannelData(channel);
        for (let i = 0; i < length; i++) {
          const n = length - i;
          const earlyReflection =
            i < ctx.sampleRate * 0.1
              ? Math.random() * 0.5 * Math.pow(n / length, 0.5)
              : 0;
          const lateReverb = Math.random() * Math.pow(n / length, 1.5);
          channelData[i] =
            (earlyReflection + lateReverb) * (Math.random() > 0.5 ? 1 : -1);
        }
      }

      reverbNodeRef.current.buffer = impulse;
      reverbNodeRef.current.connect(masterGainRef.current);
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Update master gain
  useEffect(() => {
    if (masterGainRef.current && audioContextRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        volume[0] / 100,
        audioContextRef.current.currentTime
      );
    }
  }, [volume]);

  // Advanced piano sound synthesis (from first app)
  const playNote = useCallback(
    (frequency: number, note: string, velocity: number = 0.7) => {
      if (!audioContextRef.current || !masterGainRef.current) return;

      const ctx = audioContextRef.current;
      const now = ctx.currentTime;

      const oscillators: OscillatorNode[] = [];
      const gainNodes: GainNode[] = [];

      pianoHarmonics.forEach((harmonic, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        if (index === 0) {
          osc.type = "triangle";
        } else if (index < 3) {
          osc.type = "sine";
        } else {
          osc.type = "sawtooth";
        }

        osc.frequency.setValueAtTime(frequency * harmonic.ratio, now);

        const harmonicGain = harmonic.amplitude * velocity;
        gain.gain.setValueAtTime(0, now);

        osc.connect(gain);
        oscillators.push(osc);
        gainNodes.push(gain);
      });

      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0, now);

      const attackTime = 0.005 + (1 - velocity) * 0.01;
      const decayTime = 0.1 + velocity * 0.05;
      const sustainLevel = 0.3 + velocity * 0.4;
      const releaseTime = 1.5 + velocity * 1.5;

      noteGain.gain.linearRampToValueAtTime(velocity, now + attackTime);
      noteGain.gain.exponentialRampToValueAtTime(
        sustainLevel,
        now + attackTime + decayTime
      );
      noteGain.gain.exponentialRampToValueAtTime(sustainLevel * 0.7, now + 0.5);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + releaseTime);

      gainNodes.forEach((gain, index) => {
        const harmonicLevel = pianoHarmonics[index].amplitude * velocity;
        gain.gain.linearRampToValueAtTime(harmonicLevel, now + attackTime);
        gain.gain.exponentialRampToValueAtTime(
          harmonicLevel * 0.6,
          now + attackTime + decayTime
        );
        gain.gain.exponentialRampToValueAtTime(harmonicLevel * 0.3, now + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, now + releaseTime);
        gain.connect(noteGain);
      });

      const dryGain = ctx.createGain();
      const wetGain = ctx.createGain();

      const reverbAmount = reverb[0] / 100;
      dryGain.gain.setValueAtTime(1 - reverbAmount * 0.5, now);
      wetGain.gain.setValueAtTime(reverbAmount, now);

      noteGain.connect(dryGain);
      noteGain.connect(wetGain);

      dryGain.connect(masterGainRef.current);
      if (reverbNodeRef.current) {
        wetGain.connect(reverbNodeRef.current);
      }

      oscillators.forEach((osc) => {
        osc.start(now);
        osc.stop(now + releaseTime);
      });

      setActiveKeys((prev) => new Set(prev).add(note));
      const feedbackDuration = 200 + velocity * 200;
      setTimeout(() => {
        setActiveKeys((prev) => {
          const newSet = new Set(prev);
          newSet.delete(note);
          return newSet;
        });
      }, feedbackDuration);
    },
    [reverb]
  );

  // Keyboard event handlers
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (keyboardMap[key] && !pressedKeys.has(key)) {
        event.preventDefault();
        setPressedKeys((prev) => new Set(prev).add(key));

        const note = keyboardMap[key];
        const keyData = generateKeys().find((k) => k.note === note);
        if (keyData) {
          const velocity = 0.6 + Math.random() * 0.3;
          playNote(keyData.frequency, note, velocity);
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (keyboardMap[key]) {
        setPressedKeys((prev) => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [playNote, pressedKeys]);

  // Mouse/Touch handlers
  const handleKeyPress = useCallback(
    (key: KeyData, event?: React.MouseEvent) => {
      let velocity = 0.7;
      
      if (event) {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const clickY = event.clientY;
        const distance = Math.abs(clickY - centerY) / (rect.height / 2);
        velocity = 0.4 + (1 - distance) * 0.5;
      }

      playNote(key.frequency, key.note, velocity);
    },
    [playNote]
  );

  // Fullscreen functionality
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (pianoContainerRef.current) {
          await pianoContainerRef.current.requestFullscreen();
          setIsFullscreen(true);
          
          // Lock orientation to landscape if possible
          if (screen.orientation && screen.orientation.lock) {
            try {
              await screen.orientation.lock('landscape');
            } catch (err) {
              console.log('Orientation lock not supported or failed');
            }
          }
        }
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
        
        // Unlock orientation
        if (screen.orientation && screen.orientation.unlock) {
          screen.orientation.unlock();
        }
      }
    } catch (error) {
      console.error('Fullscreen operation failed:', error);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Resume audio context on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (
        audioContextRef.current &&
        audioContextRef.current.state === "suspended"
      ) {
        audioContextRef.current.resume();
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  const keys = generateKeys();
  const whiteKeysOnly = keys.filter((key) => key.type === "white");

  return (
    <div className={`min-h-screen ${isFullscreen ? 'bg-gray-900' : 'pt-10'}`}>
      
      {/* Rotation suggestion for mobile */}
      {isMobile && !isLandscape && !isFullscreen && (
        <div className="bg-[#3AB24A] text-white text-center py-2 my-2">
          <p className="text-sm">Rotate your device for a better experience</p>
        </div>
      )}
      
      <div 
        ref={pianoContainerRef}
        className={`${
          isFullscreen 
            ? 'fixed inset-0 flex flex-col justify-center bg-gray-900' 
            : 'w-full'
        }`}
      >
        {/* Fullscreen controls */}
        {isFullscreen && (
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            <button
              onClick={toggleFullscreen}
              className="bg-[#3AB24A] text-white p-2 rounded-full transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Mobile fullscreen button */}
        {isMobile && !isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 z-10 bg-[#3AB24A] text-white px-3 py-1 rounded-md text-sm"
          >
            Fullscreen
          </button>
        )}

        <div className={`w-full mx-auto ${
          isFullscreen ? 'flex-1 flex flex-col justify-center px-4' : 'max-w-6xl'
        }`}>
          
          {/* Piano */}
          <div className={`bg-white rounded-t-2xl shadow-2xl ${
            isFullscreen ? 'flex-1 flex items-center' : 'p-2 sm:p-4 lg:p-8'
          }`}>
            <div 
              className={`relative w-full mx-auto ${
                isFullscreen 
                  ? isMobile && isLandscape ? 'h-40' : 'h-64'
                  : isMobile ? 'h-24' : 'h-40'
              }`}
              style={{ maxWidth: "100%" }}
            >
              {keys.map((key) => (
                <PianoKey
                  key={key.note}
                  keyData={key}
                  isActive={
                    activeKeys.has(key.note) ||
                    pressedKeys.has(key.keyboardKey.toLowerCase())
                  }
                  onMouseDown={() => handleKeyPress(key)}
                  onMouseUp={() => {}}
                  onTouchStart={() => handleKeyPress(key)}
                  onTouchEnd={() => {}}
                  whiteKeyCount={whiteKeysOnly.length}
                  isMobile={isMobile}
                  isFullscreen={isFullscreen}
                  isLandscape={isLandscape}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className={`bg-gray-800 rounded-b-xl shadow-lg ${
            isFullscreen ? 'p-4' : 'p-3 sm:p-6'
          }`}>
            <div className={`flex items-center justify-center ${
              isMobile && !isFullscreen ? 'flex-col space-y-4' : 'space-x-6 sm:space-x-12'
            }`}>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Volume2 className={`${
                  isMobile && !isFullscreen ? 'w-4 h-4' : 'w-5 h-5'
                } text-gray-400`} />
                <span className={`${
                  isMobile && !isFullscreen ? 'text-xs' : 'text-sm'
                } font-medium text-white ${
                  isMobile && !isFullscreen ? 'w-12' : 'w-16'
                }`}>
                  Volume
                </span>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className={isMobile && !isFullscreen ? 'w-20' : 'w-32'}
                />
                <span className={`${
                  isMobile && !isFullscreen ? 'text-xs' : 'text-xs'
                } text-white w-8`}>
                  {volume[0]}%
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Waves className={`${
                  isMobile && !isFullscreen ? 'w-4 h-4' : 'w-5 h-5'
                } text-gray-400`} />
                <span className={`${
                  isMobile && !isFullscreen ? 'text-xs' : 'text-sm'
                } font-medium text-white ${
                  isMobile && !isFullscreen ? 'w-12' : 'w-16'
                }`}>
                  Reverb
                </span>
                <Slider
                  value={reverb}
                  onValueChange={setReverb}
                  max={100}
                  step={1}
                  className={isMobile && !isFullscreen ? 'w-20' : 'w-32'}
                />
                <span className={`${
                  isMobile && !isFullscreen ? 'text-xs' : 'text-xs'
                } text-white w-8`}>
                  {reverb[0]}%
                </span>
              </div>
              
              {/* Desktop fullscreen toggle */}
              {!isMobile && (
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center space-x-2 bg-[#3AB24A] text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <ExpandIcon className="w-4 h-4" />
                  <span className="text-sm">
                    {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </span>
                </button>
              )}
            </div>
            
            {/* Instructions */}
            {!isMobile && !isFullscreen && (
              <div className="mt-4 text-center text-gray-400 text-sm">
                <p>Use your keyboard to play! Keys are mapped from A-Z and numbers.</p>
                <p>Click on piano keys or use keyboard shortcuts for the best experience.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}