import Link from "next/link";

const quickLinks = [
  {
    label: "About Severli",
    href: "/discover-severli",
  },
  {
    label: "Collections",
    href: "/collections",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
];

const officialChannels = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@severli.co",
  },
  {
    label: "Shopee",
    href: "https://shopee.co.id/severli.co",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/severli.co/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal px-5 pb-8 pt-14 text-white sm:px-8 lg:px-16 lg:pt-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_0.95fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-wide text-white"
            >
              Severli.co
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Jakarta, Indonesia
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Quick Links
            </h3>

            <nav className="mt-7 flex flex-col items-start gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Company
            </h3>

            <div className="mt-7 flex flex-col items-start gap-4">
              <p className="text-sm leading-6 text-white/45">
                PT Thriva Grovia Bersama
              </p>

              <Link
                href="/business-inquiries"
                className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
              >
                Business Inquiries
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Legal
            </h3>

            <nav className="mt-7 flex flex-col items-start gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Official channels */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Official Channels
            </h3>

            <nav className="mt-7 flex flex-col items-start gap-4">
              {officialChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {channel.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <p className="text-xs text-white/35">
            © {currentYear} PT Thriva Grovia Bersama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}