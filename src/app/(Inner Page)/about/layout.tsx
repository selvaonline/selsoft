import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selsoft - About Us",
  description: "Learn about Selsoft's leadership, industry codes, and affiliations",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}