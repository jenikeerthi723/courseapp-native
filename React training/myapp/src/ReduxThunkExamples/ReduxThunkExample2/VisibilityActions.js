import * as actionTypes from './ActionTypes'

export const setVisibilityFilter = (filter) => {
    return { type: actionTypes.SET_VISIBILITY_FILTER, 
        filter : filter };
  };
