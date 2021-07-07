import React from "react";
import { Link } from "react-router-dom";

import "./styles_components.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <a href="/" className="header-logo">
          Visitor Management System
        </a>
      </Link>

      <div className="header-links">
        <Link to="/searchVisitor">
          <a href="#" className="header-link">
            SEARCH VISITOR
          </a>
        </Link>
        <Link to="/dashboard">
          <a href="#" className="header-link">
            DASHBOARD
          </a>
        </Link>

        <a href="#" className="header-link">
          LOGOUT
        </a>
      </div>
    </div>
  );
};

export default Header;
