import * as actionTypes from './ActionTypes';

const initialState = {
    results: []
};

const resultreducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SAVE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: action.id, value: action.result})
            }
        case actionTypes.REMOVE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return {
                ...state,
                results: updatedArray
            }
        default :
            return state;
    }
    
};

export default resultreducer;