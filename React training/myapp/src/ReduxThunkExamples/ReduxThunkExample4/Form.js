import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './Actions'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    
    const { title,body } = this.state;
    if (!title.trim()) {
      return
    }
    if (!body.trim()) {
      return
    }
    this.props.addArticle({ title , body });
    this.setState({ title: '' });
    this.setState({ body: '' });
  }
  render() {
    const { title, body } = this.state;
    return (
      <form className="container-fluid" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">Title</label>
          <input
            className="form-control"
            type='text'
            id='title'
            value={title}
            placeholder={'title'} 
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="body">Body</label>
          <textarea
            className="form-control"
            type='text'
            id='body'
            rows={5}
            value={body}
            placeholder={'body'} 
            onChange={this.handleChange}
          />
        </div>
        <button type='submit'>SAVE</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title,body) => dispatch(actionCreators.addArticle(title,body))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Form);
