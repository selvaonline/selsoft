"use client";
import React from "react";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";

const CareersPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Careers" currentPage="Careers" />
        
        <section className="rv-inner-careers rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="careers-content">
                  <h2 className="text-center mb-5">Join Our Team</h2>
                  
                  <div className="job-listing mb-5">
                    <div className="card shadow-sm">
                      <div className="card-header bg-primary text-white">
                        <h3 className="h4 mb-0">Software Developers/Computer Programmer – Multiple Openings</h3>
                      </div>
                      <div className="card-body">
                        <div className="job-details mb-4">
                          <p className="mb-2"><strong>Location:</strong> Allen, TX</p>
                          <p className="mb-4">Selsoft Inc needs professionals: Work Using Angular, Spring MVC, Spring Boot, Java, COBOL, SAS, SQL & DB2:</p>
                          
                          <div className="job-description">
                            <p className="mb-3">Manage end-to-end data warehouse design, configuration, quality control & effective collaboration with stakeholders.</p>
                            
                            <p className="mb-3"><strong>Requirements:</strong> Bachelor's +2yrs exp or any equivalency based on education, training or experience.</p>
                            
                            <p className="mb-3"><strong>Compensation:</strong> Competitive Salary</p>
                            
                            <p className="mb-3"><strong>Relocation:</strong> May relocate to unanticipated site.</p>
                            
                            <p className="mb-3"><strong>Travel:</strong> No National/International Travel.</p>
                            
                            <p className="mb-4">Please mail resume to Ref: President, 303 S Jupiter Road, Ste 110, Allen, TX- 75002.</p>
                            
                            <p className="mb-3">Mail resume with job ID #201 to HR: 303 S Jupiter Rd., Suite 110, Allen, TX 75002.</p>
                            
                            <p className="mb-3">Unanticipated work site locations throughout U.S. Foreign equiv. accepted.</p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <a href="mailto:careers@selsoftinc.com?subject=Job Application - Software Developer (ID: 201)" className="btn btn-primary">
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="application-process">
                    <h3 className="h4 mb-4">How to Apply</h3>
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-4 mb-md-0">
                            <div className="application-method text-center p-4 h-100 border rounded">
                              <div className="icon-wrapper mb-3">
                                <i className="fa-solid fa-envelope fs-1 text-primary"></i>
                              </div>
                              <h4 className="h5 mb-3">Email Application</h4>
                              <p className="mb-3">Send your resume and cover letter to:</p>
                              <p className="mb-0">
                                <a href="mailto:careers@selsoftinc.com" className="text-decoration-none">
                                  careers@selsoftinc.com
                                </a>
                              </p>
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="application-method text-center p-4 h-100 border rounded">
                              <div className="icon-wrapper mb-3">
                                <i className="fa-solid fa-paper-plane fs-1 text-primary"></i>
                              </div>
                              <h4 className="h5 mb-3">Mail Application</h4>
                              <p className="mb-3">Send your resume with job ID to:</p>
                              <address className="mb-0">
                                HR Department<br />
                                303 S Jupiter Rd., Suite 110<br />
                                Allen, TX 75002
                              </address>
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

export default CareersPage;
