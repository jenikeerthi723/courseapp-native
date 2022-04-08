import * as actionTypes from './ActionTypes'

const todoreducer = (state = [], action) => {
  console.log('reducer'+action.type)
    switch (action.type) {
      case actionTypes.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case actionTypes.TOGGLE_TODO:
        console.log('reducer'+action.id)
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default todoreducer