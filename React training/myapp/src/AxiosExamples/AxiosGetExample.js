import React from 'react';

import axios from 'axios';

class AxiosGetExample extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res)
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name} - {person.email}</li>)}
      </ul>
    )
  }
}

export default AxiosGetExample;