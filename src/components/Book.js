import React from 'react';

const Book = (props) => (
  <tr>
    <td>props.bookId</td>
    <td>props.title</td>
    <td>props.category</td>
  </tr>
);
export default Book;
