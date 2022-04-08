import * as actionTypes from './ActionTypes';

const initialState = {
    results: []
};

const resultreducer = ( state = initialState, action ) => {
    console.log("type : "+action.type);
    switch ( action.type ) {
        case actionTypes.SAVE_RESULT:
            console.log("id : "+action.id);
            return {
                ...state, 
                results: state.results.concat({id: action.id , value: action.result})
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