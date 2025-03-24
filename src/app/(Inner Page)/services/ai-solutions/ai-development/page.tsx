import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Development | Selsoft",
  description: "Cutting-edge AI development services to empower businesses with intelligent systems for solving complex problems.",
};

const AIDevelopmentPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="AI Development" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    AI Development at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/ai-development-hero.jpg" 
                      alt="AI Development" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we specialize in cutting-edge AI development that empowers businesses to harness the power 
                    of artificial intelligence and create intelligent systems capable of solving complex problems. Our team 
                    of AI engineers and data scientists has extensive experience in developing AI solutions across industries, 
                    delivering custom-built applications that drive efficiency, automation, and innovation.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our AI Development Services</h3>
                  <p className="mb-3">
                    We offer a comprehensive suite of AI development services, designed to meet the specific needs of 
                    businesses at every stage of their AI journey.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-wand-magic-sparkles fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Custom AI Solutions</h4>
                        <p>
                          We design and develop custom AI solutions that are tailored to your specific business needs. 
                          Our team works closely with you to understand your goals and challenges, delivering scalable 
                          AI solutions that integrate seamlessly with your existing infrastructure. Whether it's predictive 
                          analytics, recommendation engines, or intelligent automation, our solutions are designed to drive 
                          business value.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-brain fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Machine Learning & Natural Language Processing (NLP)</h4>
                        <p>
                          Our expertise in machine learning (ML) and natural language processing (NLP) enables businesses 
                          to gain insights from structured and unstructured data. We develop ML models that can learn from 
                          data and make intelligent predictions, as well as NLP models that enable systems to understand 
                          and interpret human language, improving customer engagement and automating processes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-gears fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">AI Algorithm Development</h4>
                        <p>
                          We specialize in developing complex AI algorithms that power everything from autonomous 
                          vehicles to personalized recommendations. Our team of experts uses the latest techniques 
                          in machine learning, deep learning, and optimization to create efficient and high-performing 
                          AI algorithms tailored to your business.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-mobile-screen fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">AI Application Development</h4>
                        <p>
                          Our AI application development services focus on building AI-powered software and mobile 
                          applications that enhance user experience and optimize business processes. We create 
                          intelligent applications that can adapt, learn, and evolve based on user interactions 
                          and data patterns.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-network-wired fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Integration with Existing Systems</h4>
                        <p>
                          We seamlessly integrate AI solutions into your existing IT infrastructure, enabling 
                          real-time data processing, decision-making, and automation. Whether it's integrating 
                          AI into CRM systems, ERP solutions, or IoT platforms, we ensure your business benefits 
                          from the full potential of AI.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Why Choose Us for AI Development?</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Expertise:</strong> Our team consists of skilled data scientists, engineers, and AI researchers with years of experience in building intelligent systems.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Customization:</strong> We develop AI solutions that are specifically tailored to your business objectives, ensuring maximum impact.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Innovation:</strong> We stay at the forefront of AI research and development to deliver the most innovative solutions that give you a competitive edge.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Our AI solutions are designed to scale as your business grows, ensuring long-term value.
                    </li>
                  </ul>
                  
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
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with AI Development</h3>
                    <p className="mb-4">
                      Take the next step in your AI journey today. Contact us to explore how we can help you develop 
                      intelligent systems that transform your business.
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

export default AIDevelopmentPage;
