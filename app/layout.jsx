import { Almendra } from "next/font/google";
import "./globals.css";
import DockBar from "@/components/DockBar";
import Footer from "@/components/Footer";
import Script from 'next/script';

const almendra = Almendra({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Trever | 網頁開發者 & 身障工程師',
    template: '%s | Trever 的個人作品集'
  },
  description: 'Trever 是一位網頁開發者和身障工程師，專注於創建無障礙和創新的網頁解決方案。探索他的項目和技能。',
  keywords: ['網頁開發者', '身障工程師', '無障礙設計', '作品集', 'Trever'],
  authors: [{ name: 'Trever' }],
  creator: 'Trever',
  publisher: 'Trever',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techtrever.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Trever | 網頁開發者 & 身障工程師的作品集",
    description: "探索 Trever 的網頁開發項目和技能，了解他作為身障工程師的獨特視角。",
    url: 'https://techtrever.site',
    siteName: 'Trever 的個人作品集',
    images: [
      {
        url: 'https://techtrever.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trever - 網頁開發者 & 身障工程師',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trever | 網頁開發者 & 身障工程師的作品集",
    description: "探索 Trever 的網頁開發項目和技能，了解他作為身障工程師的獨特視角。",
    images: ['https://techtrever.site/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Trever",
              "jobTitle": "網頁開發者 & 身障工程師",
              "url": "https://techtrever.site",
              "sameAs": [
                "https://github.com/bbdevin",
                "https://instagram.com/__trever_c_c"
              ],
              "description": "Trever 是一位網頁開發者和身障工程師，專注於創建無障礙和創新的網頁解決方案。"
            })
          }}
        />
      </head>
      <body className={`${almendra.className} vsc-initialized`}>
        {children}
        <DockBar />
        <Footer />
      </body>
    </html>
  );
}
