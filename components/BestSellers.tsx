import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  { name: "FUJI Midi Skirt", desc: "Flowing Korean-style midi" },
  { name: "EMMA Blazer", desc: "Tailored office essential" },
  { name: "MIA High Waist Pants", desc: "Modern tailored fit" },
  { name: "BERNA Shirt Silk", desc: "Luxurious satin finish" },
  { name: "KAI Shirt", desc: "Clean everyday essential" },
  { name: "HELEN Top", desc: "Versatile blouse style" },
  { name: "SABRINA Midi Silk Skirt", desc: "Elegant satin drape" },
  { name: "JOY Vest Top", desc: "Layered sophistication" },
];

export default function BestSellers() {
  return (
    <section id="bestsellers" className="px-16 py-20 bg-brand-pure">
      <p className="section-label">BEST SELLERS</p>
      <h2 className="section-heading">Our Most Loved Pieces</h2>
      <p className="section-para mb-10">
        Curated favorites chosen by women who value everyday elegance and
        timeless Korean-inspired style.
      </p>

      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-brand-white rounded-md overflow-hidden border border-brand-lighter-gray
                       transition-all duration-200 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="h-[280px] bg-brand-lighter-gray flex items-center justify-center">
              <div className="w-[90px] h-[180px] bg-black/[0.06] rounded-t-[15%]" />
            </div>
            <div className="p-[18px]">
              <h4 className="text-[13px] font-semibold text-brand-black tracking-wide">
                {product.name}
              </h4>
              <p className="text-[11px] text-brand-gray mt-[3px]">{product.desc}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-black
                           mt-2.5 opacity-60 hover:opacity-100 transition-opacity"
              >
                View Product
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}