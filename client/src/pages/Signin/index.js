import React, { useState, useContext } from "react";
import AuthServices from "../../Services/AuthServices";
import AuthContext from "../../Context/AuthContext";
import Message from "../../components/Message/index";
import { Link } from "react-router-dom";
import "./style.css";

function Signin(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  // OnSubmit, pulls authentication data from user
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(user);

    // Middleware takes action
    AuthServices.signin(user).then((data) => {
      console.log("CHECKING FOR AUTHENTICATION");
      const { isAuthenticated, user, message } = data;
      console.log(data);
      console.log(isAuthenticated);

      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenicated(isAuthenticated);
        props.history.push("/search");
      } else {
        setMessage(message);
        props.history.push("/search");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row" id="log-in-row">
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img className="login-img" />
        </div>
        <div className="col-sm-6 login-section-wrapper">
          <div className="brand-wrapper">
            <h4>
              <a className="log-brand" href="/">
                CURBSIDE{" "}
              </a>
            </h4>
          </div>
          <div className="login-wrapper my-auto">
            <h1 className="login-title">Log in</h1>
            <form onSubmit={onSubmit} className="formbox">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={user.email}
                  onChange={onChange}
                  name="email"
                  placeholder="Email..."
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={user.password}
                  onChange={onChange}
                  id="password"
                  name="password"
                  placeholder="Password..."
                />
              </div>
              <input className="btn btn-dark" type="submit" />
            </form>
            {message ? <Message message={message} /> : null}
            <p className="login-wrapper-footer-text">
              Don't have an account?
              <br></br>
              <Link id="signin-link" to="/signup">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
