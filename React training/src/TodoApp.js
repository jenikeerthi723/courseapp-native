import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    constructor(props) {
      // Access parent class constructor method
      super(props);
      
    /* The bind method is used to take the context to which you want to
      bind your function as a first argument. 
      There is no autobinding in React, so we have to manually bind the functions
      like in line 11-12 */
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      // Initializing the components state
      this.state = {items: [], text: ''};
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} /> 
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <button type="submit">{'Add #' + (this.state.items.length + 1)}</button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({text: e.target.value});
    }
  
    handleSubmit(e) {
      /* Prevent default form submission so React can handle it instead. */    
      e.preventDefault();
  
      /* Create a new Todo Item that will be merged with
        the previous state and eventually passed on to the 
        component's state. */
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
  
      /* prevState , a reference to the previous state, should not be manipulated directly
         but rather should be merged by creating a new object 
         and passing it to setState. */
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
      
    }
  }

  export default TodoApp;