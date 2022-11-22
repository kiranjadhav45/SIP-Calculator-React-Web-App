import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div id="header">
        <header>
          <h1 className="text-center container pt-4">SIP Calculator</h1>
          <h5 className="text-center">Systematic Investment Plan Calculator</h5>
          <div className="text-center mt-4">
            <Link
              to="/SIP"
              className="btn Navbtn p-2 btn-secondary mx-2 btn-sm active"
              role="button"
              aria-pressed="true"
            >
              SIP
            </Link>
            <Link
              to="/Lumpsum"
              className="btn Navbtn p-2 btn-secondary mx-2 btn-sm active"
              role="button"
              aria-pressed="true"
            >
              Lumpsum
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
