import React from "react";
import {Link} from "react-router-dom";

// function Signin() {
//   
// }
class Signin extends Component {
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

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data");
    console.log(this.state);
  }

  render() {
    return(
      <div className="log">
        <header className="log-header">
          <a className="log-brand" href="/">CURBSIDE  </a>
        </header>
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 img-holder">
            </div>
            <div className="col-6">
              <h2 className="log-title">SIGN IN</h2>
                <form>
                  <div className="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn">LOG IN</button>
                  <br></br>
                  <Link id="signin-link" to="/signup">SIGN UP</Link>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Signin;