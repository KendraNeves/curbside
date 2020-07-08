import React, { useState, useRef, useEffect } from "react";
import AuthServices from "../../Services/AuthServices";
import Message from "../../components/Message/index";
import "./style.css";
// import signup_img from "../../assets/images/img1.png";
import { Link } from "react-router-dom";

function Signup(props) {
  const [user, setUser] = useState({ email: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);
  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  // Reset form
  const resetForm = () => {
    setUser({ email: "", password: "", role: "" });
  };

  // Displays message to user for 2 seconds; then redirects user to signin page
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    AuthServices.signup(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/signin");
        }, 2000);
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row" id="sign-up-row">
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
            <h1 className="login-title">Create an account</h1>
            <form className="formbox" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={onChange}
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
              Already have an account?
              <br></br>
              <Link id="signin-link" to="/signin">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
