import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "IoT Solutions | Selsoft",
  description: "Intelligent, connected IoT systems that optimize operations, improve efficiency, and enable data-driven decision making.",
};

const IoTSolutionsPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="IoT Solutions" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    IoT Solutions at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/iot-solutions-hero.jpg" 
                      alt="IoT Solutions" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we leverage the power of the Internet of Things (IoT) to create 
                    intelligent, connected systems that help businesses optimize operations, 
                    improve efficiency, and make data-driven decisions. Our IoT solutions integrate 
                    seamlessly with AI to enable real-time data processing, monitoring, and automation.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our IoT Solutions</h3>
                  <p className="mb-3">
                    We provide end-to-end IoT services, from designing IoT architectures to developing 
                    and deploying intelligent, connected systems that support business objectives.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-network-wired fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">IoT Device Integration</h4>
                        <p>
                          We design and implement IoT device integration solutions that connect sensors, 
                          devices, and machines to the cloud, enabling real-time data collection and analysis. 
                          This integration allows businesses to monitor assets, track performance, and ensure 
                          the smooth operation of critical systems.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-tools fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Predictive Maintenance</h4>
                        <p>
                          By leveraging IoT sensors and AI, we help businesses implement predictive maintenance 
                          strategies to reduce downtime and optimize asset performance. Our systems monitor 
                          equipment in real-time and predict potential failures before they occur, reducing 
                          maintenance costs and improving operational efficiency.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-sliders fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Smart Automation & Control</h4>
                        <p>
                          Our IoT solutions enable smart automation of industrial processes, enabling businesses 
                          to remotely monitor and control operations. We create systems that can automatically 
                          adjust settings, optimize processes, and reduce energy consumption.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-bar fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">IoT Data Analytics</h4>
                        <p>
                          We combine IoT data with advanced analytics tools to provide actionable insights 
                          that drive business improvements. From analyzing machine performance to optimizing 
                          inventory management, our data-driven approach enables businesses to make better decisions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-alt fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">IoT Security Solutions</h4>
                        <p>
                          Security is crucial in any IoT implementation. We help businesses secure their IoT 
                          networks and devices with advanced encryption, monitoring, and threat detection systems, 
                          ensuring that sensitive data remains protected at all times.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Why Choose Us for IoT Solutions?</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>End-to-End Expertise:</strong> From device integration to data analysis, we provide complete IoT solutions.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>AI Integration:</strong> We integrate AI with IoT to provide intelligent insights, predictive capabilities, and automated actions.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Our solutions are designed to scale with your business, handling growing amounts of data and devices.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Security:</strong> We prioritize security, ensuring that your IoT systems are safe from cyber threats.
                    </li>
                  </ul>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-industry fs-2 text-primary mb-3"></i>
                        <h5>Manufacturing</h5>
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
                        <i className="fa-solid fa-truck fs-2 text-primary mb-3"></i>
                        <h5>Logistics & Transportation</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-city fs-2 text-primary mb-3"></i>
                        <h5>Smart Cities</h5>
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
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with IoT Solutions</h3>
                    <p className="mb-4">
                      Unlock the full potential of connected devices with our advanced IoT solutions. 
                      Contact us today to learn more about how we can help optimize your business operations.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="/contact" className="btn btn-primary">Contact Us</a>
                      <a href="/services/ai-solutions" className="btn btn-outline-primary">Learn More</a>
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

export default IoTSolutionsPage;
