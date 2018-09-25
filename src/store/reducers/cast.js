import ActionTypes from '../utils/ActionTypes';


const initialState = {
  isFetching: true,
  cast: [],
  error: false
};

export const cast = (state=initialState, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_CAST:
        return {
            ...state,
            isFetching: true,
            cast: []
        }
    case ActionTypes.FETCH_CAST_SUCCESS:
        return {
            ...state,
            isFetching: false,
            cast: action.data
        }
    case ActionTypes.FETCH_CAST_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true
        }        
    default:
      return state;
  }
}