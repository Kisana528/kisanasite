import '../styles/globals.css'
import Layout from '../components/layout'
import '../styles/atom-one-dark-reasonable.min.css'
import Script from "next/script"
import * as gtag from "../lib/gtag"
import { useRouter } from "next/router"
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouterChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange)
    }
  }, [router.events])
  return (
    <ThemeProvider>
      <Layout>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA4_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA4_ID}');
            `,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}