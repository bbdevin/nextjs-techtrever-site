import { Inter } from "next/font/google";
import "./globals.css";
import DockBar from "@/components/DockBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} vsc-initialized`}>
        {children}
        <DockBar />
      </body>
    </html>
  );
}
