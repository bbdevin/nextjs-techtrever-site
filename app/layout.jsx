import { Inter } from "next/font/google";
import "./globals.css";
import DockBar from "@/components/DockBar";
import Footer from "@/components/Footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className} vsc-initialized `}>
        {children}
        <DockBar />
        <Footer />
      </body>
    </html>
  );
}
