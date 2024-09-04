import { Inter } from "next/font/google";
import "./globals.css";
import DockBar from "@/components/DockBar";
import Footer from "@/components/Footer";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Trever | IT 專家與網頁開發者',
    template: '%s | Trever'
  },
  description: 'Trever 是一位 IT 專家和網頁開發者，專注於創建無障礙和創新的網頁解決方案。探索他的項目和技能。',
  keywords: ['IT 專家', '網頁開發者', '無障礙設計', '創新', '作品集', 'Trever'],
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
    languages: {
      'zh-TW': '/zh-TW',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Trever | IT 專家與網頁開發者",
    description: "探索 Trever 在網頁開發和 IT 領域的項目和技能。",
    url: 'https://techtrever.site',
    siteName: 'Trever 的作品集',
    images: [
      {
        url: 'https://techtrever.site/default-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trever - IT 專家與網頁開發者',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trever | IT 專家與網頁開發者",
    description: "探索 Trever 在網頁開發和 IT 領域的項目和技能。",
    images: ['https://techtrever.site/default-og-image.jpg'],
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
              "jobTitle": "IT 專家 & 網頁開發者",
              "url": "https://techtrever.site",
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} vsc-initialized`}>
        {children}
        <DockBar />
        <Footer />
      </body>
    </html>
  );
}
