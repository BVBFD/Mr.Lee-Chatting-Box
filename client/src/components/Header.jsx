import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    setId(user);
    return () => setId("");
  }, [user]);

  const clearLoginDataLocalStorage = () => {
    localStorage.clear("token");
    localStorage.clear("user");
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
