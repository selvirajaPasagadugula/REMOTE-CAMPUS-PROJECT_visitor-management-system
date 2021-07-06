import React from "react";
import "./component_styles.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header-logo">
        Visitor Management System
      </a>
      <div className="header-links">
        <a href="#" className="header-link">
          SEARCH VISITOR
        </a>
        <a href="#" className="header-link">
          DASHBOARD
        </a>
        <a href="#" className="header-link">
          LOGOUT
        </a>
      </div>
    </div>
  );
};

export default Header;
