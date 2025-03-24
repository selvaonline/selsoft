import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Pipeline Development | Selsoft",
  description: "Build efficient data pipelines that automate the flow of data from source systems to data lakes, warehouses, or databases.",
};

const DataPipelinePage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Data Pipeline Development" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Data Pipeline Development Services
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/data-pipeline-hero.jpg" 
                      alt="Data Pipeline Development" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we specialize in building efficient data pipelines that automate the flow of data 
                    from source systems to data lakes, warehouses, or databases. Our solutions enable real-time 
                    and batch data processing, ensuring that your organization can derive timely insights from 
                    vast amounts of structured and unstructured data.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Data Pipeline Development Services</h3>
                  <p className="mb-3">
                    We design and implement robust data pipelines that ensure seamless data movement, transformation, 
                    and loading for your business applications and analytics platforms.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-code-branch fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Real-time Data Streaming</h4>
                        <p>
                          We build real-time data pipelines that process and analyze streaming data as it's generated, 
                          enabling quick responses to events and trends. Using technologies like Apache Kafka, 
                          Apache Flink, and AWS Kinesis, we create scalable streaming pipelines that handle high-volume, 
                          high-velocity data.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-calendar-check fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Batch Processing Pipelines</h4>
                        <p>
                          For data that doesn't require immediate processing, we develop efficient batch processing 
                          pipelines that handle large volumes of data at scheduled intervals. Our solutions optimize 
                          resource usage while ensuring data is processed reliably and consistently.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-arrows-to-circle fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Data Integration</h4>
                        <p>
                          We design data integration pipelines that connect disparate systems and data sources, 
                          creating a unified view of your organization's data. Our integration solutions handle 
                          various data formats, protocols, and APIs to ensure seamless data flow across your 
                          entire data ecosystem.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-sliders fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Pipeline Orchestration</h4>
                        <p>
                          We implement advanced pipeline orchestration solutions using tools like Apache Airflow, 
                          AWS Step Functions, and Azure Data Factory to schedule, monitor, and manage complex data 
                          workflows. Our orchestration solutions ensure dependencies are respected, errors are handled 
                          gracefully, and pipelines execute reliably.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-alt fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Data Quality & Validation</h4>
                        <p>
                          We build data validation and quality checks directly into your pipelines, ensuring that 
                          only clean, consistent, and accurate data reaches your analytics systems. Our quality 
                          frameworks detect anomalies, validate data against rules, and ensure data integrity 
                          throughout the pipeline.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-wrench fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Pipeline Maintenance & Monitoring</h4>
                        <p>
                          We provide ongoing maintenance and monitoring services to ensure your data pipelines 
                          continue to operate efficiently. Our monitoring solutions detect pipeline failures, 
                          performance bottlenecks, and data quality issues, allowing for quick resolution and 
                          minimal disruption.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Technologies We Use</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Apache Spark</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Apache Kafka</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Apache Airflow</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">AWS Glue</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Azure Data Factory</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Google Dataflow</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Databricks</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="tech-card p-3 text-center rounded border">
                        <h5 className="mb-0">Python/SQL</h5>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Benefits of Our Data Pipeline Solutions</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Data Accessibility:</strong> Make data readily available for analytics and business applications.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Automation:</strong> Reduce manual data handling and processing through automated workflows.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Process increasing volumes of data without performance degradation.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Data Quality:</strong> Ensure clean, consistent data through built-in validation and quality checks.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Time to Insight:</strong> Reduce the time from data collection to actionable insights.
                    </li>
                  </ul>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Ready to Build Efficient Data Pipelines?</h3>
                    <p className="mb-4">
                      Contact us today to learn how our data pipeline solutions can streamline your data flows 
                      and unlock the full potential of your organization's data.
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

export default DataPipelinePage;
