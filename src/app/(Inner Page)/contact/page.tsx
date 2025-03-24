import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ContactSection from "@/components/contact/ContactSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Selsoft",
  description: "Get in touch with Selsoft's technical experts. We're here to help with all your software development needs.",
};
export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Contact Us" />
        <ContactSection innerPage />
      </InnerLayout>
    </main>
  );
}
