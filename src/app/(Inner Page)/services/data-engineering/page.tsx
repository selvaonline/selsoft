import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Engineering | Selsoft",
  description: "Comprehensive data engineering solutions to transform your raw data into valuable business insights.",
};

const DataEngineeringPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Data Engineering" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-5">
                    Data Engineering Solutions
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/data-engineering-hero.jpg" 
                      alt="Data Engineering" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-5">
                    At Selsoft, we specialize in Data Engineering, the foundation of data-driven decision-making. 
                    Our team of expert engineers works tirelessly to design, build, and manage scalable and robust 
                    data architectures that transform raw data into actionable insights. With a deep understanding 
                    of modern data pipelines, cloud platforms, and data storage technologies, we ensure that your 
                    data infrastructure is optimized for performance, scalability, and security.
                  </p>
                  
                  <h3 className="h4 mb-4">Our Data Engineering Services</h3>
                  <p className="mb-4">
                    We offer end-to-end Data Engineering solutions, ensuring seamless integration and processing of data 
                    from multiple sources to deliver high-quality, consistent, and reliable datasets for analytics, 
                    machine learning, and business intelligence.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-stream fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Data Pipeline Development</h3>
                        <p className="mb-3">
                          We specialize in building efficient data pipelines that automate the flow of data from source systems.
                        </p>
                        <Link href="/services/data-engineering/data-pipeline" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Cloud Data Engineering</h3>
                        <p className="mb-3">
                          Leveraging cloud platforms to design scalable cloud-based data architectures.
                        </p>
                        <Link href="/services/data-engineering/cloud-data" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-warehouse fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Data Warehousing</h3>
                        <p className="mb-3">
                          Building data warehousing solutions that centralize your data from multiple sources.
                        </p>
                        <Link href="/services/data-engineering/data-warehousing" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-exchange-alt fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">ETL Solutions</h3>
                        <p className="mb-3">
                          Extract, transform, and load processes designed for multiple data sources.
                        </p>
                        <Link href="/services/data-engineering/etl-solutions" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-alt fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Data Quality & Governance</h3>
                        <p className="mb-3">
                          Implementing robust data governance practices to ensure data integrity.
                        </p>
                        <Link href="/services/data-engineering/data-governance" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-database fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Big Data Solutions</h3>
                        <p className="mb-3">
                          Handling large-scale data systems using technologies like Hadoop, Spark, and Kafka.
                        </p>
                        <Link href="/services/data-engineering/big-data" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="benefits-section bg-light p-5 rounded mb-5">
                    <h3 className="h4 mb-4 text-center">Why Choose Us for Data Engineering?</h3>
                    <div className="row g-4 mt-2">
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-code text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Expertise</h4>
                            <p className="mb-0">Our data engineers have extensive experience designing and implementing robust data architectures using the latest technologies.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-expand text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Scalability</h4>
                            <p className="mb-0">We design solutions that scale with your data needs, ensuring your infrastructure is future-proof.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-check-circle text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Reliability</h4>
                            <p className="mb-0">Our focus on data integrity and quality ensures that your data is always accurate and actionable.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-cloud text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Cloud Expertise</h4>
                            <p className="mb-0">With deep knowledge of cloud-based data solutions, we ensure that your data infrastructure is secure, scalable, and optimized for performance.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-hospital fs-2 text-primary mb-3"></i>
                        <h5>Healthcare</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-landmark fs-2 text-primary mb-3"></i>
                        <h5>Finance & Banking</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail & E-Commerce</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-industry fs-2 text-primary mb-3"></i>
                        <h5>Manufacturing</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-tower-cell fs-2 text-primary mb-3"></i>
                        <h5>Telecommunications</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-bolt fs-2 text-primary mb-3"></i>
                        <h5>Energy & Utilities</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-primary p-5 rounded text-center text-white">
                    <h3 className="mb-3">Get Started with Data Engineering</h3>
                    <p className="mb-4">
                      Unlock the potential of your data with our data engineering solutions. Contact us today to learn 
                      how we can help you build a strong foundation for data-driven decision-making.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <Link href="/contact" className="btn btn-light">Contact Us</Link>
                      <Link href="/services" className="btn btn-outline-light">Learn More</Link>
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

export default DataEngineeringPage;
