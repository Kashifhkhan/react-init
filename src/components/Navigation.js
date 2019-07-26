import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { Container } from 'reactstrap';

class Navigation extends React.Component {
  
  state = {
    nav: [
      {
        "id": "1",
        "href": "/",
        "title": "Home"
      },
      {
        "id": "2",
        "href": "/login",
        "title": "Log In"
      },
      {
        "id": "3",
        "href": "/register",
        "title": "Register"
      }
    ]
  }

  
  
  // componentDidMount() { 
  //   axios.get(`${requestUrl}nav`).then(res => {
  //     // handle success
  //     this.setState({
  //       nav: res.data
  //     });
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  // }
  
  render(){   
    const navs =  this.state.nav;

    if(navs && navs.length > 0){
      return (       
          <nav>  
            <Container>    
              <div className="nav-wrap">    
                <div className="logo">              
                    <img src={logo} alt="Zensar" />
                </div>              
                  <ul>              
                    {navs.map(nav => (
                      <li key={nav.id}>
                        <NavLink to={nav.href} exact activeStyle={{className: 'active'}}>{nav.title}</NavLink>
                      </li>
                    ))}           
                  </ul>
                </div>
            </Container>
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