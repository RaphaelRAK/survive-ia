import type { Metadata } from 'next'
import Script from 'next/script'
import AnalyticsTracker from '@/components/analytics-tracker'
import './globals.css'

export const metadata: Metadata = {
  title: "L'IA va-t-elle vraiment me remplacer ?",
  description:
    "Un quiz fun et honnête pour savoir si votre métier est menacé par l'IA — sans catastrophisme.",
  openGraph: {
    title: "L'IA va-t-elle vraiment me remplacer ?",
    description: 'Un quiz fun et honnête par Raphaël Rakotonaivo.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  anonymize_ip: true,
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  )
}
