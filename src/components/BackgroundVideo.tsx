import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

const SEEK_THRESHOLD = 0.02
const SEEK_COOLDOWN_MS = 80

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevXRef = useRef(0)
  const lastSeekRef = useRef(0)
  const pendingDeltaRef = useRef(0)
  const rafRef = useRef(0)

  // Desktop mouse scrubbing — throttled with rAF + cooldown
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const flush = () => {
      const now = Date.now()
      const elapsed = now - lastSeekRef.current
      if (elapsed < SEEK_COOLDOWN_MS || !video.duration) {
        rafRef.current = requestAnimationFrame(flush)
        return
      }

      const delta = pendingDeltaRef.current
      pendingDeltaRef.current = 0

      if (Math.abs(delta) > SEEK_THRESHOLD) {
        const targetTime = Math.min(
          Math.max(video.currentTime + delta * 0.8 * video.duration, 0),
          video.duration
        )
        video.currentTime = targetTime
        lastSeekRef.current = now
      }

      rafRef.current = requestAnimationFrame(flush)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return

      const dx = e.clientX - prevXRef.current
      prevXRef.current = e.clientX
      pendingDeltaRef.current += dx / window.innerWidth
    }

    prevXRef.current = 0
    rafRef.current = requestAnimationFrame(flush)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Desktop: play on mount
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
