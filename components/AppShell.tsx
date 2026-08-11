"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onOpen={openSidebar}
        onClose={closeSidebar}
      />

      <main
        className={`min-h-screen transition-[margin-left] duration-300 ease-in-out ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}