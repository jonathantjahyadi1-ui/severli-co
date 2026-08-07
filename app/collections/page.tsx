import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const shopeeStore =
  "https://shopee.co.id/severli.co?entryPoint=ShopBySearch&searchKeyword=severli.co";

const products = [
  {
    name: "Alika",
    image: "/images/collections/ALIKA.webp",
    link: "https://shopee.co.id/SEVERLI-Alika-Set-2in1-Inner-Outer-Long-Top-Outer-Set-Lebaran-Long-Outer-Wanita-Premium-Tunik-Lebaran-Baju-Lebaran-2026-Severli-Raya-Collection-i.350242333.49905927020?extraParams=%7B%22display_model_id%22%3A267429249457%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Rumi",
    image: "/images/collections/RUMI.webp",
    link: shopeeStore,
  },
  {
    name: "Althea",
    image: "/images/collections/althea.webp",
    link: "https://shopee.co.id/Severli-Althea-Pants-Celana-Midwaist-Wide-leg-Wanita-Celana-Kantor-Kerja-Kasual-Wanita-i.350242333.44383079785?extraParams=%7B%22display_model_id%22%3A321290558284%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Berna",
    image: "/images/collections/berna.webp",
    link: "https://shopee.co.id/Severli-Berna-Silk-Shirt-Wanita-Adem-Tidak-Kusut-i.350242333.29093503483?extraParams=%7B%22display_model_id%22%3A385083977712%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Cala",
    image: "/images/collections/cala.webp",
    link: "https://shopee.co.id/Severli-Cala-Oversize-Shirt-Kemeja-Kerja-Wanita-Lengan-Panjang-Kemeja-Casual-Basic-Atasan-Wanita-Oversize-i.350242333.54664754962?extraParams=%7B%22display_model_id%22%3A316269554644%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Cassey",
    image: "/images/collections/CASSEY.webp",
    link: "https://shopee.co.id/Severli-Cassey-Crinkle-Blouse-Wanita-Korea-i.350242333.23672909253?extraParams=%7B%22display_model_id%22%3A127630769811%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Daisy",
    image: "/images/collections/DAISY.webp",
    link: "https://shopee.co.id/Severli-Premium-Daisy-Satin-Long-Sleeve-Dress-i.350242333.21381569267?extraParams=%7B%22display_model_id%22%3A214411254362%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Elaya",
    image: "/images/collections/elaya.webp",
    link: "https://shopee.co.id/Severli-Elaya-Pants-Celana-Kerja-Wide-Leg-Wanita-Formal-Kasual-Loose-Pants-Celana-Kerja-Kantor-Wanita-i.350242333.49365053940?extraParams=%7B%22display_model_id%22%3A431290601732%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Elsa",
    image: "/images/collections/elsa.webp",
    link: "https://shopee.co.id/Severli-Premium-Elsa-Satin-Shirt-Wanita-Korea-i.350242333.23572909672?extraParams=%7B%22display_model_id%22%3A49325196974%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Emma",
    image: "/images/collections/emma.webp",
    link: "https://shopee.co.id/Severli-EMMA-Blazer-Wanita-Korean-Style-Adem-i.350242333.51800755399?extraParams=%7B%22display_model_id%22%3A425826028848%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Emmy",
    image: "/images/collections/emmy.webp",
    link: "https://shopee.co.id/Severli-Emmy-Vest-Wanita-Korean-Style-Formal-i.350242333.25342076814?extraParams=%7B%22display_model_id%22%3A147707916522%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Joy",
    image: "/images/collections/joy.webp",
    link: "https://shopee.co.id/Severli-JOY-Vest-Wanita-Korean-Style-Blazer-i.350242333.26278002177?extraParams=%7B%22display_model_id%22%3A218263293465%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Eve",
    image: "/images/collections/eve.webp",
    link: "https://shopee.co.id/Severli-Eve-Crinkle-Blouse-Blouse-Wanita-Basic-Wanita-Crinkle-Blouse-Wanita-Lengan-Pendek-i.350242333.19846847693?extraParams=%7B%22display_model_id%22%3A117445807698%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Foxy",
    image: "/images/collections/FOXY.webp",
    link: "https://shopee.co.id/Severli-FOXY-Highwaist-Pants-Celana-Petite-Friendly-Celana-Kerja-Kuliah-Wanita-Celana-Panjang-Bahan-Wanita-i.350242333.26702340522?extraParams=%7B%22display_model_id%22%3A108379114184%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Fuji",
    image: "/images/collections/Fuji Midi.webp",
    link: "https://shopee.co.id/Severli-Fuji-Midi-Skirt-Wool-Blend-Flared-Style-i.350242333.24083447502?extraParams=%7B%22display_model_id%22%3A69441550772%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Gea",
    image: "/images/collections/GEA.webp",
    link: "https://shopee.co.id/Severli-GEA-Denim-Shirt-Wanita-Korean-Style-i.350242333.25485773243?extraParams=%7B%22display_model_id%22%3A217789436642%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Gia",
    image: "/images/collections/gia.webp",
    link: "https://shopee.co.id/Severli-GIA-Knit-Top-Wanita-Lengan-Panjang-Pendek-i.350242333.27977995279?extraParams=%7B%22display_model_id%22%3A260443419491%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Gina",
    image: "/images/collections/GINA.webp",
    link: "https://shopee.co.id/Severli-Gina-Culotte-Kulot-Lilit-Highwaist-Kulot-Wanita-Kulot-Lilit-Celana-Kulot-Wanita-Celana-Panjang-Wanita-i.350242333.10357712173?extraParams=%7B%22display_model_id%22%3A245148629552%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Helen",
    image: "/images/collections/helen.webp",
    link: "https://shopee.co.id/Severli-HELEN-Top-Blouse-Wanita-Korean-Style-i.350242333.28778001813?extraParams=%7B%22display_model_id%22%3A59876688730%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Jola",
    image: "/images/collections/jola.webp",
    link: "https://shopee.co.id/Severli-Jola-Shirt-Wanita-Brukat-Lengan-Panjang-i.350242333.53552684925?extraParams=%7B%22display_model_id%22%3A325267808435%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Kai",
    image: "/images/collections/kai.webp",
    link: "https://shopee.co.id/Severli-KAI-Kemeja-Wanita-Oversized-Semiwool-i.350242333.43111846934?extraParams=%7B%22display_model_id%22%3A395508812798%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Lara",
    image: "/images/collections/lara.webp",
    link: "https://shopee.co.id/Severli-Lara-Shirt-Kemeja-Kerja-Basic-Kemeja-Lengan-Panjang-Kemeja-Wanita-Casual-i.350242333.55264763119?extraParams=%7B%22display_model_id%22%3A228323364753%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Luella",
    image: "/images/collections/luella.webp",
    link: "https://shopee.co.id/Severli-Luella-Vest-Wanita-Baju-Kerja-Formal-Casual-Vest-Rompi-Wanita-i.350242333.51715040730?extraParams=%7B%22display_model_id%22%3A346290709891%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Luisa",
    image: "/images/collections/luisa.webp",
    link: "https://shopee.co.id/Severli-Luisa-Pants-Celana-Loose-Panjang-Wanita-Wide-leg-Pants-Semiwool-i.350242333.46465054063?extraParams=%7B%22display_model_id%22%3A426290632124%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Lune",
    image: "/images/collections/lune.webp",
    link: "https://shopee.co.id/Severli-LUNE-Loose-Straight-Pants-Celana-Panjang-Wanita-Kerja-Celana-Highwaist-Daily-Wanita-i.350242333.42731147515?extraParams=%7B%22display_model_id%22%3A310964673854%2C%22model_selection_logic%22%3A3%7DS",
  },
  {
    name: "Lyra",
    image: "/images/collections/lyra.webp",
    link: "https://shopee.co.id/Severli-Lyra-Blazer-Blazer-Wanita-Formal-Kasual-Blazer-Kerja-Lengan-Panjang-Kancing-Mewah-i.350242333.53115080192?extraParams=%7B%22display_model_id%22%3A371295450438%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Rai",
    image: "/images/collections/rai.webp",
    link: "https://shopee.co.id/Severli-Rai-Kemeja-Crinkle-Kemeja-Kerja-Wanita-Lengan-Panjang-Atasan-Wanita-Crinke-Atasan-Kemeja-Lengan-Panjang-i.350242333.18527591980?extraParams=%7B%22display_model_id%22%3A107134265532%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Rui",
    image: "/images/collections/rui.webp",
    link: "https://shopee.co.id/Severli-RUI-Blouse-Wanita-Crop-Premium-Moscrepe-i.350242333.3786652182?extraParams=%7B%22display_model_id%22%3A82347784543%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Mia",
    image: "/images/collections/Mia.webp",
    link: "https://shopee.co.id/Severli-MIA-High-Waist-Pants-Wanita-Slim-Fit-i.350242333.22524176604?extraParams=%7B%22display_model_id%22%3A89729195562%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Nova",
    image: "/images/collections/nova.webp",
    link: "https://shopee.co.id/Severli-Nova-Sleeveless-Shirt-Atasan-Wanita-Basic-Top-Katun-Korea-Style-i.350242333.45914790052?extraParams=%7B%22display_model_id%22%3A186416302122%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Rua",
    image: "/images/collections/RUA.webp",
    link: "https://shopee.co.id/Severli-RUA-Pants-Wanita-Korea-Wide-Leg-Adem-i.350242333.52850760343?extraParams=%7B%22display_model_id%22%3A315084559570%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Serena",
    image: "/images/collections/serena.webp",
    link: "https://shopee.co.id/Severli-SERENA-Blazer-Wanita-Blazer-Formal-Kasual-Wanita-Lengan-Panjang-Blazer-Wanita-Korean-Style-i.350242333.57911053738?extraParams=%7B%22display_model_id%22%3A129503190108%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Sofia",
    image: "/images/collections/sofia.webp",
    link: "https://shopee.co.id/Severli-Sofia-Vest-Wanita-Adem-Estetik-Crochet-i.350242333.46852714493?extraParams=%7B%22display_model_id%22%3A254113093404%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Sore",
    image: "/images/collections/sore.webp",
    link: "https://shopee.co.id/Severli-SORE-Shirt-Kemeja-Wanita-Kerja-Kemeja-Wanita-Lengan-Panjang-Daily-i.350242333.51861049877?extraParams=%7B%22display_model_id%22%3A395964083009%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "There",
    image: "/images/collections/THERE.webp",
    link: "https://shopee.co.id/Severli-THERE-Shirt-Wanita-Korea-Cotton-Twill-i.350242333.21027595164?extraParams=%7B%22display_model_id%22%3A29322236307%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Venti",
    image: "/images/collections/VENTI.webp",
    link: "https://shopee.co.id/Severli-Venti-Shirt-Kemeja-Kerja-Wanita-Atasan-Wanita-Lengan-Panjang-Atasan-Wanita-Kemeja-Korea-i.350242333.18127593688?extraParams=%7B%22display_model_id%22%3A191431059394%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Wila",
    image: "/images/collections/WILA.webp",
    link: "https://shopee.co.id/Severli-WILA-Crinkle-Shirt-Kemeja-Kerja-Wanita-Atasan-Wanita-Lengan-Panjang-Atasan-Wanita-Kemeja-Crinkle-i.350242333.15290313542?extraParams=%7B%22display_model_id%22%3A126374083632%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Yori",
    image: "/images/collections/YORI.webp",
    link: "https://shopee.co.id/Severli-YORI-High-Waist-Knit-Pants-Celana-Knit-High-Waist-Celana-Kulot-Rajut-Wanita-Celana-Panjang-Wanita-Knit-i.350242333.18027597011?extraParams=%7B%22display_model_id%22%3A98056656433%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    name: "Zeline",
    image: "/images/collections/zeline.webp",
    link: "https://shopee.co.id/Severli-Zeline-Blazer-Wanita-Blazer-Semiwool-Kasual-Lengan-Panjang-Blazer-Wanita-Daily-i.350242333.50515033831?extraParams=%7B%22display_model_id%22%3A351290742879%2C%22model_selection_logic%22%3A3%7D",
  },
];

export default function CollectionsPage() {
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
        <header className="mb-14 flex flex-col justify-between gap-7 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div className="max-w-[720px]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/45">
              Severli.co
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-black md:text-5xl">
              All Collections
            </h1>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-black/55">
              Discover our complete collection of contemporary women&apos;s
              fashion, designed for elegant, practical, and confident everyday
              style.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-black/45">
            {products.length} Products
          </p>
        </header>

        {/* Daftar Produk */}
        <section className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
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
                    alt={`Koleksi ${product.name} dari Severli.co`}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           (max-width: 1280px) 33vw,
                           25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <div className="pt-4">
                  <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-black/40">
                    Severli.co Collection
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-sm font-semibold text-black transition-opacity duration-300 group-hover:opacity-60">
                      {product.name}
                    </h2>

                    <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
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