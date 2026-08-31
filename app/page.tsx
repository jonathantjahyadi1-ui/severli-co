import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Severli — Official Website",
  description:
    "Severli is an Indonesian womenswear brand based in Jakarta, creating thoughtfully designed pieces for work and everyday life.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://severli.com/#website",
      url: "https://severli.com/",
      name: "Severli",
      alternateName: "Severli.co",
      inLanguage: "en-ID",
      publisher: {
        "@id": "https://severli.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://severli.com/#organization",
      name: "Severli",
      legalName: "PT Thriva Grovia Bersama",
      url: "https://severli.com/",
      logo: "https://severli.com/images/logo/severli-logo-black.webp",
      foundingDate: "2020",
      email: "severlimedia@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-852-2333-8008",
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      sameAs: [
        "https://www.instagram.com/severli.co/",
        "https://www.tiktok.com/@severli.co",
        "https://shopee.co.id/severli.co",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Stats />
      <CTABanner />
    </>
  );
}