import * as actionTypes from './ActionTypes'
import axios from 'axios';

export const addToDo = (text) => {
   /* return { type: actionTypes.ADD_TODO, 
              id : Math.floor(Math.random() * 100000), 
              text : text };
  */
 console.log('addToDo')
 return dispatch => {
  dispatch(addTodoStarted());

  axios
    .post(`https://jsonplaceholder.typicode.com/todos`, {
      title : text,
      userId : 1 ,
      completed: false
    })
    .then(res => {
      console.log('Success')
      console.dir(res.data)
      console.log('id'+res.data.id)
      console.log('text'+res.data.title)
      const newtodo = { 
                        //id: res.data.id,
                        id: Math.floor(Math.random() * 100000),
                        text:res.data.title,
                        completed:res.data.completed
                      }
      dispatch(addTodoSuccess(newtodo));
    })
    .catch(err => {
      console.log('Failure')
      dispatch(addTodoFailure(err.message));
    });
    };
  };

  const addTodoStarted = () => ({
    type: actionTypes.ADD_TODO_STARTED
  });

  const addTodoSuccess = todo => ({
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: {
      ...todo
    }
  });
  
  const addTodoFailure = error => ({
    type: actionTypes.ADD_TODO_FAILURE,
    payload: {
      error
    }
  });

export const toggleToDo = (id) => {
     console.log('toggle' + id)
    return { type: actionTypes.TOGGLE_TODO, 
             id : id };
  }
