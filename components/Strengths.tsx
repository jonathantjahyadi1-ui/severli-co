import { Globe, FileText, Monitor, Clock, Heart, MapPin } from "lucide-react";

const strengths = [
  {
    icon: Globe,
    title: "Korean Inspired Design",
    desc: "Modern silhouettes inspired by Korean formal-casual fashion.",
  },
  {
    icon: FileText,
    title: "Comfortable Daily Wear",
    desc: "Designed to balance elegance, movement, and daily comfort.",
  },
  {
    icon: Monitor,
    title: "Office-Ready Styling",
    desc: "Versatile pieces suitable for work, meetings, and smart daily outfits.",
  },
  {
    icon: Clock,
    title: "Timeless Neutral Looks",
    desc: "Clean, wearable colors that are easy to style across occasions.",
  },
  {
    icon: Heart,
    title: "Practical Feminine Fashion",
    desc: "Created for women who want to feel polished without sacrificing practicality.",
  },
  {
    icon: MapPin,
    title: "Indonesian Excellence",
    desc: "Proudly designed in Indonesia for women across the region and beyond.",
  },
];

export default function Strengths() {
  return (
    <section className="min-h-screen severli-page-bg px-8 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-mid-gray">
          Our Strengths
        </p>

        <h2 className="mb-6 font-serif text-4xl font-semibold text-brand-black md:text-5xl">
          What Makes Us Different
        </h2>

        <p className="mb-16 max-w-2xl text-[15px] leading-7 text-brand-mid-gray">
          Every piece is designed with intention, blending Korean-inspired
          silhouettes with practical everyday wearability.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-off-white">
                <s.icon size={20} className="opacity-50" />
              </div>

              <div>
                <h4 className="mb-1.5 text-[15px] font-semibold text-brand-black">
                  {s.title}
                </h4>

                <p className="text-[13px] leading-relaxed text-brand-mid-gray">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}