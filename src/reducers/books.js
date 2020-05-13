import { INITIAL_BOOKS } from '../utils/bookObject';

const bookList = (state = INITIAL_BOOKS, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.bookId !== action.payload);
    default:
      return state;
  }
};

export default bookList;
