"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Camera,
  Home,
  Info,
  Mail,
  Menu,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/collections", label: "Collections", icon: Briefcase },
  { href: "/best-sellers", label: "Best Sellers", icon: Star },
  { href: "/values", label: "Our Values", icon: TrendingUp },
  { href: "/team", label: "Our Team", icon: Users },
  { href: "/lookbook", label: "Lookbook", icon: Camera },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-md bg-black p-3 text-white lg:hidden"
        aria-label="Buka menu"
      >
        <Menu size={20} />
      </button>

      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          aria-label="Tutup menu"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-5 py-8 transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-serif text-2xl font-semibold tracking-wide text-black"
          >
            Severli.co
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-gray-600 lg:hidden"
            aria-label="Tutup menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 text-black"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <Icon size={16} className="shrink-0 opacity-60" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-gray-200 pt-5">
          <p className="text-xs leading-5 text-gray-400">
            Modern women&apos;s fashion for everyday confidence.
          </p>
        </div>
      </aside>
    </>
  );
}