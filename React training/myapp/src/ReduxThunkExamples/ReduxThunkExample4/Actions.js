import * as actionTypes from './ActionTypes'
import axios from 'axios';

export function addArticle(title,body) {
return dispatch => {
  dispatch(addArticleStarted());

  axios
    .post(`https://jsonplaceholder.typicode.com/posts`, {
      title : title,
      body : body,
      userId : 1 ,
    })
    .then(res => {
      console.log('Success')
      console.dir(res.data)
      console.log('id'+res.data.id)
      console.log('title'+res.data.title)
      console.dir(res.data.title)
      const newarticle = { 
                        //id: res.data.id,
                        id: Math.floor(Math.random() * 100000),
                        title:res.data.title.title,
                        body:res.data.title.body
                      }
      dispatch(addArticleSuccess(newarticle));
    })
    .catch(err => {
      console.log('Failure')
      dispatch(remoteArticleFailure(err.message));
    });
    };
  };

  export function addArticleStarted () {
    return {
    type: actionTypes.ADD_ARTICLE_STARTED
    }
  }

  export function addArticleSuccess (newArticle) {
    return {
    type: actionTypes.ADD_ARTICLE_SUCCESS,
    payload: newArticle
    }
}
  
  const remoteArticleFailure = error => {
  return {
    type: actionTypes.REMOTE_ARTICLE_FAILURE,
    error : error
  }
}


export function getData() {
  return function(dispatch) {
    
      dispatch({ type: actionTypes.DATA_FETCH_START});
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: actionTypes.DATA_LOADED, payload: json });
      })
      .catch(err => {
        console.log('Failure')
        dispatch(remoteArticleFailure(err.message));
      });
  
  };
}