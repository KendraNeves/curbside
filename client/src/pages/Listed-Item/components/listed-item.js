import React, { Component } from 'react';
import { Image } from "react-bootstrap"
import Map from '../../../components/Map/index';
import NavBar from '../../../components/Nav';
import API from '../../../utilities/API';
import listedItemData from './../dummy-json';
import { Row, Col } from "react-bootstrap";

class ListedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_title: "",
      listing_description: "",
      listing_condition: "",
      listing_location: "",
      listing_latlong: null
    };
    // TODO: How does listing_id get passed into this component?
    // API.getListing(props.listing_id).then((results) => {
    //   this.setState(...results);
    // });

    // TODO: This is just a test
    this.state = listedItemData[0];
  }

  state = {}
  render() {
    return (
      <>
        <NavBar />
        <Row>
          <Col md={6}></Col>
          <Col sm={12} md={6}><h1>{this.state.listing_title}</h1></Col>
        </Row>
        <Row>
          <Image width={400} src={process.env.PUBLIC_URL + "/images/brown-couch.jpg"} fluid />
          <p>{this.state.listing_description}</p>
        </Row>
        <Row>
          <Map />
        </Row>
      </>

    );
  }
}

export default ListedItem;



