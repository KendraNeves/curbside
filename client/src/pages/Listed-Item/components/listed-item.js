import React, { Component } from 'react';
import { Image } from "react-bootstrap"
import Map from '../../../components/Map/index';
import NavBar from '../../../components/Nav';
import API from '../../../utilities/API';

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
    API.getListing(props.listing_id).then((results) => {
      this.setState(...results);
    });
  }

  state = {}
  render() {
    return (
      <>
        <NavBar />
        <h1>{props.itemName}</h1>
        <Image src="holder.js/100px250" fluid />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>



        <Map />
      </>

    );
  }
}

export default ListedItem;



