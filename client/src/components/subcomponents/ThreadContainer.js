import React, { useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../styles/threadStyles.css";

const ThreadContainer = () => {
  const getUserMsg = () => {
    let msg = document.getElementById("userText").value;
    console.log("msg:", msg);
  };

  return (
    <div className="threadWidth">
      <h2>People just pawlin around.</h2>
      <div>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Send a message</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            id="userText"
            onChange={getUserMsg}
          />
          <InputGroup.Append>
            <Button id="threadSend">Send</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="threads"></div>
    </div>
  );
};

export default ThreadContainer;
