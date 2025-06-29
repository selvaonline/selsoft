"use client";
import React, { useState } from "react";
import Navlink from "../utils/Navlink";
import { useLanguage } from "../../context/LanguageContext";
import { useAppTranslation } from "../../utils/translation";

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
  products: boolean;
  blog: boolean;
};

const NavSection = ({ style, logo }: Props) => {
  const { t } = useAppTranslation();
  // Initialize all dropdowns as closed
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
    aiSolutions: false,
    dataEngineering: false,
    cloudServices: false,
    cyberSecurity: false,
    products: false,
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
          <Navlink href="/">{t('navigation.home')}</Navlink>
        </li>

        <li className={dropdown.pages ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={(e) => handleToggleDropdown("pages", e)}
          >
            {t('navigation.about')} <i className="fa-solid fa-chevron-down ms-1"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <Navlink href="/about?tab=leadership">{t('navigation.leadership')}</Navlink>
            </li>
            <li>
              <Navlink href="/about?tab=naicsic">{t('navigation.naicsSic')}</Navlink>
            </li>
            <li>
              <Navlink href="/about?tab=affiliations">{t('navigation.affiliations')}</Navlink>
            </li>
          </ul>
        </li>

        <li className={dropdown.products ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={(e) => handleToggleDropdown("products", e)}
          >
            {t('navigation.products')} <i className="fa-solid fa-chevron-down ms-1"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <Navlink href="/products/time-pulse">{t('products.timePulse')}</Navlink>
            </li>
            <li>
              <Navlink href="/products/rts">{t('products.rts')}</Navlink>
            </li>
          </ul>
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
            {t('navigation.services')} <i className="fa-solid fa-chevron-down ms-1"></i>
          </a>
          <ul className="sub-menu">
            <li className={dropdown.aiSolutions ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("aiSolutions", e)}
              >
                {t('services.aiSolutions')} <i className="fa-solid fa-chevron-right ms-1"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/ai-solutions">{t('services.aiSolutionsHome')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/ai-development">{t('services.aiDevelopment')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/process-automation">{t('services.processAutomation')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/face-recognition">{t('services.faceRecognition')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/iot-solutions">{t('services.iotSolutions')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/deep-learning">{t('services.deepLearning')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/ai-solutions/nlp-solutions">{t('services.nlpSolutions')}</Navlink>
                </li>
              </ul>
            </li>
            <li className={dropdown.dataEngineering ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("dataEngineering", e)}
              >
                {t('services.dataEngineering')} <i className="fa-solid fa-chevron-right ms-1"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/data-engineering">{t('services.dataEngineeringHome')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/data-analytics">{t('services.dataAnalytics')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/data-pipeline">{t('services.dataPipeline')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/data-science">{t('services.dataScience')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/data-engineering/cloud-data">{t('services.cloudData')}</Navlink>
                </li>
              </ul>
            </li>
            <li className={dropdown.cloudServices ? "rv-dropdown-active" : ""}>
              <a
                className="dropdown-btn"
                role="button"
                onClick={(e) => handleToggleDropdown("cloudServices", e)}
              >
                {t('services.cloudServices')} <i className="fa-solid fa-chevron-right ms-1"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <Navlink href="/services/cloud-services">{t('services.cloudServicesHome')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cloud-services/aws-cloud">{t('services.awsCloud')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cloud-services/azure-cloud">{t('services.azureCloud')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cloud-services/gcp-cloud">{t('services.gcpCloud')}</Navlink>
                </li>
              </ul>
            </li>
            <li className={dropdown.cyberSecurity ? "rv-dropdown-active cybersecurity-menu" : "cybersecurity-menu"}>
              <a
                className="dropdown-btn cybersecurity-dropdown"
                role="button"
                onClick={(e) => handleToggleDropdown("cyberSecurity", e)}
              >
                {t('services.cyberSecurity')} <i className="fa-solid fa-chevron-right ms-1"></i>
              </a>
              <ul className="sub-menu cybersecurity-submenu">
                <li>
                  <Navlink href="/services/cybersecurity">{t('services.cyberSecurityHome')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#soc-as-a-service" className="cybersecurity-link">{t('services.socAsAService')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#incident-response" className="cybersecurity-link">{t('services.incidentResponse')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#penetration-testing" className="cybersecurity-link">{t('services.penetratingTesting')}</Navlink>
                </li>
                <li>
                  <Navlink href="/services/cybersecurity#security-advisory" className="cybersecurity-link">{t('services.securityAdvisory')}</Navlink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Navlink href="#">{t('navigation.useCases')}</Navlink>
        </li>

        <li>
          <Navlink href="/careers">{t('navigation.careers')}</Navlink>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
