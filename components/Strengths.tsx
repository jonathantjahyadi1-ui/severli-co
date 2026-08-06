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
    <section id="strengths" className="px-16 py-20">
      <p className="section-label">OUR STRENGTHS</p>
      <h2 className="section-heading">What Makes Us Different</h2>
      <p className="section-para mb-12">
        Every piece is designed with intention, blending Korean-inspired
        silhouettes with practical everyday wearability.
      </p>

      <div className="grid grid-cols-3 gap-8">
        {strengths.map((s) => (
          <div key={s.title} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-brand-off-white flex items-center justify-center flex-shrink-0">
              <s.icon size={20} className="opacity-50" />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-brand-black mb-1.5">
                {s.title}
              </h4>
              <p className="text-[13px] text-brand-mid-gray leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}