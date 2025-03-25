"use client";
import React, { useState } from "react";
import Navlink from "../utils/Navlink";
type Props = {
  style: string;
  logo?: string;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  service: boolean;
  aiSolutions: boolean;
  dataEngineering: boolean;
  cloudServices: boolean;
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
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
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
            onClick={() => handleToggleDropdown("pages")}
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
            onClick={() => handleToggleDropdown("service")}
          >
            Services
          </a>
          <ul className="sub-menu">
            <li className={dropdown.aiSolutions ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={() => handleToggleDropdown("aiSolutions")}
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
                onClick={() => handleToggleDropdown("dataEngineering")}
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
                onClick={() => handleToggleDropdown("cloudServices")}
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
