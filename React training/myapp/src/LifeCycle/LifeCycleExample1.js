import React from 'react';
import ReactDOM from 'react-dom'

class LifeCycleExample1 extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
      console.log('Parent Component : constructor ')
   };

   setNewNumber() {
      this.setState((prevState) => ({
         data: prevState.data + 1
       }))
       
   }

   componentWillMount() {
      console.log('Parent Component : componentWillMount ')
   }
   componentDidMount() {
      console.log('Parent Component : componentDidMount')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Parent Component : componentWillReceiveProps')
   }
   shouldComponentUpdate(newProps, newState) {
      console.log('Parent Component : shouldComponentUpdate')
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Parent Component : componentWillUpdate');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Parent Component : componentDidUpdate');
   }
   componentWillUnmount() {
      console.log('Parent Component : componentWillUnmount');
   }

    mount(){
      ReactDOM.render(<Child1 />, 
      document.getElementById('renderhere'));
    }
    unmount(){
       ReactDOM.unmountComponentAtNode(document.getElementById('renderhere'));
    }

   render() {
      console.log('Parent Component : render');
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Child myNumber = {this.state.data}></Child>

            <button onClick={this.mount}>Mount</button>
            <button onClick={this.unmount}>Un Mount</button>
         </div>
      );
   }
}
class Child extends React.Component {
   constructor(props) {
      super(props);
      this.state = {data:0};
      console.log('Child Component : constructor ')
   }
   componentWillMount() {
      console.log('Child Component : componentWillMount ')
   }
   componentDidMount() {
      console.log('Child Component : componentDidMount')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Child Component : componentWillReceiveProps')
   }
   shouldComponentUpdate(newProps, newState) {
      console.log('Child Component : shouldComponentUpdate')
      return true;
      //return newState.data%4==0;
      /* should return true or false */
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Child Component : componentWillUpdate');
   }
  
   
   componentDidUpdate(prevProps, prevState) {
      console.log('Child-1 Component : componentDidUpdate');
   }

   componentWillUnmount() {
      console.log('Child Component : componentWillUnmount');
   }

   render() {
      console.log('Child Component : render');
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
            <h3>{this.state.data}</h3>
         </div>
      );
   }
}

class Child1 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
      console.log('Child-1 Component : constructor ')
   }
   componentWillMount() {
      console.log('Child-1 Component : componentWillMount ')
   }
   componentDidMount() {
      console.log('Child-1 Component : componentDidMount')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Child-1 Component : componentWillReceiveProps')
   }
   shouldComponentUpdate(newProps, newState) {
      console.log('Child-1 Component : shouldComponentUpdate')
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Child-1 Component : componentWillUpdate');
   }
  
   componentDidUpdate(prevProps, prevState) {
      console.log('Child-1 Component : componentDidUpdate');
   }

   componentWillUnmount() {
      console.log('Child-1 Component : componentWillUnmount');
   }
  
   render() {
      console.log('Child-1 Component : render');
      return (
         <div>
            <h3>Child1 Component</h3>
         </div>
      );
   }
}

export default LifeCycleExample1;