'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { GA_MEASUREMENT_ID, trackPageView } from '@/lib/analytics'

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastSentPath = useRef<string | null>(null)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const query = searchParams.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname

    const sendOrDefer = () => {
      if (typeof window.gtag !== 'function') return false
      if (lastSentPath.current === pagePath) return true
      if (lastSentPath.current === null) {
        lastSentPath.current = pagePath
        return true
      }
      lastSentPath.current = pagePath
      trackPageView(pagePath)
      return true
    }

    if (sendOrDefer()) return

    const id = window.setInterval(() => {
      if (sendOrDefer()) window.clearInterval(id)
    }, 50)
    return () => window.clearInterval(id)
  }, [pathname, searchParams])

  return null
}
