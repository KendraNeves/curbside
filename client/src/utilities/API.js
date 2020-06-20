import axios from "axios";

export default {
  getListings: function() {
    return axios.get("/api/listings");
  },
  getListing: function(id) {
    return axios.get("/api/listings/" + id);
  },
  deleteListing: function(id) {
    return axios.delete("/api/listings/" + id);
  },
  saveListing: function(listingData) {
    return axios.post("/api/listings", listingData);
  }
};
