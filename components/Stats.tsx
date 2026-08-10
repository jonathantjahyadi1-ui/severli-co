import { Users, Star, ShoppingBag, Briefcase, Clock, Camera } from "lucide-react";

const stats = [
  { icon: Users, value: "40K+", label: "Instagram Followers" },
  { icon: Star, value: "4.9", label: "Store Rating" },
  { icon: ShoppingBag, value: "10K+", label: "Best Seller Sold" },
  { icon: Briefcase, value: "Officewear", label: "& Daily Fashion" },
  { icon: Clock, value: "Korean", label: "Formal Casual Style" },
  { icon: Camera, value: "Premium", label: "Everyday Pieces" },
];

export default function Stats() {
  return (
    <section className="bg-brand-pure border-y border-brand-lighter-gray">
      <div className="grid grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 px-8 py-9 ${
              i < stats.length - 1 ? "border-r border-brand-off-white" : ""
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-brand-off-white flex items-center justify-center flex-shrink-0">
              <stat.icon size={20} className="opacity-50" />
            </div>
            <div>
              <h4 className="font-serif text-[22px] font-bold text-brand-black leading-tight">
                {stat.value}
              </h4>
              <p className="text-xs text-brand-gray mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}