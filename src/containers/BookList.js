import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th> Book ID </th>
        <th> Title </th>
        <th> Category </th>
      </tr>
			<Book />
    </table>
  </div>
);

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
