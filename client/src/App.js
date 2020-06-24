import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Search";
import Upload from "./pages/Upload";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import NavBar from "./components/Nav"

function App() {
  return(
    <NavBar/>,
    <BrowserRouter>
    <main>
      <Route exact path={["/", "/homepage"]} component={Homepage} />
      <Route exact path="/map" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
      </main>
    </BrowserRouter>
    
  )
};

export default App;