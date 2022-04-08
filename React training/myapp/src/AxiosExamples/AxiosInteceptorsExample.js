import React from 'react';

import axios from 'axios';

// Init Axios
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  })
  
  // Add interceptors
axiosInstance.interceptors.request.use(
    request => requestHandler(request)
  )
  
axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
  )
  
const requestHandler = (request) => {
      request.headers['X-Clayfin'] = 'https://www.clayfin.com'
      console.log(request)
      return request
  }

  const successHandler = (response) => {
    console.log(response)
    return response
  }

  const errorHandler = (error) => {
    return Promise.reject({ ...error })
  }

class AxiosInteceptorsExample extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axiosInstance.get('/users')
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    )
  }
}

export default AxiosInteceptorsExample;