import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection6 = () => {
  return (
    <section className="rv-14-services rv-section-spacing">
      <DivAnimateYAxis className="container">
        <div className="rv-3-section-heading rv-14-section__heading text-center mb-5">
          <h6 className="rv-14-section__sub-title rv-text-anime">
            Our Services
          </h6>
          <h2 className="rv-7-section__title rv-text-anime">
            Comprehensive Technology Solutions
          </h2>
          <p className="rv-14-section__descr rv-text-anime mx-auto" style={{ maxWidth: "800px" }}>
            At Selsoft, we offer a wide range of innovative technology solutions designed to help businesses 
            transform, innovate, and achieve their strategic goals.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="service-card p-4 text-center h-100 shadow-sm rounded">
              <div className="icon-wrapper mb-3">
                <i className="fa-solid fa-robot fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-3">AI Solutions</h3>
              <p className="mb-4">
                Harness the power of artificial intelligence to solve complex business challenges 
                and gain competitive advantage.
              </p>
              <Link href="/services/ai-solutions" className="btn btn-outline-primary">Learn More</Link>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="service-card p-4 text-center h-100 shadow-sm rounded">
              <div className="icon-wrapper mb-3">
                <i className="fa-solid fa-database fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-3">Data Engineering</h3>
              <p className="mb-4">
                Transform your raw data into valuable insights with our comprehensive 
                data engineering solutions.
              </p>
              <Link href="/services/data-engineering" className="btn btn-outline-primary">Learn More</Link>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="service-card p-4 text-center h-100 shadow-sm rounded">
              <div className="icon-wrapper mb-3">
                <i className="fa-solid fa-cloud fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-3">Cloud Services</h3>
              <p className="mb-4">
                Scale efficiently and innovate rapidly with our secure and reliable 
                cloud computing solutions.
              </p>
              <Link href="/services/cloud-services" className="btn btn-outline-primary">Learn More</Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/services" className="rv-10-def-btn rv-14-def-btn">
            View All Services <i className="fa-regular fa-arrow-up-right"></i>
          </Link>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default ServiceSection6;