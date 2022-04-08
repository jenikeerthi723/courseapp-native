import * as actionTypes from './ActionTypes'

export const save_result = (result) => {
    return {
        type: actionTypes.SAVE_RESULT,
        id: parseInt((Math.random() * 100000), 10),
        result: result
    }
}

export const async_save_result = (result) => {
       return dispatch => {
        setTimeout(() => {
              dispatch( save_result( result ) ) ;
        }, 5000);
      };
}

export const remove_result = (id) => {
    return {
        type: actionTypes.REMOVE_RESULT,
        resultId: id
    }
}