import React, {useState, useRef, useEffect} from "react";
import AuthService from '../../Services/AuthServices';
import Message from '../../components/Message/index';
import "./style.css";
import signup_img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";

function Signup(props) {
  const [user,setUser] =useState({email: "", password: "", role: ""});
  const [message,setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(()=>{
    return ()=>{
      clearTimeout(timerID)
    }
  },[]);

  const onChange = e =>{
    setUser({...user,[e.target.name] : e.target.value});
    console.log(user)
  }

  // Reset form
  const resetForm = ()=>{
    setUser({email: '', password: '', role: ''})
  }

  // Displays message to user for 2 seconds; then redirects user to signin page
  const onSubmit = e =>{
    e.preventDefault();
    console.log(e)
    AuthService.signup(user).then(data=>{
        const { message } = data;
        setMessage(message);
        resetForm();
        if(!message.msgError){
          timerID = setTimeout(()=>{
            props.history.push('/login');
          }, 2000)
        }
    });
  }
  

  return(
    <div className="log">
      <header className="log-header">
        <a className="log-brand" href="/">CURBSIDE</a>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={signup_img} alt="boxes toppled over"></img>
          </div>
          <div className="col-6">
            <div className="row">
              <h2 className="log-title">CREATE AN ACCOUNT</h2>
            </div>
            <div className="row">
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <input type="email" name="email" 
                            value={user.email}
                            onChange={onChange}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" 
                            value={user.password}
                            onChange={onChange}
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn">SIGN UP</button>
                  <br></br>
                  <Link id="signin-link" to="/signin">SIGN IN</Link>
              </form>
              {message ? <Message message={message}/> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;