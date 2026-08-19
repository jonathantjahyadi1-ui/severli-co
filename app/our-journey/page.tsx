import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Journey | Severli.co",
  description:
    "Explore selected milestones from Severli’s journey since 2020.",
};

const milestones = [
  {
    year: "2020",
    title: "Severli Begins",
    description:
      "Severli began operations in November 2020, launching its first womenswear offering through digital marketplaces.",
  },
  {
    year: "2023",
    title: "Expanding Digital Commerce",
    description:
      "Severli expanded into TikTok Shop and live commerce, broadening its digital reach across Indonesia.",
  },
  {
    year: "2026",
    title: "A New Corporate Chapter",
    description:
      "PT Thriva Grovia Bersama was established as the corporate entity behind Severli.",
  },
];

export default function OurJourneyPage() {
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

        <article className="max-w-4xl py-16 sm:py-20 lg:py-24">
          {/* Page introduction */}
          <p className="text-sm font-bold tracking-[0.22em]">
            OUR JOURNEY
          </p>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            2020 — Present
          </h1>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
            Selected Milestones
          </p>

          {/* Timeline */}
          <div className="mt-12 max-w-3xl">
            {milestones.map((milestone) => (
              <section
                key={milestone.year}
                className="relative border-l border-black/20 pb-14 pl-8 last:pb-0 sm:pl-10"
              >
                <div className="absolute -left-[6px] top-1 h-[11px] w-[11px] rounded-full border-2 border-[#eae8e9] bg-[#151515] ring-1 ring-black/30" />

                <p className="text-sm font-bold tracking-[0.14em] text-black/45">
                  {milestone.year}
                </p>

                <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#151515] sm:text-3xl">
                  {milestone.title}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
                  {milestone.description}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}