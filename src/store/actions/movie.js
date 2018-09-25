import ActionTypes from '../utils/ActionTypes';
import axios from 'axios';


export const fetchMovieDataFromAPI = () => {
  return(dispatch) => {
    dispatch(getMovieData());
    
    const api_url = `${process.env.REACT_APP_API_URL}t=Fight+club&apikey=${process.env.REACT_APP_API_KEY}&plot=full`;    

    axios.get(api_url)
      .then( res => res)
      .then(json => dispatch(getMovieDataSuccess(json.data)))
      .catch(err => dispatch(getMovieDataFailure(err)))
  }
}

function getMovieData() {
  return {
    type: ActionTypes.FETCH_MOVIE_DATA
  }
}

function getMovieDataSuccess(data) {
  return {
    type: ActionTypes.FETCH_MOVIE_DATA_SUCCESS,
    data
  }
}

function getMovieDataFailure() {
  return {
    type: ActionTypes.FETCH_MOVIE_DATA_FAILURE
  }
}