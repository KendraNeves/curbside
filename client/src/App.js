import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import ListedItemPage from "./pages/Listed-Item/index";
import "./index.css";

function App() {
  const { user, setUser, isAuthenicated, setIsAuthenicated } = useContext(
    AuthContext
  );
  console.log(user);
  console.log(isAuthenicated);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/homepage"]} component={Homepage} />
          <Route path="/map" component={Map} />
          <Route path="/search" component={Search} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/upload" component={Upload} />
          <Route exact path="/listings/:listing_id" render={(props) => (<ListedItemPage listing_id={props.match.params.listing_id} />)}
          />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
