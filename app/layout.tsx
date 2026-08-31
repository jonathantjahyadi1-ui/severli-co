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
  metadataBase: new URL("https://severli.com"),
  title: "Severli — Official Website",
  description:
    "Severli is an Indonesian womenswear brand based in Jakarta, creating thoughtfully designed pieces for work and everyday life.",
  applicationName: "Severli",
  creator: "Severli",
  publisher: "PT Thriva Grovia Bersama",
  category: "Fashion",
  openGraph: {
    type: "website",
    locale: "en_ID",
    siteName: "Severli",
    title: "Severli — Official Website",
    description:
      "An Indonesian womenswear brand creating thoughtfully designed pieces for work and everyday life.",
  },
  twitter: {
    card: "summary",
    title: "Severli — Official Website",
    description:
      "An Indonesian womenswear brand creating thoughtfully designed pieces for work and everyday life.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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