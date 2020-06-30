import React, { Component } from 'react';
import { Image } from "react-bootstrap"
import Map from '../../../components/Map/index';
import Nav from '../../../components/Nav';
import API from '../../../utilities/API';
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

    // TODO: This is just a test
    // this.state = listedItemData[0];
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
        <Row>
          <Col md={6}></Col>
          <Col sm={12} md={6}><h1 className={"text-center"}>{this.state.listing_title}</h1></Col>
        </Row>
        <Row>
          <Image width={400} fluid />
          <p>{this.state.listing_description}</p>
        </Row>
        <Row>
          {map}
        </Row>
      </>
    );
  }
}

export default ListedItem;



