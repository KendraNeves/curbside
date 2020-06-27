import React,{useContext} from 'react';
import { AuthContext } from './Context/AuthContext'
import { BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const {user,setUser,isAuthenicated,setIsAuthenicated } = useContext(AuthContext)
  return(
    <BrowserRouter>
      <Route exact path={["/", "/homepage"]} component={Homepage} />
      <Route exact path="/map" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
    </BrowserRouter>
    
  )
};

export default App;