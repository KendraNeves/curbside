import React, { Component } from "react";
import "../../App.css";
import ItemDescription from "./components/item-description"
import { Container, Row, Col } from "../../components/Grid/"
import NavBar from './../../components/Nav/index';

export default class ListedItemPage extends Component {
  state = {}

  render() {
    return (
      <>
        <NavBar />
        <Container><ItemDescription /></Container>
        <Container><ItemDescription /></Container>
        <Container><ItemDescription /></Container>
        <Container><ItemDescription /></Container>
      </>

    );
  }
}