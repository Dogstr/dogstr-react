import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import axios from "axios";
import MapContainer from "../subcomponents/MapContainer";
import DogstrNav from "../subcomponents/DogstrNav";

const Dashboard = () => {
  axios({
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
    url: "http://localhost:3000/checkAuthenticated",
  }).then(function (res) {
    if (!res.data) {
      window.location.href = "/login";
    }
  });

  return (
    <div>
      <DogstrNav />
      <MapContainer />
    </div>
  );
};

export default Dashboard;
