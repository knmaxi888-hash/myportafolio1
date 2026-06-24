import { useEffect, useRef, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024)
  }, [])

  // Desktop: mouse X position controls playback rate (fluid)
  useEffect(() => {
    if (!isDesktop) return
    const video = videoRef.current
    if (!video) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!video.duration) return
      // Map mouse X to playback rate: center = paused, edges = ±2x
      const x = e.clientX / window.innerWidth
      const rate = (x - 0.5) * 4 // -2 to +2
      video.playbackRate = Math.abs(rate) < 0.1 ? 0 : rate
    }

    const handleMouseLeave = () => {
      video.playbackRate = 0
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isDesktop])

  // Desktop: start paused, mouse controls rate
  useEffect(() => {
    if (!isDesktop) return
    const video = videoRef.current
    if (!video) return

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        video.load()
        video.play().then(() => {
          video.playbackRate = 0
        }).catch(() => {})
      }, { timeout: 2000 })
    } else {
      setTimeout(() => {
        video.load()
        video.play().then(() => {
          video.playbackRate = 0
        }).catch(() => {})
      }, 100)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full bg-transparent"
      style={{ willChange: 'transform', contain: 'paint' }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        className="w-full h-full object-cover object-right lg:object-right-bottom"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  )
}
