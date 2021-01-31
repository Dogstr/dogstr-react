import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 style={{color: "#454545af"}} class="text-center mb-3">
              <i class="fas fa-user-plus"></i> Register
            </h1>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Create Password"
                />
              </div>
              <div class="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button style={{backgroundColor: "#74c69d", border: "none"}} type="submit" class="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <p class="lead mt-4">
              Have An Account? <a style={{color: "#74c69d"}} href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
