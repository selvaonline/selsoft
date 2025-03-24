import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GCP Cloud Practice | Selsoft",
  description: "Innovative Google Cloud Platform solutions to help businesses optimize operations, enhance collaboration, and scale seamlessly.",
};

const GCPCloudPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="GCP Cloud Practice" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    GCP Cloud Practice at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/gcp-cloud-hero.jpg" 
                      alt="GCP Cloud Practice" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, our Google Cloud Platform (GCP) practice provides innovative solutions that leverage the 
                    power of Google's cloud to help businesses optimize their operations, enhance collaboration, and scale 
                    seamlessly. With industry-leading capabilities in big data, machine learning, and AI, GCP offers 
                    enterprises an unmatched opportunity to accelerate their digital transformation.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Why Choose GCP Cloud?</h3>
                  <p className="mb-4">
                    GCP provides advanced tools for data processing, analytics, and artificial intelligence. Known for its 
                    strong capabilities in big data analytics, machine learning, and serverless computing, GCP enables 
                    enterprises to manage large workloads efficiently while benefiting from Google's global infrastructure. 
                    Its integration with Google Kubernetes Engine (GKE) and BigQuery makes it ideal for businesses needing 
                    high-performance computing and real-time analytics.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our GCP Cloud Services</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud-arrow-up fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Migration to GCP</h4>
                        <p>
                          We offer seamless cloud migration services for businesses looking to move to Google Cloud. 
                          Whether you're moving workloads, databases, or enterprise applications, our team ensures a 
                          smooth transition with minimal downtime and disruption.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-server fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Infrastructure as a Service (IaaS) on GCP</h4>
                        <p>
                          We deploy virtual machines, manage storage solutions, and architect cloud networking on Google Cloud, 
                          helping your business scale securely and efficiently.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-bar fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Data Analytics & Big Data</h4>
                        <p>
                          Google's powerful data tools, such as BigQuery, Dataflow, and Pub/Sub, are designed to help you 
                          process, analyze, and visualize massive datasets. We help organizations turn their data into 
                          actionable insights for better decision-making.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-brain fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Machine Learning & AI</h4>
                        <p>
                          With services like Google AI Platform and AutoML, we help businesses develop AI models and 
                          deploy machine learning solutions. Our team ensures that your AI strategy is scalable, secure, 
                          and tailored to your business needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cubes fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Serverless Computing & Kubernetes</h4>
                        <p>
                          We leverage Google Kubernetes Engine (GKE) to automate deployment, scaling, and management of 
                          containerized applications. Additionally, our serverless computing solutions allow you to run 
                          applications without worrying about infrastructure management.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-alt fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Security & Compliance</h4>
                        <p>
                          We help businesses implement top-tier security solutions, leveraging Google Cloud Identity, 
                          Security Command Center, and Cloud Armor to protect data and comply with industry regulations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-headset fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Managed Services & Support</h4>
                        <p>
                          Our GCP-managed services offer continuous monitoring and support, ensuring your infrastructure 
                          is secure, cost-effective, and performing optimally.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve with GCP</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-microchip fs-2 text-primary mb-3"></i>
                        <h5>Technology</h5>
                        <p className="small mb-0">Scalable infrastructure for software and tech companies.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-film fs-2 text-primary mb-3"></i>
                        <h5>Media & Entertainment</h5>
                        <p className="small mb-0">Advanced data processing and content management solutions.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail & E-Commerce</h5>
                        <p className="small mb-0">Real-time analytics and recommendation systems.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-landmark fs-2 text-primary mb-3"></i>
                        <h5>Financial Services</h5>
                        <p className="small mb-0">Data security and compliance solutions for the finance industry.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with GCP</h3>
                    <p className="mb-4">
                      Unlock the power of Google Cloud and innovate faster with the help of our cloud experts. 
                      Reach out to us today to explore tailored solutions for your enterprise.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                      <Link href="/services/cloud-services" className="btn btn-outline-primary">Learn More</Link>
                    </div>
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

export default GCPCloudPage;
