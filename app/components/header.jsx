import React, { useState } from "react";
import { Link, useMatches } from "@remix-run/react";
import logo from "public/logo.png";
const Header = ({ navLinks }) => {
  const matches = useMatches();
  const { pathname } = matches[2];
  const [userMenuShown, setUserMenuShown] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Brand Logo"
            style={{ height: 65, width: "auto" }}
          />
        </Link>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks?.map((link) => (
              <li className={`nav-item`} key={link.label}>
                <Link
                  to={link.url}
                  className={`nav-link ${pathname === link.url && "active"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="dropdown">
          <button
            className="btn"
            type="button"
            id="userDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => setUserMenuShown(!userMenuShown)}
          >
            <span className="text-primary fw-bolder">John Doe</span>
            <span className="text-muted mx-2">Administrator</span>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt=""
              style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
          </button>
          <div
            style={{ right: 0 }}
            className={`dropdown-menu dropdown-menu-end ${
              userMenuShown ? "show" : ""
            }`}
            aria-labelledby="userDropdown"
          >
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/settings" className="dropdown-item">
              Settings
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="/logout" className="dropdown-item">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
