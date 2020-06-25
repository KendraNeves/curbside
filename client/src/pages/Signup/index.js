import React from "react";
import "./style.css";
import signup_img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";

function Signup() {
  return(
    <div className="signup">
      <header className="log-header">
        <a className="log-brand" href="/">CURBSIDE</a>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={signup_img} alt="boxes toppled over"></img>
          </div>
          <div className="col-6">
            <div className="row">
              <h2 className="signup-form-title">CREATE AN ACCOUNT</h2>
            </div>
            <div className="row">
              <form>
                  <div className="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-primary">SIGN UP</button>
                  <Link to="/signin">SIGN IN</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;