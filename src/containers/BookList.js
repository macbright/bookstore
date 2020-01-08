import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const BookList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th> Book ID </th>
        <th> Title </th>
        <th> Category </th>
      </tr>
      {
        // eslint-disable-next-line react/prop-types
        books.map((book) => (
          <tr key={book.bookId}>
            <td>{ book.bookId }</td>
            <td>{ book.title}</td>
            <td>{ book.category }</td>
          </tr>
        ))
      }
    </table>
  </div>
);
BookList.prototype = {
  books: PropTypes.array,
};
const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
