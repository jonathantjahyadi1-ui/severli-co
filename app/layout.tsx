import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const belleza = localFont({
  src: "./fonts/Belleza-Regular.ttf",
  variable: "--font-belleza",
  weight: "400",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Severli.co — Modern Korean Style for Everyday Women",
  description:
    "Company profile Severli.co, a modern women's fashion brand based in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${belleza.variable} ${manrope.variable}`}>
        <div className="min-h-screen bg-white">
          <Sidebar />

          <main className="min-h-screen lg:ml-64">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}