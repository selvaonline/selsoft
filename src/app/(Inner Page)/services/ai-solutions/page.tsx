import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Solutions | Selsoft",
  description: "Advanced AI solutions to solve complex business problems and drive innovation with Selsoft.",
};

const AIServicePage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="AI Solutions" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-5">
                    Artificial Intelligence Solutions
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/rv-14-case-study-1.jpg" 
                      alt="AI Solutions" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-5">
                    At Selsoft, we provide cutting-edge artificial intelligence solutions designed to transform businesses 
                    across industries. Our AI technologies enable organizations to automate processes, gain valuable 
                    insights from data, enhance decision-making, and create intelligent systems that learn and improve 
                    over time. With our team of expert AI engineers and data scientists, we develop custom AI solutions 
                    that address your specific business challenges and drive innovation.
                  </p>
                  
                  <h3 className="h4 mb-4">Our AI Solutions</h3>
                  <p className="mb-4">
                    Explore our comprehensive range of AI services tailored to meet diverse business needs:
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-wand-magic-sparkles fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">AI Development</h3>
                        <p className="mb-3">
                          Custom AI solutions tailored to your business needs, from predictive analytics to intelligent automation.
                        </p>
                        <Link href="#" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-robot fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Process Automation</h3>
                        <p className="mb-3">
                          AI-driven automation solutions that streamline workflows and optimize business operations.
                        </p>
                        <Link href="#" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-id-card fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Face Recognition</h3>
                        <p className="mb-3">
                          Advanced face recognition and video analysis for enhanced security and customer insights.
                        </p>
                        <Link href="#" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-network-wired fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">IoT Solutions</h3>
                        <p className="mb-3">
                          Intelligent connected systems that enable real-time monitoring, control, and data analysis.
                        </p>
                        <Link href="#" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-brain fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">Deep Learning</h3>
                        <p className="mb-3">
                          Neural network solutions for complex pattern recognition tasks and data analysis.
                        </p>
                        <Link href="#" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="service-card p-4 text-center h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-comments fs-1 text-primary"></i>
                        </div>
                        <h3 className="h5 mb-3">NLP Solutions</h3>
                        <p className="mb-3">
                          Natural language processing for understanding and generating human language.
                        </p>
                        <Link href="#" className="btn btn-sm btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="benefits-section bg-light p-5 rounded mb-5">
                    <h3 className="h4 mb-4 text-center">Benefits of AI Solutions</h3>
                    <div className="row g-4 mt-2">
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-chart-line text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Enhanced Efficiency</h4>
                            <p className="mb-0">Automate repetitive tasks and streamline processes to save time and resources.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-lightbulb text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Data-Driven Insights</h4>
                            <p className="mb-0">Extract valuable insights from data to make informed business decisions.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-shield-halved text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Improved Security</h4>
                            <p className="mb-0">Enhance security measures with advanced AI-powered protection systems.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="benefit-item d-flex align-items-start">
                          <div className="benefit-icon me-3">
                            <i className="fa-solid fa-users text-primary fs-3"></i>
                          </div>
                          <div className="benefit-content">
                            <h4 className="h6 mb-2">Enhanced User Experience</h4>
                            <p className="mb-0">Create personalized experiences that adapt to user preferences and behaviors.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-primary p-5 rounded text-center text-white">
                    <h3 className="mb-3">Ready to Transform Your Business with AI?</h3>
                    <p className="mb-4">
                      Contact us today to discuss how our AI solutions can help you drive innovation and achieve your business goals.
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

export default AIServicePage;
