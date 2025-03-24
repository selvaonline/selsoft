import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Cloud Practice | Selsoft",
  description: "End-to-end AWS cloud solutions tailored to meet the unique needs of enterprise-level businesses.",
};

const AWSCloudPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="AWS Cloud Practice" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    AWS Cloud Practice at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/aws-cloud-hero.jpg" 
                      alt="AWS Cloud Practice" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, our Amazon Web Services (AWS) cloud practice is designed to provide end-to-end cloud 
                    solutions tailored to meet the unique needs of enterprise-level businesses. With AWS being the 
                    leader in the cloud computing space, our team of certified AWS experts is committed to leveraging 
                    its vast array of tools and services to help organizations build, scale, and optimize their infrastructure.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Why Choose AWS Cloud?</h3>
                  <p className="mb-4">
                    AWS offers a wide variety of cloud services including compute, storage, databases, machine learning, 
                    analytics, and IoT. It is known for its scalability, security, and the ability to innovate rapidly. 
                    With AWS, enterprises can harness the power of the cloud while ensuring that their infrastructure is 
                    always reliable, secure, and cost-efficient.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our AWS Cloud Services</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-cloud-arrow-up fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cloud Migration</h4>
                        <p>
                          Our experts help you move your on-premise infrastructure to AWS with minimal disruption and risk. 
                          We provide a complete cloud migration strategy, from discovery and assessment to implementation 
                          and optimization, ensuring that your business is fully leveraging the power of the cloud.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-server fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">AWS Cloud Infrastructure</h4>
                        <p>
                          We design and deploy scalable, secure, and high-performance infrastructure on AWS that supports 
                          your critical applications. Our infrastructure services include compute resources, storage solutions, 
                          network architecture, and disaster recovery.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-dollar-sign fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Cost Optimization</h4>
                        <p>
                          As one of the most flexible and feature-rich cloud platforms, AWS can also be overwhelming in terms 
                          of costs. We help businesses implement cost-effective strategies using tools such as AWS Cost Explorer, 
                          AWS Budgets, and AWS Trusted Advisor to ensure your cloud environment remains efficient and within budget.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-code-branch fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">AWS DevOps & Automation</h4>
                        <p>
                          Our AWS DevOps services streamline development and operations by automating your software delivery 
                          pipeline. We help businesses leverage AWS CodePipeline, AWS CodeBuild, and other tools to accelerate 
                          deployment and improve collaboration.
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
                          Security is our top priority. Our team helps businesses implement robust security measures with 
                          AWS Identity and Access Management (IAM), AWS Key Management Service (KMS), and AWS Shield to ensure 
                          that your infrastructure is fully protected against cyber threats and compliant with relevant 
                          industry standards.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-line fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Analytics & Machine Learning</h4>
                        <p>
                          AWS Analytics services allow you to process vast amounts of data with services like Amazon Redshift, 
                          Amazon EMR, and Amazon QuickSight. Additionally, our machine learning capabilities use services like 
                          Amazon SageMaker to build predictive models and derive valuable insights.
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
                          We offer 24/7 managed services to ensure your AWS environment is always running at peak performance. 
                          Our support includes proactive monitoring, incident management, and routine updates to keep your 
                          applications and systems optimized.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve with AWS</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-landmark fs-2 text-primary mb-3"></i>
                        <h5>Finance & Banking</h5>
                        <p className="small mb-0">Secure, scalable solutions for financial institutions.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail & E-commerce</h5>
                        <p className="small mb-0">High-performance infrastructure for retail businesses with global reach.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-hospital fs-2 text-primary mb-3"></i>
                        <h5>Healthcare</h5>
                        <p className="small mb-0">HIPAA-compliant services for healthcare providers.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="industry-card p-3 text-center rounded border h-100">
                        <i className="fa-solid fa-film fs-2 text-primary mb-3"></i>
                        <h5>Media & Entertainment</h5>
                        <p className="small mb-0">Scalable services for video processing, streaming, and content management.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with AWS</h3>
                    <p className="mb-4">
                      We are ready to help you explore the power of AWS. Contact us to schedule a consultation and 
                      start building your cloud infrastructure today.
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

export default AWSCloudPage;
