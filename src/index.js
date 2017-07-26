import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
 import  store from "./store"
import {Provider} from 'react-redux'





ReactDOM.render(
    <Provider store={store}>
    

         <App />


    
    </Provider>, document.getElementById('root')


);
registerServiceWorker();





// const reducer = (state, action) => {

//   switch (action.type) {
//     case "ADD":
//       state = state + action.payload
//       break;
//     case "SUBTRACT":
//       state = state - action.payload
//       break;

//   }
//   return state;

// }
// const store = createStore(reducer, 1)

// store.subscribe(() => {
//   console.log("Store update ", store.getState())

// });

// store.dispatch({
//   type: "ADD",
//   payload: 20

// })


// store.dispatch({
//   type: "ADD",
//   payload: 10

// })

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 5

// })


// const initialState = {

//   result:1,
//   lastValues : [],
//   username : "max"
// };

// const reducer = (state = initialState, action) => {

//   switch (action.type) {
//     case "ADD":
//         state = {
            
//           ...state,
//           result :  state.result + action.payload,
//           lastValues : [...state.lastValues, action.payload ]
//         }
       

       
//       break;
//     case "SUBTRACT":
//         state = {
            
//           ...state,
//           result :  state.result - action.payload,
//          lastValues : [...state.lastValues, action.payload ]
//         }
       
//       break;

//   }
//   return state;

// }
// const store = createStore(reducer)

// store.subscribe(() => {
//   console.log("Store update ", store.getState())

// });

// store.dispatch({
//   type: "ADD",
//   payload: 20

// })


// store.dispatch({
//   type: "ADD",
//   payload: 10

// })

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 5

// })








// const userReducer= (state ={
//   name: "farrukh",
//   age: 27

// }, action)=> {

//     switch(action.type){
     
//       case "SET_NAME":
//       state ={
         
//         ...state,
//         name : action.payload
//       }
//       break;

//       case "SET_AGE":
//       state={
//         ...state,
//         age : action.payload
//       }
//       break;

//    }
// return state;
  
// }



// const mathReducer = (state = {
//     result:1,
//   lastValues : [],
// }, action) => {

//   switch (action.type) {
//     case "ADD":
//         state = {
            
//           ...state,
//           result :  state.result + action.payload,
//           lastValues : [...state.lastValues, action.payload ]
//         }
       

       
//       break;
//     case "SUBTRACT":
//         state = {
            
//           ...state,
//           result :  state.result - action.payload,
//          lastValues : [...state.lastValues, action.payload ]
//         }
       
//       break;

//   }
//   return state;

// }
// const store = createStore(combineReducers({mathReducer,userReducer}))

// store.subscribe(() => {
//   console.log("Store update ", store.getState())

// });

// store.dispatch({
//   type: "ADD",
//   payload: 20

// })


// store.dispatch({
//   type: "ADD",
//   payload: 10

// })

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 5

// })

// store.dispatch({
//   type: "SET_NAME",
//   payload: "hashmi"

// })






// const userReducer= (state ={
//   name: "farrukh",
//   age: 27

// }, action)=> {

//     switch(action.type){
     
//       case "SET_NAME":
//       state ={
         
//         ...state,
//         name : action.payload
//       }
//       break;

//       case "SET_AGE":
//       state={
//         ...state,
//         age : action.payload
//       }
//       break;

//       default:
//       break;

//    }
// return state;
  
// }



// const mathReducer = (state = {
//     result:1,
//   lastValues : [],
// }, action) => {

//   switch (action.type) {
//     case "ADD":
//         state = {
            
//           ...state,
//           result :  state.result + action.payload,
//           lastValues : [...state.lastValues, action.payload ]
//         }
       

       
//       break;
//     case "SUBTRACT":
//         state = {
            
//           ...state,
//           result :  state.result - action.payload,
//          lastValues : [...state.lastValues, action.payload ]
//         }
       
//       break;
//     default:
//       break;
//   }
//   return state;

// }



// const myLogger =  (store) => (next) => (action)=>{
//   console.log("Logging action", action)
//   next(action)
// }


// const store = createStore(combineReducers({math: mathReducer, user: userReducer}),
// {}, 
// applyMiddleware(logger)
// )

// store.subscribe(() => {
//   // console.log("Store update ", store.getState())

// });

// store.dispatch({
//   type: "ADD",
//   payload: 20

// })


// store.dispatch({
//   type: "ADD",
//   payload: 10

// })

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 5

// })

// store.dispatch({
//   type: "SET_NAME",
//   payload: "hashmi"

// })


