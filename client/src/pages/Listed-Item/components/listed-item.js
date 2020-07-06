import React, { Component } from 'react';
import { Image } from "react-bootstrap"
import Map from '../../../components/Map/index';
import Nav from '../../../components/Nav';
import API from '../../../utilities/API';
import { Row, Col, Container, Jumbotron } from "react-bootstrap";

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
      <div>
        <Nav />
        {/* Item name/title */}
        <Row>
          <Col md={1}></Col>
          <Col md={5}></Col>
          <Col sm={12} md={5}>
            <div style={{
              backgroundColor: "yellow"
            }}
              className={"container-fluid text-center title"}>{this.state.listing_title}
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        {/* Item image and description */}
        <Row>
          <Col sm={1}></Col>
          <Col sm={10} md={5} style={{ width: "400px" }} fluid>
            <Image className="img-fluid" src={process.env.PUBLIC_URL + "/images/brown-couch.jpg"} />
          </Col>
          <Col sm={10} md={5} style={{ backgroundColor: "pink" }} className="pt-5 my-5">
            <p className="ml-5" >{this.state.listing_description}</p>
          </Col>
          <Col sm={1} md={1}></Col>
        </Row>
        {/* Map */}
        <Row>
          <Col sm={1} md={7}></Col>
          <Col sm={10} md={4}>{map}</Col>
          <Col sm={1} md={1}></Col>
        </Row>
      </div>
    );
  }
}

export default ListedItem;



