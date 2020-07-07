import React from "react";
import { MDBInput, MDBCol } from "mdbreact";
import "./search.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="searchBar">
      <MDBCol md="12">
      <MDBInput  hint="Search listings..." containerClass="mt-0" 
      onChange={props.handleInputChange}
              value={props.value}
              id="listings"
              type="text"
              name="search"
              list="listing"
              className="inputBox"
              />
    </MDBCol>
    </div>
    
    // <form className="search ">
    //   <div className="form-group">
    //     <label htmlFor="listings">search:</label>
    //     <input
    //         onChange={props.handleInputChange}
    //         value={props.value}
    //         id="listings"
    //         type="text"
    //         name="search"
    //         list="listing"
    //         className="inputBox"
    //         placeholder="search listings"
    //     />
    //     <button type="submit" onClick={props.handleSearch} className="btn btn-custom">
    //       Search
    //     </button>
    //   </div>
    // </form>
  );
}

export default SearchForm;
