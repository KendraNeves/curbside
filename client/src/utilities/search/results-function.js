import API from "../API";
import React, { Component } from "react"
import SearchForm from "./search-function"
import TableHeader from "./table-header";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Results extends Component {

    state = {
        search: "",
        listings: [],
        listingSort: [],
        order: ""

    };
    componentDidMount() {
        API.getListings().then(res => this.setState({
            listings: res.data,
            listingSort: res.data
        })).catch(err => console.log(err))
        
    }

    sortByName = () => {
        const filtereds = this.state.listingSort;
        if (this.state.order === "ascending") {
            const sortFunction = filtereds.sort((a, b) => (a.date > b.date) ? 1 : -1)
            console.log(sortFunction)

            this.setState({
                listingSort: sortFunction,
                order: "descending"
            })
        } else {

            const sortFunction = filtereds.sort((a, b) => (a.date > b.date) ? -1 : 1)

            this.setState({
                listingSort: sortFunction,
                order: "ascending"
            })

        }
    }
    render() {
        return (
            <div>
                <SearchForm
                    listing={this.state.listings}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                      <Container fluid>
          <thead className="">
              <Row className=" sticky-top">
                  <Col className="hover-pointer heading" onClick={this.sortByName}>Name</Col>
              </Row>
          </thead>
          <tbody className="">
              {this.state.listingSort.map(listing => (
                  <Row key={listing._id} className="">
                      <Col>{listing.listing_title}  </Col>
                  </Row>
              ))}
          </tbody>
      </Container >
            </div >
        )
    }
    handleInputChange = event => {

        const listings = this.state.listings;
        const UserInput = event.target.value;
        const listingSort = listings.filter(listing => listing.listing_title.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({
            listingSort
        });
    };
    listingSearch = () => {
        API.getListings()
            .then(res => this.setState({
                listingSort: res.data,
                listings: res.data
            }))
            .catch(err => console.log(err))
    }
    handleSearch = event => {
        event.preventDefault();
        const { listings, search } = this.state;
        const UserInput = event.target.value;
        const listingSort = listings.filter(listing => listing.listing_title.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            listingSort,
        });
    }
}

export default Results