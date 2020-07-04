import React, {useState,useContext} from "react";
import AuthServices from '../../Services/AuthServices';
import AuthContext from '../../Context/AuthContext';
// import Message from '../../components/Message/index';
// import signin_img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";
import './signin.css';


function Signin(props) {
  const [user,setUser] = useState({email: "", password: ""});
  const [message,setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e =>{
    setUser({...user,[e.target.name] : e.target.value});
    console.log(user)
  }

const onSubmit = e =>{
  e.preventDefault();
  console.log(e)
  AuthServices.signin(user).then(data=>{
    const { isAuthenticated,user,message} = data;
    if(isAuthenticated){
      authContext.setUser(user);
      authContext.setIsAuthenicated(isAuthenticated);
      props.history.push('/search');
    }
    else{
      setMessage(message)
    }
  })
}

    {/* this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data");
    console.log(this.state);
  }

  render() { */}
    return (
      <div className="container-fluid">
                <div className="row">

                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img className="login-img" />
                    </div>
                    <div className="col-sm-6 login-section-wrapper">
                        <div className="brand-wrapper">
                          <h4><a className="log-brand" href="/">CURBSIDE  </a></h4>
                        {/* <img src="assets/images/logo.svg" alt="logo" className="logo" /> */}
                        </div>
                        <div className="login-wrapper my-auto">
                        <h1 className="login-title">Log in</h1>
                        <form className="formbox" onSubmit={onsubmit}>
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email..." />
                            {/* <input className="form-input"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            /> */}
                            </div>
                            <div className="form-group mb-4">
                            <label htmlFor="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Password..."/>
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



      // <div className="log">
      //   <header className="log-header">
      //     <a className="log-brand" href="/">CURBSIDE  </a>
      //   </header>
      
      //   <div className="container-fluid">
      //     <div className="row">
      //       <div className="col-6 img-holder">
      //       </div>
      //       <div className="col-6">
      //         <h2 className="log-title">SIGN IN</h2>
      //           <form onSubmit={onSubmit}>
      //             <div className="form-group">
      //               <input type="email" className="form-control" id="email" name="email" placeholder="Email..." />
      //             </div>
      //             <div className="form-group">
      //               <input type="password" class="form-control" id="password" name="password" placeholder="Password..."/>
      //             </div>
      //             <button type="submit" className="btn">LOG IN</button>
      //             <br></br>
      //             <Link id="signin-link" to="/signup">SIGN UP</Link>
      //         </form>
      //         {message ? <Message message={message} /> : null}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
}
export default Signin;