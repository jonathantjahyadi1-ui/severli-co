const stats = [
  {
    title: "2020",
    description: "Growing an Indonesian womenswear brand from Jakarta.",
  },
  {
    title: "NATIONWIDE",
    description: "Serving customers across Indonesia.",
  },
  {
    title: "DIGITAL COMMERCE",
    description:
      "Present across leading social-commerce and marketplace platforms.",
  },
  {
    title: "BEST SELLER",
    description:
      "Severli Fuji Skirt achieved the No. 1 best-selling position in Shopee’s Women’s Work Skirt category.",
  },
];

const dividerClasses = [
  "border-b sm:border-r lg:border-b-0",
  "border-b lg:border-b-0 lg:border-r",
  "border-b sm:border-b-0 sm:border-r lg:border-r",
  "",
];

export default function Stats() {
  return (
    <section className="border-y border-brand-lighter-gray bg-brand-pure">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.title}
            className={`min-h-[210px] border-brand-lighter-gray px-6 py-9 sm:px-8 sm:py-10 lg:min-h-[230px] lg:px-10 lg:py-12 ${dividerClasses[index]}`}
          >
            <h3 className="border-b border-brand-lighter-gray pb-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-black sm:text-sm">
              {stat.title}
            </h3>

            <p className="max-w-sm pt-5 text-[15px] leading-7 text-brand-gray sm:text-base sm:leading-8">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}