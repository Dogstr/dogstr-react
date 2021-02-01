import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const submitRegisterRequest = (e) => {
    e.preventDefault();
    let user = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };
    axios
      .post("/users/register", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 style={{ color: "#454545af" }} class="text-center mb-3">
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
                  onChange={(e) => setName(e.target.value)}
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
              <button
                onClick={(e) => submitRegisterRequest(e)}
                style={{ backgroundColor: "#74c69d", border: "none" }}
                type="submit"
                class="btn btn-primary btn-block"
              >
                Register
              </button>
            </form>
            <p class="lead mt-4">
              Have An Account?{" "}
              <a style={{ color: "#74c69d" }} href="/login">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
