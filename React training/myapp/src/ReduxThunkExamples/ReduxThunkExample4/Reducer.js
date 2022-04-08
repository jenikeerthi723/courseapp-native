import * as actionTypes from './ActionTypes'

const initialState = {
  articles: [],
  remoteArticles: [],
  loading: false,
  error: null
};

function reduxthunkexample4reducer (state = initialState, action) {
  switch(action.type) {
  case actionTypes.ADD_ARTICLE_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };
   case actionTypes.ADD_ARTICLE_SUCCESS :
    return  {
      ...state,
      loading: false,
      error: null,
      articles: [...state.articles, action.payload]
    }
    case actionTypes.REMOTE_ARTICLE_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };
   case actionTypes.DATA_FETCH_START:
    return {
      ...state,
      loading: true,
      error: null
    };
   case actionTypes.DATA_LOADED :
      return {
        ...state,
        loading: false,
        error: null,
        remoteArticles: state.remoteArticles.concat(action.payload)
      }

    default :
      return state;
  }
}

export default reduxthunkexample4reducer;