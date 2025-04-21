import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection6 = () => {
  return (
    <section className="rv-14-services rv-section-spacing bg-light">
      <DivAnimateYAxis className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="rv-3-section-heading rv-14-section__heading text-center mb-5">
              <h6 className="rv-14-section__sub-title rv-text-anime text-primary">
                OUR SERVICES
              </h6>
              <h2 className="rv-7-section__title rv-text-anime fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                Comprehensive Technology Solutions
              </h2>
              <p className="rv-14-section__descr rv-text-anime mx-auto lead" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
                At Selsoft, we offer a wide range of innovative technology solutions designed to help businesses 
                transform, innovate, and achieve their strategic goals. Explore our service offerings below.
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-6 col-lg-3">
                <div className="service-card p-4 text-center h-100 shadow-sm rounded bg-white" style={{ transition: "all 0.3s ease" }}>
                  <div className="icon-wrapper mb-4">
                    <span className="d-inline-block rounded-circle bg-primary bg-opacity-10 p-3" style={{ width: "80px", height: "80px" }}>
                      <i className="fa-solid fa-robot fs-1 text-primary"></i>
                    </span>
                  </div>
                  <h3 className="h4 mb-3 fw-bold">AI Solutions</h3>
                  <p className="mb-4 text-muted">
                    Harness the power of artificial intelligence to solve complex business challenges 
                    and gain competitive advantage.
                  </p>
                  <Link href="/services/ai-solutions" className="btn btn-outline-primary px-4">Learn More</Link>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="service-card p-4 text-center h-100 shadow-sm rounded bg-white" style={{ transition: "all 0.3s ease" }}>
                  <div className="icon-wrapper mb-4">
                    <span className="d-inline-block rounded-circle bg-primary bg-opacity-10 p-3" style={{ width: "80px", height: "80px" }}>
                      <i className="fa-solid fa-database fs-1 text-primary"></i>
                    </span>
                  </div>
                  <h3 className="h4 mb-3 fw-bold">Data Engineering</h3>
                  <p className="mb-4 text-muted">
                    Transform your raw data into valuable insights with our comprehensive 
                    data engineering solutions.
                  </p>
                  <Link href="/services/data-engineering" className="btn btn-outline-primary px-4">Learn More</Link>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3">
                <div className="service-card p-4 text-center h-100 shadow-sm rounded bg-white" style={{ transition: "all 0.3s ease" }}>
                  <div className="icon-wrapper mb-4">
                    <span className="d-inline-block rounded-circle bg-primary bg-opacity-10 p-3" style={{ width: "80px", height: "80px" }}>
                      <i className="fa-solid fa-cloud fs-1 text-primary"></i>
                    </span>
                  </div>
                  <h3 className="h4 mb-3 fw-bold">Cloud Services</h3>
                  <p className="mb-4 text-muted">
                    Scale efficiently and innovate rapidly with our secure and reliable 
                    cloud computing solutions.
                  </p>
                  <Link href="/services/cloud-services" className="btn btn-outline-primary px-4">Learn More</Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="service-card p-4 text-center h-100 shadow-sm rounded bg-white" style={{ transition: "all 0.3s ease" }}>
                  <div className="icon-wrapper mb-4">
                    <span className="d-inline-block rounded-circle bg-primary bg-opacity-10 p-3" style={{ width: "80px", height: "80px" }}>
                      <i className="fa-solid fa-shield-halved fs-1 text-primary"></i>
                    </span>
                  </div>
                  <h3 className="h4 mb-3 fw-bold">CyberSecurity</h3>
                  <p className="mb-4 text-muted">
                    Protect your business with comprehensive security solutions including SOC-as-a-Service, 
                    incident response, and penetration testing.
                  </p>
                  <Link href="/services/cybersecurity" className="btn btn-outline-primary px-4">Learn More</Link>
                </div>
              </div>
            </div>
        
        <div className="call-to-action p-5 rounded text-center mb-4 bg-white shadow-sm">
          <h3 className="mb-3 fw-bold">Need a Custom Solution?</h3>
          <p className="mb-4 text-muted lead">
            Our team of experts is ready to help you with tailored solutions that address your unique business challenges.
          </p>
          <Link href="/contact" className="btn btn-primary px-4 py-2">
            Contact Us <i className="fa-solid fa-arrow-right ms-2"></i>
          </Link>
        </div>
        
        <div className="text-center mt-4">
          <Link 
            href="/services" 
            className="rv-10-def-btn rv-14-def-btn btn btn-lg btn-outline-primary"
            style={{ 
              borderRadius: "30px", 
              padding: "12px 30px",
              fontWeight: "500",
              transition: "all 0.3s ease"
            }}
          >
            View All Services <i className="fa-regular fa-arrow-up-right ms-2"></i>
          </Link>
        </div>
          </div>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default ServiceSection6;