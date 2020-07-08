import React,{useContext} from 'react';
import { AuthContext } from './Context/AuthContext';
import { BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import ListedItemPage from './pages/Listed-Item/index';

function App() {
  const { user,setUser,isAuthenicated,setIsAuthenicated } = useContext(AuthContext);
  console.log(user);
  console.log(isAuthenicated);
  return(
    <BrowserRouter>
      <Route exact path={["/", "/homepage"]} component={Homepage} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/listings/:listing_id" render={(props) => <ListedItemPage listing_id={props.match.params.listing_id} />} />
    </BrowserRouter>
  )
};
export default App;
