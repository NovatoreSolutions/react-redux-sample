import React, { Component } from 'react';

class StudentList extends Component{



render(){


     const st = this.props.studentName
    return(

        <h2>Hi , { st}. Welcome to Novatore ReactJS demo</h2>
    )
}

}


export default StudentList;