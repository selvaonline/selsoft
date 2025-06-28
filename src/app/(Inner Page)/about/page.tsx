"use client";
import React, { useState, useEffect } from "react";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const AboutPage = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("leadership");
  
  useEffect(() => {
    const tab = searchParams?.get("tab");
    if (tab === "naicsic" || tab === "affiliations") {
      setActiveTab(tab);
    }
  }, [searchParams]);
  
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
                    <button 
                      className={`nav-link ${activeTab === "leadership" ? "active" : ""}`} 
                      id="leadership-tab" 
                      onClick={() => setActiveTab("leadership")}
                      type="button"
                    >
                      Leadership
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${activeTab === "naicsic" ? "active" : ""}`} 
                      id="naicsic-tab" 
                      onClick={() => setActiveTab("naicsic")}
                      type="button"
                    >
                      NAICS/SIC
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${activeTab === "affiliations" ? "active" : ""}`} 
                      id="affiliations-tab" 
                      onClick={() => setActiveTab("affiliations")}
                      type="button"
                    >
                      Affiliations
                    </button>
                  </li>
                </ul>
                
                {/* Tab Content */}
                <div className="tab-content" id="aboutTabContent">
                  {/* Leadership Tab */}
                  <div className={`tab-pane ${activeTab === "leadership" ? "show active" : "fade"}`} id="leadership" role="tabpanel" aria-labelledby="leadership-tab">
                    <div className="about-section-content">
                      <h2 className="text-center mb-5">Our Leadership Team</h2>
                      <div className="row g-4">
                        <div className="col-md-4">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
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
                            <h3 className="h4 mb-1">Behmen Sanjana</h3>
                            <p className="text-primary mb-3">CFO</p>
                            <p className="mb-3">15+ years developing software solutions, with experience in Telecommunications, Banking, and Logistics industries. Strong in global markets.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-4">
                          <div className="team-card p-4 text-center h-100 shadow-sm rounded">
                            <h3 className="h4 mb-1">Uma Sivalingam</h3>
                            <p className="text-primary mb-3">VP - Operations</p>
                            <p className="mb-3">Strategic leadership in software development and managed services. Over a decade of IT experience with Master's in computer science.</p>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                  
                  {/* NAICS/SIC Tab */}
                  <div className={`tab-pane ${activeTab === "naicsic" ? "show active" : "fade"}`} id="naicsic" role="tabpanel" aria-labelledby="naicsic-tab">
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
                  <div className={`tab-pane ${activeTab === "affiliations" ? "show active" : "fade"}`} id="affiliations" role="tabpanel" aria-labelledby="affiliations-tab">
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
