import React from 'react';

class RefsExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.password = React.createRef();
    
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const username = this.username.current.value;
      const password = this.password.current.value;
     
      alert ('UserName :' + username + ' password ' + password );
     
    }; 
  
    render() {
      return (
        <div>
          <h1>React Ref Example</h1>
          <form onSubmit={this.handleSubmit}>
           
            <div>
              <label>Username:</label>
              {/*Input for username containing the ref */}
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              {/* Input for password containing the ref */}
              <input type="text" ref={this.password} />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default RefsExample;