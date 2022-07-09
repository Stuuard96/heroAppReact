import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-info" to="/">
          SuperHeroes
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
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/dc"
              >
                DC
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/search"
              >
                Search
              </NavLink>
            </li> */}
          </ul>

          <div className="navbar-nav">
            <NavLink className="nav-item nav-link text-info" to="/">
              Stuard
            </NavLink>
          </div>

          <div className="navbar-nav ">
            <button
              className="btn nav-item nav-link btn-danger text-light py-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
