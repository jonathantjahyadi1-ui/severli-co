import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-6 py-20 text-center md:px-12">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/5" />

      <div className="relative z-10">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/50">
          READY TO ELEVATE YOUR STYLE?
        </p>

        <h2 className="mb-4 font-serif text-[34px] font-bold leading-tight text-white md:text-[38px]">
          Build Your Everyday Style
          <br />
          with Severli.co
        </h2>

        <p className="mx-auto mb-8 max-w-[500px] text-[15px] leading-relaxed text-white/60">
          Discover modern women&apos;s fashion designed for confidence,
          comfort, and timeless daily wear.
        </p>

        <div className="flex flex-col justify-center gap-3.5 sm:flex-row">
          <a
            href="https://shopee.co.id/severli.co?entryPoint=ShopBySearch&searchKeyword=severli.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md
                       bg-white px-7 py-3.5 text-[13px] font-semibold
                       tracking-wide text-brand-black transition-all
                       duration-200 hover:-translate-y-0.5 hover:bg-[#e0e0e0]"
          >
            Visit Shopee Store
            <ArrowRight size={16} />
          </a>

          <Link
            href="/contact"
            className="btn-outline-light justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}