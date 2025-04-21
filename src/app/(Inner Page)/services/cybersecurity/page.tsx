"use client";
import React from "react";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLock, 
  faBell, 
  faShield, 
  faChartPie, 
  faUsers, 
  faGraduationCap, 
  faRobot, 
  faUserTie,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const CyberSecurityPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="CyberSecurity Services" />
        
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service__content">
                  <h2 className="text-center mb-5">Our Core Services</h2>
                  
                  {/* SOC-as-a-Service */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white" id="soc-as-a-service">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-primary">
                        <FontAwesomeIcon icon={faLock} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">SOC-as-a-Service (MSSP)</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">24x7 security monitoring and threat resolution</li>
                      <li className="mb-2">Expert L1, L2, L3 security analysts</li>
                      <li className="mb-2">Integration with leading SIEM tools (LogRhythm, Splunk, Wazuh, Securonix)</li>
                    </ul>
                  </div>
                  
                  {/* Incident Response */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white" id="incident-response">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-danger">
                        <FontAwesomeIcon icon={faBell} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">Incident Response & Forensics</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">Retainer-based incident response planning</li>
                      <li className="mb-2">Forensic investigations and post-incident reviews</li>
                      <li className="mb-2">Rapid breach containment and recovery</li>
                    </ul>
                  </div>
                  
                  {/* Penetration Testing */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white" id="penetration-testing">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-info">
                        <FontAwesomeIcon icon={faShield} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">Penetration Testing</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">Network, application, IoT, and industrial device testing</li>
                      <li className="mb-2">Actionable, audit-ready reports and retesting</li>
                      <li className="mb-2">Risk mitigation execution and compliance support</li>
                    </ul>
                  </div>
                  
                  {/* Security Advisory */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white" id="security-advisory">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-success">
                        <FontAwesomeIcon icon={faChartPie} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">Security Advisory & Risk Management</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">Risk assessments and framework evaluations</li>
                      <li className="mb-2">Incident response strategies and architecture reviews</li>
                      <li className="mb-2">Compliance advisory for SOC 2, ISO, and regulatory readiness</li>
                    </ul>
                  </div>
                  
                  {/* Identity Governance */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-secondary">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">Identity Governance & Endpoint Protection</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">EDR implementation, monitoring, and integration</li>
                      <li className="mb-2">Identity governance assessments and managed services</li>
                      <li className="mb-2">Integration with tools like SailPoint, OpenIAM, Microsoft</li>
                    </ul>
                  </div>
                  
                  {/* Phishing Simulation */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-warning">
                        <FontAwesomeIcon icon={faGraduationCap} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">Phishing Simulation & Awareness Training</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">AI-driven phishing campaigns and LMS integration</li>
                      <li className="mb-2">End-user security posture measurement and improvement</li>
                      <li className="mb-2">Enterprise-wide security awareness programs</li>
                    </ul>
                  </div>
                  
                  {/* AI-Driven Code Review */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-primary">
                        <FontAwesomeIcon icon={faRobot} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">AI-Driven Code Review & Threat Intelligence</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">Deep recursive dependency analysis</li>
                      <li className="mb-2">CVE/CWE mapping, static & dynamic code scans</li>
                      <li className="mb-2">Continuous vulnerability monitoring with custom rule engines</li>
                    </ul>
                  </div>
                  
                  {/* VCISO */}
                  <div className="service-card p-4 mb-5 shadow-sm rounded bg-white">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 fs-3 text-dark">
                        <FontAwesomeIcon icon={faUserTie} />
                      </div>
                      <h3 className="h4 mb-0 fw-bold">VCISO & Workforce Augmentation</h3>
                    </div>
                    <ul className="list-unstyled ps-4">
                      <li className="mb-2">On-demand cybersecurity leadership and staff support</li>
                      <li className="mb-2">Certified threat engineers and domain specialists</li>
                      <li className="mb-2">Flexible engagement models to fit dynamic security needs</li>
                    </ul>
                  </div>
                  
                  {/* Why Choose Us */}
                  <div className="mt-5 mb-4">
                    <h2 className="text-center mb-4">Why Choose Selsoft?</h2>
                    <div className="p-4 shadow-sm rounded bg-light">
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-success"><FontAwesomeIcon icon={faCheck} /></span>
                          <span><strong>Strong Leadership:</strong> 25+ years of experience in cybersecurity and technology leadership</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-success"><FontAwesomeIcon icon={faCheck} /></span>
                          <span><strong>Expert Resources:</strong> Curated global talent, trained against modern cyber adversaries</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-success"><FontAwesomeIcon icon={faCheck} /></span>
                          <span><strong>Strategic Vision:</strong> In-house R&D to stay ahead of threats and trends</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-success"><FontAwesomeIcon icon={faCheck} /></span>
                          <span><strong>Prebuilt Accelerators:</strong> Cloud-native tools for rapid deployment and operational efficiency</span>
                        </li>
                        <li className="mb-3 d-flex">
                          <span className="me-2 text-success"><FontAwesomeIcon icon={faCheck} /></span>
                          <span><strong>Client Ownership:</strong> We take pride in our work and truly own the outcomes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center mt-5">
                    <Link href="/contact" className="rv-btn rv-btn-primary">
                      Contact Us for a Security Consultation
                    </Link>
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

export default CyberSecurityPage;
