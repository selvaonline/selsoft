import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Science | Selsoft",
  description: "Advanced data science solutions to extract valuable insights from your data and drive growth.",
};

const DataSciencePage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Data Science" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Data Science at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/data-science-hero.jpg" 
                      alt="Data Science" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we empower businesses to unlock valuable insights from their data with Data Science. 
                    Our team of data scientists applies advanced techniques in machine learning, predictive analytics, 
                    and statistical modeling to solve complex business problems. Whether you're looking to improve 
                    operational efficiency, predict customer behavior, or optimize processes, our data science solutions 
                    provide the intelligence needed to drive growth.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Data Science Services</h3>
                  <p className="mb-3">
                    We offer a full suite of Data Science services designed to turn raw data into actionable business insights, 
                    helping you make data-driven decisions that accelerate growth and improve performance.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-line fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Predictive Analytics</h4>
                        <p>
                          We use predictive analytics to build models that forecast future trends and behaviors based on historical data. 
                          From sales forecasts to demand predictions, our models enable businesses to make proactive decisions and stay ahead 
                          of the competition.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-robot fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Machine Learning & AI Models</h4>
                        <p>
                          We specialize in developing custom machine learning (ML) and artificial intelligence (AI) models 
                          that automate decision-making and improve operational efficiency. Our solutions enable businesses 
                          to identify patterns, make predictions, and personalize customer experiences.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-calculator fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Statistical Modeling</h4>
                        <p>
                          Our data scientists use statistical modeling techniques to understand relationships within your data 
                          and uncover hidden insights. We apply regression analysis, hypothesis testing, and optimization to solve 
                          problems related to pricing, product development, and resource allocation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-comments fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Natural Language Processing (NLP)</h4>
                        <p>
                          We develop NLP solutions that allow businesses to extract meaning and insights from unstructured text data. 
                          Whether it's sentiment analysis, document classification, or chatbot development, we leverage NLP techniques 
                          to turn text data into actionable insights.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-lightbulb fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Data-Driven Decision Making</h4>
                        <p>
                          We help organizations implement data-driven decision-making frameworks by leveraging advanced analytics 
                          and machine learning. Our goal is to enhance your business intelligence and enable better, faster 
                          decision-making processes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-brain fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Deep Learning</h4>
                        <p>
                          For complex tasks such as image recognition, speech processing, and real-time predictive analytics, 
                          we use deep learning techniques to create sophisticated models that provide highly accurate results.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Why Choose Us for Data Science?</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Advanced Analytics:</strong> We apply cutting-edge statistical techniques and machine learning models to solve complex business challenges.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Custom Solutions:</strong> Our data scientists develop tailored solutions that align with your unique business goals and objectives.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalable Insights:</strong> We design models that grow with your business, ensuring that you can continue to derive value from your data as your needs evolve.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Data Expertise:</strong> Our team of experienced data scientists is skilled in a wide range of analytics and AI techniques, making us your trusted partner for all data science needs.
                    </li>
                  </ul>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail & E-Commerce</h5>
                      </div>
                    </div>
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
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with Data Science</h3>
                    <p className="mb-4">
                      Ready to unlock the potential of your data? Contact us today to explore how our data science solutions 
                      can help you drive smarter decisions and accelerate business growth.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                      <Link href="/services/data-engineering" className="btn btn-outline-primary">Learn More</Link>
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

export default DataSciencePage;
