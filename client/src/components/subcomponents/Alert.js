import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';


function AlertDismissibleExample(props) {
    const errorTag = props.errors.map((error, index) => {
        return (
        <p key={index}>{error.msg}</p>
        )
    })
    if (props.errors.length > 0) {
      return (
        <Alert variant="danger" onClose={props.clearErrors} dismissible>
          <Alert.Heading>Whoops!</Alert.Heading>
          <div>
          {errorTag}
          </div> 
        </Alert>
      )
    }else{
        return (
            <></>
        )
    }
}
  
  export default AlertDismissibleExample;