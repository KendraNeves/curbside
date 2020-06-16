import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Map from "./pages/Map";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";

function App() {
  return(
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
    </Router>
  )
};

export default App;