import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  bookId, title, category, deleteBook,
}) => (
  <tr>
    <td>{ bookId }</td>
    <td>{ title }</td>
    <td>{ category }</td>
    <td>
      <button type="button" id={bookId} onClick={() => deleteBook({ bookId, title, category })}> Remove Book </button>
    </td>
  </tr>
);
Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};
export default Book;
