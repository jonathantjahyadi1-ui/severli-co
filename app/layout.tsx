import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AppShell from "@/components/AppShell";

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
      <body
        className={`${belleza.variable} ${manrope.variable} overflow-x-hidden`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}