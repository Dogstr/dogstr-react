import React, { useContext, useState } from "react";
import ThreadContext from "../subcomponents/ThreadContext";
import Thread from "../subcomponents/Thread";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import axios from 'axios';

const ThreadContainer = () => {
  const [threads, setThreads] = useContext(ThreadContext)
  const [userInput, setUserInput] = useState(null);
  const updateUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const closeThreads = (e) => {
    e.preventDefault()
    setThreads(null);
  }
 
  const submitThread = (e, thread) => {
    e.preventDefault()
    let park_id = thread[0].park_id || thread[0]._doc.park_id
    axios({
      method: "POST",
      data: { message: userInput, park_id: park_id, park_name: thread[0].name },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
      url: "https://dogstr-react.herokuapp.com/threads/api/submit_threads",
    }).then(function (res) {
      if (threads[0].name){
        threads.splice(0, 1)
      }
      setThreads([...threads, res.data[0]])
    })
  }


  if (threads && threads[0]._doc){
  return (
    <div id="threads">
      <div className="threads-container">
        <div className="threads-header">
          <h1 style={{ textAlign: "center", fontSize: "30px", color: "black", fontWeight: "200" }}>
            {threads[0].park_name}
            <Button onClick={(e) => closeThreads(e)} className="thread-close">x</Button>
          </h1>
          <i
            class="fas fa-dog"
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          ></i>
        </div>
        <div className="threads-scrollable">
            <Thread threads={threads}/>
        </div>
      </div>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Send a message</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          aria-label="With textarea"
          id="userText"
          onChange={(e) => updateUserInput(e)}
        />
        <InputGroup.Append>
          <Button id="threadSend" onClick={(e) => submitThread(e, threads)}>Send</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
  }else if (!threads){
    return <div></div>
  }else{
    return (
      <div id="threads">
      <div className="threads-container">
        <div className="threads-header">
          <h1 style={{ textAlign: "center", fontSize: "30px", color: "black", fontWeight: "200" }}>
          {threads[0].name}
          <Button className="thread-close" onClick={(e) => closeThreads(e)}>x</Button>
          </h1>
          <h1 style={{ textAlign: "center", fontSize: "30px", color: "black", fontWeight: "200" }}>No chats! Write something fur-iendly!</h1>
        </div>
        <div className="threads-scrollable">
          <Thread threads={threads}/>
        </div>
      </div>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Send a message</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          aria-label="With textarea"
          id="userText"
          onChange={(e) => updateUserInput(e)}
        />
        <InputGroup.Append>
          <Button id="threadSend" onClick={(e) => submitThread(e, threads)}>Send</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
    )
  }
};

export default ThreadContainer;
