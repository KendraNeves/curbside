import React from "react";
import "./style.css";
import NavBar from './../../components/Nav/index';

function Homepage() {
  return (
    <div className="homepage">
      <NavBar />
      <h1 className="homepage-name">CURBSIDE</h1>
      <h2 className="tag-line">THE EASIEST WAY TO LET GO</h2>
    </div>
  )
}

export default Homepage;
