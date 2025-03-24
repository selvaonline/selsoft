import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const AboutSection6 = () => {
  return (
    <section className="rv-14-about rv-section-spacing pt-0">
      <div className="container">
        <div className="row g-4 align-items-center">
          <DivAnimateYAxis className="col-lg-6 col-md-8 col-10 col-xxs-12">
            <div className="rv-14-about__img">
              <div className="rv-14-about__img-container">
                <img src="assets/img/rv-14-about-img.png" alt="Image" />
              </div>
            </div>
          </DivAnimateYAxis>

          <DivAnimateXAxis className="col-lg-6">
            <div className="rv-6-about__txt rv-14-about__txt">
              <h6 className="rv-14-section__sub-title rv-text-anime">
                About Us
              </h6>
              <h2 className="rv-7-section__title rv-text-anime">
                Innovative Technology, Unmatched Expertise
              </h2>
              <p className="rv-6-about__descr rv-text-anime">
                Selsoft is at the forefront of Artificial Intelligence, Data Engineering, and Cloud computing. 
                With years of experience in helping businesses across industries, we combine deep technical 
                knowledge with strategic insights to bring transformative solutions that drive growth.
              </p>

              <ul
                className="rv-3-about__features rv-14-about__features"
                data-aos="fade-up"
              >
                <li>AI Development & Deep Learning</li>
                <li>Process Automation with AI</li>
                <li>Data Engineering & Analytics</li>
                <li>Cloud Solutions: AWS, Azure, GCP</li>
                <li>IoT Solutions & Face Recognition</li>
              </ul>

              <div
                className="rv-5-about__btns rv-14-about__btns"
                data-aos="fade-up"
              >
                <a href="#" className="rv-6-def-btn rv-14-about__btn">
                  More About <i className="fa-solid fa-arrow-up-right"></i>
                </a>
                <div className="rv-5-about__call rv-6-about__call rv-14-about__call">
                  <span className="rv-5-about__call-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="rv-5-about__call-txt">
                    <a href="tel:19724743071" className="">
                        972-474-3071
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default AboutSection6;
