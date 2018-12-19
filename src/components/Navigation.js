import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import requestUrl from '../config';

class Navigation extends React.Component {
    constructor(props){
        super(props);  

        axios.get(`${requestUrl}products`).then(function (response) {
            // handle success
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
        });
        
    }
    render(){
        // if(this.data && this.data.length > 0) 
        return (
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/contact">Contact</Link>
          </nav>
          )
    }
}

export default Navigation;