import INITIAL_BOOKS from '../utils/bookObject';

const bookFilter = (state = INITIAL_BOOKS, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return state.filter(book => book.bookId === action.payload);
    default:
      return state;
  }
};

export default bookFilter;
