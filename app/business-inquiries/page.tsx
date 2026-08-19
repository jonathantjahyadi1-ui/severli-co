import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Inquiries | Severli.co",
  description:
    "Contact Severli for partnerships, customer service, general inquiries, and business opportunities.",
};

const contactDetails = [
  {
    title: "Customer Service",
    value: "+62 852-2333-8008",
    description:
      "For product information, orders, and customer assistance.",
    href: "https://wa.me/6285223338008",
    icon: MessageCircle,
    external: true,
  },
  {
  title: "Email",
  value: "severlimedia@gmail.com",
  description:
    "For general information and official correspondence.",
  href: "mailto:severlimedia@gmail.com",
  icon: Mail,
  external: false,
},
  {
    title: "Location",
    value: "Jakarta, Indonesia",
    description:
      "Severli and PT Thriva Grovia Bersama are based in Jakarta.",
    href: "https://maps.app.goo.gl/gFYXNh6BXvCh27Di7",
    icon: MapPin,
    external: true,
  },
];

export default function BusinessInquiriesPage() {
  return (
    <main className="min-h-screen bg-[#eae8e9] text-[#151515]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-16 lg:py-12">
        {/* Navigation */}
        <header className="border-b border-black/15 pb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm
                       font-medium text-black/60 transition-colors
                       duration-300 hover:text-black"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300
                         group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Home
          </Link>
        </header>

        {/* Introduction */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/50">
              Business Inquiries
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Building Meaningful Partnerships
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black/60 sm:text-lg sm:leading-9">
              Severli welcomes conversations with partners, collaborators, and
              businesses whose direction aligns with our approach to modern
              womenswear and long-term brand development.
            </p>

            <Link
              href="/business-inquiries/send-inquiry"
              className="group mt-10 inline-flex min-h-[56px] items-center
                         justify-center gap-3 rounded-md bg-[#151515] px-7
                         text-xs font-bold uppercase tracking-[0.15em]
                         text-white transition-colors duration-300
                         hover:bg-black"
            >
              Send Inquiry

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300
                           group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>

        {/* Contact information */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-black/15 py-16 sm:py-20"
        >
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/50">
              Contact Severli
            </p>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Reach the Right Team
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
              Choose the appropriate channel below so your message can be
              directed to the right team.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-black/15 md:grid-cols-3">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <a
                  key={detail.title}
                  href={detail.href}
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noopener noreferrer" : undefined}
                  className="group relative min-h-[290px] border-b
                             border-r border-black/15 bg-white/20 p-7
                             transition-colors duration-300 hover:bg-white/50
                             sm:p-8 lg:p-10"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center
                               rounded-full border border-black/15"
                  >
                    <Icon
                      className="h-5 w-5 text-black/65"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                    {detail.title}
                  </p>

                  <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-black sm:text-2xl">
                    {detail.value}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-black/55">
                    {detail.description}
                  </p>

                  <ArrowUpRight
                    className="absolute right-7 top-7 h-5 w-5 text-black/40
                               transition-all duration-300
                               group-hover:-translate-y-1
                               group-hover:translate-x-1
                               group-hover:text-black sm:right-8 sm:top-8"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}