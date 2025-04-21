import React, { useState } from "react";
import Link from "next/link";
import "../../styles/menu.css";

interface MenuItem {
  title: string;
  url: string;
  submenu?: MenuItem[];
}

interface NavMenuProps {
  menuItems: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderMenuItem = (item: MenuItem, isSubmenu = false) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    
    return (
      <li 
        key={item.title} 
        className={`nav-item ${hasSubmenu ? isSubmenu ? 'dropdown-submenu' : 'dropdown' : ''}`}
      >
        <Link 
          href={item.url} 
          className={`nav-link ${hasSubmenu ? 'dropdown-toggle' : ''}`}
        >
          {item.title}
        </Link>
        
        {hasSubmenu && (
          <ul className="dropdown-menu">
            {item.submenu!.map(subItem => renderMenuItem(subItem, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="header-nav">
      <div className="d-lg-none">
        <button 
          className="navbar-toggler" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      
      <ul className={`navbar-nav ${mobileMenuOpen ? 'show' : 'd-none d-lg-flex'}`}>
        {menuItems.map(item => renderMenuItem(item))}
      </ul>
    </nav>
  );
};

export default NavMenu;
