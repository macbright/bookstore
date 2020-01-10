import React from 'react';

import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => (
  <div>
    <BookForm />
    <br />
    <BooksList />
  </div>
);

export default App;
