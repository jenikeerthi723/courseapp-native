import React from 'react'
import PropTypes from 'prop-types'
import './ToDo.css'

const Todo = ({ onClick, completed, text }) => (
  <div className="ToDo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      textDecorationColor: completed ? 'red' : 'black'
    }}
  >
    {text}
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo