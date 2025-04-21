"use client";
import React from "react";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBullseye, 
  faRocket, 
  faBuilding, 
  faUserShield, 
  faFileContract, 
  faClipboardList, 
  faFileInvoiceDollar, 
  faBalanceScale, 
  faBell, 
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

const TimePulsePage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Time Pulse" />
        
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service__content">
                  <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4">Time Pulse</h1>
                    <p className="lead">
                      An advanced multi-tenant SaaS solution designed specifically for staffing and employment firms
                    </p>
                  </div>
                  
                  {/* Objective Section */}
                  <div className="card mb-5 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faBullseye} className="me-3 fs-4" />
                        <h2 className="h3 mb-0">Objective</h2>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="lead mb-4">
                        Selsoft proudly presents "Time Pulse", an advanced multi-tenant SaaS solution designed specifically for staffing and employment firms, empowering them to efficiently manage:
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item py-3">
                          <strong>Timesheet Collection & Management:</strong> Simplified, accurate, and streamlined time tracking.
                        </li>
                        <li className="list-group-item py-3">
                          <strong>Invoice Generation & Vendor Collaboration:</strong> Seamless vendor interactions and automated invoicing.
                        </li>
                        <li className="list-group-item py-3">
                          <strong>End-Client Data Reconciliation:</strong> Robust tools for cross-validation of client-submitted data.
                        </li>
                        <li className="list-group-item py-3">
                          <strong>Tenant-Specific Customization:</strong> Fully customizable workflows, data fields, and integrations tailored to individual tenant needs.
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Core Features Section */}
                  <div className="card mb-5 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faRocket} className="me-3 fs-4" />
                        <h2 className="h3 mb-0">Core Features</h2>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faBuilding} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Multi-Tenancy</h3>
                            </div>
                            <p className="mb-0">Ensures robust tenant isolation via subdomains and secure database segregation (tenant-specific data).</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faUserShield} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Roles & Access Control (RBAC)</h3>
                            </div>
                            <p className="mb-0">Comprehensive role management including Super Admin, Employer Admin, Account Manager, Approver, Vendor, and Employee.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faFileContract} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Flexible SOW Management</h3>
                            </div>
                            <p className="mb-0">Effectively handles multiple, overlapping Statements of Work with extensive customization options.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faClipboardList} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Timesheet Submission</h3>
                            </div>
                            <p className="mb-0">Supports easy manual entries, streamlined uploads (Excel/PDF), and integration with SAP/Fieldglass.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Invoice Automation</h3>
                            </div>
                            <p className="mb-0">Direct QuickBooks integration for seamless invoicing, supplemented by flexible manual upload capabilities.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faBalanceScale} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Reconciliation Engine</h3>
                            </div>
                            <p className="mb-0">Intelligent matching of employee submissions, vendor invoices, and end-client reports to quickly identify and manage discrepancies.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faBell} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Notification System</h3>
                            </div>
                            <p className="mb-0">Automated reminders and custom alerts ensure timely submissions and informed stakeholders.</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="feature-card p-4 h-100 border rounded">
                            <div className="d-flex align-items-center mb-3">
                              <div className="icon-wrapper me-3">
                                <FontAwesomeIcon icon={faChartLine} className="text-primary fs-3" />
                              </div>
                              <h3 className="h5 mb-0">Reporting & Dashboards</h3>
                            </div>
                            <p className="mb-0">Comprehensive, role-specific dashboards with customizable reporting options (CSV and PDF exports) and foundational business intelligence insights.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-5 mb-4">
                    <p className="lead fw-bold">
                      Elevate your staffing management capabilities with Time Pulse by Selsoft, your complete SaaS solution for precise, scalable, and customizable staffing workflows.
                    </p>
                    <div className="mt-4">
                      <Link href="/contact" className="rv-btn rv-btn-primary">
                        Contact Us for a Demo
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

export default TimePulsePage;
