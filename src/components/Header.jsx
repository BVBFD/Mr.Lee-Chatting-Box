import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="imgBox">
        <Link to={"/:username"}>
          <img src="./img/logo.png" alt="" />
          <h2>Mr.Lee Chatting Box</h2>
        </Link>
        <Link to={"/:username/mytweets"}>
          <h5>@Mr.Lee Seong Eun</h5>
        </Link>
      </div>
      <nav className="navbar">
        <Link to={"/:username"}>
          <span>All Tweet</span>
        </Link>
        <Link to={"/:username/mytweets"}>
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
