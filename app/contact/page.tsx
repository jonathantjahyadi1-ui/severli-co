import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen severli-page-bg px-6 pb-24 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/45">
          Contact Us
        </p>

        <h1 className="mb-6 font-serif text-4xl font-semibold text-black md:text-6xl">
          Connect With Severli.co
        </h1>

        <p className="mb-12 max-w-2xl leading-7 text-gray-600">
          Hubungi Severli.co untuk informasi produk, kolaborasi, kerja sama,
          dan kebutuhan bisnis lainnya.
        </p>

        <section className="grid gap-5 md:grid-cols-2">
          <a
            href="mailto:info@severli.co"
            className="flex items-center gap-4 border border-black/10 bg-white/35 p-6
                       transition-colors duration-300 hover:border-black"
          >
            <Mail size={22} />

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-black">info@severli.co</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/severli.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-black/10 bg-white/35 p-6
                       transition-colors duration-300 hover:border-black"
          >
            <Instagram size={22} />

            <div>
              <p className="text-sm text-gray-500">Instagram</p>
              <p className="font-medium text-black">@severli.co</p>
            </div>
          </a>

          <a
  href="https://maps.app.goo.gl/gFYXNh6BXvCh27Di7"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Buka lokasi Severli.co di Google Maps"
  className="flex items-center gap-4 border border-black/10 bg-white/35 p-6
             transition-colors duration-300 hover:border-black"
>
  <MapPin size={22} />

  <div>
    <p className="text-sm text-gray-500">Lokasi</p>
    <p className="font-medium text-black">Jakarta, Indonesia</p>
  </div>
</a>

          <a
  href="https://wa.me/6285223338008?text=Halo%20Severli.co%2C%20saya%20ingin%20bertanya%20mengenai%20produk."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Hubungi Customer Service Severli.co melalui WhatsApp"
  className="flex items-center gap-4 border border-black/10 bg-white/35 p-6 transition-colors duration-300 hover:border-black"
>
  <MessageCircle size={22} />

  <div>
    <p className="text-sm text-gray-500">Customer Service</p>
    <p className="font-medium text-black">Chat melalui WhatsApp</p>
  </div>
</a>
        </section>
      </div>
    </main>
  );
}