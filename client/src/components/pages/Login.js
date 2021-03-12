import React, { useState} from "react";
import { Redirect } from 'react-router';
import { Container } from "react-bootstrap";
import Alert from "../subcomponents/Alert";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, authLogin] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitLoginInfo = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password,
    };
    axios({
      method: "POST",
      data: user,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: "https://dogstr-react.herokuapp.com/users/login"
    }).then(function(res){
      if (res.data){
        authLogin(true)
      }else{
        setErrors([{msg: "Invalid or missing credentials"}])
      }
    })
  };

  const clearErrors = () => {
    setErrors([])
  }

  if (!loggedIn) {
    return (
      <div>
        <Container>
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <div className="card card-body">
                <h1 style={{ color: "#454545af" }} className="text-center mb-3">
                  <i className="fas fa-sign-in-alt"></i> Login
                </h1>
                <Alert errors={errors} clearErrors={clearErrors}/>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    style={{ backgroundColor: "#74c69d", border: "none" }}
                    id="login"
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => submitLoginInfo(e)}
                  >
                    Login
                  </button>
                </form>
                <p className="lead mt-4">
                  No Account?{" "}
                  <a href="/register" style={{ color: "#74c69d" }}>
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
    <Redirect to="/dashboard"/>
    )
  }
};

export default Login;
