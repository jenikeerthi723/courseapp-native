import React from 'react';
import ReactDOM from 'react-dom'

class LifeCycleExample2 extends React.Component {
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

   componentDidMount() {
      console.log('Parent Component : componentDidMount')
   }

   shouldComponentUpdate(newProps, newState) {
      console.log('Parent Component : shouldComponentUpdate')
      return true;
   }
  
   componentDidUpdate(prevProps, prevState) {
      console.log('Parent Component : componentDidUpdate');
   }
   componentWillUnmount() {
      console.log('Parent Component : componentWillUnmount');
   }

   static getDerivedStateFromProps(props, state) {
      console.log('Parent Component : getDerivedStateFromProps');
      return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Parent Component : getSnapshotBeforeUpdate');
      return null;
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
   
   componentDidMount() {
      console.log('Child Component : componentDidMount')
   }
  
   shouldComponentUpdate(newProps, newState) {
      console.log('Child Component : shouldComponentUpdate')
      //return true;
      return newState.data%4===0;
      
      /* should return true or false */
   }

   componentDidUpdate(prevProps, prevState,snapshot) {
      console.log('Child-1 Component : componentDidUpdate');
      console.log('snapshot : '+snapshot.notifyRequired);
      if (snapshot.notifyRequired) {
         console.log('Counter > 5');
       }
   }

   componentWillUnmount() {
      console.log('Child Component : componentWillUnmount');
   }
   
   static getDerivedStateFromProps(props, state) {
      console.log('Child Component : getDerivedStateFromProps');
      console.log(props.myNumber);
         return {
           data: props.myNumber * 2
         }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
       console.log(prevProps);
      return { notifyRequired: prevProps.myNumber > 5 };
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
   
   componentDidMount() {
      console.log('Child-1 Component : componentDidMount')
   }
  
   shouldComponentUpdate(newProps, newState) {
      console.log('Child-1 Component : shouldComponentUpdate')
      return true;
   }
   
   componentDidUpdate(prevProps, prevState) {
      console.log('Child-1 Component : componentDidUpdate');
   }

   componentWillUnmount() {
      console.log('Child-1 Component : componentWillUnmount');
   }
   
   static getDerivedStateFromProps(props, state) {
      console.log('Child-1 Component : getDerivedStateFromProps');
      return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Child Component : getSnapshotBeforeUpdate');
      return null;
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

export default LifeCycleExample2;