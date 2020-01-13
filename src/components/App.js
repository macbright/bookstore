import React from 'react';

import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div>
    <CategoryFilter />
    <BookForm />
    <br />
    <BooksList />
  </div>
);

export default App;
