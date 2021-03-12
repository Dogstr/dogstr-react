import React, { useEffect } from "react";

const Thread = (props) => {
    useEffect(() => {
            document.getElementById("threads").scrollIntoView({ behavior: "smooth" });
            document.getElementById("yo").scrollIntoView({ behavior: "smooth" });
    }, [props.threads])
    if (props.threads[0]._doc){
  return (
    <div>
      {props.threads.map((thread) => {
        return (
          <div className="thread-block">
              <h1 className="thread-user">{thread._doc.user_name}:</h1>
            <div className="message-block">
              <h1 className="message">{thread._doc.text}</h1>
            </div>
          </div>
        );
      })}
      <div id="yo"></div>
    </div>
  );
    }else{
        return (
            <div id="yo"></div>
        )
    }
};

export default Thread;
