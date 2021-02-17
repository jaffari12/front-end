import React, { useState, useContext } from "react";
import axios from "axios";
import "./LoginForm.css";
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function LoginForm(props) {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };

    axios
      .post("http://localhost:5000/auth/login", payload)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          props.handleUserId(response.data.id);
        } else if (response.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const redirectToHome = () => {
  //   // props.updateTitle('Home')
  //   props.history.push("/");
  // };
  const redirectToRegister = () => {
    props.history.push("/register");
    // props.updateTitle('Register');
  };
  if (isLoggedIn()) return <Redirect to="/" />;

  return (
    <div className="d-flex justify-content-center flex-row bd-highlight ml-3 mr-3 mt-5">
      <div className="card  col-12 col-lg-4 login-card mt-5 ">
        <form>
          <div className="form-group pt-3 text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              login(state);
            }}
          >
            Log in
          </button>
        </form>
        <div
          className="alert alert-success mt-2"
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {/* {state.successMessage && redirectToHome()} */}
        </div>
        <div className="registerMessage">
          <span>Dont have an account? </span>
          <span className="loginText" onClick={() => redirectToRegister()}>
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
