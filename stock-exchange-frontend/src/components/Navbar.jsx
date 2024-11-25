import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/user/register">Register User</Link></li>
      <li><Link to="/stock/register">Register Stock</Link></li>
      <li><Link to="/stock/analysis">Stock Analysis</Link></li>
      <li><Link to="/market/trends">Market Trends</Link></li>
      <li><Link to="/user/transactions">Transaction History</Link></li>
    </ul>
  </nav>
);

export default Navbar;
