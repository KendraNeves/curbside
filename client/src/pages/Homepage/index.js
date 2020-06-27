import React from "react";
import HomepageNav from "../../components/Homepage_Nav";
import "./style.css";

function Homepage() {
  return(
    <div className="homepage">
      <HomepageNav />
      <h1 className="homepage-name">CURBSIDE</h1>
      <h2 className="tag-line">THE EASIEST WAY TO LET GO</h2>
    </div>
  )
}

export default Homepage;
