import React from "react";
import "../../App.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search sticky-top">
      <div className="form-group">
        <label htmlFor="listings">search:</label>
        <input
            onChange={props.handleInputChange}
            value={props.value}
            id="listings"
            type="text"
            name="search"
            list="listing"
            className="inputBox"
            placeholder="search listings"
        />
        <button type="submit" onClick={props.handleSearch} className="btn btn-custom">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
