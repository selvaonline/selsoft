import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import ServiceSection2 from "@/components/service/ServiceSection2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selsoft - Our Services",
  description: "Explore Selsoft's AI, Data Engineering, and Cloud Solutions",
};
export default function Home() {
  return (
    <main className="rv-14-body service-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Services" />
        <ServiceSection2 />
        <CtaSection />
      </InnerLayout>
    </main>
  );
}
