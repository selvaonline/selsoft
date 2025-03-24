import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Services | Selsoft",
  description: "Comprehensive cloud solutions to help your business scale, innovate, and transform with Selsoft's cloud expertise.",
};

const CloudServicesPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Cloud Services" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-5">
                    Cloud Computing Solutions
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/cloud-services-hero.jpg" 
                      alt="Cloud Services" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-5">
                    At Selsoft, we provide comprehensive cloud solutions that empower businesses to scale efficiently, 
                    innovate rapidly, and transform their operations with secure and reliable cloud infrastructure. 
                    Our certified experts across AWS, Azure, and Google Cloud Platform help enterprises design, 
                    implement, and manage cloud environments that align with their business objectives and drive 
                    digital transformation.
                  </p>
                  
                  <h3 className="h4 mb-4">Our Cloud Services</h3>
                  <p className="mb-4">
                    We offer end-to-end cloud services to help you harness the full potential of the cloud, 
                    whether you're just starting your cloud journey or looking to optimize your existing environment.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-brands fa-aws fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">AWS Cloud Practice</h3>
                        <p className="mb-3">
                          End-to-end AWS solutions tailored to meet the unique needs of enterprise-level businesses.
                        </p>
                        <Link href="/services/cloud-services/aws-cloud" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-brands fa-microsoft fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Azure Cloud Practice</h3>
                        <p className="mb-3">
                          Comprehensive Azure solutions to transform your IT infrastructure and drive innovation.
                        </p>
                        <Link href="/services/cloud-services/azure-cloud" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-brands fa-google fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">GCP Cloud Practice</h3>
                        <p className="mb-3">
                          Innovative Google Cloud solutions to help businesses optimize operations and scale seamlessly.
                        </p>
                        <Link href="/services/cloud-services/gcp-cloud" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Core Cloud Capabilities</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-4">
                      <div className="capability-card p-4 h-100 border rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud-arrow-up fs-2 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Migration</h4>
                        <p>
                          Strategic planning and execution for seamless migration to the cloud with minimal disruption to 
                          your business operations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="capability-card p-4 h-100 border rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-server fs-2 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Infrastructure</h4>
                        <p>
                          Design and implementation of scalable, secure, and high-performance cloud infrastructure 
                          tailored to your business needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="capability-card p-4 h-100 border rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-code-branch fs-2 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">DevOps & Automation</h4>
                        <p>
                          Implementation of DevOps practices and automation to streamline development, testing, 
                          and deployment processes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="capability-card p-4 h-100 border rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-halved fs-2 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Security</h4>
                        <p>
                          Comprehensive security solutions to protect your cloud environment, data, and applications 
                          from threats and ensure compliance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="capability-card p-4 h-100 border rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-network-wired fs-2 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Hybrid & Multi-Cloud</h4>
                        <p>
                          Design and management of hybrid and multi-cloud environments that leverage the best of 
                          on-premises and multiple cloud providers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="capability-card p-4 h-100 border rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-headset fs-2 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Managed Cloud Services</h4>
                        <p>
                          Ongoing management, monitoring, and optimization of your cloud environment to ensure 
                          optimal performance and cost-efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="benefits-section bg-light p-5 rounded mb-5">
                    <h3 className="h4 mb-4 text-center">Benefits of Our Cloud Services</h3>
                    <div className="row g-4 mt-2">
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-rocket text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Scalability & Flexibility</h4>
                            <p className="mb-0">Scale resources up or down based on demand, paying only for what you use.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-dollar-sign text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Cost Optimization</h4>
                            <p className="mb-0">Reduce capital expenses and optimize operational costs with cloud-based solutions.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-gauge-high text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Performance & Reliability</h4>
                            <p className="mb-0">Improve application performance and ensure high availability with global cloud infrastructure.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-lightbulb text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Innovation & Agility</h4>
                            <p className="mb-0">Accelerate innovation and time-to-market with rapid deployment capabilities.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-primary p-5 rounded text-center text-white">
                    <h3 className="mb-3">Elevate Your Business with Cloud Technology</h3>
                    <p className="mb-4">
                      Contact us today to discover how our cloud services can help you achieve greater agility, 
                      efficiency, and innovation in your business operations.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <Link href="/contact" className="btn btn-light">Contact Us</Link>
                      <Link href="/services" className="btn btn-outline-light">Explore All Services</Link>
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

export default CloudServicesPage;
