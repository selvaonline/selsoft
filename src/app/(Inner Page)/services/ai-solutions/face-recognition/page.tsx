import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Face Recognition & Video Analysis | Selsoft",
  description: "Advanced face recognition and video analysis solutions to enhance security, optimize customer experiences, and extract actionable insights.",
};

const FaceRecognitionPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Face Recognition & Video Analysis" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Face Recognition & Video Analysis at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/face-recognition-hero.jpg" 
                      alt="Face Recognition & Video Analysis" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we specialize in developing AI-powered face recognition and video 
                    analysis solutions that enable businesses to enhance security, optimize customer 
                    experiences, and extract actionable insights from visual data. Our cutting-edge 
                    AI technologies allow for highly accurate facial recognition, real-time video 
                    analysis, and advanced surveillance capabilities.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Face Recognition & Video Analysis Solutions</h3>
                  <p className="mb-3">
                    Our face recognition and video analysis solutions are designed to meet the security
                    and operational needs of businesses across a range of industries, from security 
                    monitoring to customer behavior analysis.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-id-card fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Face Recognition Systems</h4>
                        <p>
                          We design and deploy face recognition systems that can identify and authenticate 
                          individuals with high accuracy. These systems are ideal for enhancing security 
                          in buildings, financial institutions, and other high-security environments. 
                          We provide solutions that can work in real-time or post-event, enabling 
                          organizations to track and manage access effectively.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-video fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Real-Time Video Analysis</h4>
                        <p>
                          We offer real-time video analysis solutions that can process and analyze video 
                          streams from surveillance cameras, security devices, and IoT sensors. Our AI 
                          systems can detect events, identify objects or people, and alert stakeholders 
                          instantly, enabling rapid responses to security threats or operational issues.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-line fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Customer Behavior Analysis</h4>
                        <p>
                          Our video analysis tools help businesses understand customer behavior and improve 
                          customer engagement. We analyze in-store video footage, online interactions, 
                          and customer movements to provide insights that optimize store layouts, marketing 
                          strategies, and overall customer experience.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-shield-halved fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Anomaly Detection & Surveillance</h4>
                        <p>
                          We develop AI systems for anomaly detection that can monitor video feeds to 
                          detect unusual activities such as theft, vandalism, or unauthorized access. 
                          These systems can alert security teams in real-time, allowing for a quicker 
                          response and reducing the risks of security breaches.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-pie fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">AI-Powered Video Analytics</h4>
                        <p>
                          We provide advanced video analytics solutions that analyze large volumes of 
                          video data to derive actionable insights. From traffic monitoring and license 
                          plate recognition to event detection and crowd analysis, our AI-powered systems 
                          can help businesses gain deeper insights from their video data.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Why Choose Us for Face Recognition & Video Analysis?</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Accuracy:</strong> Our face recognition and video analysis systems offer high accuracy, even in challenging conditions like poor lighting or crowd environments.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Real-Time Insights:</strong> We provide real-time analysis, helping businesses react quickly to security or operational events.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Our solutions are designed to scale with your business, whether you have a single facility or a global network.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Data-Driven Decisions:</strong> We turn visual data into actionable insights that enhance business performance, from customer engagement to security.
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
                        <i className="fa-solid fa-user-shield fs-2 text-primary mb-3"></i>
                        <h5>Security & Surveillance</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-truck fs-2 text-primary mb-3"></i>
                        <h5>Transportation & Logistics</h5>
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
                        <i className="fa-solid fa-city fs-2 text-primary mb-3"></i>
                        <h5>Smart Cities</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with Face Recognition & Video Analysis</h3>
                    <p className="mb-4">
                      Enhance security and gain valuable insights with our AI-powered face recognition 
                      and video analysis solutions. Contact us to discuss how we can help you leverage 
                      the power of visual data.
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

export default FaceRecognitionPage;
