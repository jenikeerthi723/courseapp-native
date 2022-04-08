import React from 'react';

class StatewithoutRedux extends React.Component {
  state = { count: 0 }

  increment = (value) => {
    this.setState({
      count: this.state.count + value
    });
  }

  decrement = (value) => {
    this.setState({
      count: this.state.count - value
    });
  }

  render() {
    return (
    <React.Fragment>
        <span> 
            <h2>Counter : {this.state.count}</h2>   
        </span>
        <div>
          <button style={{margin : "15px"}} onClick={()=>this.increment(1)}>+</button>
          <button style={{margin : "15px"}} onClick={()=>this.decrement(1)}>-</button>
          <button style={{margin : "15px"}} onClick={()=>this.increment(10)}>+10</button>
          <button style={{margin : "15px"}} onClick={()=>this.decrement(10)}>-10</button>
        </div>
    </React.Fragment>
    )
  }
}

export default StatewithoutRedux;