import axios from 'axios';
import * as actionTypes from './ActionTypes'

export const getMovieList = () => async (dispatch) => {
    try {
        //Comic book movies from within the Marvel franchise
        const { data } = await axios.get('https://api.themoviedb.org/3/list/1?api_key=c87ae494cb980853d74fb795b5e5eff2&language=en-US');
        dispatch(setMovieList(data));
    } catch (err) {
        console.log('error', err);
    }
};


export const setMovieList = (movie_lists) => {
    return {
        type: actionTypes.SET_MOVIE_LIST,
        payload: movie_lists
    };
};

export const getMovieDetail = (param_movie_id) => async (dispatch) => {
    let serverdata = null;
    let data = null;
    try {
            serverdata = await axios.get('https://api.themoviedb.org/3/movie/' + param_movie_id + '?api_key=c87ae494cb980853d74fb795b5e5eff2&language=en-US');
            data = serverdata.data;
            dispatch(setMovieDetail(data));

    } catch (err) {
        console.log('error', err);
    }
};


export const setMovieDetail = (movie_detail) => {
    return {
        type: actionTypes.SET_MOVIE_DETAIL,
        payload: movie_detail
    };
};