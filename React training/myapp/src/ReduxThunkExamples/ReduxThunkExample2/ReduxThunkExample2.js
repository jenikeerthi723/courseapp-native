import React from 'react'

import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import Filter from './VisibilityFilter'

const ReduxThunkExample2 = () => (
  <div style={{width: "70%", margin: "auto", textAlign: "center", padding: "20px"}}>
    <AddToDo />
    <ToDoList />
    <Filter />
  </div>
)

export default ReduxThunkExample2