import React, { Component } from "react";
import "./style.css";
import signup_img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";

// function Signup() {
//   return(
//     <div className="log">
//       <header className="log-header">
//         <a className="log-brand" href="/">CURBSIDE</a>
//       </header>

//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-6">
//             <img src={signup_img} alt="boxes toppled over"></img>
//           </div>
//           <div className="col-6">
//             <div className="row">
//               <h2 className="log-title">CREATE AN ACCOUNT</h2>
//             </div>
//             <div className="row">
//               <form>
//                   <div className="form-group">
//                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
//                   </div>
//                   <div className="form-group">
//                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
//                   </div>
//                   <button type="submit" className="btn">SIGN UP</button>
//                   <br></br>
//                   <Link id="signin-link" to="/signin">SIGN IN</Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
class Signup extends Component {
  constructor() {
    super();

    this.state = {
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
}

export default Signup;