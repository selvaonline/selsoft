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
                  <Navlink href="/services/ai-solutions">Overview</Navlink>
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
                  <Navlink href="/services/data-engineering">Overview</Navlink>
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
                  <Navlink href="/services/cloud-services">Overview</Navlink>
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
            <li className={dropdown.cyberSecurity ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("cyberSecurity", e)}
              >
                CyberSecurity
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/cybersecurity">Overview</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#soc-as-a-service">SOC-as-a-Service</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#incident-response">Incident Response</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#penetration-testing">Penetration Testing</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#security-advisory">Security Advisory</Navlink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Navlink href="/blog">Blog</Navlink>
        </li>

        <li>
          <Navlink href="/contact">Contact</Navlink>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
