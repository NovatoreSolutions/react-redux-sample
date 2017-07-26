import React, { Component } from 'react';
import './MainPage.css';
import Header from '../Header/Header';


import Home from '../Home/Home';
import Student from '../Student/Student';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class MainPage extends Component{



render(){

    return(

         <Router>
        <div>
            
            <div>
               <Header/>
            </div>
            <div>
            
             <Route exact path="/" component={Home}/>
              <Route  path="/home" component={Home}/>
              <Route path="/students" component={Student}/>
            
            </div>
             <div>Hey {this.props.username}</div>
  
        </div>
         </Router>
    )
}

}


export default MainPage;