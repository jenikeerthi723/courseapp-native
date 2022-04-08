import React from 'react'
//import { connect } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreators from './Actions'

const ReduxHooks = () =>  { 

  const counter = useSelector(state => state.count)


  const dispatch = useDispatch();

  const OnIncrementCount = (val) => {
    dispatch(actionCreators.increment(val))
  }

  const OnDecrementCount = (val) => {
    dispatch(actionCreators.decrement(val))
  }
 
    return (
    <div style={{width: "50%", margin: "auto", textAlign: "center", padding: "20px", backgroundColor: "lightgrey"}}>
      <span> 
          <h2>Counter : {counter}</h2>   
      </span>
      <div>
          <button style={{margin : "15px"}} onClick={()=>OnIncrementCount(1)}>+</button>
          <button style={{margin : "15px"}} onClick={()=>OnDecrementCount(1)}>-</button>
          <button style={{margin : "15px"}} onClick={()=>OnIncrementCount(10)}>+10</button>
          <button style={{margin : "15px"}} onClick={()=>OnDecrementCount(10)}>-10</button>
      </div>
    </div>
    )   
    
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.count
//   };
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     OnIncrementCount: (val) => dispatch(actionCreators.increment(val)),
//     OnDecrementCount: (val) => dispatch(actionCreators.decrement(val))
//   };
// }

//export default connect ( mapStateToProps, mapDispatchToProps ) (ReduxHooks);
export default ReduxHooks;
