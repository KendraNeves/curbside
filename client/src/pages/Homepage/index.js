import React from "react";
import Homepage_Nav from "../../components/Homepage_Nav";
import "./style.css";

function Homepage() {
  return(
    <div className="homepage">
      <Homepage_Nav />
      <h1 className="homepage-name">CURBSIDE</h1>
      <h2 className="tag-line">THE EASIEST WAY TO LET GO</h2>
    </div>
  )
}

export default Homepage;