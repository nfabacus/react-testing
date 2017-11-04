import { combineReducers } from 'redux'
import CommentsReducer from './comments'

const rootReducer = combineReducers({
  comments: (state = []) => state
});

export default rootReducer;
