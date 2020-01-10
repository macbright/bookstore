import React from 'react';

const BOOK_CATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BookForm = () => (
  <div>
    <form>
      <div>
        <label htmlFor="title">
          Book Title:
          <input type="text" placeHolder="enter book title" name="title" id="title" />
        </label>
      </div>
      <div>
        <label htmlFor="selectCategory">
        Book Category:
          <select id="selectCategory">
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


export default BookForm;
