import React, { useReducer } from "react";

const initialTodos = [
    {
      id: 'a',
      task: 'Learn Javascript',
      complete: true,
    },
    {
        id: 'b',
        task: 'Learn JQuery',
        complete: false,
    },
    {
        id: 'c',
        task: 'Learn Underscore',
        complete: true,
    },
    {
        id: 'd',
        task: 'Learn Backbone',
        complete: false,
    },
    {
        id: 'e',
        task: 'Learn Angular',
        complete: false,
    },
    {
        id: 'f',
        task: 'Learn Angular',
        complete: false,
    },
    {
      id: 'g',
      task: 'Learn React',
      complete: false,
    },
    {
      id: 'h',
      task: 'Learn React Native',
      complete: false,
    },
  ];
  
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'DO_TODO':
        return state.map(todo => {
          if (todo.id === action.identifier) {
            return { ...todo, complete: true };
          } else {
            return todo;
          }
        });
      case 'UNDO_TODO':
        return state.map(todo => {
          if (todo.id === action.identifier) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  
  const UseReducerHookExample2 = () => {
    const [todos, dispatch] = useReducer(
      todoReducer,
      initialTodos
    );

    console.log(JSON.stringify(todos));
  
    const handleChange = todo => {
      dispatch({
        type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
        identifier: todo.id,
      });
    };
  
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    );
  };
  

export default UseReducerHookExample2;