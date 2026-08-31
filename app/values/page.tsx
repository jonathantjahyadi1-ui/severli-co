import type { Metadata } from "next";
import Strengths from "@/components/Strengths";

export const metadata: Metadata = {
  title: "Our Values | Severli",
  description:
    "Discover the values that guide Severli in creating relevant, thoughtful, and dependable womenswear.",
  alternates: {
    canonical: "/values/",
  },
};

export default function ValuesPage() {
  return <Strengths />;
}