import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevXRef = useRef(0)
  const isSeekingRef = useRef(false)

  // Desktop mouse scrubbing
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return
      if (!video.duration) return
      if (isSeekingRef.current) return

      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      const targetTime = Math.min(
        Math.max(video.currentTime + (delta / window.innerWidth) * 0.8 * video.duration, 0),
        video.duration
      )

      isSeekingRef.current = true
      video.currentTime = targetTime
    }

    const handleSeeked = () => {
      isSeekingRef.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('seeked', handleSeeked)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [])

  // Mobile: no autoplay — saves bandwidth and CPU
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.innerWidth >= 1024) {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full bg-transparent" style={{ willChange: 'transform' }}>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-right lg:object-right-bottom"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  )
}
