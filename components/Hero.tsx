import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-[600px] bg-brand-white relative overflow-hidden"
    >
      {/* Text Content */}
      <div className="flex-1 py-20 pl-16 z-10">
        <p className="font-serif text-sm text-brand-gray italic mb-2">
          Severli.co
        </p>
        <h1 className="font-serif text-[48px] font-bold text-brand-black leading-[1.15] mb-5">
          Modern Korean Style
          <br />
          for Everyday Women
        </h1>
        <p className="text-[15px] text-brand-mid-gray leading-relaxed max-w-[460px] mb-8">
          Severli.co creates elegant formal-casual fashion for women who value
          confidence, comfort, and timeless everyday style.
        </p>
        <div className="flex gap-3.5">
  <Link href="/collections" className="btn-primary">
    Explore Collections
    <ArrowRight size={16} />
  </Link>

  <Link href="/best-sellers" className="btn-outline">
    View Best Sellers
  </Link>
</div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 h-[600px] bg-gradient-to-br from-brand-lighter-gray via-[#d5d5d5] to-[#c8c8c8] flex items-center justify-center relative">
        {/* Model Silhouette */}
        <div className="w-[280px] h-[480px] bg-white/25 rounded-t-[40%] relative">
          <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white/30" />
        </div>
        {/* Decorative Circle */}
        <svg
          className="absolute top-10 right-10 opacity-[0.06] w-[200px] h-[200px]"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}