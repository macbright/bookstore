import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import uuidv1 from 'uuid/v1';

const BOOK_CATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			bookId: '',
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

  handleSubmit (event) {
    event.preventDefault();
		const book = {
			bookId: uuidv1(),
			title:  this.state.title, 
			category: this.state.category,
			};

		if(this.state.title === '') {
			alert('book title already exist or blank');
			return 0;
		} 
		this.props.createBook(book);
		this.setState({ title: '', });
		ReactDOM.findDOMNode(this.title).value = '';
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
									BOOK_CATEGORY.map((category) => (
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

const mapStateToProps = state => ({
  createBook: state.books,
});

export default connect(mapStateToProps, { createBook })(BookForm);
