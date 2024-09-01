import { Inter } from "next/font/google";
import "./globals.css";
import DockBar from "@/components/DockBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Portfolio",
  description: "A showcase of my work and skills",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} vsc-initialized `}>
        {children}
        <DockBar />
        <Footer />
      </body>
    </html>
  );
}
