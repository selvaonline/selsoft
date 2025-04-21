import React from "react";
import ContactForm from "../form/ContactForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import OfficeLocationsMap from "./OfficeLocationsMap";
type Props = {
  innerPage?: boolean;
};
const ContactSection = ({ innerPage }: Props) => {
  return (
    <section
      className={`rv-2-contact ${
        innerPage ? "rv-inner-contact rv-section-spacing" : ""
      }`}
      id="contact"
    >
      <div className="container">
        {innerPage ? (
          <DivAnimateYAxis className="rv-inner-contact-info-cards">
            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-phone"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Contact Numbers
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="tel:9724743071">(972) 474-3071</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">Email Address</h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="mailto:info@selsoftinc.com">info@selsoftinc.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-location-dot"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Headquarters
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <span>303, S Jupiter, Suite 110, Allen, TX 75002, USA</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-location-dot"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Canada Office
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <span>Selsoft Canada Inc. 80 Atlantic Ave, 4th Floor, Toronto, ON M6K 1X9</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-location-dot"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  India Office
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <span>Prince info park, No.81B, Tower A, 3rd floor, 
Ambattur Industrial Estate, Ambattur, Chennai-58
India</span>
                  </li>
                </ul>
              </div>
            </div>
          </DivAnimateYAxis>
        ) : (
          <h2 className="rv-2-section-title rv-text-anime">
            Ready to bring your ideas to life? I'm here to help.
          </h2>
        )}

        <div className="row gy-3 gy-sm-4">
          <DivAnimateXAxis position={-60} className="col-xxl-8 col-lg-7">
            <div
              className={`rv-2-contact__txt ${
                innerPage ? "rv-inner-contact__txt" : ""
              }`}
            >
              <h3 className="rv-2-contact-form-title">Get in Touch with Us</h3>
              
              <p className="mb-4">Ready to transform your business with cutting-edge solutions? Fill out the form below and our experts will get back to you shortly. We're here to answer your questions and help with your software development needs.</p>

              <ContactForm innerPage={innerPage ? true : false} />
            </div>
          </DivAnimateXAxis>

          <DivAnimateXAxis className="col-xxl-4 col-lg-5" position={60}>
            <OfficeLocationsMap />
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
