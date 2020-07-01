import React, {useState,useContext} from "react";
import AuthService from '../../Services/AuthServices';
import AuthContext from '../../Context/AuthContext';
import Message from '../../components/Message/index';
import signin_img from "../../assets/images/img1.png";
import {Link} from "react-router-dom";

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
  AuthService.login(user).then(data=>{
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
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email..." value={this.state.email} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password..." value={this.state.password} onChange={this.handleChange}/>
                  </div>
                  <button type="submit" className="btn">LOG IN</button>
                  <br></br>
                  <Link id="signin-link" to="/signup">SIGN UP</Link>
              </form>
              {message ? <Message message={message} /> : null}
            </div>
          </div>
        </div>
      </div>
    )
}
export default Signin;