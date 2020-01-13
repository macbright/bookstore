/* eslint-disable no-return-assign, react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

import { BOOK_CATEGORY } from '../utils/bookObject';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      bookId: uuidv1(),
      title,
      category,
    };

    if (title) {
      createBook(book);
      this.setState({ title: '' });
      ReactDOM.findDOMNode(this.title).value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">
              Book Title:
              <input
                type="text"
                placeholder="enter book title"
                name="title"
                id="title"
                ref={title => (this.title = title)}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="selectCategory">
            Book Category:
              <select
                id="category"
                onChange={this.handleChange}
              >
                {
                  BOOK_CATEGORY.map(category => (
                    <option key={category} value={category}>{ category }</option>
                  ))
                }
              </select>
            </label>
          </div>
          <div>
            <button type="submit" value="submit"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  createBook: state.books,
});

export default connect(mapStateToProps, { createBook })(BookForm);
