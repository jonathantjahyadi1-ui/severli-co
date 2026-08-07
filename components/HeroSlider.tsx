"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/hero/hero-01.webp",
    alt: "Koleksi fashion Severli.co pertama",
    position: "50% 50%",
  },
  {
    src: "/images/hero/hero-02.webp",
    alt: "Koleksi fashion Severli.co kedua",
    position: "50% 45%",
  },
  {
    src: "/images/hero/hero-03.webp",
    alt: "Koleksi fashion Severli.co ketiga",
    position: "50% 50%",
  },
  {
    src: "/images/hero/hero-04.webp",
    alt: "Koleksi fashion Severli.co keempat",
    position: "50% 40%",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide(
        (previousSlide) => (previousSlide + 1) % heroImages.length
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full min-h-[600px] w-full overflow-hidden bg-brand-lighter-gray">
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-out ${
            currentSlide === index
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[1.04] opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: image.position }}
          />
        </div>
      ))}

      {/* Gradasi agar foto menyatu dengan bagian teks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-brand-white via-brand-white/60 to-transparent lg:block" />

      {/* Bayangan tipis di bawah */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Indikator slider minimalis */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Tampilkan foto ${index + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              currentSlide === index
                ? "w-10 bg-white"
                : "w-5 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}