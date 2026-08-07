import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Logo Severli.co */}
        <div className="flex h-[340px] w-full max-w-[420px] flex-shrink-0 items-center justify-center bg-transparent lg:h-[420px] lg:w-[360px]">
  <Image
    src="/images/logo/severli-logo-black.webp"
    alt="Logo Severli.co"
    width={320}
    height={180}
    sizes="(max-width: 1024px) 70vw, 320px"
    className="h-auto w-[260px] object-contain mix-blend-multiply md:w-[300px]"
  />
</div>

        {/* About Content */}
        <div className="flex-1">
          <p className="section-label">ABOUT SEVERLI.CO</p>

          <h2 className="mb-4 font-serif text-2xl font-semibold leading-tight text-brand-dark-gray md:text-3xl">
            Elegant. Practical. Confident.
          </h2>

          <p className="section-para max-w-[650px]">
            Severli.co is a contemporary women&apos;s fashion brand based in
            Indonesia, dedicated to creating Korean-inspired formal casual wear
            for modern women. Our collections are designed to support
            confidence, comfort, and effortless style in everyday moments.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 border-b-[1.5px] border-brand-black pb-1 text-[13px] font-semibold text-brand-black transition-opacity duration-200 hover:opacity-60"
          >
            Learn more about us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}