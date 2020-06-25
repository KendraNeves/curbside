import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Homepage_Nav() {
  return(
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="/">CURBSIDE</a>

        <div className="user-credentials">
          <Link className="links" to="/signin">SIGN IN</Link>
          <Link className="links" to="/signup">SIGN UP</Link>
        </div>
        
      </nav>
    </div>
  )
}

export default Homepage_Nav;