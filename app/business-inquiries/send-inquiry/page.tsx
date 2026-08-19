import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Send Inquiry | Severli.co",
  description:
    "Contact Severli regarding partnerships and commercial opportunities.",
};

const gmailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=severlimedia@gmail.com";

export default function SendInquiryPage() {
  return (
    <main className="min-h-screen bg-[#eae8e9] text-[#151515]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-16 lg:py-12">
        {/* Navigation */}
        <header className="border-b border-black/15 pb-6">
          <Link
            href="/business-inquiries"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors duration-300 hover:text-black"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Business Inquiries
          </Link>
        </header>

        {/* Send inquiry content */}
        <article className="max-w-4xl py-16 sm:py-20 lg:py-24">
          <p className="text-sm font-bold tracking-[0.22em]">
            SEND INQUIRY
          </p>

          <h1 className="mt-8 max-w-4xl font-serif text-4xl font-bold uppercase leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            For Partnerships and Commercial Opportunities
          </h1>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex min-h-[60px] items-center justify-center gap-4 rounded-lg bg-[#151515] px-8 text-sm font-bold tracking-[0.12em] text-white transition-colors duration-300 hover:bg-black"
          >
            SEND INQUIRY
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </article>
      </div>
    </main>
  );
}