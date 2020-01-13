const bookFilter = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return state.filter((book) => book.category === action.payload);
    default:
      return state;
  }
};

export default bookFilter;
