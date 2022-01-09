import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="imgBox">
        <img src="./img/logo.png" alt="" />
        <h2>Mr.Lee Chatting Box</h2>
        <h5>@Mr.Lee Seong Eun</h5>
      </div>
      <nav className="navbar">
        <span>All Tweet</span>
        <span>My Tweet</span>
        <span>Logout</span>
      </nav>
    </header>
  );
};

export default Header;
