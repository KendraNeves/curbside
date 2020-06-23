import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Listings from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import NavBar from "./components/Nav"

function App() {
  return(
    <NavBar/>,
    <BrowserRouter>
    <main>
      <Route exact path={["/", "/homepage"]} component={Listings} />
      <Route exact path="/map" component={Listings} />
      <Route exact path="/search" component={Listings} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
      </main>
    </BrowserRouter>
    
  )
};

export default App;