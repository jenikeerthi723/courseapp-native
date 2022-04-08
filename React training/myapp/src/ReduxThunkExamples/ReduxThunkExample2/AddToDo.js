import React from 'react'
import { connect } from 'react-redux'
import * as ToDoActionCreators from './ToDoActions'

const AddToDo = (props) => {
  let input

  return (
    <div style={{padding : "20px"}}>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addtodo(input.value);
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addtodo: text => dispatch(ToDoActionCreators.addToDo(text))
});



export default connect(null,mapDispatchToProps)(AddToDo);