import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import NewsletterForm2 from "../form/NewsletterForm2";

const FooterSection4 = () => {
  return (
    <footer className="rv-inner-footer">
      <div className="container">
        <DivAnimateYAxis className="rv-8-footer-middle">
          <div className="row g-4 justify-content-xl-between justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-8 col-xxs-12">
              <div className="rv-1-footer__about">
                <h5 className="rv-1-footer-widget__title">Contact Us</h5>
                <p className="rv-1-footer__about-txt mt-4">
                  Headquarters:<br />
                  303, S Jupiter, Suite 110<br />
                  Allen, TX 75002, USA.<br />
                  Phone: 972-474-3071<br />
                  Fax: 469-519-0138<br />
                  Email: info@selsoftinc.com
                </p>
                <div className="rv-1-socials rv-inner-socials">
                  <Link href="https://x.com/Selsoftx" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=100066330325206#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/company/selsoft-inc-/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Useful Links</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Our Services</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="/services/ai-solutions">AI Solutions</Link>
                  </li>
                  <li>
                    <Link href="/services/data-engineering">Data Engineering</Link>
                  </li>
                  <li>
                    <Link href="/services/cloud-services">Cloud Services</Link>
                  </li>
                  <li>
                    <Link href="/services">All Services</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6 col-8 col-xxs-12">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <NewsletterForm2 />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>

        <div className="rv-2-footer rv-8-footer-bottom">
          <div className="row gy-3 align-items-center">
            <DivAnimateXAxis position={-60} className="col-md-8">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} Selsoft, Inc. All Rights Reserved.
              </p>
            </DivAnimateXAxis>
            <DivAnimateXAxis
              position={60}
              className="col-md-4 text-center text-md-end"
            >
              <div className="rv-2-footer__nav">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Term of Service</Link>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection4;
