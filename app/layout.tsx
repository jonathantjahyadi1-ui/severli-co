import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

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
      <body>
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