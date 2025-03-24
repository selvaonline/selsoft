import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Industries We Serve | Selsoft",
  description: "Explore the diverse industries where Selsoft delivers innovative technology solutions and expertise.",
};

const IndustriesPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Industries We Serve" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-5">
                    Industry Expertise
                  </h2>
                  <p className="mb-5">
                    At Selsoft, we bring deep vertical expertise across a wide range of industries. 
                    Our specialized knowledge allows us to understand the unique challenges and opportunities 
                    within each sector, enabling us to deliver tailored technology solutions that drive 
                    measurable business outcomes.
                  </p>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Healthcare</h3>
                        <p>
                          We deliver innovative healthcare technology solutions that enhance patient care, 
                          streamline clinical workflows, and ensure regulatory compliance. From electronic 
                          health records to telehealth platforms, we help healthcare organizations leverage 
                          technology to improve outcomes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Finance & Banking</h3>
                        <p>
                          Our financial technology solutions help banks and financial institutions modernize 
                          their operations, enhance security, and deliver exceptional customer experiences. 
                          We develop secure payment systems, fraud detection tools, and digital banking 
                          platforms that meet the highest standards of compliance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Retail</h3>
                        <p>
                          We help retailers transform their customer experience through omnichannel 
                          solutions, inventory management systems, and data analytics. Our retail 
                          technology solutions enable businesses to stay competitive in a rapidly 
                          evolving marketplace.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Manufacturing</h3>
                        <p>
                          Our manufacturing solutions optimize production processes, enhance supply 
                          chain visibility, and enable predictive maintenance. We help manufacturers 
                          embrace Industry 4.0 technologies to increase efficiency and reduce costs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Telecommunications</h3>
                        <p>
                          We support telecommunications companies with solutions for network management, 
                          customer service optimization, and digital transformation. Our expertise helps 
                          telecom providers deliver reliable services and stay ahead in a competitive market.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Energy & Utilities</h3>
                        <p>
                          Our energy and utilities solutions focus on grid modernization, resource 
                          optimization, and customer engagement. We help utility companies leverage 
                          IoT, analytics, and cloud technologies to operate more efficiently and sustainably.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Transportation & Logistics</h3>
                        <p>
                          We develop transportation and logistics solutions that optimize routing, 
                          enhance visibility, and improve fleet management. Our technologies help 
                          logistics providers deliver goods more efficiently and cost-effectively.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="industry-card p-4 shadow-sm rounded h-100">
                        <h3 className="h4 mb-3">Government & Public Sector</h3>
                        <p>
                          Our government and public sector solutions focus on digital citizen services, 
                          secure data management, and operational efficiency. We help government agencies 
                          modernize their IT infrastructure to better serve their communities.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-5">
                    <h3 className="h4 mb-4">Partner with Selsoft for Industry-Specific Solutions</h3>
                    <p>
                      No matter what industry you operate in, Selsoft has the expertise and technology solutions 
                      to help you achieve your business goals. Our team of industry specialists understands your 
                      unique challenges and opportunities, allowing us to deliver customized solutions that drive 
                      real business value.
                    </p>
                    <a href="/contact" className="btn btn-primary mt-3">Contact Us to Learn More</a>
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

export default IndustriesPage;