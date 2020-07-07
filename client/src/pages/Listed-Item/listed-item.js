import React, { Component } from 'react';
import { Image } from "react-bootstrap"
import Map from '../../components/Map/index';
import Nav from '../../components/Nav';
import API from '../../utilities/API';
import { Row, Col } from "react-bootstrap";

class ListedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_title: "",
      listing_description: "",
      listing_condition: "",
      listing_location: "",
      listing_latlong: null,
      listing_image: "" // Base64 representation of image
    };
  }

  componentDidMount() {
    API.getListing(this.props.listing_id).then((results) => {
      this.setState(results.data);
    });
  }

  render() {
    var map = this.state.listing_latlong ? (<Map latlong={this.state.listing_latlong} />) : null;
    return (
      <>
        <Nav />

        {/* ===TITLE=== */}
        <Row>
          <Col md={6}></Col>
          <Col sm={12} md={6}><h1 className={"text-center"}>{this.state.listing_title}</h1></Col>
        </Row>

        {/* PIC & DESCRIPTION */}
        <Row className="mt-5">
          <Col md={6} className="text-center"><Image width={400} src={this.state.listing_image} fluid /></Col>
          <Col md={6} className="text-center"><p>{this.state.listing_description}</p></Col>
        </Row>

        {/* MAP & CONDITION */}
        <Row className="mt-5 mx-0">
          <Col md={7}></Col>
          <Col md={5} className="p-0">{map}</Col>
        </Row>
      </>
    );
  }
}

export default ListedItem;
