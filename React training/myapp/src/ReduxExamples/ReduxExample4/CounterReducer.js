import * as actionTypes from './ActionTypes';

const initialState = {
    counter: 0
};

const counterreducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default :
            return state;
    }
};

export default counterreducer;