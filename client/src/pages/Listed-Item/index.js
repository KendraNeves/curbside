import React, { Component } from "react";
import "../../App.css";
import ListedItem from './components/listed-item.js';
import "./style.css"

export default class ListedItemPage extends Component {
  state = {}

  render() {
    return (<ListedItem listing_id={this.props.listing_id}>{this.props.children}</ListedItem>);
  }
}