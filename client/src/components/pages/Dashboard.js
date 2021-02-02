import React, {useEffect} from 'react';
import axios from 'axios';


const Dashboard = () => {
    useEffect(() => {
        axios.get('/checkAuthenticated', {withCredentials: true})
          .then(res => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
        });
      }, []);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Dashboard;