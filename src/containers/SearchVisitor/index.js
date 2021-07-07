import React from "react";

import Header from "./../../components/Header";
import "./styles.css";

const SearchVisitor = () => {
  return (
    <div className="search-visitor">
      <Header />
      <div className="div-search-visitor">
        <input
          required
          type="text"
          placeholder="Enter the Visitor ID to Search"
          className="search-visitor-text-box"
        />
        <button className="btn btn-success btn-search">Search</button>
      </div>
    </div>
  );
};

export default SearchVisitor;
