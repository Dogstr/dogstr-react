<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const Dashboard = () => {

        axios({
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
            url: "http://localhost:3000/checkAuthenticated"
          }).then(function(res){
            if (!res.data){
                window.location.href = "/login"
            }
          })

    const logOut = (e) => {
        e.preventDefault()
        axios({
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
            url: "http://localhost:3000/users/logout"
          }).then(function(res){
            window.location.reload()
          })
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };
            console.log(pos)
        })
    }

    return (
        <div>
            <h1>Home</h1>
            <Button onClick={(e) => logOut(e)}>Logout</Button>
        </div>
    );
};

export default Dashboard;
=======
=======
>>>>>>> adc0b78d7b3aed4582fbf4ab29ae83e4333dab4e
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
<<<<<<< HEAD
>>>>>>> map-container
=======
>>>>>>> adc0b78d7b3aed4582fbf4ab29ae83e4333dab4e
