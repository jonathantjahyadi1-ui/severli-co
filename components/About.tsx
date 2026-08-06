import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="px-16 py-20">
      <div className="flex gap-16 items-center">
        {/* Image */}
        <div className="w-[360px] h-[420px] bg-gradient-to-br from-[#e0e0e0] via-[#d0d0d0] to-[#c5c5c5] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
          <div className="w-[200px] h-[300px] bg-white/20 rounded-t-[30%]" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="section-label">ABOUT SEVERLI.CO</p>
          <p className="font-serif text-2xl font-semibold text-brand-dark-gray mb-3 leading-tight">
            Elegant. Practical. Confident.
          </p>
          <p className="section-para max-w-full">
            Severli.co is a contemporary women&apos;s fashion brand based in
            Indonesia, dedicated to creating Korean-inspired formal casual wear
            for modern women. Our collections are designed to support
            confidence, comfort, and effortless style in everyday moments.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-brand-black text-[13px] font-semibold
                       border-b-[1.5px] border-brand-black pb-0.5 mt-5
                       transition-all duration-200 hover:opacity-70"
          >
            Learn more about us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}