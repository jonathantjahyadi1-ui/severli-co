import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          Contact Us
        </p>

        <h1 className="mb-6 font-serif text-4xl text-black md:text-6xl">
          Connect With Severli.co
        </h1>

        <p className="mb-12 max-w-2xl leading-7 text-gray-600">
          Hubungi Severli.co untuk informasi produk, kolaborasi, kerja sama,
          dan kebutuhan bisnis lainnya.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <a
            href="mailto:info@severli.co"
            className="flex items-center gap-4 border border-gray-200 p-6 transition hover:border-black"
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
            className="flex items-center gap-4 border border-gray-200 p-6 transition hover:border-black"
          >
            <Instagram size={22} />
            <div>
              <p className="text-sm text-gray-500">Instagram</p>
              <p className="font-medium text-black">@severli.co</p>
            </div>
          </a>

          <div className="flex items-center gap-4 border border-gray-200 p-6">
            <MapPin size={22} />
            <div>
              <p className="text-sm text-gray-500">Lokasi</p>
              <p className="font-medium text-black">Jakarta, Indonesia</p>
            </div>
          </div>

          <a
            href="#"
            className="flex items-center gap-4 border border-gray-200 p-6 transition hover:border-black"
          >
            <MessageCircle size={22} />
            <div>
              <p className="text-sm text-gray-500">Customer Service</p>
              <p className="font-medium text-black">Hubungi Severli.co</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}