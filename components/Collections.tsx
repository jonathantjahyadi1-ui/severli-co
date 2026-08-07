import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Blazers", desc: "Tailored & Structured" },
  { name: "Shirts & Blouses", desc: "Silk & Cotton Essentials" },
  { name: "Midi Skirts", desc: "Flowing & Feminine" },
  { name: "High Waist Pants", desc: "Tailored Daily Wear" },
  { name: "Vest Tops", desc: "Layered Sophistication" },
  { name: "Knit Tops", desc: "Soft & Versatile" },
  { name: "Workwear Sets", desc: "Coordinated Style" },
];

export default function Collections() {
  return (
    <section
      id="collections"
      className="severli-page-bg px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">SIGNATURE COLLECTIONS</p>

            <h2 className="section-heading">
              Discover Our Collections
            </h2>
          </div>

          <Link
            href="/collections"
            className="inline-flex w-fit items-center gap-1.5 border-b-[1.5px]
                       border-brand-black pb-0.5 text-[13px] font-semibold
                       text-brand-black transition-opacity hover:opacity-70"
          >
            View all collections
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="overflow-hidden rounded-md border
                         border-brand-lighter-gray bg-white
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg
                         hover:shadow-black/5"
            >
              <div className="flex h-[240px] items-center justify-center bg-[#efefed]">
                <div className="h-[160px] w-[100px] rounded-t-[20%] bg-black/[0.06]" />
              </div>

              <div className="px-[18px] py-4">
                <h3 className="text-sm font-semibold text-brand-black">
                  {category.name}
                </h3>

                <p className="mt-0.5 text-[11px] text-brand-gray">
                  {category.desc}
                </p>
              </div>
            </div>
          ))}

          {/* View All Card */}
          <Link
            href="/collections"
            aria-label="Lihat semua koleksi Severli.co"
            className="group overflow-hidden rounded-md border
                       border-brand-lighter-gray bg-white
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg
                       hover:shadow-black/5"
          >
            <div className="flex h-[240px] items-center justify-center bg-[#efefed]">
              <span
                className="inline-flex items-center gap-2 font-serif text-sm
                           italic text-brand-light-gray transition-all
                           duration-200 group-hover:gap-3
                           group-hover:text-brand-black"
              >
                View All
                <ArrowRight size={14} />
              </span>
            </div>

            <div className="px-[18px] py-4">
              <h3 className="text-sm font-semibold text-brand-black">
                All Collections
              </h3>

              <p className="mt-0.5 text-[11px] text-brand-gray">
                Explore the full range
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}