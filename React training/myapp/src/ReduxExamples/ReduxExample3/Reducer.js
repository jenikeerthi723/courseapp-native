import * as actionTypes from './ActionTypes'

const initialState = {
    notes: []
  };
  
  function reducer(state = initialState, action) {
    switch(action.type) {
      case actionTypes.ADD_NOTE:
        return {
          notes: [
            ...state.notes,
            {
              id: action.id, 
              title: action.title,
              content: action.content
            }
          ]
        };
      case actionTypes.REMOVE_NOTE:
        return {
            ...state,
            notes: state.notes.filter(note => note.id !== action.notesId)
        };
  
      default:
        return state;
    };
  }
  
  export default reducer;