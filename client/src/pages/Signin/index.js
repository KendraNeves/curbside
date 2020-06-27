import React from "react";
import signin_img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";

function Signin() {
  return(
    <div className="log">
      <header className="log-header">
        <a className="log-brand" href="/">CURBSIDE  </a>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={signin_img} alt="boxes toppled over"></img>
          </div>
          <div className="col-6">
            <div className="row">
              <h2 className="log-title">SIGN IN</h2>
            </div>
            <div className="row">
              <form>
                  <div className="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn">LOG IN</button>
                  <br></br>
                  <Link id="signin-link" to="/signup">SIGN UP</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;