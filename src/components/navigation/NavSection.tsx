"use client";
import React, { useState } from "react";
import Navlink from "../utils/Navlink";
type Props = {
  style: string;
  logo?: string | null;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  service: boolean;
  aiSolutions: boolean;
  dataEngineering: boolean;
  cloudServices: boolean;
  cyberSecurity: boolean;
  blog: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
    aiSolutions: false,
    dataEngineering: false,
    cloudServices: false,
    cyberSecurity: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState, event: React.MouseEvent) => {
    if (window.innerWidth < 992) {
      // Stop event propagation to prevent parent dropdowns from toggling
      event.stopPropagation();
      
      // Only toggle the specific dropdown that was clicked
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={style}>
      <ul className="justify-content-center">
        <li>
          <Navlink href="/">Home</Navlink>
        </li>

        <li className={dropdown.pages ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={(e) => handleToggleDropdown("pages", e)}
          >
            About
          </a>
          <ul className="sub-menu">
            <li>
              <Navlink href="/about">Leadership</Navlink>
            </li>
            <li>
              <Navlink href="/about?tab=naicsic">NAICS/SIC</Navlink>
            </li>
            <li>
              <Navlink href="/about?tab=affiliations">Affiliations</Navlink>
            </li>
          </ul>
        </li>

        <li>
          <Navlink href="/industries">Industries</Navlink>
        </li>
        {logo && (
          <li className="d-none d-lg-block">
            <Navlink href="/" className="rv-5-logo">
              <img src={logo} alt="logo" />
            </Navlink>
          </li>
        )}
        <li className={dropdown.service ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={(e) => handleToggleDropdown("service", e)}
          >
            Services
          </a>
          <ul className="sub-menu">
            <li className={dropdown.aiSolutions ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("aiSolutions", e)}
              >
                AI Solutions
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/ai-solutions">AI Solutions Home</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/ai-development">AI Development</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/process-automation">Process Automation</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/face-recognition">Face Recognition</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/iot-solutions">IoT Solutions</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/deep-learning">Deep Learning</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/nlp-solutions">NLP Solutions</Navlink>
                </li>
              </ul>
            </li>
            <li className={dropdown.dataEngineering ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("dataEngineering", e)}
              >
                Data Engineering
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/data-engineering">Data Engineering Home</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/data-analytics">Data Analytics</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/data-pipeline">Data Pipeline</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/data-science">Data Science</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/cloud-data">Cloud Data</Navlink>
                </li>
              </ul>
            </li>
            <li className={dropdown.cloudServices ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("cloudServices", e)}
              >
                Cloud Services
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/cloud-services">Cloud Services Home</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cloud-services/aws-cloud">AWS Cloud</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cloud-services/azure-cloud">Azure Cloud</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cloud-services/gcp-cloud">GCP Cloud</Navlink>
                </li>
              </ul>
            </li>
            <li className={dropdown.cyberSecurity ? "rv-dropdown-active cybersecurity-menu" : "cybersecurity-menu"}>
              <a
                className="dropdown-btn cybersecurity-dropdown"
                role="button"
                onClick={(e) => handleToggleDropdown("cyberSecurity", e)}
              >
                CyberSecurity
              </a>
              <ul className="sub-menu cybersecurity-submenu">
                <li>
                  <Navlink href="/services/cybersecurity">CyberSecurity Home</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#soc-as-a-service" className="cybersecurity-link">SOC-as-a-Service</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#incident-response" className="cybersecurity-link">Incident Response</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#penetration-testing" className="cybersecurity-link">Penetration Testing</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#security-advisory" className="cybersecurity-link">Security Advisory</Navlink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Navlink href="#">Use Cases</Navlink>
        </li>

        <li>
          <Navlink href="/contact">Contact</Navlink>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
