import React from 'react';
import { connect } from 'react-redux';

const BookList = () => (
  <div>
    <table>
      <tr>
        <th> Book ID </th>
        <th> Title </th>
        <th> Category </th>
      </tr>
      <tr>
        <td />
        <td />
        <td />
      </tr>
    </table>
  </div>
);

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
