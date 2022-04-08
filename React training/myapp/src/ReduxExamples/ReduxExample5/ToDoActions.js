import * as actionTypes from './ActionTypes'

export const addToDo = (text) => {
    return { type: actionTypes.ADD_TODO, 
              id : Math.floor(Math.random() * 100000), 
              text : text };
  };

export const toggleToDo = (id) => {
     console.log('toggle' + id)
    return { type: actionTypes.TOGGLE_TODO, 
             id : id };
  }
