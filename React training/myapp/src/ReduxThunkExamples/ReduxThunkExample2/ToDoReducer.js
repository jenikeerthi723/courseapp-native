import * as actionTypes from './ActionTypes'

const initialState = {
  loading: false,
  todos: [],
  error: null
};

const todoreducer = (state = initialState, action) => {
  console.log('reducer : '+action.type)
    switch (action.type) {
      case actionTypes.ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
      case actionTypes.ADD_TODO_SUCCESS:
        return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload]
        };
        case actionTypes.ADD_TODO_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
        case actionTypes.TOGGLE_TODO:
            let todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.id)
            const foundtodo = todos[index]
            todos[index] = { ...foundtodo, completed: !foundtodo.completed }
            let newstate = {...state.loading,...state.error,todos}
            return newstate;
      default:
        return state
    }
  }
  
  export default todoreducer