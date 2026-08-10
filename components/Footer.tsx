import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Best Seller", href: "/best-sellers" },
  { label: "Our Values", href: "/values" },
];

const companyLinks = [
  { label: "Lookbook", href: "/lookbook" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal px-6 pb-8 pt-16 md:px-10 lg:px-16">
      <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr]">
        {/* Brand */}
        <div>
          <div className="font-serif text-2xl font-bold tracking-wider text-white">
            Severli.co
          </div>

          <div className="mt-0.5 text-[9px] uppercase tracking-[0.3em] text-white/40">
            Women&apos;s Fashion
          </div>

          <p className="mt-4 max-w-[260px] text-xs leading-relaxed text-white/40">
            Severli.co is a women&apos;s fashion brand that celebrates
            confidence, elegance, and modern femininity through Korean-inspired
            formal casual wear.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/60">
            Quick Links
          </h4>

          <ul className="space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-white/35 transition-colors hover:text-white/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/60">
            Company
          </h4>

          <ul className="space-y-2.5">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-white/35 transition-colors hover:text-white/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/60">
            Legal
          </h4>

          <ul className="space-y-2.5">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-white/35 transition-colors hover:text-white/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/60">
            Connect With Us
          </h4>

          <div className="space-y-2.5 text-xs text-white/35">
            <a
              href="mailto:info@severli.co"
              className="block transition-colors hover:text-white/70"
            >
              info@severli.co
            </a>

            <a
              href="https://www.instagram.com/severli.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-white/70"
            >
              @severli.co
            </a>

            <p>Jakarta, Indonesia</p>

            <a
              href="https://shopee.co.id/severli.co"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-white/70"
            >
              Shopee Store
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] pt-6 text-center text-[11px] text-white/25">
        &copy; 2026 Severli.co. All Rights Reserved.
      </div>
    </footer>
  );
}