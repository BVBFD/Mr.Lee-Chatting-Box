import React from "react";
import { Link, useParams } from "react-router-dom";

const Header = ({ authService }) => {
  const { id } = useParams();
  const clearLoginDataLocalStorage = () => {
    authService.tokenStorage.clearToken();
  };

  return (
    <header className="header">
      <div className="imgBox">
        <img src="../img/logo.png" alt="" />
        <h1>Academia</h1>
      </div>

      <nav>
        <Link to={`/${id}/alltweets`}>
          <span>All Tweets</span>
        </Link>
        <Link to={`/${id}/mytweets`}>
          <span>My Tweets</span>
        </Link>
        <Link onClick={clearLoginDataLocalStorage} to={"/"}>
          <span>Log Out</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
