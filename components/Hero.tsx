import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden severli-page-bg lg:min-h-[600px] lg:flex-row"
    >
      {/* Text Content */}
      <div className="z-10 flex w-full flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:flex-1 lg:px-10 lg:py-20 lg:pl-16">
        <p className="mb-2 text-sm italic text-brand-gray">
          Severli.co
        </p>

        <h1 className="mb-5 font-serif text-[38px] font-bold leading-[1.1] text-brand-black sm:text-[44px] lg:text-[48px] lg:leading-[1.15]">
          <span className="block">Modern Korean Style</span>
          <span className="block">for Everyday Women</span>
        </h1>

        <p className="mb-8 max-w-[460px] text-[14px] leading-relaxed text-brand-mid-gray sm:text-[15px]">
          Severli.co creates elegant formal-casual fashion for women who value
          confidence, comfort, and timeless everyday style.
        </p>

        <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row">
          <Link
            href="/collections"
            className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            Explore Collections
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/best-sellers"
            className="btn-outline flex w-full items-center justify-center sm:w-auto"
          >
            View Best Sellers
          </Link>
        </div>
      </div>

      {/* Hero Image Slider */}
      <div className="h-[430px] w-full flex-none sm:h-[520px] lg:h-[600px] lg:flex-1">
        <HeroSlider />
      </div>
    </section>
  );
}