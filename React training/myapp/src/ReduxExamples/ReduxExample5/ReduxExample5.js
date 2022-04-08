import React from 'react'

import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import VisibilityFilter from './VisibilityFilter'

const ReduxExample5 = () => (
  <div style={{width: "70%", margin: "auto", textAlign: "center", padding: "20px"}}>
    <AddToDo />
    <ToDoList />
    <VisibilityFilter />
  </div>
)

export default ReduxExample5