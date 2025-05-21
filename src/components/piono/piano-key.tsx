"use client"

interface PianoKeyProps {
  note: string
  keyboardKey: string
  isBlack: boolean
  isActive: boolean
  onMouseDown: () => void
  onMouseUp: () => void
  onTouchStart: () => void
  onTouchEnd: () => void
  index: number
  showOctave?: boolean
  flatName?: string
}

export default function PianoKey({
  note,
  keyboardKey,
  isBlack,
  isActive,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  index,
  showOctave = false,
  flatName,
}: PianoKeyProps) {
  // Key dimensions - exactly matching Musicca's proportions
  const whiteKeyWidth = "40px"
  const blackKeyWidth = "24px"

  // Position based on index
  const keyStyle = {
    width: isBlack ? blackKeyWidth : whiteKeyWidth,
    height: isBlack ? "110px" : "180px",
    left: `calc(${index} * ${whiteKeyWidth})`,
    zIndex: isBlack ? 2 : 1,
    borderRadius: "0 0 4px 4px", // Slightly rounded bottom corners
  }

  // Musicca-style key colors with improved active state transitions
  const whiteKeyClasses = `absolute border border-gray-300 ${
    isActive ? "bg-gray-200" : "bg-white"
  } transition-colors duration-75 shadow-sm`

  const blackKeyClasses = `absolute ${isActive ? "bg-gray-700" : "bg-black"} transition-colors duration-75 shadow-md`

  // Extract note name and octave
  const noteName = note.replace(/[0-9]/g, "")
  const octave = note.match(/\d+/)?.[0] || ""

  // Display note name with optional octave
  const displayName = showOctave ? `${noteName}${octave}` : noteName

  return (
    <div
      className={isBlack ? blackKeyClasses : whiteKeyClasses}
      style={keyStyle}
      onMouseDown={(e) => {
        e.preventDefault()
        onMouseDown()
      }}
      onMouseUp={(e) => {
        e.preventDefault()
        onMouseUp()
      }}
      onMouseLeave={onMouseUp}
      onTouchStart={(e) => {
        e.preventDefault()
        onTouchStart()
      }}
      onTouchEnd={(e) => {
        e.preventDefault()
        onTouchEnd()
      }}
    >
      {/* Note name display */}
      {isBlack ? (
        <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-white font-medium">
          {displayName}
          {flatName && (
            <>
              <br />
              {flatName.replace(/[0-9]/g, "")}
            </>
          )}
        </div>
      ) : (
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-800 font-medium">
          {displayName}
        </div>
      )}

      {/* Keyboard shortcut - show with low opacity */}
      <div className="absolute bottom-16 left-0 right-0 text-center text-[8px] opacity-30">{keyboardKey}</div>
    </div>
  )
}
