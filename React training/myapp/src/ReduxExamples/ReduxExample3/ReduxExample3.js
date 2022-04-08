import React, { Component } from 'react'
import NotesControl from './NotesControl';
import ViewNotes from './ViewNotes';

export default class Notes extends Component {
  render() {
    return (
      <div style={{width: "50%", margin: "auto", textAlign: "center", padding: "20px", backgroundColor: "lightgrey"}}>
        <h1>Notes App</h1>
        <NotesControl />
        <hr />
        <ViewNotes />
      </div>
    )
  }
}