"use client"

import React, { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface StorySlideshowProps {
  isOpen: boolean
  onClose: () => void
  audioRef?: React.RefObject<HTMLAudioElement | null>
  audioAllowed?: boolean
}

export default function StorySlideshow({ isOpen, onClose, audioRef: externalAudioRef, audioAllowed = true }: StorySlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const localAudioRef = useRef<HTMLAudioElement | null>(null)
  const audioRef = externalAudioRef ?? localAudioRef
  const [audioAllowedState, setAudioAllowedState] = useState(audioAllowed)

  const images = [
    "/images/Show2.jpeg",
    "/images/show3.jpeg",
    "/images/show1.jpeg",
    "/images/B.jpeg",
    "/images/G.jpeg",
    "/images/container.jpg",
    "/images/ground.jpg",
    "/images/solar.jpg",
    "/images/grid battery.jpg",
    "/images/HDEP.jpg",
    "/images/maintenance.jpg",
    "/images/welding.jpg",
    "/images/maintainence.jpg",
    "/images/Geospatial.jpg",
    "/images/converyor belt.jpg",
    "/images/oratalesedi-hero-img.jpg",
    "/images/oratalesedi-logo.png",
    "/images/oratalesedi-header-logo.png",
    // WhatsApp images
    "/images/WhatsApp Image 2025-06-04 at 15.34.41.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.24.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.24 (2).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.24 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.23.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.23 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.22.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.22 (2).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.22 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.21.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.21 (2).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.21 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.20.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.20 (2).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.20 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.19.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.19 (2).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.19 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.33.18.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.25.41.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.24.57.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.24.04.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.24.04 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.22.08.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.21.41.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.20.51.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.20.16.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.20.03.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.18.13.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.17.51.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.15.01.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.12.22.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.09.17.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.08.46.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.06.50.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.05.58.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.03.37.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.01.38.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 15.00.05.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.58.22.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.55.38.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.53.41.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.53.22.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.51.19.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.50.32.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.50.32 (1).jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.49.45.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.49.44.jpeg",
    "/images/WhatsApp Image 2025-06-04 at 14.49.44 (1).jpeg",
  ]

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0)
      setIsPlaying(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isPlaying || !isOpen) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isPlaying, isOpen, images.length])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // ensure audio is unmuted by default; parent can choose otherwise
    audio.muted = false

    if (isOpen && isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setAudioAllowedState(false)
          audio.pause()
        })
      }
    } else {
      audio.pause()
    }
  }, [isOpen, isPlaying, audioRef])

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
  const previousImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return
    switch (e.key) {
      case "ArrowLeft":
        previousImage()
        break
      case "ArrowRight":
        nextImage()
        break
      case "Escape":
        onClose()
        break
      case " ":
        e.preventDefault()
        setIsPlaying(!isPlaying)
        break
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, isPlaying])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
        <DialogTitle className="sr-only">Our Story Slideshow</DialogTitle>
        <div className="relative w-full h-full flex flex-col">
          {!externalAudioRef && (
            <audio ref={localAudioRef} src="/Oratalesedi-audio.mp3" loop preload="auto" className="sr-only" aria-hidden={!audioAllowedState} />
          )}

          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">Our Story</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:bg-white/20">
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                {audioRef.current ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (!audioRef.current) return
                      audioRef.current.muted = !audioRef.current.muted
                      setAudioAllowedState(!audioRef.current.muted)
                    }}
                    className="text-white hover:bg-white/20"
                    aria-label={audioRef.current && audioRef.current.muted ? "Unmute audio" : "Mute audio"}
                  >
                    {audioRef.current && audioRef.current.muted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume className="h-5 w-5" />
                    )}
                  </Button>
                ) : null}

                <span className="text-white/80 text-sm">{currentImageIndex + 1} / {images.length}</span>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-[800px] h-[600px] relative">
                <img src={images[currentImageIndex]} alt={images[currentImageIndex].includes("oratalesedi") ? "Oratalesedi project image" : `Story image ${currentImageIndex + 1}`} className="w-full h-full object-cover rounded-lg transition-opacity duration-500" onLoad={() => setIsLoading(false)} onError={() => setIsLoading(false)} />
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
                  </div>
                )}
              </div>
            </div>

            <Button variant="ghost" size="lg" onClick={previousImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300">
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button variant="ghost" size="lg" onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300">
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex ? "border-white scale-110" : "border-white/30 hover:border-white/60"}`}>
                  <img src={image} alt={image.includes("oratalesedi") ? "Oratalesedi thumbnail" : `Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div className="h-full bg-white transition-all duration-300 ease-linear" style={{ width: `${((currentImageIndex + 1) / images.length) * 100}%` }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}