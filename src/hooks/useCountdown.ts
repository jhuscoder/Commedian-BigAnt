'use client'

import { useEffect, useState } from 'react'
import { SHOW_START } from '@/lib/config'

export { SHOW_START }

export function useCountdown(targetIso: string = SHOW_START) {
  const target = new Date(targetIso).getTime()
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (now === null) return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false }

  const diff = Math.max(0, target - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
    isLive: diff <= 0,
  }
}