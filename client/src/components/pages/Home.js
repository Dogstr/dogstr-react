import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <div className="home-container">
        <h1 className="home-header">Dogstr</h1>
        <h1 className="home-paw">
          <i class="fas fa-paw"></i>
        </h1>
        <h4 className="home-prompt">Create an account or login</h4>
        <div className="home-button-group">
          <Button href="/register" id="home-register" size="lg" block>
            Register
          </Button>
          <Button
            href="/login"
            id="home-login"
            variant="secondary"
            size="lg"
            block
          >
            Login
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
