import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook, filterBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import filteredBooks from '../utils/filterbooks';

const BookList = ({
  books, filter, removeBook, filterBook,
}) => (
  <div>
    <div className="main-container">
      <div className="nav-container d-flex">
        <div className="logo"> Bookstore CMS</div>
        <CategoryFilter handleFilterChange={filterBook} />
      </div>
    </div>
    {
      filteredBooks(filter, books).map(book => (
        <Book
          key={book.bookId}
          title={book.title}
          category={book.category}
          bookId={book.bookId}
          deleteBook={removeBook}
        />
      ))
    }
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
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, { removeBook, filterBook })(BookList);
