import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">
        <img
          className=" ms-4"
          style={{ width: "70px", height: "70px" }}
          src="https://pngimg.com/d/star_wars_logo_PNG34.png"
          alt="Star Wars logo"
        />
      </Link>


      <div className="me-3">
        <Link to="/demo">
          <button className="btn btn-warning">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};