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
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import axios from "axios";
import MapContainer from "../subcomponents/MapContainer";

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

  const logOut = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
      url: "http://localhost:3000/users/logout",
    }).then(function (res) {
      window.location.reload();
    });
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(pos);
    });
  }

  return (
    <div>
      <h1>Home</h1>
      <MapContainer />
      <Button onClick={(e) => logOut(e)}>Logout</Button>
    </div>
  );
};

export default Dashboard;
>>>>>>> map-container
