import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const lookbookImages = [
  {
    id: 1,
    src: "/images/lookbook/2.webp",
    alt: "Editorial Lookbook Severli.co 01",
  },
  {
    id: 2,
    src: "/images/lookbook/3.webp",
    alt: "Editorial Lookbook Severli.co 02",
  },
  {
    id: 3,
    src: "/images/lookbook/4.webp",
    alt: "Editorial Lookbook Severli.co 03",
  },
  {
    id: 4,
    src: "/images/lookbook/6.webp",
    alt: "Editorial Lookbook Severli.co 04",
  },
  {
    id: 5,
    src: "/images/lookbook/10.webp",
    alt: "Editorial Lookbook Severli.co 05",
  },
  {
    id: 6,
    src: "/images/lookbook/12.webp",
    alt: "Editorial Lookbook Severli.co 06",
  },
  {
    id: 7,
    src: "/images/lookbook/13.webp",
    alt: "Editorial Lookbook Severli.co 07",
  },
  {
    id: 8,
    src: "/images/lookbook/17.webp",
    alt: "Editorial Lookbook Severli.co 08",
  },
  {
    id: 9,
    src: "/images/lookbook/18.webp",
    alt: "Editorial Lookbook Severli.co 09",
  },
  {
    id: 10,
    src: "/images/lookbook/20.webp",
    alt: "Editorial Lookbook Severli.co 10",
  },
];

const homeImages = [
  lookbookImages[0],
  lookbookImages[2],
  lookbookImages[4],
  lookbookImages[6],
  lookbookImages[8],
];

const homeLayouts = [
  "md:col-span-7 md:h-[540px]",
  "md:col-span-5 md:h-[540px]",
  "md:col-span-4 md:h-[420px]",
  "md:col-span-4 md:h-[420px]",
  "md:col-span-4 md:h-[420px]",
];

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="severli-page-bg px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/45">
              Lookbook
            </p>

            <h2 className="section-heading mb-3">Style Inspiration</h2>

            <p className="section-para">
              Discover how Severli.co pieces are styled for work, campus, and
              every occasion in between.
            </p>
          </div>

          <Link
            href="/lookbook"
            className="inline-flex w-fit items-center gap-1.5 border-b-[1.5px]
                       border-brand-black pb-0.5 text-[13px] font-semibold
                       text-brand-black transition-opacity hover:opacity-60"
          >
            View full lookbook
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Preview Lookbook */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {homeImages.map((image, index) => (
            <Link
              key={image.id}
              href="/lookbook"
              aria-label={`Buka Lookbook Severli.co ${index + 1}`}
              className={`group relative block h-[430px] overflow-hidden
                          bg-[#efefed] ${homeLayouts[index]}`}
            >
              <Image
  src={image.src}
  alt={image.alt}
  fill
  quality={70}
  sizes={
    index < 2
      ? "(max-width: 768px) 100vw, 55vw"
      : "(max-width: 768px) 100vw, 33vw"
  }
  className="object-cover transition-transform duration-700
             ease-out group-hover:scale-[1.025]"
/>

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

              <div
                className="absolute inset-x-0 bottom-0 translate-y-3
                           bg-gradient-to-t from-black/45 to-transparent
                           px-5 pb-5 pt-16 opacity-0 transition-all
                           duration-500 group-hover:translate-y-0
                           group-hover:opacity-100"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                  View Lookbook
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}