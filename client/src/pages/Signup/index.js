import React, {useState, useRef, useEffect} from "react";
import AuthServices from '../../Services/AuthServices';
import Message from '../../components/Message/index';
import "./style.css";
// import signup_img from "../../assets/images/img1.png";
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
    AuthServices.signup(user).then(data=>{
        const { message } = data;
        setMessage(message);
        resetForm();
        if(!message.msgError){
          timerID = setTimeout(()=>{
            props.history.push('/signin');
          }, 2000)
        }
    });
  }
  
  return(
    <div className="container-fluid">
    <div className="row">

        <div className="col-sm-6 px-0 d-none d-sm-block">
            <img className="login-img"/>
        </div>
        <div className="col-sm-6 login-section-wrapper">
            <div className="brand-wrapper">
              <h4><a className="log-brand" href="/">CURBSIDE  </a></h4>
            {/* <img src="assets/images/logo.svg" alt="logo" className="logo" /> */}
            </div>
            <div className="login-wrapper my-auto">
            <h1 className="login-title">Create an account</h1>
            <form className="formbox" onSubmit={onSubmit}>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={onChange} placeholder="Email..." />
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
            {message ? <Message message={message}/> : null}
            <p className="login-wrapper-footer-text">Already have an account? <Link id="signin-link" to="/signin">Sign in</Link></p>
            </div>
        </div>

    </div>
</div>

    
    
    
    // <div className="log">
    //   <header className="log-header">
    //     <a className="log-brand" href="/">CURBSIDE</a>
    //   </header>

    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-6">
    //         <img src={signup_img} alt="boxes toppled over"></img>
    //       </div>
    //       <div className="col-6">
    //         <div className="row">
    //           <h2 className="log-title">CREATE AN ACCOUNT</h2>
    //         </div>
    //         <div className="row">
    //           <form onSubmit={onSubmit}>
    //               <div className="form-group">
    //                 <input type="email" name="email" 
    //                         value={user.email}
    //                         onChange={onChange}
    //                         className="form-control" 
    //                         id="exampleInputEmail1" 
    //                         aria-describedby="emailHelp" 
    //                         placeholder="Email"></input>
    //               </div>
    //               <div className="form-group">
    //                 <input type="password" name="password" 
    //                         value={user.password}
    //                         onChange={onChange}
    //                         className="form-control" 
    //                         id="exampleInputPassword1" 
    //                         placeholder="Password"></input>
    //               </div>
    //               <button type="submit" className="btn">SIGN UP</button>
    //               <br></br>
    //               <Link id="signin-link" to="/signin">SIGN IN</Link>
    //           </form>
    //           {message ? <Message message={message}/> : null}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Signup;