"use client";

import Image from "next/image";
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
  X,
} from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/collections", label: "Collections", icon: Briefcase },
  { href: "/best-sellers", label: "Best Sellers", icon: Star },
  { href: "/values", label: "Our Values", icon: TrendingUp },
  { href: "/lookbook", label: "Lookbook", icon: Camera },
  { href: "/contact", label: "Contact", icon: Mail },
];

type SidebarProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function Sidebar({
  isOpen,
  onOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Tombol membuka sidebar */}
      {!isOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="fixed left-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-gray-800"
          aria-label="Buka menu"
        >
          <Menu size={21} />
        </button>
      )}

      {/* Latar gelap hanya untuk HP/tablet */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup menu"
        tabIndex={isOpen ? 0 : -1}
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col overflow-y-auto border-r border-gray-200 bg-white px-5 py-8 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="relative mb-10 flex h-[70px] items-center justify-center">
          <Link
            href="/"
            onClick={onClose}
            aria-label="Kembali ke halaman utama Severli.co"
            className="relative block h-[70px] w-[180px]"
          >
            <Image
              src="/images/logo/severli-logo-black.webp"
              alt="Logo Severli.co"
              fill
              priority
              sizes="180px"
              className="scale-[1.2] object-contain object-center"
            />
          </Link>

          {/* Tombol menutup sidebar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute -right-1 -top-3 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
            aria-label="Tutup menu"
          >
            <X size={21} />
          </button>
        </div>

        {/* Menu navigasi */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
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

        {/* Teks bagian bawah */}
        <div className="mt-auto border-t border-gray-200 pt-5">
          <p className="text-xs leading-5 text-gray-400">
            Modern women&apos;s fashion for everyday confidence.
          </p>
        </div>
      </aside>
    </>
  );
}