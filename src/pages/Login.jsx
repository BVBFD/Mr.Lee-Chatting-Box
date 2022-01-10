import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const [inUpBtnIndex, setInUpBtnIndex] = useState(false);
  const navigate = useNavigate();
  const signIn = (event) => {
    event.preventDefault();
    console.log("signIn");
    navigate("/:username");
  };
  const signUp = (event) => {
    event.preventDefault();
    console.log("signUp");
    setInUpBtnIndex(false);
    navigate("/");
  };

  return (
    <div className="loginBox">
      <header className="loginHeaderBox">
        <img src="./img/logo.png" alt="" />
        <h2>Mr.Lee Chatting Box</h2>
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
        <div
          className="checkBox"
          onClick={() => {
            if (!inUpBtnIndex) {
              setInUpBtnIndex(true);
            } else {
              setInUpBtnIndex(false);
            }
          }}
        >
          <input type="checkbox" name="signUp" id="signUp" />
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
