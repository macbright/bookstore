import { combineReducers } from 'redux';
import bookList from './books';

export default combineReducers({
  books: bookList,
});
