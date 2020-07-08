import React from "react";
import Nav from "../../components/Nav";
// import {Link} from "react-scroll";
import "./style.css";

function Homepage() {
  return (
    <div className="homepage">
      <Nav />
      
      <h1 className="homepage-name">CURBSIDE</h1>
      <h3 className="tag-line">THE EASIEST WAY TO LET GO</h3>

      {/* <Link
      activeClass="active"
      to="section1"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
      ></Link> */}
    </div>
  )
}

export default Homepage;
