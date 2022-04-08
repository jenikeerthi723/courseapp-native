import React from 'react';

class TwoElementForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };

  //  this.myChangeHandler = this.myChangeHandler.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // myChangeNameHandler = (event) => {
  //   this.setState({username: event.target.value});
  // }

  // myChangeAgeHandler = (event) => {
  //   this.setState({age: event.target.value});
  // }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    // console.log('nam-'+nam);
    // console.log('val-'+val);
    let err = '';
    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    // this.setState({errormessage: err});
    // this.setState({[nam]: val});
    this.setState({
                    [nam]: val, 
                    errormessage: err
                  });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    
    alert ('UserName :' + this.state.username + ' age ' + this.state.age );
   
  }; 

  render() {
    console.log('render')
    return (
      <form onSubmit={this.handleSubmit} >
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      <div>
            <button>Submit</button>
      </div>
      </form>
    );
  }
}

export default TwoElementForm;