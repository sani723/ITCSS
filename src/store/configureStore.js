import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({
    duration: true
});

export default () => {
    let store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return { store };
  }


// export default configureStore = () => {
//   let store = createStore(rootReducer, applyMiddleware(thunk, logger));
//   return { store };
// }