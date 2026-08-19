import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden severli-page-bg lg:min-h-[600px] lg:flex-row"
    >
      {/* Text Content */}
      <div className="z-10 flex w-full flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:flex-1 lg:px-10 lg:py-20 lg:pl-16">
        {/* Logo kecil */}
        <div className="relative mb-4 h-[36px] w-[135px] sm:h-[40px] sm:w-[150px]">
  <Image
    src="/images/logo/severli-logo-black.webp"
    alt="Severli.co"
    fill
    priority
    sizes="(max-width: 640px) 135px, 150px"
    className="object-contain object-left"
  />
</div>

        {/* Heading */}
        <h1 className="mb-5 font-serif text-[38px] font-bold leading-[1.1] text-brand-black sm:text-[44px] lg:text-[48px] lg:leading-[1.15]">
          <span className="block">
            Where Comfort Meets Confidence
          </span>
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-[460px] text-[14px] leading-relaxed text-brand-mid-gray sm:text-[15px]">
          An Indonesian womenswear brand creating thoughtfully designed pieces
          for work and everyday life.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row">
          <Link
            href="/discover-severli"
            className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            Discover Severli
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/business-inquiries"
            className="btn-outline flex w-full items-center justify-center sm:w-auto"
          >
            Business Inquiries
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