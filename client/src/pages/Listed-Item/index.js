import React, { Component } from "react";
import "../../App.css";
import ListedItem from './components/listed-item.js';
import { listedItemData } from './dummy-json';

export default class ListedItemPage extends Component {
  state = {}

  render() {
    return (<ListedItem><listedItemData>{this.props.children}</listedItemData></ListedItem>);
  }
}