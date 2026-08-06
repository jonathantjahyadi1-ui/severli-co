import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative bg-brand-charcoal px-16 py-20 text-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full border border-white/[0.04]" />
      <div className="absolute -bottom-[80px] -left-[80px] w-[400px] h-[400px] rounded-full border border-white/[0.03]" />

      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3">
          READY TO ELEVATE YOUR STYLE?
        </p>
        <h2 className="font-serif text-[38px] font-bold text-white mb-4 leading-tight">
          Build Your Everyday Style
          <br />
          with Severli.co
        </h2>
        <p className="text-[15px] text-white/60 max-w-[500px] mx-auto mb-8 leading-relaxed">
          Discover modern women&apos;s fashion designed for confidence, comfort,
          and timeless daily wear.
        </p>
        <div className="flex gap-3.5 justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-black
                       rounded-md text-[13px] font-semibold tracking-wide
                       transition-all duration-200 hover:bg-[#e0e0e0]"
          >
            Visit Shopee Store
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-outline-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}