import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"], // Load specific font weights
  variable: "--font-inter", 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500", "600"], // Load specific font weights
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navbar/>
        {/* {children} */}
        <main className="flex-1">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
