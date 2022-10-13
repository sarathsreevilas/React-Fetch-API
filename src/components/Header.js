import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      {/* <Link to="/Name">View Shows</Link> */}
      <Link to="/Book">Book Shows</Link>
    </header>
  );
};

export default Header;
