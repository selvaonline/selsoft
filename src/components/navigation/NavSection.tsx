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
  blog: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
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

        <li>
          <Navlink href="/about">About</Navlink>
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
            <li>
              <Navlink href="/services/ai-solutions">AI Solutions</Navlink>
            </li>
            <li>
              <Navlink href="/services/data-engineering">Data Engineering</Navlink>
            </li>
            <li>
              <Navlink href="/services/cloud-services">Cloud Services</Navlink>
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
