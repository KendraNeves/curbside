import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { Input, TextArea, FormBtn } from "../../components/Form";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

Geocode.setApiKey(REACT_APP_API_KEY);

const containerStyle = {
  width: '360px',
  height: '360px'
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      center: props.latlong || {
        lat: 39.2904,
        lng: -76.6122
      },
      address: ""
    };
    // this.setLocation = this.setLocation.bind(this);
  }

  // setLocation() {
  //   Geocode.fromAddress(this.state.address).then(
  //     response => {
  //       const latlng = response.results[0].geometry.location;
  //       this.setState({ center: latlng });
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  render() {
    return (
      <>
        <LoadScript
          googleMapsApiKey={REACT_APP_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={this.state.center}
            zoom={13}
          >
            {/* <Marker position={this.state.center} /> */}
            <Circle center={this.state.center} radius={500} />
            { /* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>

        {/* This input form is temporary and for development purposes */}
        {/* <form onSubmit={(event) => { event.preventDefault(); this.setLocation(); }}>
          <Input onChange={(event) => { this.setState({ address: event.target.value }) }} />
          <FormBtn onClick={this.setLocation}> Submit Listing</FormBtn>
        </form> */}
      </>
    )
  }
} 