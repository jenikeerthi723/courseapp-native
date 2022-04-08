import React from 'react';

class ChildParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent(event) {
    // the event context comes from the Child

        //setState is Asynchronous..
        //this.setState({ count: this.state.count++ });
        this.setState((prevState) => ({
            count: prevState.count + 1
          }));
    }

    render() {
        return (
            <div>
            Count: { this.state.count }
            { /*<button onClick={this.outputEvent}>Add</button> */}
            <ChildAdd clickHandler={this.outputEvent}  counter={this.state.count} /> 
            </div>
        );
    }
}

class ChildAdd extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickHandler}>
            Add One More - {this.props.counter}
            </button>
        );
    }
}

export default ChildParent;