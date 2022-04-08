import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from './Actions'

class ViewNotes extends Component {
  
  render() {
    return (
      <React.Fragment>
        <h3>All Notes</h3>
        <ul>
        {this.props.notes.map((note) =>
            <li key={note.id} style={{border: "1px solid black"}}>
                <b>{ note.title }</b>
                <button style={{margin: "10px"}} onClick={ () => this.props.onRemoveNote(note.id) }>X</button>
                <br />
                <span>{ note.content }</span>
            </li>
        )}
        </ul>
      </React.Fragment>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveNote: (id) => dispatch(actionCreators.remove_note(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewNotes);