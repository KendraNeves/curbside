import React, { useState, useContext } from "react";
import AuthServices from '../../Services/AuthServices';
import AuthContext from '../../Context/AuthContext';
import Message from '../../components/Message/index';
import { Link } from "react-router-dom";
import './style.css';
 

function Signin(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const onChange = e => {
    setUser({...user,[e.target.name] : e.target.value});
    console.log(user)
  }
  // OnSubmit, pulls authentication data from user
  const onSubmit = e =>{
    e.preventDefault();
    console.log(e)
    console.log(user)
    // Middleware takes action
    AuthServices.signin(user)
    .then(data=>{
      console.log("CHECKING FOR AUTHENTICATION")
        const { isAuthenticated, user, message } = data;
        console.log(data)
        console.log(isAuthenticated)

        if (isAuthenticated) {
          authContext.setUser(user);
          authContext.setIsAuthenicated(isAuthenticated);
          props.history.push('/search');
        }
        else {
          setMessage(message)
          props.history.push('/search');
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row" id="log-in-row">
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img className="login-img" />
        </div>
        <div className="form-group mb-4">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" value={user.password} onChange={onChange} id="password" name="password" placeholder="Password..."/>
        {/* <input className="form-input"
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
        /> */}
        </div>
        <input className="btn btn-dark" 
        type="submit" />
    </form>
    {message ? <Message message={message} /> : null}
    <p className="login-wrapper-footer-text">Don't have an account? <Link id="signin-link" to="/signup">Register here</Link></p>
    </div>
</div>

</div>
</div>
    )
 
}
export default Signin;