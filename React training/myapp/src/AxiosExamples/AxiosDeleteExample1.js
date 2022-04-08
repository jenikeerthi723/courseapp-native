import React from 'react';
import axios from 'axios';

class AxiosDeleteExample1 extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {

    event.preventDefault();
    try {

        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        console.log(response);
        console.log(response.data);
      } 
      catch (err)
      {
        console.log(err);
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

export default AxiosDeleteExample1;