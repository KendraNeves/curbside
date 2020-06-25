import React from "react";
import "./style.css";
import signup_img from "../../assets/images/img1.png";

function Signup() {
  return(
    <div className="signup">
      <header className="log-header">
        <a className="log-brand" href="/">CURBSIDE</a>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={signup_img} alt="toppled over boxes."></img>
          </div>
          <div className="col-6">
            <div className="row">
              <h2 className="signup-form-title">CREATE AN ACCOUNT</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;