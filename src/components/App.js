/* eslint-disable arrow-body-style */
import React from 'react';

import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => {
  return (
    <div>
      <BookForm />
      <br />
      <BooksList />
    </div>
  );
};

export default App;
