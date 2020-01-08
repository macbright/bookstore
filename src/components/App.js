/* eslint-disable arrow-body-style */
import React from 'react';

import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => {
  return (
    <div>
      <BooksList />
      <BookForm />
    </div>
  );
};

export default App;
