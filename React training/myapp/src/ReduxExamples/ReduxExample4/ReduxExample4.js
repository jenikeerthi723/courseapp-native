import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import * as CounteractionCreators from './CounterActions'
import * as ResultactionCreators from './ResultActions'

class ReduxExample4 extends Component {
    render () {
        return (
            <div style={{width: "70%", margin: "auto", textAlign: "center", padding: "20px"}}>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="+" clicked={()=>this.props.onIncrementCounter(1)} />
                <CounterControl label="-" clicked={()=>this.props.onDecrementCounter(1)}  />
                <CounterControl label="+10" clicked={()=>this.props.onIncrementCounter(10)}  />
                <CounterControl label="-10" clicked={()=>this.props.onDecrementCounter(10)}  />
                <hr />
                <button onClick={() => this.props.onSaveResult(this.props.ctr)}>Save Result</button>
                <ul>
                    {this.props.savedResults.map(strResult => (
                         <li key={ strResult.id } style={{ listStyleType: "none" }}>
                         <b>{strResult.value}</b>
                         <button style={{margin: "10px"}} onClick={ () => this.props.onRemoveResult(strResult.id)}>X</button>
                         <br />
                     </li>
                    ))}           
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter,
        savedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (val) => dispatch(CounteractionCreators.increment(val)),
        onDecrementCounter: (val) => dispatch(CounteractionCreators.decrement(val)),
        onSaveResult: (result) => dispatch(ResultactionCreators.save_result(result)),
        onRemoveResult: (id) => dispatch(ResultactionCreators.remove_result(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample4);