import React from "react";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  // Example menu structure
  const menuItems = [
    { 
      title: "Home", 
      url: "/" 
    },
    { 
      title: "About", 
      url: "/about" 
    },
    { 
      title: "Services", 
      url: "/services",
      submenu: [
        { title: "Service 1", url: "/services/service1" },
        { title: "Service 2", url: "/services/service2" },
        { 
          title: "Service 3", 
          url: "/services/service3",
          submenu: [
            { title: "Sub Service 1", url: "/services/service3/sub1" },
            { title: "Sub Service 2", url: "/services/service3/sub2" }
          ]
        }
      ]
    },
    { 
      title: "Contact", 
      url: "/contact" 
    }
  ];

  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <Link href="/">
                <img src="/assets/img/logo.png" alt="Selsoft Logo" />
              </Link>
            </div>
          </div>
          
          <div className="col-lg-9">
            <NavMenu menuItems={menuItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
