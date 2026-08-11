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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onOpen={openSidebar}
        onClose={closeSidebar}
      />

      <main
        className={`min-h-screen min-w-0 overflow-x-hidden transition-[margin-left,width] duration-300 ease-in-out ${
          isSidebarOpen
            ? "w-full lg:ml-64 lg:w-[calc(100%-16rem)]"
            : "ml-0 w-full lg:ml-0 lg:w-full"
        }`}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}