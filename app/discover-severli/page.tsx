import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Discover Severli | Severli.co",
  description:
    "Discover Severli, an Indonesian womenswear brand creating modern and versatile pieces for work and everyday life.",
};

const companyInformation = [
  {
    title: "SINCE 2020",
    description: "Building our presence in Indonesian womenswear",
  },
  {
    title: "IN-HOUSE DEVELOPMENT",
    description: "From concept to fit and refinement",
  },
  {
    title: "NATIONWIDE PRESENCE",
    description: "Serving customers across Indonesia",
  },
];

export default function DiscoverSeverliPage() {
  return (
    <main className="min-h-screen bg-[#eae8e9] text-[#151515]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-16 lg:py-12">
        {/* Navigation */}
        <header className="border-b border-black/15 pb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors duration-300 hover:text-black"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Home
          </Link>
        </header>

        {/* Main content */}
        <article className="max-w-4xl py-16 sm:py-20 lg:py-24">
          <p className="text-sm font-bold tracking-[0.22em]">
            ABOUT SEVERLI
          </p>

          <h1 className="mt-8 max-w-3xl font-serif text-4xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Built Around Thoughtful Product Development.
          </h1>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-black/65 sm:text-lg sm:leading-9">
            <p>
              Severli is an Indonesian womenswear brand that began operations
              in 2020, creating modern and versatile pieces for work and
              everyday life.
            </p>

            <p>
              Based in Jakarta, our collections are developed in-house through
              a considered process that covers design, material selection,
              cutting, fitting, and refinement. This approach allows us to
              maintain a clear point of view across our products while
              continuously responding to how our customers wear and experience
              them.
            </p>

            <p>
              As a digital-first brand, Severli serves customers across
              Indonesia through an integrated organization spanning product
              development, commerce, and operations. Today, the brand continues
              to strengthen the capabilities and foundation required for
              long-term, sustainable growth.
            </p>
          </div>

          {/* Company information */}
          <div className="mt-16 max-w-3xl border-t border-black/20 sm:mt-20">
            {companyInformation.map((item) => (
              <section
                key={item.title}
                className="border-b border-black/20 py-8 sm:py-10"
              >
                <h2 className="text-sm font-bold tracking-[0.16em]">
                  {item.title}
                </h2>

                <p className="mt-3 text-base leading-7 text-black/60">
                  {item.description}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}