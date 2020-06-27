import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Map from "./pages/Map"

function App() {
  return (
=======
import { BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Listings from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import NavBar from "./components/Nav"

function App() {
  return(
    <NavBar/>,
>>>>>>> Ricardo
    <BrowserRouter>
    <main>
      <Route exact path={["/", "/homepage"]} component={Homepage} />
<<<<<<< HEAD
      <Route exact path="/map" component={Map} />
      <Route exact path="/search" component={Search} />
=======
      <Route exact path="/map" component={Listings} />
      <Route exact path="/search" component={Listings} />
>>>>>>> Ricardo
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
      </main>
    </BrowserRouter>

  )
};
export default App;