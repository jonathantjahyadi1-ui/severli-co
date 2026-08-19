import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="severli-page-bg px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/images/logo/severli-logo-black.webp"
            alt="Logo Severli"
            width={420}
            height={180}
            sizes="(max-width: 768px) 70vw, 35vw"
            className="h-auto w-full max-w-[360px] object-contain"
          />
        </div>

        {/* About content */}
        <div className="flex-1">
          <p className="section-label">ABOUT SEVERLI</p>

          <h2 className="mb-6 font-serif text-2xl font-semibold leading-tight text-brand-dark-gray md:text-3xl">
            A Clear Identity, Built Over Time
          </h2>

          <div className="max-w-[700px] space-y-5">
            <p className="section-para">
              Severli evolves with the women we serve and the way they live
              today. We remain open to change, while being deliberate about
              what we bring forward, allowing the brand to stay current without
              being defined by every passing trend.
            </p>

            <p className="section-para">
              That balance shapes how Severli continues to build a clear and
              recognizable point of view in modern womenswear.
            </p>

            <p className="section-para">
              Severli began operations in 2020 with a focused presence in
              digital fashion, initially offering women&apos;s shirts and
              trousers through online marketplaces.
            </p>

            <p className="section-para">
              Over the years, the brand has evolved into a structured fashion
              business supported by dedicated teams across product, brand,
              commerce, and operations. This development has allowed Severli
              to expand its capabilities while maintaining a consistent point
              of view in how the brand presents itself and responds to its
              market.
            </p>

            <p className="section-para">
              Today, Severli continues to strengthen its position in
              Indonesia&apos;s fashion landscape with a long-term approach to
              brand building—one that values clarity, consistency, and
              meaningful progress over short-term momentum.
            </p>
          </div>

          <Link
            href="/our-journey"
            className="mt-8 inline-flex items-center gap-2 border-b-[1.5px] border-brand-black pb-1 text-[13px] font-bold tracking-[0.1em] text-brand-black transition-opacity duration-200 hover:opacity-60"
          >
            OUR JOURNEY
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}