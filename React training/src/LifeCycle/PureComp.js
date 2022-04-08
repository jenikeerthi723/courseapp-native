import React from 'react';
import ReactDOM from 'react-dom'

class PureComp extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   
   };

   setNewNumber() {
      this.setState((prevState) => ({
         data: prevState.data + 1
       }))
       
   }


   render() {
      console.log('Parent Component : render');
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Child ></Child>

            {/* <button onClick={this.mount}>Mount</button>
            <button onClick={this.unmount}>Un Mount</button> */}
         </div>
      );
   }
}
class Child extends React.PureComponent {
   constructor(props) {
      super(props);
    
   }
  
 
//    shouldComponentUpdate(newProps, newState) {
//     console.log('Child Component : shouldComponentUpdate')
//      return false;
  
//    }
  
   render() {
      console.log('Child Component : render');
      return (
         <div>
            <h3>{'Hello World'}</h3>
        
         </div>
      );
   }
}


export default PureComp;