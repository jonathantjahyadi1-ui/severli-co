const teams = [
  { name: "Creative & Design", role: "Designers & Creative Team" },
  { name: "Marketing", role: "Brand & Digital Marketing Team" },
  { name: "Operations", role: "Operations & Production Team" },
  { name: "Finance", role: "Finance & Business Support" },
  { name: "Customer Relations", role: "Customer Experience Team" },
  { name: "Warehouse & Fulfillment", role: "Warehouse & Fulfillment Team" },
];

export default function Team() {
  return (
    <section id="team" className="px-16 py-20 bg-brand-pure">
      <p className="section-label">OUR TEAM</p>
      <h2 className="section-heading">The People Behind Severli.co</h2>
      <p className="section-para mb-10">
        A passionate team dedicated to bringing modern Korean-inspired fashion
        to women who value everyday elegance.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team.name}
            className="bg-brand-white rounded-md overflow-hidden border border-brand-lighter-gray"
          >
            {/* Team Image Placeholder */}
            <div className="h-[200px] bg-[#e5e5e5] flex items-center justify-center">
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-9 bg-black/[0.06] rounded-t-full"
                    style={{
                      height: `${44 + Math.random() * 20}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-[18px]">
              <h4 className="text-sm font-semibold text-brand-black">
                {team.name}
              </h4>
              <p className="text-xs text-brand-gray mt-[3px]">{team.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}