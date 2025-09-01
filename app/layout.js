import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ryan Developer - The Portfolio",
  description: "Showcasing the work of Ryan Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
