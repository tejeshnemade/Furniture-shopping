import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {changeInfo} from "../Redux/Users"
import url from "../service/url";
import webService from "../service/webService";

function Login() {
  let emailBox = useRef();
  let passBox = useRef();
  const dispath =useDispatch();
  let [message, setMessage] = useState(" ");

  //======== navigate to register page ========

  const navigate = useNavigate();
  let Singup = () => {
    navigate("/register");
  };

  //======== navigate to register page ========

  //============= Login Form ============================

  const login = async (event) => {
    event.preventDefault();

    let ob = {
      email: emailBox.current.value,
      password: passBox.current.value,
    };

    //  console.log(ob);

    const response = await webService.postApiCall(url.USER_LOGIN, ob);

    console.log(response);

    if (response.data.status) {
      dispath(
        changeInfo({ islogin: true, name: response.data.name, token:response.data.token })
      );
      navigate("/");
    } else {
      {
        setMessage(response.data.msg);
      }
    }
    event.target.reset();
  };

  //============= Login Form ============================

  return (
    <>
      <section className="Home">
        <div className="container">
          <h1 className="text-center mb-5">Login page</h1>
          <form onSubmit={login}>
            <div className="form-group row mt-2">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  ref={emailBox}
                />
              </div>
            </div>
            <div className="form-group row mt-2">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  ref={passBox}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-5 mx-2">
              Login
            </button>{" "}
            <button className="btn btn-primary mt-5" onClick={Singup}>
              Create Account
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-danger">{message}</span>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
