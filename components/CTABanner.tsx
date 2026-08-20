import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal px-5 py-16 text-center text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -bottom-36 -left-32 h-80 w-80 rounded-full border border-white/5" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
          OUR PERSPECTIVE
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
          Relevance Without Losing Identity
        </h2>

        <div className="mx-auto mt-8 h-px w-20 bg-white/20" />

        <div className="mx-auto mt-8 max-w-5xl space-y-6 text-[15px] leading-7 text-white/65 sm:text-[16px] sm:leading-8 lg:text-[16px]">
          <p>
            Severli evolves with the women we serve and the way they live
            today. We remain open to change, while being deliberate about what
            we bring forward, allowing the brand to stay current without being defined by every passing trend.
          </p>

          <p>
            That balance shapes how Severli continues to build a clear and recognizable point of view in modern womenswear.
          </p>
        </div>
      </div>
    </section>
  );
}