import React, { Component } from "react";
import "../../App.css";
import ListedItem from './components/listed-item.js';

export default class ListedItemPage extends Component {
  state = {}

  render() {
    return (<ListedItem listing_id="">{this.props.children}</ListedItem>);
  }
}