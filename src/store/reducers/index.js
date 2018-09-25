import { combineReducers } from "redux";
import { movie } from './movie';
import { cast } from './cast';

const rootReducer = combineReducers({
    movie,
    cast
});

export default rootReducer;
