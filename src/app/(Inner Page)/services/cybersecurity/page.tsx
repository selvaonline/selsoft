"use client";
import React from "react";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CyberSecurity Services | Selsoft",
  description: "Comprehensive cybersecurity solutions including SOC-as-a-Service, incident response, penetration testing, and more.",
};

const CyberSecurityPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="CyberSecurity Services" />
        
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="service-intro text-center mb-5">
                  <h2 className="display-4 fw-bold mb-4">Comprehensive CyberSecurity Solutions</h2>
                  <p className="lead mb-0">
                    Protect your business with our comprehensive cybersecurity services designed to 
                    safeguard your digital assets, detect threats, and respond to security incidents.
                  </p>
                </div>

                <div className="service-banner mb-5">
                  <img 
                    src="/assets/img/services/cybersecurity-banner.jpg" 
                    alt="CyberSecurity Services" 
                    className="img-fluid rounded shadow-sm" 
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="service-content mb-5">
                  <h3 className="h2 fw-bold mb-4 text-center">Our Core Services</h3>
                  
                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-lock fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">SOC-as-a-Service (MSSP)</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> 24x7 security monitoring and threat resolution</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Expert L1, L2, L3 security analysts</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Integration with leading SIEM tools (LogRhythm, Splunk, Wazuh, Securonix)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-bell fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">Incident Response & Forensics</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Retainer-based incident response planning</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Forensic investigations and post-incident reviews</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Rapid breach containment and recovery</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-shield-halved fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">Penetration Testing</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Network, application, IoT, and industrial device testing</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Actionable, audit-ready reports and retesting</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Risk mitigation execution and compliance support</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-chart-line fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">Security Advisory & Risk Management</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Risk assessments and framework evaluations</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Incident response strategies and architecture reviews</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Compliance advisory for SOC 2, ISO, and regulatory readiness</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-users fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">Identity Governance & Endpoint Protection</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> EDR implementation, monitoring, and integration</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Identity governance assessments and managed services</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Integration with tools like SailPoint, OpenIAM, Microsoft</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-graduation-cap fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">Phishing Simulation & Awareness Training</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> AI-driven phishing campaigns and LMS integration</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> End-user security posture measurement and improvement</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Enterprise-wide security awareness programs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-robot fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">AI-Driven Code Review & Threat Intelligence</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Deep recursive dependency analysis</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> CVE/CWE mapping, static & dynamic code scans</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Continuous vulnerability monitoring with custom rule engines</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded bg-white">
                        <div className="d-flex align-items-center mb-3">
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3 me-3" style={{ width: "60px", height: "60px" }}>
                            <i className="fa-solid fa-user-tie fs-3 text-primary"></i>
                          </span>
                          <h4 className="h4 mb-0 fw-bold">VCISO & Workforce Augmentation</h4>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> On-demand cybersecurity leadership and staff support</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Certified threat engineers and domain specialists</li>
                          <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Flexible engagement models to fit dynamic security needs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="why-choose-us bg-light p-5 rounded shadow-sm mb-5">
                    <h3 className="h2 fw-bold mb-4 text-center">Why Choose Selsoft?</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex mb-3">
                          <span className="text-primary me-3"><i className="fa-solid fa-check-circle fa-2x"></i></span>
                          <div>
                            <h5 className="fw-bold">Strong Leadership</h5>
                            <p className="mb-0">25+ years of experience in cybersecurity and technology leadership</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex mb-3">
                          <span className="text-primary me-3"><i className="fa-solid fa-check-circle fa-2x"></i></span>
                          <div>
                            <h5 className="fw-bold">Expert Resources</h5>
                            <p className="mb-0">Curated global talent, trained against modern cyber adversaries</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex mb-3">
                          <span className="text-primary me-3"><i className="fa-solid fa-check-circle fa-2x"></i></span>
                          <div>
                            <h5 className="fw-bold">Strategic Vision</h5>
                            <p className="mb-0">In-house R&D to stay ahead of threats and trends</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex mb-3">
                          <span className="text-primary me-3"><i className="fa-solid fa-check-circle fa-2x"></i></span>
                          <div>
                            <h5 className="fw-bold">Prebuilt Accelerators</h5>
                            <p className="mb-0">Cloud-native tools for rapid deployment and operational efficiency</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span className="text-primary me-3"><i className="fa-solid fa-check-circle fa-2x"></i></span>
                          <div>
                            <h5 className="fw-bold">Client Ownership</h5>
                            <p className="mb-0">We take pride in our work and truly own the outcomes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cta text-center">
                    <h3 className="h2 fw-bold mb-4">Ready to Secure Your Business?</h3>
                    <p className="lead mb-4">
                      Contact us today to discuss your cybersecurity needs and how we can help protect your organization.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3">
                      Contact Our Security Experts
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
