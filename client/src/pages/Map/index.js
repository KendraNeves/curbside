import React, { useState, useEffect, Component } from "react";
import API from "../../utilities/API";
import "../../App.css";
import Map from "../../components/Map";

export default class MapPage extends Component {
  state = {}

  render() {
    return (<Map />);
  }
}