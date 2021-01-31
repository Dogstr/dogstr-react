import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Container>
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 style={{color: "#454545af"}} className="text-center mb-3">
                <i className="fas fa-sign-in-alt"></i> Login
              </h1>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
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
                  />
                </div>
                <button
                  style={{backgroundColor: "#74c69d", border: "none"}}
                  id="login"
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Login
                </button>
              </form>
              <p className="lead mt-4">
                No Account? <a href="/register" style={{color: "#74c69d"}}>Register</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
