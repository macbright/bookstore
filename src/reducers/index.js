import { combineReducers } from 'redux';
import bookList from './books';
import bookFilter from './filter';

export default combineReducers({
  books: bookList,
  filter: bookFilter,
});
