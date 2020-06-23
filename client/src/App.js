import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Listings from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Upload from "./pages/Search";
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
    <main>
      <Route exact path={["/", "/homepage"]} component={Homepage} />
      <Route exact path="/map" component={Listings} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
      </main>
    </BrowserRouter>
    
  )
};

export default App;