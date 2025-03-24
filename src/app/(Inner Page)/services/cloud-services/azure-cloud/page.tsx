import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Azure Cloud Practice | Selsoft",
  description: "Comprehensive Microsoft Azure cloud solutions to transform your IT infrastructure, streamline operations, and drive innovation.",
};

const AzureCloudPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Azure Cloud Practice" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Azure Cloud Practice at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/azure-cloud-hero.jpg" 
                      alt="Azure Cloud Practice" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, our Microsoft Azure cloud practice is focused on providing comprehensive cloud solutions 
                    that help enterprises transform their IT infrastructure, streamline operations, and drive innovation. 
                    As one of the leading cloud platforms, Azure combines the flexibility of hybrid cloud, extensive security 
                    features, and deep integration with Microsoft services, making it a perfect choice for businesses looking 
                    to scale effectively.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Why Choose Azure Cloud?</h3>
                  <p className="mb-4">
                    Microsoft Azure is a powerful cloud platform offering services that range from virtual machines to 
                    artificial intelligence (AI) and Internet of Things (IoT). Its hybrid cloud capabilities, enterprise-grade 
                    security, and seamless integration with Microsoft Office 365 and Windows Server make it ideal for enterprises 
                    already using Microsoft products. Azure empowers businesses to increase efficiency, reduce costs, and stay 
                    competitive in an evolving digital landscape.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Azure Cloud Services</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud-arrow-up fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Migration to Azure</h4>
                        <p>
                          Our Azure migration services help businesses transition their workloads to the cloud seamlessly. 
                          We handle everything from assessment to migration planning, ensuring minimal downtime and maximum 
                          benefit from the Azure cloud.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-server fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Azure Infrastructure Design & Deployment</h4>
                        <p>
                          We create highly available, cost-efficient, and scalable cloud infrastructure on Azure, 
                          whether you're hosting virtual machines, databases, or building complex, multi-tiered systems.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-network-wired fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Hybrid Cloud Solutions</h4>
                        <p>
                          Azure's hybrid cloud features allow businesses to integrate on-premises infrastructure with cloud services. 
                          We help businesses build a hybrid cloud environment that balances the benefits of the cloud with existing 
                          on-premises systems.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-code-branch fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">DevOps & CI/CD Automation with Azure</h4>
                        <p>
                          Our DevOps approach leverages Azure DevOps tools like Azure DevOps Services and Azure Kubernetes 
                          Service (AKS) to streamline software delivery and improve collaboration between development and 
                          operations teams.
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
                          Azure Security Center and Azure Sentinel are among the tools we use to help protect your infrastructure 
                          from cyber threats. We ensure your data is secure and comply with regulatory standards such as GDPR and HIPAA.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-line fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Data Analytics & AI with Azure</h4>
                        <p>
                          Our Azure solutions include Azure Synapse Analytics and Azure Machine Learning, helping you analyze 
                          large datasets, gain insights, and deploy AI models to improve business decision-making.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-headset fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Managed Services & Ongoing Support</h4>
                        <p>
                          We offer comprehensive managed services, providing continuous monitoring, performance tuning, 
                          and issue resolution. Our team ensures that your Azure environment remains optimized for business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve with Azure</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-building-columns fs-2 text-primary mb-3"></i>
                        <h5>Government & Public Sector</h5>
                        <p className="small mb-0">Secure, compliant cloud solutions for public sector organizations.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-industry fs-2 text-primary mb-3"></i>
                        <h5>Manufacturing</h5>
                        <p className="small mb-0">IoT and automation solutions for the manufacturing industry.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail</h5>
                        <p className="small mb-0">Scalable solutions for retail operations with integrated e-commerce platforms.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-hospital fs-2 text-primary mb-3"></i>
                        <h5>Healthcare</h5>
                        <p className="small mb-0">Tailored solutions that are HIPAA-compliant and data-secure.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with Azure</h3>
                    <p className="mb-4">
                      Harness the full potential of Azure to drive transformation in your business. Reach out to our team 
                      for a customized solution tailored to your needs.
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

export default AzureCloudPage;
