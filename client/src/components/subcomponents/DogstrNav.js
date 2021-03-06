import React from "react";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import axios from 'axios';

const DogstrNav = () => {

    const logOut = (e) => {
        e.preventDefault();
        axios({
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
          url: "https://dogstr-react.herokuapp.com/users/logout",
        }).then(function (res) {
          window.location.reload();
        });
      };


  return (
    <Navbar id="nav" bg="light" expand="lg">
      <Navbar.Brand href="#home">Dogstr</Navbar.Brand>
      <h1 className="dashboard-paw">
          <i class="fas fa-paw"></i>
        </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title={<i class="fas fa-user-alt"></i>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.4">
              <Button onClick={(e) => logOut(e)}variant="danger">Logout</Button>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DogstrNav;
