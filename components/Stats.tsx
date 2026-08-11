import {
  Users,
  Star,
  ShoppingBag,
  Briefcase,
  Clock,
  Camera,
} from "lucide-react";

const stats = [
  { icon: Users, value: "40K+", label: "Instagram Followers" },
  { icon: Star, value: "4.9", label: "Store Rating" },
  { icon: ShoppingBag, value: "10K+", label: "Best Seller Sold" },
  { icon: Briefcase, value: "Officewear", label: "& Daily Fashion" },
  { icon: Clock, value: "Korean", label: "Formal Casual Style" },
  { icon: Camera, value: "Premium", label: "Everyday Pieces" },
];

const dividerClasses = [
  "border-b border-r",
  "border-b md:border-r",
  "border-b border-r md:border-r-0",
  "border-b md:border-b-0 md:border-r",
  "border-r",
  "",
];

export default function Stats() {
  return (
    <section className="border-y border-brand-lighter-gray bg-brand-pure">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.value}
              className={`flex min-w-0 flex-col items-center justify-center gap-3 border-brand-off-white px-3 py-7 text-center sm:px-5 md:flex-row md:items-start md:justify-start md:gap-4 md:px-6 md:py-9 md:text-left lg:px-8 ${dividerClasses[index]}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-off-white">
                <Icon size={20} className="opacity-50" />
              </div>

              <div className="min-w-0">
                <h4 className="whitespace-nowrap font-serif text-[18px] font-bold leading-tight text-brand-black sm:text-[20px] md:text-[22px]">
                  {stat.value}
                </h4>

                <p className="mt-1 text-[11px] leading-4 text-brand-gray sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}