import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from './Actions'

class ReduxExample1 extends React.Component { 
  render() {    
    return (
    <div style={{width: "50%", margin: "auto", textAlign: "center", padding: "20px", backgroundColor: "lightgrey"}}>
      <span> 
          <h2>Counter : {this.props.counter}</h2>   
      </span>
      <div>
          <button style={{margin : "15px"}} onClick={()=>this.props.OnIncrementCount(1)}>+</button>
          <button style={{margin : "15px"}} onClick={()=>this.props.OnDecrementCount(1)}>-</button>
          <button style={{margin : "15px"}} onClick={()=>this.props.OnIncrementCount(10)}>+10</button>
          <button style={{margin : "15px"}} onClick={()=>this.props.OnDecrementCount(10)}>-10</button>
      </div>
    </div>
    )   
    }
}
const mapStateToProps = (state) => {
  return {
    counter: state.count
  };
}
const mapDispatchToProps = dispatch => {
  return {
    OnIncrementCount: (val) => dispatch(actionCreators.increment(val)),
    OnDecrementCount: (val) => dispatch(actionCreators.decrement(val))
  };
}
export default connect ( mapStateToProps, mapDispatchToProps ) (ReduxExample1);
