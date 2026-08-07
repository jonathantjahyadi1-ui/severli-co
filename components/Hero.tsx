import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-[600px] items-center overflow-hidden severli-page-bg"
>
      {/* Text Content */}
      <div className="z-10 flex-1 py-20 pl-16">
        <p className="mb-2 font-serif text-sm italic text-brand-gray">
          Severli.co
        </p>

        <h1 className="mb-5 font-serif text-[48px] font-bold leading-[1.15] text-brand-black">
          Modern Korean Style
          <br />
          for Everyday Women
        </h1>

        <p className="mb-8 max-w-[460px] text-[15px] leading-relaxed text-brand-mid-gray">
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

      {/* Hero Image Slider */}
      <div className="h-[600px] flex-1">
        <HeroSlider />
      </div>
    </section>
  );
}