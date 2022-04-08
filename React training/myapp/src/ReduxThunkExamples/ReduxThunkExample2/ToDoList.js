import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actionTypes from './ActionTypes'
import * as ToDoActionCreators from './ToDoActions'
import ToDo from './ToDo'

const getVisibleTodos = (todos, filter) => {
  console.log('getVisibleTodos')
  console.dir(todos)
  console.dir(filter)
    switch (filter) {
      case actionTypes.VisibilityFilters.SHOW_ALL:
        return todos
      case actionTypes.VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case actionTypes.VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        //throw new Error('Unknown filter: ' + filter)
        return todos
    }
  }
  
const TodoList = (props) => {
  let todosdata = getVisibleTodos(props.todos,props.filter);
  return (
  <ul>
    {todosdata.map(todo => (
      <ToDo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />
    ))}
  </ul>
) 
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.todos, 
    filter: state.visibilityfilter
  })
  
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(ToDoActionCreators.toggleToDo(id))
  })
  

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)