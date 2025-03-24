import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Data Engineering | Selsoft",
  description: "Leverage cloud platforms to design scalable data architectures that support your organization's growing data needs.",
};

const CloudDataPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Cloud Data Engineering" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Cloud Data Engineering Services
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/cloud-data-hero.jpg" 
                      alt="Cloud Data Engineering" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we leverage leading cloud platforms such as AWS, Google Cloud Platform (GCP), 
                    and Microsoft Azure to design scalable cloud-based data architectures that support your 
                    organization's growing data needs. Our engineers ensure seamless cloud migration, integration, 
                    and optimization of your data infrastructure, enabling you to harness the full power of the 
                    cloud for your data initiatives.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Cloud Data Engineering Services</h3>
                  <p className="mb-3">
                    We provide comprehensive cloud data engineering services that help organizations build and 
                    manage cloud-native data platforms, enabling scalable, secure, and cost-effective data processing.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud-arrow-up fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Data Migration</h4>
                        <p>
                          We help organizations migrate their data and data processing workloads to the cloud, 
                          whether you're moving from on-premises systems or transitioning between cloud platforms. 
                          Our migration methodology ensures minimal disruption, data integrity, and optimized 
                          performance in your new cloud environment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-diagram-project fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Data Architecture Design</h4>
                        <p>
                          We design modern, scalable cloud data architectures tailored to your business requirements. 
                          Our architects create data platforms that leverage the latest cloud services and best 
                          practices, ensuring your data infrastructure is reliable, secure, and able to support 
                          your analytics and operational needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-lake fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Data Lakes</h4>
                        <p>
                          We build and manage cloud-based data lakes that enable you to store massive amounts of 
                          structured and unstructured data cost-effectively. Our data lake solutions include 
                          proper governance, security, and cataloging capabilities, making it easy to discover 
                          and access the data you need.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-server fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Data Warehousing</h4>
                        <p>
                          We implement cloud-based data warehousing solutions using platforms like Amazon Redshift, 
                          Google BigQuery, and Azure Synapse Analytics. Our solutions enable high-performance analytics 
                          on large datasets, with optimized query performance and seamless scaling as your data grows.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-gauge-high fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Performance Optimization</h4>
                        <p>
                          We optimize your cloud data platforms for performance, cost, and efficiency. Our experts 
                          analyze your data workloads, identify bottlenecks, and implement solutions to enhance 
                          query performance, reduce processing time, and lower your cloud infrastructure costs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-alt fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Data Security & Compliance</h4>
                        <p>
                          We implement robust security measures for your cloud data infrastructure, ensuring 
                          data protection and compliance with relevant regulations. Our security solutions include 
                          encryption, access controls, monitoring, and audit capabilities tailored to your 
                          organization's specific requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Cloud Platforms We Work With</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-4">
                      <div className="cloud-platform-card p-4 text-center border rounded h-100">
                        <div className="platform-icon mb-3">
                          <i className="fa-brands fa-aws fs-1 text-primary"></i>
                        </div>
                        <h5 className="mb-3">Amazon Web Services (AWS)</h5>
                        <p className="mb-0">
                          We leverage AWS services like S3, Glue, EMR, Redshift, Athena, and Lambda to build 
                          scalable data solutions in the AWS ecosystem.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="cloud-platform-card p-4 text-center border rounded h-100">
                        <div className="platform-icon mb-3">
                          <i className="fa-brands fa-google fs-1 text-primary"></i>
                        </div>
                        <h5 className="mb-3">Google Cloud Platform (GCP)</h5>
                        <p className="mb-0">
                          We utilize GCP services such as BigQuery, Dataflow, Dataproc, Cloud Storage, and 
                          Pub/Sub to create data solutions on Google Cloud.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="cloud-platform-card p-4 text-center border rounded h-100">
                        <div className="platform-icon mb-3">
                          <i className="fa-brands fa-microsoft fs-1 text-primary"></i>
                        </div>
                        <h5 className="mb-3">Microsoft Azure</h5>
                        <p className="mb-0">
                          We work with Azure services like Data Factory, Databricks, Synapse Analytics, Data Lake Storage, 
                          and HDInsight to build comprehensive data solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Benefits of Cloud Data Engineering</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Easily scale your data infrastructure up or down based on changing business needs.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Cost-Efficiency:</strong> Pay only for the resources you use with flexible cloud pricing models.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Agility:</strong> Quickly deploy new data services and capabilities without hardware procurement delays.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Innovation:</strong> Access the latest data technologies and services as cloud providers continually innovate.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Reliability:</strong> Leverage cloud providers' highly reliable and redundant infrastructure for your data workloads.
                    </li>
                  </ul>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Ready to Move Your Data to the Cloud?</h3>
                    <p className="mb-4">
                      Contact us today to discuss how our cloud data engineering services can help you build 
                      a scalable, efficient, and secure cloud data platform.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                      <Link href="/services/data-engineering" className="btn btn-outline-primary">Back to Data Engineering</Link>
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

export default CloudDataPage;
