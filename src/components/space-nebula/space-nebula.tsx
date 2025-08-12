"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import PianoKeyboard from "@/components/piono/page";


type Star = {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

type Cloud = {
  id: number
  x: number
  y: number
  scale: number
  opacity: number
  duration: number
  delay: number
}

const generateStars = (count: number): Star[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }))

const generateClouds = (count: number): Cloud[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 120 - 10,
    y: Math.random() * 120 - 10,
    scale: Math.random() * 0.8 + 0.4,
    opacity: Math.random() * 0.3 + 0.1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

export default function StarfieldBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [clouds, setClouds] = useState<Cloud[]>([])
  const [cloudSize, setCloudSize] = useState(400)

  useEffect(() => {
    setStars(generateStars(150))
    setClouds(generateClouds(8))
    if (window.innerWidth < 768) {
      setCloudSize(250)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      document.documentElement.style.setProperty("--parallax-x", `${x}px`)
      document.documentElement.style.setProperty("--parallax-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-emerald-800/30" />

      {/* Animated clouds */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloudSize}px`,
            height: `${cloudSize * 0.75}px`,
            background: `radial-gradient(ellipse, rgba(6, 78, 59, ${cloud.opacity}) 0%, rgba(20, 83, 45, ${cloud.opacity * 0.8}) 30%, transparent 70%)`,
            transform: "translate(var(--parallax-x), var(--parallax-y))",
          }}
          initial={{ scale: cloud.scale, x: 0, y: 0, rotate: 0 }}
          animate={{
            scale: [cloud.scale, cloud.scale * 1.2, cloud.scale],
            x: [-20, 20, -20],
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background glow layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)",
        }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-yellow-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(253, 224, 71, 0.8)`,
          }}
          initial={{ opacity: 0.3, scale: 0.5 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger rotating stars */}
      {Array.from({ length: 20 }, (_, i) => {
        const x = Math.random() * 100
        const y = Math.random() * 100
        const size = Math.random() * 2 + 2
        return (
          <motion.div
            key={`large-star-${i}`}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="bg-yellow-200 rounded-full absolute"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  boxShadow: `0 0 ${size * 3}px rgba(254, 240, 138, 0.9)`,
                }}
              />
              <div
                className="bg-yellow-100 absolute"
                style={{
                  width: `${size * 0.3}px`,
                  height: `${size * 2}px`,
                  left: `${size * 0.35}px`,
                  top: `${-size * 0.5}px`,
                  borderRadius: "50%",
                  boxShadow: `0 0 ${size}px rgba(254, 240, 138, 0.6)`,
                }}
              />
              <div
                className="bg-yellow-100 absolute"
                style={{
                  width: `${size * 2}px`,
                  height: `${size * 0.3}px`,
                  left: `${-size * 0.5}px`,
                  top: `${size * 0.35}px`,
                  borderRadius: "50%",
                  boxShadow: `0 0 ${size}px rgba(254, 240, 138, 0.6)`,
                }}
              />
            </motion.div>
          </motion.div>
        )
      })}

      {/* Floating particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-emerald-200 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Centered content */}
      <div className="absolute inset-0 text-center z-10 pt-10">
        <h1 className="text-white lg:text-5xl text-3xl font-semibold lg:leading-[4rem] mx-6">
          Play the Music You Love <br className="hidden lg:flex" /> with Our Online Piano
        </h1>
        <PianoKeyboard />
      </div>
    </div>
  )
}
