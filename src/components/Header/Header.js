import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'




class Header extends Component{


render(){

    return(
    <div >
    
   <nav className="navbar navbar-inverse bg-primary">
  
  <NavLink className="navbar-brand" to="/">React Demo</NavLink>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item " >
        <NavLink className="nav-link" to="/home" activeStyle={{
    fontWeight: 'bold',
    color: 'white'
   }}>Home </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link" to="/students" activeStyle={{
    fontWeight: 'bold',
    color: 'white'
   }}>Students</NavLink>
      </li>
      
    </ul>
    
  </div>

</nav>
  </div>
    )
}


}
export default Header;