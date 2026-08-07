import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { bestSellerProducts } from "@/components/BestSellers";

export default function BestSellersPage() {
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
              Severli.co
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight
                           text-black md:text-5xl"
            >
              Best Sellers
            </h1>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-black/55">
              Explore the most-loved pieces from Severli.co, selected for
              elegant, practical, and confident everyday style.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-black/45">
            {bestSellerProducts.length} Products
          </p>
        </header>

        {/* Daftar Best Seller */}
        <section className="grid grid-cols-1 gap-x-5 gap-y-12
                            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {bestSellerProducts.map((product, index) => (
            <article key={product.name} className="group">
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

                  <div className="absolute right-4 top-4 flex h-9 w-9
                                  translate-y-1 items-center justify-center
                                  rounded-full bg-white/90 opacity-0 shadow-sm
                                  backdrop-blur-sm transition-all duration-300
                                  group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <div className="pt-4">
                  <p className="mb-1.5 text-[9px] font-medium uppercase
                                tracking-[0.22em] text-black/40"
                  >
                    Severli.co Best Seller
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-sm font-semibold text-black
                                   transition-opacity duration-300
                                   group-hover:opacity-60"
                    >
                      {product.name}
                    </h2>

                    <span className="text-[10px] uppercase
                                     tracking-[0.14em] text-black/40"
                    >
                      View product
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}