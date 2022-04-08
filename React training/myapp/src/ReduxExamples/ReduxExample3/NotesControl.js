import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './Actions'

class NotesControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmission = (e) => {
    e.preventDefault();
    this.props.onAddNote(this.state.title, this.state.content);
    this.setState({ title: '', content: '' });
  }

  render() {
    return (
      <div style={{width: "80%", margin: "auto", textAlign: "center", padding: "20px", backgroundColor: "lightgrey"}}>
        <h3>Add a Note</h3>
        
        <form onSubmit={ this.handleSubmission }>
          Title: <br /> 
          <input type="text" name="title" value={ this.state.title } onChange={ this.handleChange } /><br />

          Content: <br />
          <textarea name="content" value={ this.state.content } onChange={ this.handleChange }></textarea><br />

          <button type="submit">Add Note</button>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (title,content) => dispatch(actionCreators.add_note(title,content))

    }
};

export default connect(null,mapDispatchToProps)(NotesControl);