import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import requestUrl from '../config';

class Navigation extends React.Component {

  
  state = {
    nav: [
      {
        "id": "1",
        "href": "/",
        "title": "HomePage"
      },
      {
        "id": "2",
        "href": "contact",
        "title": "ContactPage"
      },
    ]
  }
  
  componentDidMount() { 
    axios.get(`${requestUrl}nav`).then(res => {
      // handle success
      this.setState({
        nav: res.data
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
  
  render(){   
    const navs =  this.state.nav;
    if(navs && navs.length > 0){
      return (       
          <nav>
            {navs.map(nav => (
              <Link to={nav.href} key={nav.id}>{nav.title}</Link>
            ))}           
          </nav>
      )
    } else {
      return (
          <h1>Nav not found! </h1>
      )
    }
  }

  }
      
  export default Navigation;