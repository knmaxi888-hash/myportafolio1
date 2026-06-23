import { useState, useEffect, useRef } from 'react'

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setDisplayed('')
    setDone(false)

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current++
        if (indexRef.current <= text.length) {
          setDisplayed(text.slice(0, indexRef.current))
        } else {
          setDone(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}
