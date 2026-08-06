import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section id="collections" className="px-16 py-20">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="section-label">SIGNATURE COLLECTIONS</p>
          <h2 className="section-heading mb-0">Discover Our Collections</h2>
        </div>
        <Link
          href="#"
          className="text-[13px] font-semibold text-brand-black inline-flex items-center gap-1.5
                     border-b-[1.5px] border-brand-black pb-0.5 hover:opacity-70 transition-opacity"
        >
          View all collections
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-brand-pure rounded-md overflow-hidden border border-brand-lighter-gray
                       transition-all duration-200 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="h-[240px] bg-brand-lighter-gray flex items-center justify-center">
              <div className="w-[100px] h-[160px] bg-black/[0.06] rounded-t-[20%]" />
            </div>
            <div className="px-[18px] py-4">
              <h4 className="text-sm font-semibold text-brand-black">{cat.name}</h4>
              <p className="text-[11px] text-brand-gray mt-0.5">{cat.desc}</p>
            </div>
          </div>
        ))}
        {/* View All Card */}
        <div className="bg-brand-pure rounded-md overflow-hidden border border-brand-lighter-gray
                        transition-all duration-200 hover:shadow-lg hover:shadow-black/5">
          <div className="h-[240px] bg-brand-lighter-gray flex items-center justify-center font-serif text-sm text-brand-light-gray italic">
            View All →
          </div>
          <div className="px-[18px] py-4">
            <h4 className="text-sm font-semibold text-brand-black">All Collections</h4>
            <p className="text-[11px] text-brand-gray mt-0.5">Explore the full range</p>
          </div>
        </div>
      </div>
    </section>
  );
}