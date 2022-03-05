import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ authService }) => {
  let [inUpBtnIndex, setInUpBtnIndex] = useState(false);
  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();
    const id = document.querySelector("input[name=id]").value;
    const password = document.querySelector("input[name=password]").value;
    authService
      .getLoginData(id, password)
      .then((data) => {
        window.location.replace(`/${data.others.id}/alltweets`);
        // navigate(`/${data.others.id}/alltweets`);
        // 로근인하고 다른 페이지로 안 넘어가는 렌더링 이슈가 있어서 window.locatin.replace로 대체
      })
      .catch((err) => console.log(err));
  };

  const signUp = (event) => {
    event.preventDefault();
    const id = document.querySelector("input[name=id]").value;
    const password = document.querySelector("input[name=password]").value;
    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=Email]").value;
    const url = document.querySelector("input[name=url]").value;
    let checkBox = document.querySelector("#signUp");
    authService
      .postLoginData(id, password, name, email, url)
      .then((alert) => alert)
      .catch((err) => console.log(err));
    setInUpBtnIndex(false);
    checkBox.checked = false;
    navigate("/");
  };

  return (
    <div className="loginBox">
      <header className="loginHeaderBox">
        <img src="./img/logo.png" alt="" />
        <h2>Mr.Lee Academia</h2>
      </header>
      <form className="signInSignUpForm">
        <input type="text" name="id" placeholder="Id" />
        <input type="password" name="password" placeholder="Password" />
        {inUpBtnIndex && <input type="text" name="name" placeholder="Name" />}
        {inUpBtnIndex && (
          <input type="email" name="Email" placeholder="Email" />
        )}
        {inUpBtnIndex && (
          <input type="url" name="url" placeholder="Profile Image URL" />
        )}
        <div className="checkBox">
          <input
            onChange={() => {
              if (!inUpBtnIndex) {
                setInUpBtnIndex(true);
              } else {
                setInUpBtnIndex(false);
              }
            }}
            type="checkbox"
            name="signUp"
            id="signUp"
          />
          <label htmlFor="signUp">Create a new account?</label>
        </div>
        <button type="submit" onClick={!inUpBtnIndex ? signIn : signUp}>
          {!inUpBtnIndex ? `Sing In` : `Sing Up`}
        </button>
      </form>
    </div>
  );
};

export default Login;
