import React from 'react';
import axios from 'axios';

class AxiosPostExample extends React.Component {
  state = {
    loading:false,
    name: '',
    resultname:''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(
            {loading:true}
        );

    const user = {
      name: this.state.name
    };

    console.log('post')
    
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        const newresultname = res.data.user.name;

        this.setState({
                loading:false,
                resultname: newresultname
              });
      })
  }

  render() {
    if (this.state.loading) {
        return <LoadingSpinner />
     }
    else {
    return (
   
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        {this.state.resultname ? <p>{this.state.resultname}</p> : null }
      </div>
    )
    }
  }
}

const LoadingSpinner = () => {
  return (
  <div>
      <i className="fa fa-spinner fa-spin" style={{fontSize:"48px", color:"blue"}}></i>
  </div>   
) 
}

export default AxiosPostExample;