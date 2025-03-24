import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ContactSection from "@/components/contact/ContactSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selsoft - Contact Us",
  description: "Get in touch with Selsoft's AI, Data, and Cloud experts",
};
export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Contact" />
        <ContactSection innerPage />
      </InnerLayout>
    </main>
  );
}
