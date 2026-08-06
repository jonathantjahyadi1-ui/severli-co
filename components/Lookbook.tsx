export default function Lookbook() {
  return (
    <section id="lookbook" className="px-16 py-20">
      <p className="section-label">LOOKBOOK</p>
      <h2 className="section-heading">Style Inspiration</h2>
      <p className="section-para mb-10">
        Discover how to style Severli.co pieces for work, campus, and every
        occasion in between.
      </p>

      <div className="grid grid-cols-4 gap-4">
        {/* Large cards */}
        <div className="col-span-2 h-[340px] bg-brand-lighter-gray rounded flex items-center justify-center">
          <div className="w-[100px] h-[200px] bg-black/[0.06] rounded-t-[20%]" />
        </div>
        <div className="col-span-2 h-[340px] bg-brand-lighter-gray rounded flex items-center justify-center">
          <div className="w-[100px] h-[200px] bg-black/[0.06] rounded-t-[20%]" />
        </div>
        {/* Small cards */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[340px] bg-brand-lighter-gray rounded flex items-center justify-center"
          >
            <div className="w-[80px] h-[160px] bg-black/[0.06] rounded-t-[20%]" />
          </div>
        ))}
      </div>
    </section>
  );
}