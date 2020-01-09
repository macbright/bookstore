import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th> Book ID </th>
        <th> Title </th>
        <th> Category </th>
      </tr>
      {
        books.map(book => (
          <tr key={book.bookId}>
            <td>{ book.bookId }</td>
            <td>{ book.title }</td>
            <td>{ book.category }</td>
          </tr>
        ))
      }
    </table>
  </div>
);
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
