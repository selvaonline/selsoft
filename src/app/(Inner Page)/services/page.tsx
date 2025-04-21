import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services | Selsoft",
  description: "Explore Selsoft's comprehensive range of technology services including AI, Data Engineering, and Cloud Solutions.",
};

const ServicesPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Our Services" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-5">
                    Comprehensive Technology Solutions
                  </h2>
                  
                  <p className="text-center mb-5">
                    At Selsoft, we offer a wide range of innovative technology solutions designed to help businesses 
                    transform, innovate, and achieve their strategic goals. Explore our service offerings below.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-robot fs-1 text-primary"></i>
                        </div>
                        <h3 className="h4 mb-3">AI Solutions</h3>
                        <p className="mb-4">
                          Harness the power of artificial intelligence to solve complex business challenges 
                          and gain competitive advantage.
                        </p>
                        <Link href="/services/ai-solutions" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-database fs-1 text-primary"></i>
                        </div>
                        <h3 className="h4 mb-3">Data Engineering</h3>
                        <p className="mb-4">
                          Transform your raw data into valuable insights with our comprehensive 
                          data engineering solutions.
                        </p>
                        <Link href="/services/data-engineering" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud fs-1 text-primary"></i>
                        </div>
                        <h3 className="h4 mb-3">Cloud Services</h3>
                        <p className="mb-4">
                          Scale efficiently and innovate rapidly with our secure and reliable 
                          cloud computing solutions.
                        </p>
                        <Link href="/services/cloud-services" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Need a Custom Solution?</h3>
                    <p className="mb-4">
                      Our team of experts is ready to help you with tailored solutions that address your unique business challenges.
                    </p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InnerLayout>
    </main>
  );
};

export default ServicesPage;
