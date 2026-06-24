import { useEffect, useRef, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

export default function BackgroundVideo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024)
  }, [])

  // Desktop: mouse moves video with CSS transform (parallax)
  useEffect(() => {
    if (!isDesktop) return
    const el = containerRef.current
    if (!el) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let raf = 0

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.08)
      currentY = lerp(currentY, targetY, 0.08)
      el.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.15)`
      raf = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2  // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2 // -1 to 1
      targetX = x * -30  // max 30px movement
      targetY = y * -20  // max 20px movement
    }

    raf = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDesktop])

  // Desktop: defer load + play
  useEffect(() => {
    if (!isDesktop) return
    const video = containerRef.current?.querySelector('video')
    if (!video) return

    const loadAndPlay = () => {
      video.load()
      video.play().catch(() => {})
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadAndPlay, { timeout: 2000 })
    } else {
      setTimeout(loadAndPlay, 100)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full bg-transparent">
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ willChange: 'transform', contain: 'paint' }}
      >
        <video
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
