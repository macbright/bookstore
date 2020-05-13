/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  bookId, title, category, deleteBook,
}) => (
  <div className="book-container row">
    <div className="col-md-5">
      <div className="book-category">{ category }</div>
      <div className="book-title">{ title }</div>
      <div className="action-container">
        <button type="button" className="disable-btn-border btn-padding-right btnlink"> comment</button>
        <button type="button" className="disable-btn-border btn-padding-right btn-padding-left btnlink" id={bookId} onClick={() => deleteBook({ bookId, title, category })}> Remove</button>
        <button type="button" className="btnlink btn-padding-left disable-btn-border-none"> edit</button>
      </div>
    </div>
    <div className="col-md-4 ">
      <div className="radialProgressBar progress-10 float-left">
        <div className="overlay"></div>
      </div>
      <div className="completed">
        <p> 10% </p>
        <span> completed</span>
      </div>
    </div>
    <div className="col-md-3">
      <p className="m-0 color-12121">current chapter</p>
      <strong className="chapter"> chapter 10</strong>
      <button type="button" className="btn btn-primary mt-4">UPDATE PROGRESS</button>
    </div>
  </div>
);
Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};
export default Book;
