import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="imgBox">
        <Link to={`/${user.id}`}>
          <img src="./img/logo.png" alt="" />
          <h2>Mr.Lee Academia</h2>
        </Link>
        <Link to={`/${user.id}/mytweets`}>
          <h5>@{user.name}</h5>
        </Link>
      </div>
      <nav className="navbar">
        <Link to={`/${user.id}`}>
          <span>All Tweet</span>
        </Link>
        <Link to={`/${user.id}/mytweets`}>
          <span>My Tweet</span>
        </Link>
        <Link to={"/"}>
          <span>Logout</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
