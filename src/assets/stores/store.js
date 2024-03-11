import { combineReducers } from 'redux';
import textsReducer from './reducers/textsReducer';
import postsReducer from './reducers/postsReducer';
import replyTagsReducer from './reducers/replyTagsReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  texts: textsReducer,
  posts: postsReducer,
  replyTags: replyTagsReducer,
  users: usersReducer,
});

export default rootReducer;

