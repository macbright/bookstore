import React from 'react';

import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import '../App.css';

const App = () => (
  <div className="container">
    <BooksList />
    <br />
    <BookForm />
  </div>
);

export default App;
