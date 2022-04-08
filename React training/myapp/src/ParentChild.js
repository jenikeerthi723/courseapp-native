import React from 'react';

class ParentChild extends React.Component {
    render() {
        const variable = 5;
        return (
        <div>
        <h1> Parent Child Communication</h1>
        <Child message="message for child" />
        <Child message={variable} />
        </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return <h2>{this.props.message}</h2>
    }
}

export default ParentChild;