import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.webp";

export default class Banner extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" width="50px;" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Toutes les Figurines
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  Ajouter une Figurine
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
