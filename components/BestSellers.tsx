import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const bestSellerProducts = [
  {
    name: "Fuji Skirt",
    image: "/images/collections/Fuji Midi.webp",
    link: "https://shopee.co.id/Severli-Fuji-Midi-Skirt-Wool-Blend-Flared-Style-i.350242333.24083447502?extraParams=%7B%22display_model_id%22%3A69441550772%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Emma Blazer",
    image: "/images/collections/emma.webp",
    link: "https://shopee.co.id/Severli-EMMA-Blazer-Wanita-Korean-Style-Adem-i.350242333.51800755399?extraParams=%7B%22display_model_id%22%3A425826028848%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Mia Pants",
    image: "/images/collections/Mia.webp",
    link: "https://shopee.co.id/Severli-MIA-High-Waist-Pants-Wanita-Slim-Fit-i.350242333.22524176604?extraParams=%7B%22display_model_id%22%3A89729195562%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Sore Shirt",
    image: "/images/collections/sore.webp",
    link: "https://shopee.co.id/Severli-SORE-Shirt-Kemeja-Wanita-Kerja-Kemeja-Wanita-Lengan-Panjang-Daily-i.350242333.51861049877?extraParams=%7B%22display_model_id%22%3A395964083009%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Lune Pants",
    image: "/images/collections/lune.webp",
    link: "https://shopee.co.id/Severli-LUNE-Loose-Straight-Pants-Celana-Panjang-Wanita-Kerja-Celana-Highwaist-Daily-Wanita-i.350242333.42731147515?extraParams=%7B%22display_model_id%22%3A310964673854%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Serena Blazer",
    image: "/images/collections/serena.webp",
    link: "https://shopee.co.id/Severli-SERENA-Blazer-Wanita-Blazer-Formal-Kasual-Wanita-Lengan-Panjang-Blazer-Wanita-Korean-Style-i.350242333.57911053738?extraParams=%7B%22display_model_id%22%3A129503190108%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Berna Shirt",
    image: "/images/collections/berna.webp",
    link: "https://shopee.co.id/Severli-Berna-Silk-Shirt-Wanita-Adem-Tidak-Kusut-i.350242333.29093503483?extraParams=%7B%22display_model_id%22%3A385083977712%2C%22model_selection_logic%22%3A3%7D",
  },
];

export default function BestSellers() {
  return (
    <section
      id="bestsellers"
      className="severli-page-bg px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <p className="section-label">BEST SELLERS</p>

            <h2 className="section-heading mb-3">
              Our Most Loved Pieces
            </h2>

            <p className="section-para">
              Discover Severli.co favorites chosen for their elegant,
              practical, and confident everyday style.
            </p>
          </div>

          <Link
            href="/best-seller"
            className="inline-flex w-fit items-center gap-1.5 border-b-[1.5px]
                       border-brand-black pb-0.5 text-[13px] font-semibold
                       text-brand-black transition-opacity hover:opacity-60"
          >
            View all best sellers
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bestSellerProducts.map((product, index) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-md border
                         border-brand-lighter-gray bg-white
                         transition-all duration-300
                         hover:shadow-lg hover:shadow-black/5"
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat produk ${product.name}`}
                className="block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#efefed]">
                  <Image
                    src={product.image}
                    alt={`Produk best seller ${product.name} dari Severli.co`}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           (max-width: 1280px) 33vw,
                           25vw"
                    className="object-cover transition-transform duration-700
                               ease-out group-hover:scale-[1.035]"
                  />

                  <div
                    className="absolute right-4 top-4 flex h-9 w-9
                               translate-y-1 items-center justify-center
                               rounded-full bg-white/90 opacity-0 shadow-sm
                               backdrop-blur-sm transition-all duration-300
                               group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <div className="p-[18px]">
                  <p
                    className="mb-1.5 text-[9px] font-medium uppercase
                               tracking-[0.22em] text-black/40"
                  >
                    Severli.co Best Seller
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[13px] font-semibold tracking-wide text-brand-black">
                      {product.name}
                    </h3>

                    <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                      View product
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}