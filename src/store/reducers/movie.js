import ActionTypes from '../utils/ActionTypes';


const initialState = {
  isFetching: true,
  movie: [],
  error: false
};

export const movie = (state=initialState, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_MOVIE_DATA:
        return {
            ...state,
            isFetching: true,
            movie: []
        }
    case ActionTypes.FETCH_MOVIE_DATA_SUCCESS:
        return {
            ...state,
            isFetching: false,
            movie: action.data
        }
    case ActionTypes.FETCH_MOVIE_DATA_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true
        }        
    default:
      return state;
  }
}