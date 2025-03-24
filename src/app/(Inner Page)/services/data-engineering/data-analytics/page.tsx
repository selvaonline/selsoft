import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Analytics | Selsoft",
  description: "Turn raw data into actionable insights with our comprehensive data analytics services.",
};

const DataAnalyticsPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Data Analytics" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Data Analytics at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/data-analytics-hero.jpg" 
                      alt="Data Analytics" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we specialize in Data Analytics that turn raw data into actionable insights. 
                    Our expert analysts and engineers work together to process and visualize data, enabling 
                    businesses to make informed decisions, optimize strategies, and drive better outcomes. 
                    Whether it's descriptive, diagnostic, or prescriptive analytics, our solutions empower 
                    organizations to leverage their data to its full potential.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Data Analytics Services</h3>
                  <p className="mb-3">
                    We offer comprehensive Data Analytics services, including data visualization, dashboard 
                    development, and data-driven decision-making frameworks that help businesses interpret 
                    their data and make smarter decisions.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-pie fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Descriptive Analytics</h4>
                        <p>
                          We help businesses understand what happened by using descriptive analytics to summarize 
                          past data and uncover patterns. Our solutions include generating reports, visualizing key 
                          metrics, and tracking KPIs, giving businesses a clear view of past performance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-magnifying-glass-chart fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Diagnostic Analytics</h4>
                        <p>
                          We use diagnostic analytics to answer why something happened. Our team digs deeper into 
                          your data to uncover the root causes of specific trends or events, providing you with 
                          insights into performance gaps, operational inefficiencies, or customer behavior anomalies.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-compass fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Prescriptive Analytics</h4>
                        <p>
                          We provide prescriptive analytics that not only explains why something happened but also 
                          recommends the best course of action. Using optimization algorithms and simulations, our 
                          solutions help businesses make data-driven decisions to improve outcomes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-gauge-high fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Data Visualization & Dashboards</h4>
                        <p>
                          Our team of data experts develops interactive dashboards and visualizations that make it 
                          easier to explore, interpret, and share data insights. We design dashboards that display 
                          real-time data in an intuitive and actionable format, enabling stakeholders to make quick decisions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-briefcase fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Business Intelligence</h4>
                        <p>
                          Our business intelligence (BI) solutions help organizations consolidate and analyze data 
                          from multiple sources. We design custom BI reports and analytics to help businesses track 
                          performance, identify trends, and make strategic decisions based on real-time insights.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-file-chart-column fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Ad-Hoc Reporting & Analysis</h4>
                        <p>
                          For businesses needing quick insights on specific data sets, we offer ad-hoc reporting and 
                          analysis services. Our flexible reporting solutions allow stakeholders to generate customized 
                          reports based on evolving business requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Why Choose Us for Data Analytics?</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Actionable Insights:</strong> Our focus is on delivering insights that drive action and improve business outcomes.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Custom Dashboards:</strong> We design interactive dashboards tailored to your business needs, making it easy to monitor key metrics and track performance.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Our analytics solutions are designed to grow with your business, providing the flexibility to analyze larger and more complex data as you scale.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>End-to-End Analytics:</strong> From data processing to visualization and decision-making, we offer a comprehensive suite of analytics services.
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
                        <i className="fa-solid fa-bolt fs-2 text-primary mb-3"></i>
                        <h5>Energy & Utilities</h5>
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
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with Data Analytics</h3>
                    <p className="mb-4">
                      Leverage your data to drive better decisions with our advanced analytics solutions. 
                      Contact us today to discover how we can help you unlock valuable insights and transform 
                      your business performance.
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

export default DataAnalyticsPage;
