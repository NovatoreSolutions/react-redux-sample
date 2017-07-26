import React, { Component } from 'react';
import StudentList from './StudentList';
 import {connect} from 'react-redux'
 import { setName} from '../../actions/userActions'

class Student extends Component{



  componentDidMount(){
    
  }
    constructor(){

        super();

         this.state = {

           // studentName : "Farrukh"
         }
    }

    // changeName(){
        
    //     console.log("i m change")
    //     this.setState({

    //         studentName :  "Hashmi"
    //     });
    // }


render(){
     

    return(
        <div>
       <h2>Student</h2>
       <button type="button" className="btn btn-info" onClick={() => {this.props.setName("ALi Haider")}} >Change Name</button>
        <StudentList studentName = { this.props.user.name} />
        </div>    
        
    )
}

}



const mapStateToProps =  (state) =>{



  return{

    user : state.user,
  }

}


const mapDispatchToProps =  (dispatch) =>{

   return{
  setName : (name)=>{
    dispatch( setName(name));
  }

   }

}


export default connect(mapStateToProps,mapDispatchToProps)(Student);
