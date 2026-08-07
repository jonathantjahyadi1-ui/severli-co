import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { lookbookImages } from "@/components/Lookbook";

const galleryLayouts = [
  "md:col-span-7 md:row-span-7",
  "md:col-span-5 md:row-span-4",
  "md:col-span-5 md:row-span-3",
  "md:col-span-4 md:row-span-5",
  "md:col-span-8 md:row-span-5",
  "md:col-span-5 md:row-span-6",
  "md:col-span-7 md:row-span-6",
  "md:col-span-4 md:row-span-5",
  "md:col-span-4 md:row-span-5",
  "md:col-span-4 md:row-span-5",
];

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Kembali ke Home */}
        <Link
          href="/"
          className="mb-14 inline-flex items-center gap-2 text-[11px]
                     font-medium uppercase tracking-[0.18em] text-black/50
                     transition-colors duration-300 hover:text-black"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-14 flex flex-col justify-between gap-7
                           border-b border-black/10 pb-10
                           md:flex-row md:items-end"
        >
          <div className="max-w-[720px]">
            <p className="mb-3 text-[10px] font-semibold uppercase
                          tracking-[0.3em] text-black/45"
            >
              Severli.co Editorial
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight
                           text-black md:text-5xl"
            >
              The Lookbook
            </h1>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-black/55">
              Explore contemporary styling inspiration from Severli.co,
              created for confident everyday dressing and modern workwear.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-black/45">
            {lookbookImages.length} Editorial Images
          </p>
        </header>

        {/* Galeri Lookbook */}
        <section className="grid grid-cols-1 gap-4 md:auto-rows-[72px] md:grid-cols-12">
          {lookbookImages.map((image, index) => (
            <figure
              key={image.id}
              className={`group relative h-[460px] overflow-hidden bg-[#efefed]
                          md:h-auto ${galleryLayouts[index]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 3}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 60vw,
                       50vw"
                className="object-cover transition-transform duration-700
                           ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors
                              duration-500 group-hover:bg-black/[0.08]"
              />

              <figcaption className="absolute bottom-4 left-4 text-[9px]
                                     font-medium uppercase tracking-[0.22em]
                                     text-white opacity-0 drop-shadow-md
                                     transition-opacity duration-500
                                     group-hover:opacity-100"
              >
                Severli.co / Look {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  );
}