import React from "react";
import { Metadata } from "next";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selsoft - About Us",
  description: "Learn about Selsoft's leadership, industry codes, and affiliations",
};

const AboutPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="About" currentPage="About Us" />
        
        <section className="rv-inner-about rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Navigation Tabs */}
                <ul className="nav nav-tabs mb-5 justify-content-center" id="aboutTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="leadership-tab" data-bs-toggle="tab" data-bs-target="#leadership" type="button" role="tab" aria-controls="leadership" aria-selected="true">
                      Leadership
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="naicsic-tab" data-bs-toggle="tab" data-bs-target="#naicsic" type="button" role="tab" aria-controls="naicsic" aria-selected="false">
                      NAICS/SIC
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="affiliations-tab" data-bs-toggle="tab" data-bs-target="#affiliations" type="button" role="tab" aria-controls="affiliations" aria-selected="false">
                      Affiliations
                    </button>
                  </li>
                </ul>
                
                {/* Tab Content */}
                <div className="tab-content" id="aboutTabContent">
                  {/* Leadership Tab */}
                  <div className="tab-pane fade show active" id="leadership" role="tabpanel" aria-labelledby="leadership-tab">
                    <div className="about-section-content">
                      <h2 className="text-center mb-5">Our Leadership Team</h2>
                      <div className="row g-4">
                        <div className="col-md-4">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
                            <div className="team-image mb-3">
                              <img src="/assets/img/team/home-6-teem-1.png" alt="Pushban Rajaiyan" className="img-fluid rounded-circle" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            </div>
                            <h3 className="h4 mb-1">Pushban Rajaiyan</h3>
                            <p className="text-primary mb-3">CEO</p>
                            <p className="mb-3">20+ years experience in IT and Business Development, managing global teams and software consulting business. Executive MBA from SMU.</p>
                            <div className="social-icons">
                              <a href="https://www.linkedin.com/in/pushban-rajaiyan-4b6b87/" target="_blank" rel="noopener noreferrer" className="me-2">
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-4">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
                            <div className="team-image mb-3">
                              <img src="/assets/img/team/home-6-teem-2.png" alt="Behmen Sanjana" className="img-fluid rounded-circle" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            </div>
                            <h3 className="h4 mb-1">Behmen Sanjana</h3>
                            <p className="text-primary mb-3">CFO</p>
                            <p className="mb-3">15+ years developing software solutions, with experience in Telecommunications, Banking, and Logistics industries. Strong in global markets.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-4">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
                            <div className="team-image mb-3">
                              <img src="/assets/img/team/home-6-teem-3.png" alt="Uma Sivalingam" className="img-fluid rounded-circle" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            </div>
                            <h3 className="h4 mb-1">Uma Sivalingam</h3>
                            <p className="text-primary mb-3">VP - Operations</p>
                            <p className="mb-3">Strategic leadership in software development and managed services. Over a decade of IT experience with Master's in computer science.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
                            <div className="team-image mb-3">
                              <img src="/assets/img/rv-6-member-2.jpg" alt="Radha Sampathkumar" className="img-fluid rounded-circle" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            </div>
                            <h3 className="h4 mb-1">Radha Sampathkumar</h3>
                            <p className="text-primary mb-3">General Manager</p>
                            <p className="mb-3">20+ years in IT delivery, program management across multiple domains. Certified PMP with Master's in Commerce.</p>
                            <p className="small">
                              <strong>Expertise:</strong> Banking, Insurance, Healthcare, Telecom, Manufacturing
                            </p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
                            <div className="team-image mb-3">
                              <img src="/assets/img/rv-6-member-3.jpg" alt="Ramesh Rasaiyan" className="img-fluid rounded-circle" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            </div>
                            <h3 className="h4 mb-1">Ramesh Rasaiyan</h3>
                            <p className="text-primary mb-3">Director - UI/UX Practice</p>
                            <p className="mb-3">16+ years leading software development teams. Experienced in Front-End Development and UX Design.</p>
                            <div className="social-icons">
                              <a href="https://www.facebook.com/ramesh.rasaiyan" target="_blank" rel="noopener noreferrer" className="me-2">
                                <i className="fa-brands fa-facebook-f"></i>
                              </a>
                              <a href="https://twitter.com/rameshrasaiyan" target="_blank" rel="noopener noreferrer" className="me-2">
                                <i className="fa-brands fa-x-twitter"></i>
                              </a>
                              <a href="https://www.linkedin.com/in/rameshrasaiyan/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* NAICS/SIC Tab */}
                  <div className="tab-pane fade" id="naicsic" role="tabpanel" aria-labelledby="naicsic-tab">
                    <div className="about-section-content">
                      <h2 className="text-center mb-5">NAICS/SIC Codes</h2>
                      
                      <div className="row mb-5">
                        <div className="col-md-12">
                          <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                              <h3 className="h4 mb-0">NAICS Codes</h3>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>Code</th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="fw-bold">541511</td>
                                      <td>Custom Computer Programming Services</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">518210</td>
                                      <td>Data Processing, Hosting, and Related Services</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">541512</td>
                                      <td>Computer Systems Design Services</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">541513</td>
                                      <td>Computer Facilities Management Services</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">541519</td>
                                      <td>Other Computer Related Services</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                              <h3 className="h4 mb-0">SIC Codes</h3>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>Code</th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="fw-bold">7371</td>
                                      <td>Computer Programming Services</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">7373</td>
                                      <td>Computer Integrated Systems Design</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">7376</td>
                                      <td>Computer Facilities Management</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold">7379</td>
                                      <td>Computer Related Services, NEC</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Affiliations Tab */}
                  <div className="tab-pane fade" id="affiliations" role="tabpanel" aria-labelledby="affiliations-tab">
                    <div className="about-section-content">
                      <h2 className="text-center mb-5">Our Affiliations</h2>
                      
                      <div className="row mb-5">
                        <div className="col-md-12">
                          <div className="card shadow-sm mb-4">
                            <div className="card-header bg-primary text-white">
                              <h3 className="h4 mb-0">Certifications</h3>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="certification-card p-4 h-100 text-center border rounded">
                                    <div className="icon-wrapper mb-3">
                                      <i className="fa-solid fa-award fs-1 text-primary"></i>
                                    </div>
                                    <h4 className="h5 mb-3">Minority Owned Business</h4>
                                    <p className="mb-1"><strong>Certifier:</strong> DFW Minority Business Council</p>
                                    <p className="mb-0"><strong>Since:</strong> August 2009</p>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <div className="certification-card p-4 h-100 text-center border rounded">
                                    <div className="icon-wrapper mb-3">
                                      <i className="fa-solid fa-certificate fs-1 text-primary"></i>
                                    </div>
                                    <h4 className="h5 mb-3">SBA 8(a) Certification</h4>
                                    <p className="mb-1"><strong>Certifier:</strong> U.S. Small Business Administration</p>
                                    <p className="mb-0"><strong>Since:</strong> March 2010</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                              <h3 className="h4 mb-0">Partnerships</h3>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="partnership-card p-4 h-100 text-center border rounded">
                                    <div className="icon-wrapper mb-3">
                                      <i className="fa-brands fa-google fs-1 text-primary"></i>
                                    </div>
                                    <h4 className="h5 mb-3">Google Apps</h4>
                                    <p className="mb-0">Authorized Reseller</p>
                                  </div>
                                </div>
                                
                                <div className="col-md-6">
                                  <div className="partnership-card p-4 h-100 text-center border rounded">
                                    <div className="icon-wrapper mb-3">
                                      <i className="fa-brands fa-salesforce fs-1 text-primary"></i>
                                    </div>
                                    <h4 className="h5 mb-3">Salesforce.com</h4>
                                    <p className="mb-0">Partnership in process</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CtaSection />
      </InnerLayout>
    </main>
  );
};

export default AboutPage;
