import React, { Component } from 'react';
import { Image } from "react-bootstrap"
import Map from '../../../components/Map/index';
import NavBar from '../../../components/Nav';
import API from '../../../utilities/API';
import listedItemData from './../dummy-json';

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
        <h1>{this.state.listing_title}</h1>
        <Image src={process.env.PUBLIC_URL + "/images/brown-couch.jpg"} fluid />
        <p>{this.state.listing_description}</p>



        <Map />
      </>

    );
  }
}

export default ListedItem;



