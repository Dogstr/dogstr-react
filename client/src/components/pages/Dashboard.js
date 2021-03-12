import React, { useState } from "react";
import axios from "axios";
import MapContainer from "../subcomponents/MapContainer";
import DogstrNav from "../subcomponents/DogstrNav";
import ThreadContainer from "../subcomponents/ThreadContainer";
import ThreadContext from "../subcomponents/ThreadContext";


const Dashboard = () => {
  const [threads, setThreads] = useState(null)
  axios({
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
    url: "https://dogstr-react.herokuapp.com/checkAuthenticated",
  }).then(function (res) {
    if (!res.data) {
      window.location.href = "/login";
    }
  });

  return (
    <div>
      <ThreadContext.Provider value={[threads, setThreads]}>
      <DogstrNav />
      <MapContainer />
      <ThreadContainer />
      </ThreadContext.Provider>
    </div>
  );
};

export default Dashboard;
