import * as actionTypes from './ActionTypes'

const initialState = {
    movieList: [],
    movieDetailList: []
}

export const reduxthunkexample3reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.payload
            }
        case actionTypes.SET_MOVIE_DETAIL: {
            return {
                ...state,
                movieDetailList: action.payload
            }
        }
        default:
            return state;
    }
};

export default reduxthunkexample3reducer;