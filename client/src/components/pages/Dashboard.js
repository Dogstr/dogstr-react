import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const Dashboard = () => {

    useEffect(() => {
        axios({
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
            url: "http://localhost:3000/checkAuthenticated"
          }).then(function(res){
            console.log(res.data)
            if (!res.data){
                window.location.href = "/login"
            }
          })
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


    return (
        <div>
            <h1>Home</h1>
            <Button onClick={(e) => logOut(e)}>Logout</Button>
        </div>
    );
};

export default Dashboard;