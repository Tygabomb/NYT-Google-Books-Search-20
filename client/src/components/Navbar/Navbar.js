import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <ul className="nav bg-dark">
    <li className="nav-item">
      <a className="nav-link" href="/">Search</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/saved">Saved</a>
    </li>
  </ul>
);

export default Navbar;