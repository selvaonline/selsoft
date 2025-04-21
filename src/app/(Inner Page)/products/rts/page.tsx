"use client";
import React from "react";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, 
  faSearch, 
  faChartLine, 
  faClipboardCheck, 
  faUserTie
} from "@fortawesome/free-solid-svg-icons";

const RTSPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="RTS - Recruitment Tracking System" />
        
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service__content">
                  <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4">RTS - Recruitment Tracking System</h1>
                    <p className="lead">
                      A comprehensive solution for managing your entire recruitment process
                    </p>
                  </div>
                  
                  {/* Overview Section */}
                  <div className="card mb-5 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h2 className="h3 mb-0">Overview</h2>
                    </div>
                    <div className="card-body">
                      <p className="lead mb-4">
                        RTS (Recruitment Tracking System) is Selsoft's comprehensive solution designed to streamline and optimize the entire recruitment lifecycle. From candidate sourcing to onboarding, RTS provides powerful tools to help staffing firms and HR departments manage their recruitment processes efficiently.
                      </p>
                    </div>
                  </div>
                  
                  {/* Key Features Section */}
                  <div className="card mb-5 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h2 className="h3 mb-0">Key Features</h2>
                    </div>
                    <div className="card-body">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faUsers} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Candidate Management</h3>
                            </div>
                            <p className="mb-0">Comprehensive candidate profiles, resume parsing, and skill matching capabilities.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faSearch} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Job Requisition Tracking</h3>
                            </div>
                            <p className="mb-0">Manage job openings, requirements, and applicant pipelines in one centralized system.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faChartLine} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Analytics & Reporting</h3>
                            </div>
                            <p className="mb-0">Detailed insights into recruitment metrics, time-to-fill, source effectiveness, and more.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faClipboardCheck} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Interview Scheduling</h3>
                            </div>
                            <p className="mb-0">Automated scheduling, calendar integration, and interview feedback collection.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faUserTie} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Client Portal</h3>
                            </div>
                            <p className="mb-0">Secure client access to view candidates, provide feedback, and track hiring progress.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-5 mb-4">
                    <p className="lead fw-bold">
                      Transform your recruitment process with RTS by Selsoft - the complete solution for modern staffing and HR teams.
                    </p>
                    <div className="mt-4">
                      <Link href="/contact" className="rv-btn rv-btn-primary">
                        Request a Demo
                      </Link>
                    </div>
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

export default RTSPage;
