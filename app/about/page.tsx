import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Severli | Severli",
  description:
    "Learn about Severli, an Indonesian womenswear brand building a clear identity through thoughtful product development.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return <About />;
}