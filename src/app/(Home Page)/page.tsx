import AboutSection6 from "@/components/about/AboutSection6";
import BannerSection8 from "@/components/banner/BannerSection8";
import CtaSection from "@/components/cta/CtaSection";
import FooterSection8 from "@/components/footer/FooterSection8";
import HeaderSection7 from "@/components/header/HeaderSection7";
import SearchFormModal from "@/components/modal/SearchFormModal";
import CaseStudySection from "@/components/project/CaseStudySection";
import ServiceSection6 from "@/components/service/ServiceSection6";
import StatSection from "@/components/stats/StatSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selsoft - AI, Data & Cloud Solutions",
  description: "Driving the future of technology with innovations in AI, Data, and Cloud solutions",
};

export default function Home() {
  return (
    <main className="rv-4-body">
      <HeaderSection7 />
      <BannerSection8 />
      <ServiceSection6 />
      <AboutSection6 />
      <StatSection />
      <CtaSection />
      <CaseStudySection />
      <FooterSection8 />
      {/* Modal */}
      <SearchFormModal />
    </main>
  );
}
